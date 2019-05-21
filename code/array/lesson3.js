export default (flowerbed, n) => {
  let res = 0
  let newFlowerbed = [0, ...flowerbed, 0]
  for (let i = 1; i < newFlowerbed.length - 1; i++) {
    if (newFlowerbed[i] === 0 && newFlowerbed[i - 1] === 0 && newFlowerbed[i + 1] === 0) {
      res++
      i++
    }
  }
  return res >= n
}
