
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const { name, email, phone, projectType, message } = await req.json();

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Update this with your verified domain
            to: [process.env.CONTACT_TO_EMAIL || 'delivered@resend.dev'],
            subject: `Nuevo contacto de: ${name}`,
            html: `
        <h1>Nuevo mensaje de portafolio</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono/WhatsApp:</strong> ${phone}</p>
        <p><strong>Tipo de proyecto:</strong> ${projectType}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
