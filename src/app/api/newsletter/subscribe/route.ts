import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createServerClient } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, locale = "es" } = await request.json();

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    // Check if already subscribed
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { message: "Ya estás suscrito al newsletter", already_subscribed: true },
        { status: 200 }
      );
    }

    // Insert new subscriber
    await supabase
      .from("newsletter_subscribers")
      .insert({
        email,
        locale,
        is_active: true,
      });

    // Send welcome email
    const subject = locale === "es" 
      ? "¡Bienvenido a GEORGIAN!" 
      : "Welcome to GEORGIAN!";

    const htmlContent = locale === "es" 
      ? `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #faf7f0; }
              .header { text-align: center; margin-bottom: 40px; }
              .logo { font-size: 28px; font-weight: bold; letter-spacing: 4px; color: #0a0a0a; margin-bottom: 20px; }
              .content { background: white; padding: 30px; border-radius: 16px; margin-bottom: 30px; }
              .content h1 { font-size: 24px; margin: 0 0 20px 0; color: #0a0a0a; }
              .content p { margin: 15px 0; }
              .highlight { color: #b58b42; font-weight: 500; }
              .cta { text-align: center; margin-top: 30px; }
              .cta-button { display: inline-block; background: #0a0a0a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 50px; font-size: 14px; letter-spacing: 2px; }
              .footer { text-align: center; font-size: 12px; color: #999; margin-top: 40px; }
              .divider { border-top: 1px solid #e0e0e0; margin: 30px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">GEORGIAN</div>
              </div>
              
              <div class="content">
                <h1>¡Bienvenido a nuestro círculo!</h1>
                <p>Acabas de acceder a un universo de <span class="highlight">sastrería premium, diseño táctil y propuestas únicas</span> pensadas para quienes buscan elegancia sin rigidez.</p>
                
                <div class="divider"></div>
                
                <p><strong>¿Qué esperar en tu bandeja de entrada?</strong></p>
                <ul>
                  <li>🎁 Acceso anticipado a nuevas colecciones</li>
                  <li>✨ Notas de styling exclusivas</li>
                  <li>🔔 Invitaciones privadas a eventos</li>
                  <li>📸 Detrás de escenas del estudio</li>
                  <li>💌 Propuestas especiales solo para suscriptores</li>
                </ul>
                
                <p>Preparamos cada colección como una edición limitada. Serás de los primeros en verla.</p>
                
                <div class="cta">
                  <a href="https://georgian-web.vercel.app" class="cta-button">Explorar ahora</a>
                </div>
              </div>
              
              <div class="footer">
                <p>GEORGIAN | Lujo accesible, destilado | Sevilla, España</p>
                <p>© 2026. Todos los derechos reservados.</p>
              </div>
            </div>
          </body>
        </html>
      `
      : `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #faf7f0; }
              .header { text-align: center; margin-bottom: 40px; }
              .logo { font-size: 28px; font-weight: bold; letter-spacing: 4px; color: #0a0a0a; margin-bottom: 20px; }
              .content { background: white; padding: 30px; border-radius: 16px; margin-bottom: 30px; }
              .content h1 { font-size: 24px; margin: 0 0 20px 0; color: #0a0a0a; }
              .content p { margin: 15px 0; }
              .highlight { color: #b58b42; font-weight: 500; }
              .cta { text-align: center; margin-top: 30px; }
              .cta-button { display: inline-block; background: #0a0a0a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 50px; font-size: 14px; letter-spacing: 2px; }
              .footer { text-align: center; font-size: 12px; color: #999; margin-top: 40px; }
              .divider { border-top: 1px solid #e0e0e0; margin: 30px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">GEORGIAN</div>
              </div>
              
              <div class="content">
                <h1>Welcome to our circle!</h1>
                <p>You've just gained access to a universe of <span class="highlight">premium tailoring, tactile design, and unique propositions</span> crafted for those seeking elegance without rigidity.</p>
                
                <div class="divider"></div>
                
                <p><strong>What to expect in your inbox:</strong></p>
                <ul>
                  <li>🎁 Early access to new collections</li>
                  <li>✨ Exclusive styling notes</li>
                  <li>🔔 Private event invitations</li>
                  <li>📸 Behind-the-scenes studio content</li>
                  <li>💌 Special offers for subscribers only</li>
                </ul>
                
                <p>We craft each collection as a limited edition. You'll be among the first to see it.</p>
                
                <div class="cta">
                  <a href="https://georgian-web.vercel.app/collection?lang=en" class="cta-button">Explore now</a>
                </div>
              </div>
              
              <div class="footer">
                <p>GEORGIAN | Accessible luxury, distilled | Seville, Spain</p>
                <p>© 2026. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `;

    await resend.emails.send({
      from: "GEORGIAN <onboarding@resend.dev>",
      to: email,
      subject,
      html: htmlContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: locale === "es" 
          ? "¡Gracias por suscribirte! Revisa tu email." 
          : "Thanks for subscribing! Check your email.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Error al suscribirse" },
      { status: 500 }
    );
  }
}
