const { expect } = require('chai')

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindromeTwo = function (s) {
  if (s.length <= 1) {
    return s
  }
  // start largest and work down so the first one you find is the largest
  let offset = -1
  while (offset++ < s.length) {
    let index = -1
    while (index++ <= offset) {
      const candidate = s
        .split('')
        .splice(index, s.length - offset)
        .join('')
      if (isPalindrome(candidate)) {
        return candidate
      }
    }
  }
}

const longestPalindromeOrig = function (s) {
  if (s.length <= 1) {
    return s
  }
  // start largest and work down so the first one you find is the largest
  let offset = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= offset; j++) {
      const candidate = s
        .split('')
        .splice(j, s.length - offset)
        .join('')
      if (isPalindromeOrig(candidate)) {
        return candidate
      }
    }
    offset++
  }
}

const isPalindrome = (p) => {
  if (p === p.split('').reverse().join('')) {
    return true
  }
  return false
}

const isPalindromeOrig = (p) => {
  let checks = Math.floor(p.length / 2)
  for (let i = 0; i < checks; i++) {
    if (p[i] != p[p.length - i - 1]) {
      return false
    }
  }
  return true
}

// Then I heard about Manacher’s Algorithm...
// not quite sure hot to fix this... very close I think
const longestPalindromeManachers = function (s) {
  const string = [
    ...s.split('').reduce((a, v) => [...a, '*', v], []),
    '*',
  ].join('')
  const lengthToPalindrome = {}
  // Stores the longest proper prefix
  // which is also a suffix
  let LPS = new Array(string.length).fill(0)
  let C = 0
  let R = 0

  for (let i = 0; i < string.length; i++) {
    let imir = 2 * C - i

    // Find the minimum length of
    // the palindrome
    if (R > i) {
      LPS[i] = Math.min(R - i, LPS[imir])
    } else {
      // Find the actual length of
      // the palindrome
      LPS[i] = 0
    }

    // Exception Handling
    try {
      while (string[i + 1 + LPS[i]] === string[i - 1 - LPS[i]]) {
        const tmp = string.substring((i - 1 - LPS[i]), (i + LPS[i]))
        LPS[i] += 1
        lengthToPalindrome[LPS[i]] = tmp
        // lengthToPalindrome[LPS[i]] = string.substring((i + 1 + LPS[i]), (i + 1 + LPS[i]) + (LPS[i] * 2))
      }
    } catch (err) {
      // pass
    }

    // Update C and R
    if (i + LPS[i] > R) {
      C = i
      R = i + LPS[i]
    }
  }
  let r = Math.max(...LPS)
  let c = LPS.indexOf(r)

  // Return the length r
  return lengthToPalindrome[r]
}

const longestPalindrome = longestPalindromeManachers

const s = ['babad', 'cjkbbd1234567890', 'qwerty', 'bbcc', 'qwertyabcdcbaqwerty']
const t = [
  ['bab', 'aba'],
  ['bb'],
  ['q', 'w', 'e', 'r', 't', 'y'],
  ['bb', 'cc'],
  ['abcdcba'],
]
const output = [
  longestPalindrome(s[0]),
  longestPalindrome(s[1]),
  longestPalindrome(s[2]),
  longestPalindrome(s[3]),
  longestPalindrome(s[4]),
]
console.log('Output:', output)

it('returns the expected values', () => {
  expect(t[0]).to.contain(output[0])
  expect(t[1]).to.contain(output[1])
  expect(t[2]).to.contain(output[2])
  expect(t[3]).to.contain(output[3])
  expect(t[4]).to.contain(output[4])
})
