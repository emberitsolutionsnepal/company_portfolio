import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, service, message } = body;

    if (!fullName || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || "-"}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    await sendEmail({
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_FROM || "",
      subject: `Contact Form Submission from ${fullName}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
} 