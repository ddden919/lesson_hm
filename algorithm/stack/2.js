// Stack 类
class ArrayStack {
    // 类的属性
    // public 公有 我们可以在类的外部、内部、子类中访问
    // private 私有 我们只能在类的内部访问
    // protected 受保护的 我们只能在类的内部、子类中访问 js中不支持
    // items;
    #stack; // 私有属性
    constructor() {
        this.#stack = [];
        // this.items = 1;
    }

    // 入栈
    push(num) {
        this.#stack.push(num);
    }

    // 出栈
    pop() {
        return this.#stack.pop();
    }

    // 查看栈顶元素
    peek() {
        if (this.is_Empty()) throw new Error('Stack is Empty');
        return this.#stack[this.#stack.length - 1];
    }

    // 查看栈是否为空
    is_Empty() {
        return this.#stack.length === 0;
    }
    // 查看栈的大小 get 变成属性
    get size() {
        return this.#stack.length;
    }

    // 查看栈的元素
    toArray() {
        return this.#stack;
    }
    // 清空栈
    clear() {
        this.#stack = [];
    }
    getMin() {
        let min = this.#stack[0];
        for (let i = 0; i < this.#stack.length; i++) {
            if (this.#stack[i] < min) {
                min = this.#stack[i];
            }
        }
        return min;
    }
}

const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size);