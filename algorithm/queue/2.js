// es6 + 数组
class ArrayQueue {
    #nums; // 数组 私有 es6
    #front = 0; // 队头 内存优化
    #queSize = 0; // 队列长度
    constructor(capacity) {
        // 分配了capacity单位的连续的内存空间
        // 这段内存就在缓存中
        this.#nums = new Array(capacity);
    }
    // 计算属性 ADT
    get size() {
        return this.#queSize;
    }
    push(num) {
        if (this.size === this.capacity) {
            console.log("队列已满")
            return;
        }
        // 求余操作 防止越界 
        const rear = (this.#front + this.size) % this.capacity; //拿到队尾指针
        this.#nums[rear] = num;
        this.#queSize++;
    }
    pop() {
        const num = this.peek();
        this.#front = (this.#front + 1) % this.capacity;
        this.#queSize--;
        return num;
    }
    peek() {
        if (this.isEmpty()) throw new Error("队列为空");
        return this.#nums[this.#front];
    }
    isEmpty() {
        return this.#queSize === 0;
    }
    toArray() {
        const arr = new Array(this.size); //
        for (let i = 0, j = this.#front; i < this.size; i++, j++) {
            arr[i] = this.#nums[j % this.capacity];
        }
        return arr;
    }
}

const queue = new ArrayQueue()
console.log(queue)