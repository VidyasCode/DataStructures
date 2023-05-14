//* A list with a empty head and tail
//* provides a way to add and remove nodes without checking for nulll head/tail

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Sentinal{
    constructor(){
        this.head = new Node(undefined);
        this.tail = new Node(undefined);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addToBack(value){
        const spot = new Node(value);

        spot.next = this.tail;
        spot.prev = this.tail.prev;

        this.tail.prev.next = spot;
        this.tail.prev = spot;
      
    }

    addToFront(value){
        const spot = new Node(value);

        spot.next = this.head.next;
        spot.prev = this.head;

        this.head.next.prev = spot;
        this.head.next = spot;

    }

    printForward(){
        for(let current = this.head.next; current !== this.tail; current= current.next){
            console.log(current.value);
        }
    }

}

const list = new Sentinal();
list.addToBack(5);
list.addToBack(7);
list.addToBack(9);
list.addToFront(3);
list.addToFront(4);
list.addToBack(6);
list.printForward();