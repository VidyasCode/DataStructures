class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value){
        const spot = new Node(value);
        if(this.head === null){
            this.head = spot;
            this.tail = spot;
        }else{
            this.tail.next = spot;
            this.tail = spot;

        }
    }

    remove(value){
        this.prev = null;
        for(let current = this.head; current; current = current.next){
            if(current.value === value){
                if(this.prev === null){
                    this.head = current.next;
                }else{
                    this.prev.next = current.next;
                }
                return true;

            }
            this.prev = current;
        }
    }
    print(){
        for(let current = this.head; current !== null; current= current.next){
            console.log(current.value);
        }
    }
}

const list = new LinkedList();
list.add(5);
list.add(7);
list.add(9);
list.print();