import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      firstName,
      lastName,
      phone,
      zipCode,
      year,
      make,
      model,
      vin,
      glassType,
      specialFeatures,
      notes,
      appointmentWindow,
      serviceDate,
    } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Leyvas Auto Glass Website" <${process.env.GMAIL_USER}>`,
      to: "leyvasautoglass@gmail.com",
      subject: "New Auto Glass Service Request",
      html: `
        <h2>New Service Request</h2>

        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>ZIP Code:</strong> ${zipCode}</p>

        <h3>Vehicle Information</h3>
        <p><strong>Year:</strong> ${year}</p>
        <p><strong>Make:</strong> ${make}</p>
        <p><strong>Model:</strong> ${model}</p>
        <p><strong>VIN:</strong> ${vin || "Not provided"}</p>

        <h3>Service Needed</h3>
        <p><strong>Glass Type:</strong> ${glassType}</p>
        <p><strong>Special Features:</strong> ${specialFeatures}</p>
        <p><strong>Notes:</strong> ${notes || "No notes provided"}</p>

        <h3>Preferred Appointment</h3>
        <p><strong>Date:</strong> ${serviceDate}</p>
        <p><strong>Time Window:</strong> ${appointmentWindow}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote email error:", error);

    return NextResponse.json(
      { success: false, message: "Email failed to send" },
      { status: 500 }
    );
  }
}