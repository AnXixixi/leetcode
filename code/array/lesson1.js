export default (str) => {

  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let arr = []
  str.split('').forEach((cur) => {
    arr.push(map[cur])
  })

  let comb = (arr1) => {
    let temp = []
    for (let i = 0; i < arr1[0].length; i++) {
      for (let j = 0; j < arr1[1].length; j++) {
        temp.push(`${arr1[0][i]}${arr1[1][j]}`)
      }
    }

    arr1.splice(0, 2, temp)
    if (arr1.length > 1) {
      comb(arr1)
    } else {
      return arr1[0]
    }
    return arr1[0]
  }
  return comb(arr)
}
