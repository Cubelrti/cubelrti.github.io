(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{178:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"python-asyncio"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python-asyncio","aria-hidden":"true"}},[t._v("#")]),t._v(" Python asyncio")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# WS server that sends messages at random intervals")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" asyncio\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" websockets\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("websocket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        now "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcnow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isoformat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Z'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" websocket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" asyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nstart_server "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" websockets"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nasyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_until_complete"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start_server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nasyncio"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_event_loop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("run_forever"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('\n#!/usr/bin/env python\n# WSS (WS over TLS) client example, with a self-signed certificate\nimport asyncio\nimport pathlib\nimport ssl\nimport websockets\nssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)\nssl_context.load_verify_locations(\n    pathlib.Path(__file__).with_name(\'localhost.pem\'))\nasync def hello():\n    async with websockets.connect(\n            \'wss://localhost:8765\', ssl=ssl_context) as websocket:\n        name = input("What\'s your name? ")\n        await websocket.send(name)\n        print(f"> {name}")\n        greeting = await websocket.recv()\n        print(f"< {greeting}")\nasyncio.get_event_loop().run_until_complete(hello())\n\n')])])]),n("p",[t._v("这两段python使用了asyncio事件循环，本质上是一个event-loop的实现，安排任务，等待Future从而做到在单线程中的async/await语法。")]),t._v(" "),n("p",[t._v("这里的Future相当于js中的promise，也就是将来返回的值。")]),t._v(" "),n("p",[t._v("这里的run_until_complete需要一个Future对象，它会把这个参数丢进去运行。")]),t._v(" "),n("p",[t._v("如果是希望non-blocking，可以改用ensure_future来执行。run_until_complete会阻塞原有的线程。")])])}],!1,null,null,null);s.default=e.exports}}]);