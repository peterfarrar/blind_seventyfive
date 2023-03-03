const { expect } = require('chai')

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  const twoSumTooLong = function(nums, target) { // O(n^2)
//   let i = 0
//   while (i < nums.length) {
//     for( let j = i+1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//       i++
//     }
//   }
// }
const twoSum = function (nums, target) {
  // O(n)
  const valToIndex = {}
  for (let i = 0; i < nums.length; i++) {
    if (valToIndex[nums[i]]) {
      valToIndex[nums[i]] = [valToIndex[nums[i]], i]
    } else {
      valToIndex[nums[i]] = [i]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const remainder = target - nums[i]
    const remainderToFirstIndex = valToIndex[remainder]
      ? valToIndex[remainder].filter((j) => j != i)[0]
      : undefined
    if (remainderToFirstIndex) {
      return [i, remainderToFirstIndex]
    }
  }

  return []
}

const nums = [
  [2, 7, 11, 15],
  [3, 2, 4],
  [3, 3],
  [1, 2, 3],
]
const target = [9, 6, 6, 6]

const output = [
  twoSum(nums[0], target[0]),
  twoSum(nums[1], target[1]),
  twoSum(nums[2], target[2]),
  twoSum(nums[3], target[3]),
]
console.log('Output:', output)

it('returns the expected value', () => {
  expect(output[0]).to.eql([0, 1])
  expect(output[1]).to.eql([1, 2])
  expect(output[2]).to.eql([0, 1])
  expect(output[3]).to.eql([])
})
