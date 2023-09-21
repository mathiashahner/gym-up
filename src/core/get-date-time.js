export const getFormattedDate = date => {
  return formatDigit(date.getDate()) + '/' + formatDigit(date.getMonth() + 1) + '/' + date.getFullYear()
}

export const getFormattedTime = date => {
  return formatDigit(date.getHours()) + ':' + formatDigit(date.getMinutes())
}

const formatDigit = number => {
  return number < 10 ? '0' + number : number
}
