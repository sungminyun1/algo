const input = `dmih
11
B
B
P x
L
B
B
B
P y
D
D
P z`.split('\n');
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
let str = input[0];

class Link{
    constructor(str){
        this.head = null;
        this.tail = null;
        for(let i =0; i<str.length; i++){
            let tmp = {
                val : str[i],
                next : null,
                prev : 'first',
            }
            if(this.head === null){
                this.head = tmp;
                this.tail = tmp;
            }else{
                tmp.prev = this.tail;
                this.tail.next = tmp;
                this.tail = tmp;
            }
        }
        this.cursor = this.tail;
    }

    print(){
        let res = '';
        let now = this.head;
        while(now != null){
            res +=now.val;
            now = now.next;
        }
        console.log(res);
    }

    funcL(){
        if(this.cursor !== 'first'){
            this.cursor = this.cursor.prev;
        }
    }

    funcR(){
        if(this.cursor === 'first'){
            this.cursor = this.head;
        }else if(this.cursor !== this.tail){
            this.cursor = this.cursor.next;
        }
    }

    funcDel(){
        if(this.cursor !== 'first'){
            if(this.cursor === this.head){
                this.cursor.next.prev = 'first';
                this.head = this.head.next;
                this.cursor = 'first';
            }else if(this.cursor === this.tail){
                this.tail = this.tail.prev;
                this.tail.next = null;
                this.cursor = this.tail;
            }else{
                this.cursor.next.prev = this.cursor.prev;
                this.cursor.prev.next = this.cursor.next;
                this.cursor = this.cursor.prev;
            }
        }
    }

    funcIns(val){
        let tmp = {
            val,
            next : null,
            prev : 'first'
        }
        if(this.cursor === 'first'){
            tmp.next = this.head;
            this.head.prev = tmp;
            this.head = tmp;
            this.cursor = tmp;
        }else if(this.cursor === this.tail){
            this.tail.next = tmp;
            tmp.prev = this.tail;
            this.tail = tmp;
            this.cursor = tmp;
        }else{
            tmp.next = this.cursor.next;
            tmp.prev = this.cursor;
            this.cursor.next.prev = tmp;
            this.cursor.next = tmp;
            this.cursor = tmp;
        }
    }
}

const link = new Link(str);

for(let i =2; i<input.length; i++){
    let [comm, val] = input[i].split(' ');

    switch(comm){
        case 'L':
            link.funcL();
            break;
        case 'D':
            link.funcR();
            break;
        case 'B':
            link.funcDel();
            break;
        case 'P':
            link.funcIns(val);
            break;
    }
}

link.print()