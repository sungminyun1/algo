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

function makeBT(arr) {
  arr.unshift(0);
  const make = (idx) => {
    if (!arr[idx]) {
      return null;
    }
    return {
      val: arr[idx],
      left: make(idx * 2),
      right: make(idx * 2 + 1),
    };
  };
  return make(1);
}
