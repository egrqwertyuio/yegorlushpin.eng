import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, relationship, rating, comment } = await req.json()

    if (!name || !relationship || !rating || !comment) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    if (typeof rating !== 'number' || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Invalid rating.' }, { status: 400 })
    }

    if (comment.length > 500) {
      return NextResponse.json({ error: 'Comment too long.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Testimonials <onboarding@resend.dev>',
      to: 'glushpin@gmail.com',
      subject: `New testimonial from ${name}`,
      text: `
New testimonial submission — add to data.ts if approved.

Name: ${name}
Relationship: ${relationship}
Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5)
Comment: ${comment}

To add, paste this into testimonialsData in src/lib/data.ts:
{
  id: <next_id>,
  name: "${name}",
  relationship: "${relationship}",
  rating: ${rating},
  comment: "${comment.replace(/"/g, '\\"')}",
  date: "${new Date().toISOString().slice(0, 7)}",
},
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send.' }, { status: 500 })
  }
}
