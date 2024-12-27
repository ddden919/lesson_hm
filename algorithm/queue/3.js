// 类的正常运行
class AutoExpandArrayQueue {
    #nums; // 数组 私有 es6
    #front = 0; // 队头 内存优化
    #queSize = 0; // 队列长度


    constructor(capacity) {
        // 分配了capacity单位的连续的内存空间
        // 这段内存就在缓存中
        this.#nums = new Array(capacity);
    }
    // 优化类的可读性
    get capacity() {
        return this.#nums.length;
    }
    get size() {
        return this.#queSize;
    }
    isEmpty() {
        return this.#queSize === 0;
    }
    push(num) {
        if (this.size === this.capacity) {
            this.#expandCapacity();
        }

    } #expandCapacity() {
        // 不能干掉别人的
        // 重新分配
        // 搬运工作
        // 扩容的push的时间复杂度是O(n)
        const newCapacity = this.capacity * 2;
        const newArr = new Array(newCapacity);
        for (let i = 0; this.size; i++) {
            newArr[i] = this.#nums[(this.#front + i) % this.capacity];
        }
        this.#nums = newArr; // 原来内存地址被释放
    }

}