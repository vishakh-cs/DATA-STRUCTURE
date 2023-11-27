class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert at the end of the linked list
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Print the linked list
    print() {
        let result = "";
        let temp = this.head;
        while (temp) {
            result += `${temp.data}`;
            if (temp.next) {
                result += ",";
            }
            temp = temp.next;
        }
        console.log(result);
    }
}

// Example usage
const array = [10, 20, 30, 40, 50];
const linkedList = new LinkedList();

for(let i =0 ; i<array.length;i++){
    linkedList.insertAtEnd(array[i])
}

linkedList.print();
