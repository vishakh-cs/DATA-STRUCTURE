// stack using linked list

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class StackLinkedList{
    constructor(){
        this.top = null;
        this.size =0;
    }
    
    // push
    push(data){
        let newNode = new Node(data)
        newNode.next = this.top
        this.top= newNode;
        this.size++;
    }
    
    pop(){
        if(this.isEmpty()){
            return "list is already empty"
        }
        const items  =this.top.data;
        this.top = this.top.next;
        this.size--;
        return items;
    }
    
    
    isEmpty(){
        return this.size==0;
    }
    
    print() {
        let result = "";
        let temp = this.top;
        while (temp !== null){
            result += temp.data + " ";
            temp = temp.next;
        }
        console.log(result);
    }
}

let list = new StackLinkedList();

list.push(10);
list.push(17);
list.push(20);
list.pop()
console.log(list.size); 
list.print();





