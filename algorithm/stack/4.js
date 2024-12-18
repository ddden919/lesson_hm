const MinStack = function () {
    this.stack = []; // 原栈
    this.min_stack = [Infinity]; // 辅助栈
};

MinStack.prototype.push = function (num) {
    this.stack.push(num);
    // 为什么要取大于等于？因为出栈的时候，值相同，两个栈都要出栈
   if(this.min_stack.length == 0 || this.min_stack[this.min_stack.length - 1] >= num) {
        this.min_stack.push(num);
    }
};

MinStack.prototype.pop = function () {
    // 原栈出栈，辅助栈在必要的时候也出栈
    if(this.stack.pop() === this.min_stack[this.min_stack.length - 1]) {
        this.min_stack.pop();
    }
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
    return this.min_stack[this.min_stack.length - 1];
};