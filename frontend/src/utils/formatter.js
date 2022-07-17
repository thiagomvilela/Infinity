export const formatDate = (dateArr = []) => {
  const year = dateArr[0]
  const mouth = dateArr[1]
  const day = dateArr[2]
  const hour = dateArr[3]
  const minute = dateArr[4]

  const toReturn = `${day}/${mouth}/${year} - ${hour}:${minute}`

  return toReturn
}
