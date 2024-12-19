# LocalStorage 本地存储

- 以上哪些属于html5的特性？
  - <!DOCTYPE html> 文档类型 html5
  - <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta data-n-head="ssr" name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover">
    - 移动时代早期，PC页面为主，缩放页面
    - 不是很好的体验，一般也不太用
    - 移动端为主，PC工作用
  - 表单placeholder required 等改善功能

- js性能
  - JS DOM编程是最耗费性能的一件事(查找和修改)
  - 不写DOM vue 
  - this.querySelector("")缩小了查找范围
    dom，还有任何父节点都可以 用querySelector
  - 性能优化是态度

- 代码风格
  - 事件的处理函数 函数名占位符
    代码的可读性，函数名可读，如果不这样，就要看代码了。
  - es6 对象字面量，key:value 同名，可以：+ 省略右边
  - 函数就应该专注一个功能，不过十行代码
    - 多拆分函数
    - 方便复用
    - 可读性更好
    - 代码行数太多 会像水里憋气一样，很难受

- html5 localStorage
  - 为了记住网页的一些状态，浏览器开辟了5MB左右的存储空间
  - localStorage setItem getItem   key value的存储
  - JSON.stringify() 存的必须是字符串  JSON.parse() 取出来的是对象  序列化和反序列化
  - 