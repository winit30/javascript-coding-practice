
//Queue with single Stack
class QueueWithSingleStack {
  constructor() {
    this._storage = []
  }

  enqueue(item) {
    this._storage.push(item)
  }

  dequeue() {
    if (this.size === 0) {
      return undefined;
    } else if (this.size === 1) {
      return this._storage.pop();
    }

    const lastItem = this._storage.pop();
    const firstItem = this.dequeue();
    this._storage.push(lastItem);
    return firstItem;
  }

  get size() {
    return this._storage.length;
  }
}

const newQueueStack = new QueueWithSingleStack();

newQueueStack.enqueue("Vineet");
newQueueStack.enqueue("Kirti");
newQueueStack.enqueue("Juhi");
newQueueStack.enqueue("Lucky");
