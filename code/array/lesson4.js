export default (n) => {

  let glay = (n) => {
    if (n === 1) {
      return ['0', '1']
    } else {
      let pre = glay(n - 1)
      let max = Math.pow(2, n) - 1
      let res = []
      for (let i = 0; i < pre.length; i++) {
        res[i] = `0${pre[i]}`
        res[max - i] = `1${pre[i]}`
      }
      return res
    }
  }
  return glay(n).map((cur) => {
    return parseInt(cur, 2)
  })
}
