function foo() {
    var a = 1;
    let b = 2;
    {
        let b = 3;
        var c = 4;
        let d = 5;
        console.log(a, b, c, d);// 1 3 4 5
    }//块级作用域执行完销毁
    console.log(a, b, c, d);// 1 2 4 引用错误
}
foo();