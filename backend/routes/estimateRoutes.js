import express from "express";
import Estimate from "../models/estimate.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST: Create estimate + send email
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, property } = req.body;

    console.log("Incoming Estimate Request:", req.body);

    if (!name || !email || !phone || !property) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 1. Save to DB
    const newEstimate = new Estimate({ name, email, phone, property });
    await newEstimate.save();

    // 2. Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // e.g. coat_roll@gmail.com
        pass: process.env.EMAIL_PASS, // Gmail app password
      },
    });

    // 3. Send email to admin (you)
    await transporter.sendMail({
      from: `"Coat&Roll" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || "coat_roll@gmail.com", 
      subject: "New Estimate Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property:</strong> ${property}</p>
      `,
    });

    // 4. Confirmation email to customer
    await transporter.sendMail({
      from: `"Coat&Roll Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your request",
      html: `
        <p>Hello ${name},</p>
        <p>Thanks for reaching out to Coat&Roll! We’ve received your request and will get back to you shortly.</p>
        <br>
        <p>— The Coat&Roll Team</p>
      `,
    });

    res.status(201).json({
      message: "✅ Request saved & emails sent successfully!",
    });
  } catch (err) {
    console.error("❌ Estimate Error:", err.message);
    res.status(500).json({ error: "Something went wrong, try again later" });
  }
});

export default router;
