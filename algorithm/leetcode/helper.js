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
