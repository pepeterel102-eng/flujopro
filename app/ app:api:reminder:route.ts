import { NextResponse } from "next/server";
import twilio from "twilio";

const client = twilio(process.env.TWILIO_SID!, process.env.TWILIO_AUTH!);

export async function POST(req: Request) {
  const { name, phone, date, message } = await req.json();

  try {
    await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio Sandbox
      to: `whatsapp:${phone}`,
      body: `📌 Recordatorio FlujoPro:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false });
  }
}
