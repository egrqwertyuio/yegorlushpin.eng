# Yegor Lushpin - Portfolio Website

A modern, cyberpunk-themed portfolio website for an Electrical Engineer specializing in Embedded Systems.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Features

- Responsive design (mobile-first)
- Cyberpunk aesthetic with neon accents
- Smooth scroll animations
- Interactive skills visualization
- Project showcase with filtering
- Timeline-style experience section
- Contact form (ready for backend integration)
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yegorlushpin/yegorlushpin.eng.git
cd yegorlushpin.eng
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Edit `src/lib/data.ts` to update:
- Name, title, and description
- Social media links
- Skills and proficiency levels
- Projects
- Work experience
- Education and certifications

### Styling

- Colors: `tailwind.config.ts` - modify the `cyber` color palette
- Global styles: `src/app/globals.css`
- Component-specific styles: individual component files

### Images

Place your images in the `public/images/` directory:
- Profile photo: `public/images/profile.jpg`
- Project thumbnails: `public/images/projects/`
- Resume: `public/resume.pdf`

## Project Structure

```
yegorlushpin.eng/
├── public/
│   ├── images/
│   │   └── projects/
│   └── resume.pdf
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── lib/
│       └── data.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Import the project on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## Contact Form Integration

The contact form is set up for demo purposes. To make it functional:

1. **EmailJS**: Add EmailJS credentials in Contact.tsx
2. **Formspree**: Replace form action with Formspree endpoint
3. **Custom API**: Create an API route in `src/app/api/contact/route.ts`

## License

MIT License - feel free to use this template for your own portfolio.

## Author

**Yegor Lushpin** - Electrical Engineer | Embedded Systems Specialist

---

Built with Next.js and lots of solder.
