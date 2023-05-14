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
            this.tail.next = spot;
            spot.prev = this.tail;

            this.tail = spot;

        }
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
list.add(8);
list.printForward();
list.printBackward();