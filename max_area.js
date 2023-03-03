const { expect } = require('chai')
/**
 * @param {number[]} height
 * @return {number}
 */
// const maxArea = (height) => {
//   // calculate the areas and find the largest
//   let max = 0
//   for (let i = 0; i < height.length - 1; i++) {
//     const leftY = height[i]
//     const rightHeight = height.slice(i + 1)
//     for (j = 0; j < rightHeight.length; j++) {
//       const x = j + 1
//       const rightY = rightHeight[j]
//       const curr = (rightY < leftY) ? rightY * x : leftY * x
//       if (curr > max) {
//         max = curr
//       }
//     }
//   }
//   return max
// }
const maxArea = (height) => {
  let leftIndex = 0
  let rightIndex = height.length - 1
  let max = 0
  let curr = 0

  while (leftIndex < rightIndex) {
    curr =
      height[leftIndex] > height[rightIndex]
        ? (rightIndex - leftIndex) * height[rightIndex]
        : (rightIndex - leftIndex) * height[leftIndex]
    max = curr > max ? curr : max
    height[leftIndex] < height[rightIndex] ? leftIndex++ : rightIndex--
  }
  return max
}

const output = [
  maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]),
  maxArea([1, 7]),
  maxArea([1, 1, 1]),
  maxArea([7, 7]),
]
const result = [49, 1, 2, 7]
console.log('Output:', output)

it('returns the expected values', () => {
  expect(output).to.eql(result)
})
