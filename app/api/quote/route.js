import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { quoteEmail } from "./email-template.mjs";

export const runtime = "nodejs";

export async function POST(request) {
  const user = process.env.GMAIL_USER?.trim();
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!user || !pass) {
    console.error("QUOTE_CONFIG_ERROR: Missing GMAIL_USER or GMAIL_APP_PASSWORD");
    return NextResponse.json(
      { success: false, message: "Email service is not configured" },
      { status: 503 }
    );
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid JSON" }, { status: 400 });
  }

  const required = ["firstName", "lastName", "phone", "email", "zipCode", "year", "make", "model", "glassType", "serviceDate", "appointmentWindow"];
  const missing = required.filter((key) => !String(data?.[key] ?? "").trim());
  if (missing.length) {
    return NextResponse.json({ success: false, message: "Missing required fields", fields: missing }, { status: 400 });
  }

  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (email.length > 254 || !/^[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]+$/.test(email)) {
    return NextResponse.json({ success: false, message: "Enter a valid email address", fields: ["email"] }, { status: 400 });
  }

  const { html, text } = quoteEmail(data, email);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      connectionTimeout: 12000,
      greetingTimeout: 12000,
      socketTimeout: 20000,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Leyvas Auto Glass Website" <${user}>`,
      to: user,
      replyTo: { address: email },
      subject: "New Auto Glass Service Request",
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Never log SMTP credentials or full customer request payloads.
    console.error("QUOTE_SMTP_ERROR", {
      code: error?.code,
      command: error?.command,
      responseCode: error?.responseCode,
      message: error?.message,
    });
    return NextResponse.json(
      { success: false, message: "Unable to deliver quote request" },
      { status: 502 }
    );
  }
}
