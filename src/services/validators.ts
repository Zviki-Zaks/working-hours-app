export function validateEmail(email: string): boolean {
  // eslint-disable-next-line no-useless-escape
  const re = /^[\w-\.+]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email).toLowerCase());
}
