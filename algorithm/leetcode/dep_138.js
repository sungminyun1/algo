/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let arr = [];
  let now = head;

  const make = (now) => {
    if (!now) {
      return null;
    }
    arr.unshift({
      val: now.val,
      next: make(now.next),
      random: arr[now.random],
    });
  };
  make(now);
  return arr[0]
};
