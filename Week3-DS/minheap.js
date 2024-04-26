class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(data) {
        this.heap.push(data);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        let min = this.heap[0];
        let last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.heapify(0);
        }

        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] < this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapify(index) {
        let leftChildIndex = 2 * index + 1;
        let rightChildIndex = 2 * index + 2;
        let smallest = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
            smallest = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
            smallest = rightChildIndex;
        }

        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            this.heapify(smallest);
        }
    }
}


let minHeap = new MinHeap();

minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(5);
minHeap.insert(1);

console.log(minHeap.heap);
console.log(minHeap.extractMin());
console.log(minHeap.heap);
