import countBinarySubstrings from '../../code/string/lesson2'

test('leetcode 696:', () => {
  expect(countBinarySubstrings("00110011")).toBe(6)
  expect(countBinarySubstrings("10101")).toBe(4)
})
