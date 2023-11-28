// queue

class Queue{
    constructor(){
        this.Queue = []
    }

    isEmpty(){
        return this.Queue.length ==0;
    }

    enQueue(data){
        this.Queue.push(data);

    }
    deQueue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        this.Queue.shift()
    }
    size(){
        return this.Queue.length;
    }

    printQueue(){
        let result = "";
        for(let i =0;i<this.Queue.length;i++){
            result +=this.Queue[i]+ " "
        }
        console.log("Printing the elements of the queue: "+result)
    }
}

let list = new Queue()
list.enQueue(10)
list.enQueue(17)
list.enQueue(3)
list.enQueue(34)
list.deQueue()

console.log(list.size())
list.printQueue();