import nodemailer from "nodemailer";

function mustGetEnv(key: string) {
  const v = process.env[key];
  if (!v) throw new Error(`Missing env: ${key}`);
  return v;
}

export function getTransporter() {
  const host = mustGetEnv("SMTP_HOST");
  const port = Number(mustGetEnv("SMTP_PORT"));
  const secure = String(mustGetEnv("SMTP_SECURE")).toLowerCase() === "true";
  const user = mustGetEnv("SMTP_USER");
  const pass = mustGetEnv("SMTP_PASS");

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export function getMailMeta() {
  return {
    to: mustGetEnv("MAIL_TO"),
    from: mustGetEnv("MAIL_FROM"),
  };
}
