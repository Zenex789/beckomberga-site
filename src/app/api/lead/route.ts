import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Saknade fält" }, { status: 400 });
  }

  const toEmail = process.env.LEAD_TO_EMAIL ?? "hej@beckombergaentreprenad.com";

  const { error } = await resend.emails.send({
    from: process.env.LEAD_FROM_EMAIL ?? "Beckomberga Hemsida <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `Ny offertförfrågan — ${name}`,
    html: `
      <p><strong>Namn:</strong> ${name}</p>
      <p><strong>E-post:</strong> <a href="mailto:${email}">${email}</a></p>
      ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ""}
      ${service ? `<p><strong>Tjänst:</strong> ${service}</p>` : ""}
      <p><strong>Meddelande:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "E-postfel" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
