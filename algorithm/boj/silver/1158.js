const input = `7 3`.split(' ').map(Number);
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);
class Link{
    constructor(num){
        this.head = null;
        this.tail = null;
        for(let i =1; i<= num; i++){
            let tmp = {
                val : i,
                next : null,
                prev : null,
            }
            if(i === 1){
                this.head = tmp;
                this.tail = tmp;
            }else{
                this.tail.next = tmp;
                tmp.prev = this.tail;
                this.tail = tmp;
            }
        }
        this.head.prev = this.tail;
        this.tail.next = this.head;
        this.cur = this.head;
    }

    run(num){
        let count = num -1;
        const result = [];
        while(this.cur !== null){
            for(let i = 0; i< count; i++){
                this.cur = this.cur.next;
            }
            result.push(this.cur.val);
            if(this.cur.next === this.cur){
                this.cur = null;
            }else{
                this.cur.prev.next = this.cur.next;
                this.cur.next.prev = this.cur.prev;
                this.cur = this.cur.next;
            }
        }
        console.log('<'+result.join(', ')+'>');
    }
}
const link = new Link(input[0]);
link.run(input[1])