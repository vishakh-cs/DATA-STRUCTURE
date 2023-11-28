// queue using linked list

class Node{
    constructor(data){
        this.data=data;
        this.next = null;
    }
}

class QueueLinkedList{
    constructor(){
        this.head= null;
        this.tail = null;
        this.size=0;
    }

    // is Empty
    isEmpty(){
        return this.size ==0;
    }

    enQueue(data){
        let newNode = new Node(data)
        if(this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;

        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size++;

    }
    dqQueue(){
        if (this.isEmpty()) {
            return "underFlow"
    }
        this.head=this.head.next;
        this.size--;
    }
    printQueue(){
        let result = "";
        let tem = this.head;
        while(tem){
            result += tem.data +" ";
            tem = tem.next;
            
        }
        console.log(result);

    }

}

let list = new QueueLinkedList()
list.enQueue(10)
list.enQueue(7)
list.enQueue(25)
list.enQueue(42)
list.enQueue(17)
list.dqQueue()

list.printQueue();