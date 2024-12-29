# 层叠上下文
  - 什么是层叠上下文？
    - 层叠上下文是HTML元素的三维概念，它决定了在一个HTML元素不能在二维平面上正确的显示时，它的显示顺序。

  - 盒子(本身)的大小
    box-sizing border + padding + content
    - 盒模型 
      - 标准盒模型 content-box wd content + padding + border
      - IE盒模型 border-box

## 页面渲染规则

  - 文档流
    body 开始从上到下，从左到右

  - 布局 Layout

- 默认标签，但也可转变 display
  - 块级元素 block
    - 独占一行
    - 宽度默认是父级的100% 为什么？
      - html 是第一个BFC 元素，body 参与html的BFC
        页面显示由html负责
        页面的布局 块级元素从上到下，行内元素从左到右
      - 因为块级元素独占一行，所以默认是父级的100%
    - 高度默认是内容的高度
    - 可以设置宽高
  - 行内元素 inline
    - 不会独占一行
    - 宽度默认是内容的宽度
    - 高度默认是内容的高度
    - 不能设置宽高

- BFC Block Formatting Context 块级格式化上下文
  - html 是根元素，也是最顶级的BFC
  - context 块级元素从上到下，行内元素从左到右

- 格式上下文？ Formatting Context
  - 是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何定位，以及和其他元素的关系和相互作用。
  - 当一个元素具有BFC特性时，它就是一个独立的容器，容器里面的子元素不会影响到外面的元素。反之亦然。
  - 为何弹性布局会脱离文档流？
    - 弹性布局的父级元素具有BFC特性，子元素脱离了文档流，不会影响到父级元素。
  - 为何弹性布局 打破了html BFC 的规则？
    - BFC 不是某个元素的特例，而是一个规则(行为)。弹性布局，创立了一个新的BFC。
    - BFC 不受外界影响，是一个全新的独立的渲染区域。
  - FFC Flex Formatting Context 弹性格式化上下文 flex-direction:row|column|row-reverse|column-reverse
  - GFC 网格格式化上下文 

### BFC
  - 独立渲染区域，不受外界影响
  - html 是最顶级的BFC
  - block level box 垂直方向，一个接一个的放置，且宽度100%
  - 盒子垂直方向的距离由margin决定，同一个BFC的相邻盒子的margin会发生重叠，大的说了算
  - 每个元素的margin左边，与包含块border左边相接触，即使存在浮动也是如此(浮动元素也是一个BFC)
  - BFC的区域不会与float box重叠
  - 独立渲染区域，不受外界影响
  - 计算BFC的高度时，浮动元素也参与计算

  - 触发新BFC
    - overflow:hidden|auto|...; 属性值不为visible
    - 
  