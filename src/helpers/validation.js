export function validateEmail(value) {
  return /^[^@]+@[^@]+$/.test(value)
}
