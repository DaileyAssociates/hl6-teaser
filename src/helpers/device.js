export function imageSizeByScreenWidth() {
  const width = window.screen.availWidth

  if (width < 768) return 'sm'

  if (width < 1024) return 'md'

  if (width < 1440) return 'lg'

  return 'xl'
}
