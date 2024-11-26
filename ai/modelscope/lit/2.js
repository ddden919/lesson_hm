var random_sex = function () {
    const genders = ['男', '女'];
    return genders[Math.floor(Math.random() * genders.length)];// Math.floor() 方法可对一个数向下取整
}
random_sex();