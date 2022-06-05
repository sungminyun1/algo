const input = `2
7
I 16
I -5643
D -1
D 1
D 1
I 123
D -1
9
I -45
I 653
D 1
I -642
I 45
I 97
D 1
D -1
I 333`.split('\n').map(val=>val.split(' '));
// const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(val=>val.split(' '));

class LL{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert = (val) =>{
        let tmp = {
            val,
            next: null,
            prev: null,
        }
        if(this.head === null && this.tail === null){
            this.head = tmp;
            this.tail = tmp;
            return;
        }

        let now = this.head;
        while(true){
            if(!now){
                tmp.prev = this.tail;
                this.tail.next = tmp;
                this.tail = tmp;
                break;
            }else if(val < now.val){
                if(now === this.head){
                    tmp.next = this.head;
                    this.head.prev = tmp;
                    this.head = tmp;
                    break;
                }
                tmp.prev = now.prev;
                tmp.next = now;
                tmp.prev.next = tmp;
                tmp.next.prev = tmp;
                break;
            }
            now = now.next;
        }
    }

    popMin = () =>{
        if(this.head === null){
            return;
        }
        if(this.tail === this.head){
            this.tail = null;
            this.head = null;
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
    }

    popMax = () =>{
        if(this.tail === null){
            return;
        }
        if(this.tail === this.head){
            this.tail = null;
            this.head = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    print = () =>{
        if(this.head === null && this.tail === null){
            console.log('EMPTY');
            return;
        }
        console.log(`${this.tail.val} ${this.head.val}`)
    }
}

let cases = +input.shift()[0];

let k =0;
for(let i = 0; i<cases; i++){
    let N = +input[k++][0]
    let tmp = []
    for(let j =0; j<N; j++){
        tmp.push(input[k++]);
    }
    main(tmp)
}


function main(Arr){
    let myList = new LL()

    for(let i =0; i<Arr.length; i++){
        let [comm,val] = Arr[i];
        if(comm === 'I'){
            myList.insert(+val);
        }else{
            if(val === '1'){
                myList.popMax();
            }else{
                myList.popMin();
            }
        }
    }

    myList.print()
}