export default (arr) => {

  arr.sort((a, b) => (a - b))
  let min = Number.MAX_SAFE_INTEGER;
  let arr1 = []
  for (let i = 0; i < arr.length;) {
    let temp = arr.slice(i, arr.lastIndexOf(arr[i]) + 1)
    i = arr.lastIndexOf(arr[i]) + 1
    arr1.push([...temp])
    if (temp.length < min) {
      min = temp.length
    }
  }
  let res = arr1.every((cur) => {
    if (cur.length % min !== 0) {
      return false
    }
    return true
  })
  return res
}
