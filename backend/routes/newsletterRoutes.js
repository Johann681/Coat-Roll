import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// POST: Newsletter subscription / Contact request
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // 1. Setup transporter (Reuse existing config)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
 
    // 2. Send email to admin
    await transporter.sendMail({
      from: `"Coat&Roll Newsletter" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || "coat_roll@gmail.com",
      subject: "New Newsletter Subscriber",
      html: `
        <h2>New Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>A new user has signed up for updates via the footer form.</p>
      `,
    });

    // 3. Confirmation email to customer
    await transporter.sendMail({
      from: `"Coat&Roll Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to Coat&Roll!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #f97316;">Thanks for subscribing!</h2>
          <p>Hi there,</p>
          <p>We've received your request to stay updated with Coat&Roll. You'll be the first to know about our latest projects, tips, and special offers.</p>
          <br>
          <p>Best regards,<br>The Coat&Roll Team</p>
        </div>
      `,
    });

    res.status(201).json({
      message: "✅ Successfully subscribed! Check your inbox.",
    });
  } catch (err) {
    console.error("❌ Newsletter Error:", err.message);
    res.status(500).json({ error: "Something went wrong, try again later" });
  }
});

export default router;
