export const checkLengthListItemValue = (value) => {
  return value.length > 33 ? `${value.slice(0,33)}...` : value
}