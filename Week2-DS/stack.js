// STACK

class Stack{
    constructor(){
        this.Stack =[]
    }
    
    push(item){
        this.Stack.push(item)
    }
    pop(){
        return this.Stack.pop()
    }
    isEmpty(){
        return this.Stack.length ==0;
    }
    size(){
        return this.Stack.length;
    }
    print() {
        let result = "";
        for (let i = 0; i < this.Stack.length; i++) {
            result += this.Stack[i] + "  ";
        }
        console.log(result);
    }
}

let list = new Stack()
list.push(10)
list.push(17)
list.pop()
console.log(list.size())
list.print();

