class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    // is Empty

    isEmpty(){
       return this.size==0;
    }

    // insert at head 

    insertAtHead(data){
        let newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode;
        this.size++;

    }

    // insert at index

    insertAtIndex(data,index){
        if(index >=this.size || index<0){
            return "invalid index"
        }
        if(this.isEmpty()){
            this.insertAtHead(data)
        }else{
            let newNode = new Node(data)
            let temp = this.head;
            for(let i = 0 ; i<index-1;i++){
                temp = temp.next;

            }
            newNode.next = temp.next
            temp.next = newNode;
            this.size ++;
        }
        return this;
    }

    // remove at head 

    removeAtHead(){
        if(this.isEmpty()){
            return "already empty"
        }
        this.head = this.head.next;
        this.size--;
    }

    // remove at index

    removeAtIndex(index){
        if(this.isEmpty()){
            return "already empty"

        }
        if(index>this.size || index<0){
            return "invalid index"
        }
        if(index==0){
            this.removeAtHead()
        }else{
            let current = this.head;
            let previous =null;
            for(let i=0;i<index;i++){
                previous =current
                current = current.next
            }
            previous.next=current.next
            this.size--;

        }
        return this;

    }

    // insert at tail

    insertAtTail(data){
        if(this.isEmpty()){
            this.insertAtHead(data)
        }else{
        let newNode = new Node(data)
        let temp= this.head

        while(temp.next){
            temp=temp.next
        }
        temp.next = newNode
        this.size++;
    }
    return this;
}

    // print()

    print(){
        let result =""
        let temp = this.head
        while(temp){
            result += `${temp.data}`
            if(temp.next){
                result+=" -> ";
            }
           temp= temp.next;

        }
        return result;
    }
     arrayToLinkedlist(arr) {
        let linkedlist = new LinkedList()
        for( let i = arr.length -1 ; i>=0;i-- ){
            linkedlist.insertAtHead(arr[i])

        }
        return linkedlist;

        
    }
}


let list = new LinkedList();

let arrayToConvert = [1, 2, 3, 4, 5];

list= list.arrayToLinkedlist(arrayToConvert);
// list.removeAtHead()
console.log(list.print());


// list.insertAtHead(10)
// list.insertAtHead(5)

// list.insertAtHead(1)
// list.insertAtHead(45)
// list.insertAtIndex(7,3)
// list.removeAtHead()
// list.removeAtIndex(2)
// list.insertAtTail(47)

// console.log("result of linkedlist =",list.print());