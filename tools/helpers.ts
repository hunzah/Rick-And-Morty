export const linkId = /\d+$/

export const convertToFullTitle = (inputStr: string) => {
  // Разделение строки на части "S" (Season) и "E" (Episode)
  const parts = inputStr.split('E')

  if (parts.length === 2) {
    const seasonPart = parseInt(parts[0].substring(1), 10)
    const episodePart = parseInt(parts[1], 10)
    // Формирование полного заголовка
    const fullTitle = `Season ${seasonPart} Episode ${episodePart}`

    return fullTitle
  }
}

export const convertDateFormat = (inputDate: string) => {
  const date = new Date(inputDate)

  const year = date.getFullYear()
  const month = date.toLocaleString('en', { month: 'long' })
  const day = date.getDate()

  let hours = date.getHours()
  const ampm = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12
  hours = hours ? hours : 12 // "12 pm" вместо "0 pm"

  return `${year}, ${day} ${month}, ${hours}${ampm}`
}
