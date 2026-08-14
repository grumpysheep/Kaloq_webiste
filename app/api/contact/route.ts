const allowedUseCases = new Set(["Card", "Global Account", "Both"]);
const allowedVolumes = new Set(["Under $10k", "$10k–$50k", "$50k–$250k", "$250k+"]);
const limits = { name: 120, email: 254, company: 160, useCase: 40, volume: 40, message: 3000 } as const;

function value(input: unknown, max: number) {
  return typeof input === "string" ? input.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (value(body.website, 200)) return Response.json({ ok: true });

  const name = value(body.name, limits.name);
  const email = value(body.email, limits.email);
  const company = value(body.company, limits.company);
  const useCase = value(body.useCase, limits.useCase);
  const volume = value(body.volume, limits.volume);
  const message = value(body.message, limits.message);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailIsValid || !company || !allowedUseCases.has(useCase) || !allowedVolumes.has(volume)) {
    return Response.json({ ok: false, error: "Please complete the required fields." }, { status: 400 });
  }

  // Email delivery is intentionally deferred until the verified sender address
  // and Resend API key are available. Keep validation server-side in the meantime.
  void message;
  return Response.json({ ok: false, error: "Email service is not configured yet." }, { status: 503 });
}
