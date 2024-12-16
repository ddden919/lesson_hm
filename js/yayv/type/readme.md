# js 类型转换
- es6 之前，js有多少类型？6种
  
  - 简单数据类型(Primitive基本类型)：拷贝式赋值
  number、string、boolean、undefined、null
  - 复杂数据类型(引用类型)：引用式赋值
  object

- 为何JS 类型会改变？
  Number("1")

- JS 是弱类型语言
  - 变量的类型是可以改变的
  - 搞清楚变量的确切类型
  - 变量的类型是由值决定的
    - Primitive 类型 -> 其他类型的转换
      -Boolean 类型
    - Object 类型 -> 其他类型的转换


- Boolean 显式类型转换(构造函数)规则
  - 为false 的情况 
    - 为空
    - 为0
    - +0
    - -0
    - NaN
    - null
    - undefined
    - false
  - true


- +0 -0
  Object.is(+0, -0) // false
  1 / +0 // Infinity
  1 / -0 // -Infinity
- NaN
  类型仍然是Number，表示一个特殊的数值
  NaN === NaN // false
  Object.is(NaN, NaN) // true
  isNaN(NaN) // true
  isNaN(undefined) // true
  isNaN({}) // true
  isNaN("") // false
  isNaN(" ") // false
  isNaN("123") // false
  isNaN("123abc") // true

- Number()
  0 1 NaN

- String()
  