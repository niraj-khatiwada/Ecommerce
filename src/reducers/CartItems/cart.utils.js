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
