# 作用域


- 通过一句 var a = 1;了解JS的执行机制
  - 声明 + 赋值语句
  - a 变量存在哪里？
  - 编译 var 变量声明的关键字
  - a 变量的标识符


- var a; //发生在编译阶段
  a = 1; //发生在执行阶段


## 变量
  - 作用域
    变量不会单独存在,属于一个作用域（编译阶段）
    作用域是变量的查找规则,在当前作用域查找,找不到去父级作用域查找,一直冒泡直到全局作用域,找不到则未定义（执行阶段）

## var a = 1;  哪些东西为他工作
  - JS 引擎 chrome v8 引擎  他是CEO
    负责整体工作 
  - 编译器  他是CTO
    var  a  =  1 分词
  - 作用域  他是COO  运营经理
    变量属于作用域
    作用域链


- var a = 1;
  按编译和执行分为 var a;  变量属于作用域 词法作用域
  a = 1;  查找a的过程 遵守作用域的规则 当前作用域->外层...->全局->没找到（停下来） 找到了,立马停下来


- undefined 
  未定义 js 数据类型之一  类型未定义
  js 弱类型语言,类型由值决定

- var a = 1;
  引擎是如何领导编译器和作用域查找变量A的 
  a = 1;  赋值操作 a 在等号的左边 LHS
  查找 分成 LHS + RHS 左 右
  a = b + 1 RHS
  a = 1 LHS
- LHS 找到容器本身 赋值
- RHS retrive his source value 找到容器的内容 取值
  console.log(a) RHS


- 作用域嵌套
  作用域链
    当前作用域 -> 查找到全局的过程就是作用域链
    查找路径就是作用域链