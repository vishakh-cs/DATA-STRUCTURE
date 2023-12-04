// stack 

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
    isEmpty(){
        return this.size==0;
    }
    
    push(data){
        let newNode = new Node(data)
            newNode.next = this.top;
            this.top = newNode;
            this.size++;
        
    }
    pop(){
        if(this.isEmpty()){
            return "stack underFlow"
        }
        this.top=this.top.next 
        this.size--;
    }
    peek(){
        return this.top.data
    }
   stackSize(){
        return this.size;
    }
    
    print(){
    let result = ""
    let temp = this.top;
    while(temp){
        result += `${temp.data}`
        if(temp.next){
            result += " , "
        }
      temp=temp.next;
    }
    return result;
    
    }
}


let list = new StackLinkedList()


list.push(36)
list.push(18)
list.push(4)
list.push(30)
list.push(19)
list.push(7)
list.push(27)


list.pop()
console.log("peek",list.peek())
console.log("size of the stack",list.stackSize())
console.log(list.print())


