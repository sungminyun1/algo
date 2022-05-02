const input = `abc
9
L
L
L
L
L
P x
L
B
P y`.split('\n');

let str = input[0];

class Link{
    constructor(str){
        this.head = null;
        this.tail = null;
        for(let i =0; i<str.length; i++){
            let tmp = {
                val : str[i],
                next : 'last',
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
        this.cursor = 'last';
    }

    print(){
        let res = '';
        let now = this.head;
        while(now != 'last'){
            res +=now.val;
            now = now.next;
        }
        console.log(res);
    }

    funcL(){
       if(this.cursor === 'last'){
           this.cursor = this.tail;
       }else if(this.cursor !== 'first'){
           this.cursor = this.cursor.prev;
       }
    }

    funcR(){
        if(this.cursor === 'first'){
            this.cursot = this.head;
        }else if(this.cursor !== 'last'){
            this.cursor = this.cursor.next;
        }
    }
}

const link = new Link(str);
link.print()

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

    }
}