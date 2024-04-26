// heap 

class MaxHeap{
    constructor(){
        this.heap =[];
    }
    
    insert(data){
        this.heap.push(data)
        this.bubbleUp()
        
    }
    
    extractMax(){
        if(this.heap.length===0){
            return null;
        }
        let min =this.heap[0];
        let last = this.heap.pop()
        
        if(this.heap.length>0){
            this.heap[0]=last;
            this.heapify(0)
        }
        return min;
    }
    bubbleUp(){
        let index = this.heap.length-1;
        
        while(index>0){
            let parentIndex = Math.floor((index-1)/2)
            if(this.heap[index]>this.heap[parentIndex]){
                
                 // Swap the current element with its parent
                 
                [this.heap[index],this.heap[parentIndex]] = [this.heap[parentIndex],this.heap[index]];
                index = parentIndex;
            }else{
                break;
            }
        }
    }
    
 
  heapify(index) {
      let leftChildIndex = (2*index)+1;
      let rightChildIndex =(2*index)+2;
      
      let largestIndex = index;
      
     if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
            largestIndex = leftChildIndex;
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
            largestIndex = rightChildIndex;
        }

      if(largestIndex !=index){
         [this.heap[index],this.heap[largestIndex]] =[this.heap[largestIndex],this.heap[index]];
         this.heapify(largestIndex)
      }
  }
}

let Maxheap = new MaxHeap()

Maxheap.insert(4);
Maxheap.insert(2);
Maxheap.insert(8);
Maxheap.insert(5);
Maxheap.insert(1);

console.log(Maxheap.heap);
console.log(Maxheap.extractMax());
console.log(Maxheap.heap);
