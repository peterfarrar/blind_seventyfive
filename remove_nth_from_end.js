/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { expect } = require('chai')

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = (head, n) => {
  let length = 1
  let curr = head
  while (curr.next) {
    length++
    curr = curr.next
  }

  if (length === n) {
    head = head.next
    return head
  }

  if (length < n) {
    throw new Error("Can not remove elements below head. That is impossible.")
  }

  curr = head
  let prev = {}
  // for (let i = 0; i < length; i++) {
  //   if (length - n === i) {
  //     prev.next = curr.next
  //     break
  //   }
  //   prev = curr
  //   curr = curr.next
  // }
  // slightly shorter code... I think little to no speed difference:
  for (let i = 0; i < length - n; i++) {
    prev = curr
    curr = curr.next
  }
  prev.next = curr.next

  return head
}

const makeANode = (value, next = null) => {
  return { next, value }
}

describe('five nodes, remove 2nd', () => {
  let last = { value: 1 }
  let head = last
  for (let i = 2; i < 6; i++) {
    last.next = makeANode(i)
    last = last.next
  }

  it('drops the second to last list item', () => {
    head = removeNthFromEnd(head, 2)
    const result = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 5,
            next: null,
          },
        },
      },
    }
    expect(head).to.eql(result)
  })
})

describe('one node, remove 1st', () => {
  let head = { next: null, value: 1 }
  it('drops itself', () => {
    head = removeNthFromEnd(head, 1)
    const result = null
    expect(head).to.eql(result)
  })
})

describe('two nodes, remove 1st', () => {
  const end = { next: null, value: 2 }
  let head = { next: end, value: 1 }
  it('drops itself', () => {
    head = removeNthFromEnd(head, 1)
    const result = { next: null, value: 1 }
    expect(head).to.eql(result)
  })
})

describe('one node, remove 2nd', () => {
  let head = { next: null, value: 1 }
  it('throws an exception when the offset is greater than the length', () => {
    const result = null
    expect(() => removeNthFromEnd(head, 2)).to.throw("Can not remove elements below head. That is impossible.")
  })
})