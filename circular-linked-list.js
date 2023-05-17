class Node{
    constructor(value){
        this.value = value;
        this.head = null;
        this.prev = null;
    }
}

class CircularLinkedList{
    constructor(){
        this.head = new Node(undefined);

        this.head.next = this.head;
        this.head.prev = this.head;
    }

    addToFront(value){
        const spot = new Node(value);

        spot.prev = this.head;
        spot.next = this.head.next;

        spot.prev.next = spot;
        spot.next.prev = spot;
    }

    printForward(){
        for(let current = this.head.next; current !== this.head; current = current.next){
            console.log(current.value);
        }
    }

    addToBack(value){
        const spot = new Node(value);

        spot.next = this.head;
        spot.prev = this.head.prev;

        spot.next.prev = spot;
        spot.prev.next = spot;
    }


}

const list = new CircularLinkedList();
list.addToFront(5);
list.addToFront(7);
list.addToFront(9);
list.addToBack(4);
list.printForward();