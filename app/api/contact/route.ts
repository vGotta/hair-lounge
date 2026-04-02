import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    if (name.length > 50) {
      return NextResponse.json(
        { error: "Nom trop long (50 caractères max)." },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Message trop court (10 caractères minimum)." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message trop long (5000 caractères max)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Hair Lounge <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Hair Lounge] Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9333ea; border-bottom: 2px solid #f3e8ff; padding-bottom: 12px;">
            Nouveau message — Hair Lounge
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #9ca3af; width: 80px;">Nom</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Email</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${email}" style="color: #9333ea;">${email}</a>
              </td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #faf5ff; border-radius: 8px; border-left: 4px solid #9333ea;">
            <p style="color: #9ca3af; font-size: 13px; margin: 0 0 8px;">Message</p>
            <p style="color: #111827; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            Réponds directement à cet email pour contacter ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return NextResponse.json(
      { error: "Erreur serveur, réessaie plus tard." },
      { status: 500 }
    );
  }
}