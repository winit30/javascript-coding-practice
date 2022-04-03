// Normal Queue
class Queue {
  constructor() {
    this._storage = {};
    this._firstIndex = 0;
    this.lastIndex = 0;
  }

  enqueue(item) {
    this._storage[this.lastIndex] = item;
    this.lastIndex++;
  }

  dequeue() {
    if(this.size === 0) {
      return undefined;
    }
    const firstItemToReturn = this._storage(this._firstIndex);
    delete this._storage(this._firstIndex);
    this._firstIndex++;
    return firstItemToReturn;
  }

  get size() {
    return this.lastIndex - this._firstIndex;
  }
}
