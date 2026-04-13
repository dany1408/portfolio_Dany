
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const windowMs = 60 * 1000;
    const maxRequests = 3;

    const current = rateLimitMap.get(ip);

    if (!current || now > current.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
        return true;
    }

    if (current.count >= maxRequests) {
        return false;
    }

    current.count++;
    return true;
}

// Sanitization
function sanitize(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .trim();
}

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: 'Missing RESEND_API_KEY' }, { status: 500 });
    }

    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") ??
               request.headers.get("x-real-ip") ??
               "unknown";

    if (!checkRateLimit(ip)) {
        return NextResponse.json(
            { error: "Demasiadas solicitudes. Espera un momento." },
            { status: 429 }
        );
    }

    const resend = new Resend(apiKey);

    try {
        const body = await request.json();

        // Validate required fields
        const requiredFields = ['name', 'email', 'phone', 'projectType', 'message'];
        for (const field of requiredFields) {
            if (!body[field] || typeof body[field] !== 'string') {
                return NextResponse.json(
                    { error: `Campo requerido: ${field}` },
                    { status: 400 }
                );
            }
        }

        // Validate message length
        if (body.message.length > 2000) {
            return NextResponse.json(
                { error: "El mensaje es demasiado largo." },
                { status: 400 }
            );
        }

        // Sanitize inputs
        const safeName = sanitize(body.name);
        const safeEmail = sanitize(body.email);
        const safePhone = sanitize(body.phone);
        const safeProjectType = sanitize(body.projectType);
        const safeMessage = sanitize(body.message);

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [process.env.CONTACT_TO_EMAIL || 'delivered@resend.dev'],
            subject: `Nuevo contacto de: ${safeName}`,
            html: `
                <h1>Nuevo mensaje de portafolio</h1>
                <p><strong>Nombre:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Teléfono/WhatsApp:</strong> ${safePhone}</p>
                <p><strong>Tipo de proyecto:</strong> ${safeProjectType}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${safeMessage}</p>
            `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
