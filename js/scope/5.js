function foo(a) {
    b = a;
    console.log(a + b);
}
foo(2);
//ReferenceError: b is not defined
//RHS 查找 失败的时候，会爆出 ReferenceError 错误，报错