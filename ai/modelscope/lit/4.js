//生成随机时间
function generateRandomTime() {
    // 24小时之内的随机时间
    const date = new Date();
    date.setHours(Math.floor(Math.random() * 24));
    date.setMinutes(Math.floor(Math.random() * 60));
    date.setSeconds(Math.floor(Math.random() * 60));
    return date.toISOString();
}
console.log(generateRandomTime());