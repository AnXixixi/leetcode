import answer from '../../code/array/lesson3'

test('answer is:', () => {
  expect(answer([1, 0, 0, 0, 1], 1)).toBe(true)
  expect(answer([1, 0, 0, 0, 1], 2)).toBe(false)
  expect(answer([1, 0, 0, 0, 0, 0, 1], 2)).toBe(true)
  expect(answer([0], 1)).toBe(true)
  expect(answer([1], 1)).toBe(false)
  expect(answer([0, 0, 1, 0, 0], 2)).toBe(true)
  expect(answer([0], 0)).toBe(true)
  expect(answer([1], 0)).toBe(true)
  expect(answer([], 1)).toBe(false)
  expect(answer([], 0)).toBe(true)
})
