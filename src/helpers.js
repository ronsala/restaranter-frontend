export const formatCurrency = (num) => {
  num = Number(num)
  return "$" + num.toFixed(2);
}

export const validateEntries = (state) => {
  for (let key of Object.keys(state)) {
    if (state[key] === '') {
      let split = key.split('_')
      let upCased = split.map(word => {
        return word.toUpperCase()
      })
      let joined = upCased.join(' ')
      alert(`${joined} IS REQUIRED.`)
      return false
    }
  }

  return true
}