import answer from '../../code/array/lesson4'

test('answer is:', () => {
  expect(answer(2)).toEqual([0, 1, 3, 2])
  expect(answer(3)).toEqual([
    0, 1, 3, 2,
    6, 7, 5, 4
  ])
})
