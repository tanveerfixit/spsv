import nodemailer from 'nodemailer';
import prisma from './prisma';

export async function sendEmail({ to, subject, text, html, config }: { 
  to: string; 
  subject: string; 
  text: string; 
  html?: string;
  config?: { host: string; port: number; user: string; pass: string }
}) {
  try {
    let transporterConfig;

    if (config) {
      // Use provided temporary config (for testing)
      transporterConfig = {
        host: config.host,
        port: config.port,
        secure: config.port === 465,
        auth: {
          user: config.user,
          pass: config.pass,
        },
      };
    } else {
      // Fetch settings from database using Raw SQL to bypass Prisma Client lock
      const settings = await prisma.$queryRaw<any[]>`
        SELECT \`key\`, \`value\` FROM SystemSetting 
        WHERE \`key\` IN ('SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS')
      `;

      const settingsMap = settings.reduce((acc, s) => ({ ...acc, [s.key]: s.value }), {});

      const host = settingsMap['SMTP_HOST'] || process.env.SMTP_HOST;
      const port = parseInt(settingsMap['SMTP_PORT'] || process.env.SMTP_PORT || '465');
      const user = settingsMap['SMTP_USER'] || process.env.SMTP_USER;
      const pass = settingsMap['SMTP_PASS'] || process.env.SMTP_PASS;

      transporterConfig = {
        host: host,
        port: port,
        secure: port === 465,
        auth: {
          user: user,
          pass: pass,
        },
      };
    }

    const transporter = nodemailer.createTransport(transporterConfig);

    const fromEmail = config ? config.user : (transporterConfig.auth.user || process.env.SMTP_USER);

    const info = await transporter.sendMail({
      from: `"SPSV Support" <${fromEmail}>`,
      to,
      subject,
      text,
      html,
    });

    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
