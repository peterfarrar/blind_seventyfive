const { expect } = require('chai')
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = (list1, list2) => {
  let mergedList = null
  if (list1 && list2) {
    if (list1.value < list2.value) {
      mergedList = { value: list1.value, next: null }
      list1 = list1.next
    } else {
      mergedList = { value: list2.value, next: null }
      list2 = list2.next
    }

    let currentNode = mergedList
    while (list1 || list2) {
      if (list1) {
        if (list2) {
          if (list1.value < list2.value) {
            currentNode.next = { value: list1.value, next: null }
            list1 = list1.next
          } else {
            currentNode.next = { value: list2.value, next: null }
            list2 = list2.next
          }
        } else {
          currentNode.next = { value: list1.value, next: null }
          list1 = list1.next
        }
      } else if (list2) {
        currentNode.next = { value: list2.value, next: null }
        list2 = list2.next
      }
      currentNode = currentNode.next
    }
  } else if (list1) {
    mergedList = list1
  } else if (list2) {
    mergedList = list2
  }

  return mergedList
}

const list1a = { value: 1, next: { value: 2, next: { value: 4, next: null } } }
const list2a = { value: 1, next: { value: 3, next: { value: 4, next: null } } }
const list1b = null
const list2b = null
const list1c = null
const list2c = { value: 0, next: null }

const input = [
  [list1a, list2a],
  [list1b, list2b],
  [list1c, list2c],
]
const output = [
  mergeTwoLists(input[0][0], input[0][1]),
  mergeTwoLists(input[1][0], input[1][1]),
  mergeTwoLists(input[2][0], input[2][1]),
]
const result = [
  {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 2,
        next: { value: 3, next: { value: 4, next: { value: 4, next: null } } },
      },
    },
  },
  null,
  { value: 0, next: null },
]

describe('merge two lists', () => {
  it('merges two lists of three each', () => {
    expect(output[0]).to.eql(result[0])
  })
  it('merges two empty lists', () => {
    expect(output[1]).to.eql(result[1])
  })
  it('merges one non-empty list with an empty lists', () => {
    expect(output[2]).to.eql(result[2])
  })
})
