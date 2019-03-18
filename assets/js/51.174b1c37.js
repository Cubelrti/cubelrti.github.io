(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{212:function(e,r,a){"use strict";a.r(r);var t=a(0),s=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"webworker-caveats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webworker-caveats","aria-hidden":"true"}},[e._v("#")]),e._v(" WebWorker Caveats")]),e._v(" "),a("p",[e._v("Web worker是一项相当成熟的技术了，之前踩过的坑有这些：")]),e._v(" "),a("h2",{attrs:{id:"无法访问dom相关的api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无法访问dom相关的api","aria-hidden":"true"}},[e._v("#")]),e._v(" 无法访问DOM相关的API")]),e._v(" "),a("p",[e._v("这个限制非常影响WebWorker的实用性，对于很多人来说，如果可以在Worker里面有DOM（即使是虚拟DOM）,就可以把一些运算密集型的操作放在虚拟DOM中。然而，现在已知的解决方案中，并没有典型的用例。\n但是，Chrome 69+ 把一项叫做"),a("code",[e._v("OffscreenCanvas")]),e._v("的技术从flagged变成了shipped。这项技术可以让用户可以利用其它线程来访问"),a("code",[e._v("CanvasContext")]),e._v("，虽然以前似乎可以通过把一整个ctx传进去，但是估计什么操作都无法使用。这也解决了传统的"),a("code",[e._v("CreateElement")]),e._v("无法在Worker中调用的问题。目前来看caniuse 40%+ 指日可待，也可以准备一些polyfill。")]),e._v(" "),a("h2",{attrs:{id:"postmessage方式非常尴尬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postmessage方式非常尴尬","aria-hidden":"true"}},[e._v("#")]),e._v(" postMessage方式非常尴尬")]),e._v(" "),a("p",[e._v("Worker这种API估计是受到了Go Channel的影响，使用了消息机制避免各种锁，同步，异步的问题。这样的好处在于不需要对数据的唯一性进行保证，如果结合immutable的设计模式，还可以进一步提高可用性。然而不能共用资源也代表了不能使用一些很常用的锁机制，就是concurrent基本变成不可能。\n所以，针对这样的情况，建议是将运算复杂性的模块分割成Web Worker（真的做得到的其实不多），然后尽量保证各个模块之间没有太多的耦合度。")]),e._v(" "),a("h2",{attrs:{id:"必须分割成额外的js文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#必须分割成额外的js文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 必须分割成额外的JS文件")]),e._v(" "),a("p",[e._v("这个也是API设计的坑，它不可以像一些inline的方式（似乎可以，只是非常复杂）做直接的内联异步。这样进一步提高了开发的门槛。对于使用了Webpack的项目来说，可以使用worker-loader解决这种问题。如果以后可以做到直接匿名函数worker，估计实用性可以进一步提高。")]),e._v(" "),a("h2",{attrs:{id:"typescript中与dom的api完全不兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript中与dom的api完全不兼容","aria-hidden":"true"}},[e._v("#")]),e._v(" Typescript中与DOM的API完全不兼容")]),e._v(" "),a("p",[e._v("如果使用了Typescript，就一定要分割tsconfig.json，否则会在Typescript编译的时候，遇到postMessage函数签名不一致的问题。这个应该算是TS的锅，只能说有得必有失，现在的解决方案是使用Include引入另外的tsconfig.json，然后再子目录中编写worker。")])])}],!1,null,null,null);r.default=s.exports}}]);