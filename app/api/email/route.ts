import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Email } from '../../email';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL ?? '';
const toEmail = process.env.RESEND_TO_EMAIL ?? '';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();
    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: 'Hello from Resend',
      react: Email({ url: url }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 