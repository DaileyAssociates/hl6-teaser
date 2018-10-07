export function validateEmail(value) {
  return /^[^@]+@[^@]+$/.test(value)
}

export function validateZipCode(value) {
  return /(^\d{5}$)/.test(value)
}
