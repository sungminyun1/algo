//https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let arr = [];
  let now = head;
  while (true) {
    arr.push(now);
    if (now.next === null) {
      break;
    }
    now = now.next;
  }

  let rIdx = arr.length - n;
  if (rIdx === 0) {
    head = head.next;
  } else {
    arr[rIdx - 1].next = arr[rIdx + 1] ? arr[rIdx + 1] : null;
  }
  return head;
};

class LL {
  constructor() {
    this.head = null;
    this.next = null;
  }

  insert(val) {
    let tmp = {
      val,
      next: null,
    };
    if (this.head === null) {
      this.head = tmp;
    } else {
      let now = this.head;
      while (now.next !== null) {
        now = now.next;
      }
      now.next = tmp;
    }
  }
}

const head = new LL();
let a = [1];
for (let i of a) {
  head.insert(i);
}
console.log(JSON.stringify(removeNthFromEnd(head.head, 1)));
