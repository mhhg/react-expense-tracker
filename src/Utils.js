export function currencyFormat(num) {
  const result = Math.abs(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  if (num < 0) return `-$${result}`
  return `$${result}`
}

export function groupByMonth(transactions, income, expense) {
  const result = {}

  for (let index = 0; index < transactions.length; index++) {
    const element = transactions[index]
    if ((!income && element.amount > 0) || (!expense && element.amount < 0))
      continue

    const date = new Date(element.date).toDateString().split(' ')
    const key = `${date[1]} ${date[3]}`
    if (result[key]) result[key].push(element)
    else result[key] = [element]
  }
  return result
}

export function pad(num, size) {
  num = num.toString()
  while (num.length < size) num = '0' + num
  return num
}
