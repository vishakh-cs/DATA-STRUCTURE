class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size=0;
    }

    // is empty

    isEmpty(){
        return this.size==0;
    }

    // print function
    print(){
        let result = ""
    let temp = this.head;
    while(temp){
        result+=`${temp.data}`
        if (temp.next) {
            result += ", ";
        }
        temp = temp.next;
    }
    return result


    }


    // insert at head

    insertAtHead(data){

        let newNode = new Node(data);
        newNode.next =this.head;
        this.head=newNode;
        this.size++;


    }

    // inser at given index

    insertAtIndex(data,index){
        if(index<0 || index>this.size){
            return "invalid index"
        }
            if(index == 0){
             this.insertAtHead(data);
            }
            else{
                let newNode = new Node(data);
                let temp = this.head;
                for(let i = 0;i<index-1;i++){
                    temp = temp.next;
                }
                newNode.next = temp.next;
                temp.next = newNode;
                this.size++;
            }
            return this;
        
    }

    // remove by value

    removeByValue(data){
        if(this.isEmpty()){
            return "list is empty"

        }
        let temp = this.head

        while(temp){
            if(temp.data === data){
            
            }
            temp=temp.next
        }
    }

    // remove form head

removefromHead(){
    if(this.isEmpty()){
        return "list is empty";
    }
    this.head = this.head.next;
    this.size--;
}
    
    //remove by index

    removebyIndex(index){
        if(this.isEmpty()){
            return "Already Empty";
        }
        if(index<0||index>this.size){
            return "Invalid Index";
        }
        if(index == 0){
            this.removefromHead();
        }else{
        let current = this.head;
        let prev =null;
        for(let i = 0 ; i<index-1;i++){
            prev=current;
            current=current.next
        }
        prev.next = current.next;
        this.size--;
    }
    return this;
    }

    //search an element

    searchElement(data){
        let current =this.head
        let index = 0;
        while(current){
            if(current.data == data){
                return index;
            }
            current = current.next;
            index++;
        }
        return "invalid index"
    }
}

let list = new LinkedList()
list.insertAtHead(10)

list.insertAtHead(17)
list.insertAtHead(14)
list.insertAtHead(89)

list.insertAtIndex(2,1)

list.removefromHead()
// list.removebyIndex(2)
let search =10
let searchResult = list.searchElement(search)
console.log(`index of ${search} is :`,searchResult);


console.log("linkedList",list.print());