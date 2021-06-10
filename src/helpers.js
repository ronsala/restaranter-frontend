export const formatCurrency = (num) => {
  num = Number(num)
  return "$" + num.toFixed(2);
}