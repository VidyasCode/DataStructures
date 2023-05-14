class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const spot = new Node(value);
        if (this.head === null) {
            this.head = spot;
            this.tail = spot;
        } else {
            //* move the connectors 
            this.tail.next = spot;
            spot.prev = this.tail;

            //* at the end move the tail pointer
            this.tail = spot;

        }
    }

    remove(value){
        for(let current= this.head; current; current= current.next){
            if(current.value === value){

                //* if it is the only node
                if(this.head === this.tail){
                    this.head =null;
                    this.tail=null;
                    return;
                }

                //* If removing node is at head
                if(current === this.head){
                    this.head = this.head.next;
                    this.head.prev = null;
                    return;
                }
                //* If node is at the tail
                if(current === this.tail ){
                    this.tail = this.tail.prev;
                    
                    return;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
                return true;
            }
            
        }
        return false;
    }
    printForward() {
        console.log('Print forward');
        for (let current = this.head; current !== null; current = current.next) {
            console.log(current.value);
        }
    }

    printBackward(){
        console.log("Printing Backwards");
        for(let current= this.tail; current; current= current.prev){
            console.log(current.value);
        }
    }
}

const list = new LinkedList();
list.add(5);
list.add(7);
list.add(9);
list.printForward();
list.remove(9);
list.printBackward();