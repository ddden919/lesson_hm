# Symbol

- 唯一值
  - 用Symbol 函数来声明
  - 给一个label可选
  - 返回值唯一值
  - 常用于对象字面量 不会，不需要担心会被覆盖
    key 的用法 这也是Symbol 需要的原因，大厂大型项目，对象复杂，难维护，多人协作
  - Object.keys() 对象的键名数组 不能拿到Symbol 类型的key
  - Object.values() 对象的键值数组 不能拿到Symbol 类型的value
  - Object.entries() 对象的键值对数组 不能拿到Symbol 类型的key 和 value


- 可迭代对象
  Object.getOwnPropertyDescriptors(classMates)对象上的属性描述符
  - 虽然 symboles emumberable 属性为true 但仍不可枚举
    因为Symbol 独特设计，就是提供唯一值的，只能通过
    getOwnPropertySymbols 来获取

- ownProperty？own是自己的不是原型链上的

    