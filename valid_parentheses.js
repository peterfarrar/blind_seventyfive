const { expect } = require("chai")

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s) => {
  let stack = []
  const chars = s.split('')
  for (const char of chars) {
    if (char === '(') {
      stack = [...stack, char]
    } else if (char === ')') {
      if (stack.length === 0) {
        return false
      }
      stack = stack.slice(0, stack.length - 1)
    }
  }
  return stack.length === 0
}

input = ["()", "()[]{}", "(]", "()))("]
result = [true, true, false, false]
output = [
  isValid(input[0]),
  isValid(input[1]),
  isValid(input[2]),
  isValid(input[3])
]


it("returns true for valid pairs of parentheses", () => {
  expect(output[0]).to.be.true
  expect(output[1]).to.be.true
})

it("returns false for invalid pairs of parentheses", () => {
  expect(output[2]).to.be.false  
  expect(output[3]).to.be.false  
})