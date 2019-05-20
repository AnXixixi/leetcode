import reverseWords from '../../code/string/lesson1'

test(`input: "Let's take LeetCode contest" output "s'teL ekat edoCteeL tsetnoc"`, () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
})
