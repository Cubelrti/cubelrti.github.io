(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{200:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("原文：https://www.yuque.com/es2049/blog/al62bl#b2s1lc")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("说到面向对象设计，大部分人脑海中闪过的恐怕都是“23种设计模式”。设计模式代表的是业务场景中总结出的最佳实现方式，属于实践的范畴，在其之上是更为重要的“SOLID”五大原则：")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("SOLID 五大原则的出发点也是软件工程的终极目标：“高内聚、低耦合”。在后端开发中运用最多的是“依赖倒置原则”，与其相关的设计模式大约有5-6个。如下图所示：")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("上图也可以理解为从抽象概念到具体实践的逐步演进。")]),t._v(" "),a("p",[t._v("在前端技术框架中，运用最多的是“开放封闭原则”，我们先来看一下这条原则是怎么定义的：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),a("p",[t._v("上例中无论场景如何扩展，Area 函数都无需修改，每个 Shape 类通过继承接口和多态特性，各自实现面积计算。")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("接下来我们看一个“开闭原则”在前端框架中的应用： Ant Design 组件库中的 Form 表单组件。")]),t._v(" "),a("p",[t._v("和其它组件不同，Form 组件并没有具体的形态，它更像是一个容器，提供了接入的标准，并提供了校验、表单提交等功能。绘制表单中的一项如下所示：")]),t._v(" "),t._m(8),a("p",[t._v("Ant Design 组件库中已经提供个几乎所有的常见表单组件，如：Select 、Checkbox 、Radio 、Cascader 等，但在实际业务中，我们还是会需要设计业务相关的表单项，Form 表单通过统一组件接口的方式满足了这个技术需求，具体规约如下：")]),t._v(" "),a("p",[t._v("自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[a("a",{attrs:{href:"https://ant-design.gitee.io/components/form-cn/#components-form-demo-customized-form-controls",target:"_blank",rel:"noopener noreferrer"}},[t._v("具体例子"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这正是“开闭原则”的一个典型实践案例，即表单核心逻辑（校验、提交等）保持不变并封装在 Form 组件中，自定义表单项只需要满足上述三条规约，就能平滑接入到 Form 组件中，和 Ant Design 原生组件契合在一起。")]),t._v(" "),a("p",[t._v("Ant Design 中的 Form 组件通过这样一个简洁的设计，完美提供了表单类型页面的统一解决方案。")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("随着人工智能、区块链、AR、VR、新零售等业务场景的出现，产品界面交互正在变得越来越复杂，这就对现代的前端开发者提出了更高的要求。如何快速、正确、高效地开发出高复杂度页面是目前前端技术最需要解决的问题。")]),t._v(" "),a("p",[t._v("函数式编程（以下简称 FP ）凭借其高复用性、易测试性和与之带来的健壮性和简洁开始逐渐占据前端技术圈，我们发现越来越多的前端框架以 FP 为设计核心准则。")]),t._v(" "),a("p",[t._v("我们先简单介绍一下 FP，函数式编程的特征主要包括以下几个方面：")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("JS 语言中的函数不同于 Java ，C/C++ 等语言, 可以被当做参数和返回值进行传递，因此天生具备“一等公民”特性。“模块化、组合”、“引用透明”、“避免状态改变”、“避免共享状态”这四个特征都需要通过特定代码模式实现。先举两个小例子：")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),a("p",[t._v("第二段代码中使用的 js 数组方法 filter 和 slice，去掉了 for 循环，代码更简洁流畅。在写具体业务代码的时候，“模块化、组合”是 FP 最常用的技术，也是最重要的实现功能的手段。")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),a("p",[t._v("后一段代码中，使用了 reduce 函数代替了 for 循环，并将数值计算部分作为模块提取出来，当有新的计算类型时，只需要在 ops 对象中定义计算过程。这里就体现了 FP 中“模块化、组合”的特性。在 FP 风格下，我们习惯将复杂逻辑切割成一个个小模块，通过组合这些模块实现新的业务功能，当有新的需求到来时，我们尽可能地复用已有模块达到目标。FP 代码在复用性方面相比 OOD 有明显的优势。")]),t._v(" "),t._m(24),t._v(" "),a("p",[t._v("React 框架中，当用户操作 UI 或者 API 的返回带来了数据的改变，React 随即进行 virtual dom diff 计算得到 dom 的修改指令，对 dom 元素应用修改指令便得到最新的 html 界面，如下图所示：")]),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("不难发现，React 其实是应用数据对UI的一种映射，不同的数据会映射出不同样式的 UI 界面，我们可以得出如下的表达式：")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),a("p",[t._v("在 React 的体系下，任何组件都可由一个个更小的组件构成，每个组件都只关心自己的输入，他们不断地接受新的数据并输出对应的新的UI界面。React 框架中常用的“高阶组件”可以看作引用透明”函数的组合模式。")]),t._v(" "),a("p",[t._v("在具体业务中我们通常还需要权衡 React 组件的复用性和开发体验，如果组件被拆分的过于细，固然复用性会提升，但文件数量会增加，对应的文档和沟通成本也会增加，这也是 FP 在实践过程中经常遭人诟病的点，即复用性提升后带来的额外开发成本。")]),t._v(" "),t._m(28),t._v(" "),a("p",[t._v("消息机制是软件工程中一个普遍运用的工程思想。“设计模式”中的观察者模式、Windows 操作系统底层、Spring 框架中的 ApplicationListener 模块、Objective-C 语言中的函数调用、都是通过消息机制驱动的。")]),t._v(" "),a("p",[t._v("使用消息机制最大的好处在于可以做到业务模块间安全解耦，模块间通过发送消息的方式进行协作，我们先举一个后端开发中的例子，下图是一个简单的预定系统的建模图，并没有使用消息机制：")]),t._v(" "),t._m(29),t._v(" "),a("p",[t._v("在没有消息机制的情况下，用户模块需要知道订单模块的存在，并向起进行接口调用，同理订单模块需要向支付模块进行接口调用。这种设计下模块间是耦合的。")]),t._v(" "),a("p",[t._v("我们再来看一下使用消息机制的情况：")]),t._v(" "),t._m(30),t._v(" "),a("p",[t._v("上图中，无论是客户下订单、支付还是预定都是通过消息的方式传递的，每个模块都是向一个消息处理器起发消息，同时也监听消息处理器发送回来的消息。在这种模式下，模块完全不知道其它模块的存在，彻底做到了解耦。")]),t._v(" "),a("p",[t._v("在前端业务开发中，我们经常也会用到 EventEmitter 库来进行消息传递。比如页面上有两块区域，一块用 React 框架渲染，一块用 D3 渲染的，当两块区域需要数据同步时，就可以使用消息机制进行通讯，保证页面数据整体一致。")]),t._v(" "),t._m(31),t._v(" "),a("p",[t._v("使用消息机制的一个附属产物就是中间件，我们可以为消息定制各种中间件，在中间中完成一些通用逻辑，让业务代码更精炼。")]),t._v(" "),a("p",[t._v("说到前端框架中消息机制的运用，当然首推 Redux 框架，在 Redux 框架中，任何数据交互都需要先转化为一个 action，由 action 去触发 reducer 和相关的 middleware 处理 action，改变数据，最终同步到页面 UI 上，如下图所示：")]),t._v(" "),t._m(32),t._v(" "),a("p",[t._v("关于使用 Redux 的种种利弊，在各大社区中都有很深入的讨论，本文不再赘述。")]),t._v(" "),t._m(33),t._v(" "),a("p",[t._v("“开闭原则”、“函数式编程”、“消息机制”这个三个软件工程中重要的思想方法好比三套内功口诀，掌握了他们，才能更深刻地理解技术框架本身，发挥出技术框架的最大威力。")]),t._v(" "),a("p",[t._v("写到这里突然又想起《天龙八部》中一段：")]),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("一套平平无奇的“太祖长拳”在乔峰手中尽能有如此气象！")]),t._v(" "),a("p",[t._v("多少年以后，每当人们聊起金庸，聊起那个武侠世界，想必都会津津有味地回味、谈论起聚贤庄中这石破天惊的一拳。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"front-end-design-patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#front-end-design-patterns","aria-hidden":"true"}},[this._v("#")]),this._v(" Front-End Design Patterns")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"开闭原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开闭原则","aria-hidden":"true"}},[this._v("#")]),this._v(" 开闭原则")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("Single Responsibility Principle 单一责任原则")])]),t._v(" "),a("li",[a("p",[t._v("The Open Closed Principle 开放封闭原则")])]),t._v(" "),a("li",[a("p",[t._v("The Liskov Substitution Principle\t里氏替换原则")])]),t._v(" "),a("li",[a("p",[t._v("The Dependency Inversion Principle\t依赖倒置原则")])]),t._v(" "),a("li",[a("p",[t._v("The Interface Segregation Principle\t接口分离原则")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1rnGWt8LoK1RjSZFuXXXn0XXa-692-311.png",alt:"image | left"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("A software artifact should be open for extension but closed for modification.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("翻译过来就是："),s("strong",[this._v("软件系统应当对扩展开放，对修改封闭（感觉像没说）。这里举一个简单的例子来说明开闭原则")]),this._v("，先帮助大家理解概念：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-c# extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("\npublic abstract class Shape\n\n{\n\n public abstract double Area(); \n\n}\n\n\n\npublic class Rectangle: Shape\n\n{\n\n public double Width { get; set;}\n\n public double Height { get; set;}\n\n public override double Area()\n\n {\n\n   return Width*Height'\n\n }\n\n}\n\n\n\npublic class Circle: Shape\n\n{\n\n public double Radius { get; set}\n\n public override double Area()\n\n {\n\n  return Radius*Radius*PI;\n\n }\n\n}\n\n\n\npublic double Area(Shape [] shapes)\n\n{\n\n doubel area = 0;\n\n foreach (var shape in shapes)\n\n {\n\n  area += shape.Area();\n\n }\n\n return area;\n\n}\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("总结一下开闭原则就是："),s("strong",[this._v("软件系统的核心逻辑都不应该轻易改变，否则会破坏系统的稳定性和增加测试成本。我们应当建立合适的抽象并统一接口，当业务需要扩展时，我们可以通过增加实体类来完成。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FormItem"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFieldDecorator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n     rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please input your username!'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Input prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Icon type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),t._v(" style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rgba(0,0,0,.25)'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  placeholder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Username"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("FormItem"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ol",[s("li",[this._v("提供受控属性 value 或其它与 valuePropName 的值同名的属性。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ol",{attrs:{start:"2"}},[s("li",[this._v("提供 onChange 事件或 trigger 的值同名的事件。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("ol",{attrs:{start:"3"}},[s("li",[this._v("不能是函数式组件。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"函数式编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数式编程","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数式编程")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("函数为“一等公民”")])]),t._v(" "),a("li",[a("p",[t._v("模块化、组合")])]),t._v(" "),a("li",[a("p",[t._v("引用透明")])]),t._v(" "),a("li",[a("p",[t._v("避免状态改变")])]),t._v(" "),a("li",[a("p",[t._v("避免共享状态")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"找出字符串中率先出现的四个非数字字符？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找出字符串中率先出现的四个非数字字符？","aria-hidden":"true"}},[this._v("#")]),this._v(" 找出字符串中率先出现的四个非数字字符？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"非-fp-风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非-fp-风格","aria-hidden":"true"}},[this._v("#")]),this._v(" 非 FP 风格")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" words "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" couont "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[0-9]/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    words "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" words"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"fp-风格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fp-风格","aria-hidden":"true"}},[this._v("#")]),this._v(" FP 风格")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" words "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[1-9]+/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"分别实现数组所有元素相加、相乘、相与？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分别实现数组所有元素相加、相乘、相与？","aria-hidden":"true"}},[this._v("#")]),this._v(" 分别实现数组所有元素相加、相乘、相与？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"非-fp-风格-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非-fp-风格-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 非 FP 风格")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("and")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h5",{attrs:{id:"fp-风格-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fp-风格-2","aria-hidden":"true"}},[this._v("#")]),this._v(" FP 风格")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ops "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mul"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"and"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("y\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ops"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("op"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plus"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mul"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"and"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"react-中的-fp-思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-中的-fp-思想","aria-hidden":"true"}},[this._v("#")]),this._v(" React 中的 FP 思想")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1zEuZt4TpK1RjSZFGXXcHqFXa-1120-530.png",alt:"image | left"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("$UI = React(data)$")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("没错，"),s("strong",[this._v("React 的本质其实是一种函数")]),this._v("，并且还是符合 FP 要求的“引用透明”函数。所谓“引用透明”就是指函数的输出仅依赖函数参数，不受任何外部环境影响。这样的函数可测试性强，也非常容易进行组合。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"消息机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息机制","aria-hidden":"true"}},[this._v("#")]),this._v(" 消息机制")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1Uvrot4naK1RjSZFtXXbC2VXa-692-413.png",alt:"image | left"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1Ose4t3HqK1RjSZJnXXbNLpXa-692-483.png",alt:"image | left"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果你的业务中有不同生命周期的组件，建议采用消息机制进行管理，"),s("strong",[this._v("不仅消除了耦合，逻辑关系部分的代码也集中到了一个文件中，内聚性得到了提升")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1zeyZtYPpK1RjSZFFXXa5PpXa-692-439.png",alt:"image | left"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("乔峰眼见旁人退开，蓦地心念一动，呼的一拳打出，一招“冲阵斩将”，也正是“太祖长拳”中的招数。这一招姿式既潇洒大方已极，劲力更是刚中有柔，柔中有刚，武林高手毕生所盼望达到的拳术完美之境，竟在这一招中表露无遗。")])])}],!1,null,null,null);s.default=e.exports}}]);