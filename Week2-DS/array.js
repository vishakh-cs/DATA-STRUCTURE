class Node{
    constructor(data){
        this.data=data;
        this.next = null;
        this.previous = null;
    }

}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail=null;
        this.size = 0;

    }


    // isEmpty

    isEmpty(){
        return this.size==0
    }

    // insertAthead
    inserAtHead(data){
        let newNode = new Node(data)
        newNode.head = newNode;
        newNode.tail = newNode;
        this.size++;
    }

    insertAtTail(data){
        let newNode = new Node(data)
        this.tail.next = newNode
        newNode.previous = this.tail;
        this.size++;
    }

    removeAtHead(){
        this.head=this.head.next;
        this.size--;
    }

    removeAtIndex(index){
        if(index==0){
            return this.removeAtHead()
        }else{
            
            let previous = null;
            let current = this.head
            for(let i =0 ;i<index;i++){

                previous=current
                current=current.next;
                
            }
            previous.next=current.next;
        }
        this.size--;
    }


}

let list =