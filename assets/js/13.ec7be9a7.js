(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{198:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),n("p",[t._v("也许你会问，那ios7以下和其他android机下怎么搞？我的建议是：还是维持老样，不去处理，随着时间的推移，我相信最终都会支持0.5 和 0.3 px边框的。\n如果硬要兼容，怎么整？方案也有很多，稍微介绍下：\n1、通过viewport + REM的方式来兼容。目前这种兼容方案相对比较完美，适合新项目（老项目改用REM单位成本会比较高）。 淘宝M首页 就是这种方案。\n在devicePixelRatio = 2 时，输出viewport\n在devicePixelRatio = 3 时，输出viewport\n同时通过设置对应viewport的rem基准值，这种方式就可以像以前一样轻松愉快的写1px了。\n作者：Leslie_2386\n链接：https://www.jianshu.com/p/f81112a2ec77\n來源：简书\n简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。")]),t._v(" "),n("p",[t._v("FYI: "),n("a",{attrs:{href:"https://juejin.im/entry/584e427361ff4b006cd22c7c",target:"_blank",rel:"noopener noreferrer"}},[t._v("7 种方法解决移动端 Retina 屏幕 1px 边框问题"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.jianshu.com/p/f81112a2ec77",target:"_blank",rel:"noopener noreferrer"}},[t._v("1像素边框，真的是1像素吗？"),n("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"hairline-css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hairline-css","aria-hidden":"true"}},[this._v("#")]),this._v(" Hairline CSS")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hairline-border")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 0 1px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-resolution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2dppx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hairline-border")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 0 0.5px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-resolution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3dppx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hairline-border")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 0 0.33333333px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-resolution")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4dppx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hairline-border")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 0 0.25px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])}],!1,null,null,null);s.default=e.exports}}]);