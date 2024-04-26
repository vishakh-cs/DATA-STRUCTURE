class Heap {
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

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapify();
    }

    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent <= element) {
        break;
      }

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  heapify() {
    let index = 0;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === index) {
        break;
      }

      const temp = this.heap[index];
      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = temp;

      index = smallest;
    }
  }
}

const minHeap = new Heap();
minHeap.insert(4);
minHeap.insert(2);
minHeap.insert(8);
minHeap.insert(1);

console.log(minHeap.extractMin());
console.log(minHeap.extractMin());
