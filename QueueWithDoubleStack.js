//QueueWithDoubleStack
class QueueWithDoubleStack {
  constructor() {
    this.enqueueStorage = [];
    this.dequeueStorage = [];
  }

  enqueue(item) {
    this.enqueueStorage.push(item);
  }

  dequeue() {
    if(this.dequeueStorage.length) {
      return this.dequeueStorage.pop();
    }

    if(this.enqueueStorage.length) {
      while(this.enqueueStorage.length) {
        this.dequeueStorage.push(this.enqueueStorage.pop())
      }

      return this.dequeueStorage.pop();
    }

    console.warn('Attempting to dequeue from an empty queue');
    return undefined;
  }

  get size() {
    return this.enqueueStorage.length + this.dequeueStorage.length;
  }
}
