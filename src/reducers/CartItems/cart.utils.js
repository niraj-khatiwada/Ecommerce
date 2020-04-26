export const noDuplicate = (existingArray, itemAdded) => {
  if (existingArray.find((item) => item.id === itemAdded.id)) {
    return existingArray.map((item) => {
      return item.id === itemAdded.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    })
  }
  return [...existingArray, { ...itemAdded, quantity: 1 }]
}

export const filteredArray = (existingArray, itemtobeRemoved) => {
  return existingArray.filter((item) => item.id !== itemtobeRemoved.id)
}

export const addQuantity = (existingArray, itemQuantityIncrease) => {
  if (existingArray.find((item) => item.id === itemQuantityIncrease.id)) {
    return existingArray.map((item) => {
      return item.id === itemQuantityIncrease.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    })
  }
  return [...existingArray]
}
export const subtractQuantity = (existingArray, itemQuantityIncrease) => {
  if (existingArray.find((item) => item.id === itemQuantityIncrease.id)) {
    return existingArray.map((item) => {
      if (item.quantity >= 1) {
        return item.id === itemQuantityIncrease.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      } else {
        {
          return item.id === itemQuantityIncrease.id
            ? { ...item, quantity: 0 }
            : item
        }
      }
    })
  }
  return [...existingArray]
}
