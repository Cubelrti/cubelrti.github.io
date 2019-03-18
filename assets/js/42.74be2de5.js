(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{169:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"v8-sorting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v8-sorting","aria-hidden":"true"}},[t._v("#")]),t._v(" V8 Sorting")]),t._v(" "),e("p",[t._v("References: https://v8.js.cn/blog/array-sort/")]),t._v(" "),e("p",[t._v("这篇文章聊了V8对于排序的解释。因为排序算法已经相对稳定，但是对于复杂对象的排序，尤其是JavaScript这种动态类型语言来说，内存的访问成为性能最大的瓶颈。")]),t._v(" "),e("p",[t._v("这是一种最简单的情况：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" array "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compare")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Arbitrary code goes here, e.g. `array.push(1);`.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A “typical” sort call.")]),t._v("\narray"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compare"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),e("p",[t._v("对于复杂的一些的情况：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\nconst array = [0, 1, 2];\nObject.defineProperty(array, '0', {\n  get() { console.log('get 0'); return 0; },\n  set(v) { console.log('set 0'); }\n});\nObject.defineProperty(array, '1', {\n  get() { console.log('get 1'); return 1; },\n  set(v) { console.log('set 1'); }\n});\narray.sort();\n\n")])])]),e("p",[t._v("可以看到，不同引擎的实现中，这种内存访问是随机的，且不是一致的。V8对于数组的排序，用了两次的预处理。首先，它会从原型链复制原有的对象：")]),t._v(" "),e("p",[t._v("然后，数组的“空洞”被检测出来并被清除：")]),t._v(" "),e("p",[t._v("后面就开始讨论一种被称为"),e("code",[t._v("Torque")]),t._v("的算法。这种算法用于实现排序功能：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Load<FastDoubleElements>(\n    context: Context, sortState: FixedArray, elements: HeapObject,\n    index: Smi): Object {\n  try {\n    const elems: FixedDoubleArray = UnsafeCast<FixedDoubleArray>(elements);\n    const value: float64 =\n        LoadDoubleWithHoleCheck(elems, index) otherwise Bailout;\n    return AllocateHeapNumberWithValue(value);\n  }\n  label Bailout {\n    // The pre-processing step removed all holes by compacting all elements\n    // at the start of the array. Finding a hole means the cmp function or\n    // ToString changes the array.\n    return Failure(sortState);\n  }\n}\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);