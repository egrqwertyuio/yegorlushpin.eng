import qrcode

# Website URL
url = "https://yegorlushpin.vercel.app"

# Create QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)

qr.add_data(url)
qr.make(fit=True)

# Create black and white image
img = qr.make_image(fill_color="black", back_color="white")

# Save to images directory
img.save("public/images/website_qr.png")
print(f"QR code generated for: {url}")
print("Saved as: public/images/website_qr.png")
