// doubly linked list
class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let result = "";
        let temp = this.head;
        while (temp) {
            result += `${temp.data}`;
            if (temp.next) {
                result += " , ";
            }
            temp = temp.next;
        }
        return result;
    }

    // insert at head
    insertAtHead(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // insert at tail
    insertAtTail(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    // insert at index
    insertAtIndex(data, index) {
        if (index < 0 || index > this.size) {
            return "Invalid index";
        }

        if (index === 0) {
            this.insertAtHead(data);
        } else if (index === this.size) {
            this.insertAtTail(data);
        } else {
            let newNode = new Node(data);
            let temp = this.head;

            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }

            newNode.next = temp.next;
            newNode.previous = temp;
            temp.next.previous = newNode;
            temp.next = newNode;

            this.size++;
        }

        return this;
    }

    // remove from head
    removeFromHead() {
        if (this.isEmpty()) {
            return "List is empty";
        }

        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
        }

        this.size--;
    }
    
    removeAtTail(){
        this.tail=this.tail.previous;
        this.tail.next = null;
        this.size--;
    }
    
    printInRevese(){
        let result = ""
        let temp = this.tail;
        while(temp){
            result +=`${temp.data}`;
            if(temp.previous){
                
                result += " , "
            }
            temp=temp.previous;
        }
        return result;
    }
    
    
}

let list = new DoublyLinkedList();

list.insertAtHead(10);
list.insertAtHead(12);
list.insertAtTail(21);
list.insertAtTail(7);
list.insertAtTail(21);
list.insertAtTail(8);
// list.removeFromHead(); 
// list.removeAtTail();

console.log("revese ",list.printInRevese())
console.log("linkedlist", list.print());
