export const BLOCKED_PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
];

export function isBlockedPersonalEmail(email) {
  if (!email || typeof email !== "string") return false;
  const domain = email.trim().toLowerCase().split("@")[1];
  if (!domain) return false;
  return BLOCKED_PERSONAL_EMAIL_DOMAINS.includes(domain);
}
