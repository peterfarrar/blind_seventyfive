const { expect } = require('chai')

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  let currentCnt = 0
  let usedLetters = {}
  //   let letters = ""
  //   let winner = ""
  for (let i = 0; i < s.length; i++) {
    if (usedLetters[s[i]]) {
      if (currentCnt > max) {
        // winner =  letters
        max = currentCnt
      }
      currentCnt = 0
      usedLetters = {}
      letters = ''
    }
    letters = letters + s[i]
    usedLetters[s[i]] = 7
    currentCnt++
  }
  // console.log(`Returning ${winner}'s count of ${max}`)
  return max
}

const s = ['abcabcbb', 'bbbbb', 'pwwkew']
const t = [3, 1, 3]
const output = [
  lengthOfLongestSubstring(s[0]),
  lengthOfLongestSubstring(s[1]),
  lengthOfLongestSubstring(s[2]),
]
console.log('Output:', output)

it('returns the expected values', () => {
  expect(output[0]).to.eql(t[0])
  expect(output[1]).to.eql(t[1])
  expect(output[2]).to.eql(t[2])
})
