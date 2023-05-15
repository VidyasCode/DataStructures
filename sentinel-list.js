//* A list with a empty head and tail
//* provides a way to add and remove nodes without checking for nulll head/tail

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Sentinal {
    constructor() {
        this.head = new Node(undefined);
        this.tail = new Node(undefined);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    addToBack(...values) {
        values.forEach(value => {
            const spot = new Node(value);

            spot.next = this.tail;
            spot.prev = this.tail.prev;

            this.tail.prev.next = spot;
            this.tail.prev = spot;
        })

    }

    addToFront(...values) {
        values.forEach(value => {
            const spot = new Node(value);

            spot.next = this.head.next;
            spot.prev = this.head;

            this.head.next.prev = spot;
            this.head.next = spot;
        })

    }

    remove(...values) {
        let count = [];
        values.forEach(value => {
            for (let current = this.head.next; current !== this.tail; current = current.next) {
                if (current.value === value) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    
                    count[value] ? count[value]++ : count[value]=1;
                }
            }
        });
        count.map((count, i) => {
            console.log(`removed ${i}, ${count} occurences`);
        });
    }

    printForward() {
        console.log("printing forward");
        for (let current = this.head.next; current !== this.tail; current = current.next) {
            console.log(current.value);
        }
    }

}

const list = new Sentinal();
list.addToBack(5, 7, 4, 9, 1);
list.addToFront(3, 4, 8,7);
list.addToBack(7,6);
list.printForward();
list.remove(4,7);
list.printForward();