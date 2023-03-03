const { expect } = require('chai')

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b)

  let results = {}
  for(let i = 0; i < nums.length-2; i++) {
          const target = nums[i] * -1
          let left = i + 1
          let right = nums.length - 1
      
      while(left < right) {
          let curr = nums[left] + nums[right]
          if(curr > target)
          {
              right--
          } else if(curr < target){
              left++
          } else {
              let arr = [(target * -1), nums[left], nums[right]].sort((a, b) => a - b)
              if(!results[JSON.stringify(arr)]){
                  results[JSON.stringify(arr)] = arr
              }
              left++
              right--
          }
      }
  }

  return Object.values(results)
}

const output = [
  threeSum([-1, 0, 1, 2, -1, -4]),
  threeSum([0, 1, 1]),
  threeSum([0, 0, 0]),
]
const result = [
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ],
  [],
  [[0, 0, 0]],
]
console.log('Output:', output)

it('returns the expected values', () => {
  for (const value of output[0]) {
    expect(result[0]).to.deep.include(value)
  }
})
