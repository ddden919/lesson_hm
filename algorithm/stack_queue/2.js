function typeOf(obj) {
    // 除了null，其他的都可以直接用typeof判断
    // function也是object类型
    // let res = Object.prototype.toString.call(obj).split(' ')[1];
    // res = res.substring(0, res.length - 1).toLowerCase();
    // substring 左闭右开
    // return res;

    // slice 左闭右开
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

}
console.log(typeOf([]));