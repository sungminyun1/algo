var swapPairs = function (head) {
  if (head === null) {
    return null;
  }
  let first = head;
  let second = head.next;
  let backup = head;

  while (second !== null) {
    if (first === head) {
      first.next = second.next;
      second.next = first;
      head = second;
      first = first.next;
      second = first !== null ? first.next : null;
    } else {
      first.next = second.next;
      second.next = first;
      backup.next = second;
      backup = first;
      first = first.next;
      second = first !== null ? first.next : null;
    }
  }

  return head;
};

class LL {
  //linked list 문제용
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
let head = new LL();
let data = [2, 5, 3, 4, 6, 2, 2];
for (let i = 0; i < data.length; i++) {
  head.insert(data[i]);
}

console.log(JSON.stringify(swapPairs(head.head)));
