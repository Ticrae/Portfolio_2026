import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, "h-captcha-response": hCaptchaToken } = await request.json();

    if (!process.env.NEXT_PUBLIC_ACCESS_KEY) {
      console.error('ACCESS_KEY is not defined');
      return NextResponse.json({ success: false, message: "Server configuration error." }, { status: 500 });
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        name,
        email,
        message,
        "h-captcha-response": hCaptchaToken,
      }),
    });

    if (!res.ok) {
      console.error('Web3Forms API error:', res.status, res.statusText);
      return NextResponse.json({ success: false, message: "Failed to send message." }, { status: 400 });
    }

    const result = await res.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      return NextResponse.json({ success: false, message: result.message || "Failed to send message." }, { status: 400 });
    }
  } catch (error) {
    console.error('Error in contact API:', error);
    return NextResponse.json({ success: false, message: "Internal server error." }, { status: 500 });
  }
}