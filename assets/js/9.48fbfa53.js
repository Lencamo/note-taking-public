(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{289:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"开发文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发文档"}},[s._v("#")]),s._v(" 开发文档：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://developers.weixin.qq.com/doc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("微信官方开发文档"),t("OutboundLink")],1)])]),s._v(" "),t("h3",{attrs:{id:"前期准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前期准备"}},[s._v("#")]),s._v(" 前期准备：")]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("注册并获取小程序 AppID"),t("OutboundLink")],1)])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载并配置微信开发者工具"),t("OutboundLink")],1)])])]),s._v(" "),t("blockquote",[t("p",[s._v("具体操作自己解决 😁")])]),s._v(" "),t("h2",{attrs:{id:"一、小程序简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、小程序简介"}},[s._v("#")]),s._v(" 一、小程序简介")]),s._v(" "),t("h3",{attrs:{id:"_1、项目结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、项目结构"}},[s._v("#")]),s._v(" 1、项目结构")]),s._v(" "),t("p",[s._v("  新建微信小程序项目时，默认生成的项目结构为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("applets_project\n├─ pages\n│  └─ index（page文件夹）\n│     ├─ index.js 👀（页面入口文件）\n│     ├─ index.json（对应app.json中的🤔window配置项）\n│     ├─ index.wxml\n│     └─ index.wxss\n├─ .eslintrc.js *\n├─ app.js 🚩（项目入口文件）\n├─ app.json（🍗page路径、window配置、组件样式）\n├─ app.wxss\n├─ project.config.json\n├─ project.private.config.json\n└─ sitemap.json *\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"_2、配置文件-🌟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置文件-🌟"}},[s._v("#")]),s._v(" 2、配置文件 🌟")]),s._v(" "),t("p",[s._v("① app.json")]),s._v(" "),t("p",[s._v("全局配置：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 页面路径")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pages"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pages/index/index"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 顶部窗口、👏底部tab外观")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"window"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 组件样式版本")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"style"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// sitemap.json位置")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"sitemapLocation"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sitemap.json"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("重点：")]),s._v(" "),t("p",[s._v("  在上面的"),t("code",[s._v('"pages"')]),s._v("配置项中编写页面路由时，会自动生成对应的的 page 文件。（注意：去除 page 页面路由时不会自动删除 page 页面）")]),s._v(" "),t("p",[s._v("  pages 的各个 page 的.json 文件内容与上面的"),t("code",[s._v('"window"')]),s._v("配置项内容相对应")]),s._v(" "),t("p",[s._v("② project.config.json")]),s._v(" "),t("p",[s._v("项目个性化配置：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"appid"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wx295f4fc0640ec75a"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"projecname"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"applets_project"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译相关配置")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"setting"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"checkSiteMap"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭索引提示")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"urlCheck"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭合法域名校验")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packNpmManually"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// npm 包构建")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packNpmRelationList"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packageJsonPath"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./package.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"miniprogramNpmDistDir"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("重点：")]),s._v(" "),t("p",[s._v("  在微信开发者功能的 "),t("span",{staticStyle:{"background-color":"yellow",color:"black"}},[s._v("详情按钮")]),s._v(" 进行的个性配置会优先在"),t("code",[s._v("project.private.config.json")]),s._v("中同步显示。")]),s._v(" "),t("p",[s._v("  项目名称可以在 project.config.json 中配置，小程序名称需要在管理后台配置")]),s._v(" "),t("p",[s._v("③ 其他")]),s._v(" "),t("p",[s._v("ⅰ. sitemap.json：")]),s._v(" "),t("p",[s._v("  配置小程序页面是否允许微信索引")]),s._v(" "),t("p",[s._v("ⅱ. project.private.config.json：")]),s._v(" "),t("p",[s._v("  开发阶段相关的设置修改优先同步到其中，并且相同设置优先级高于 project.config.json 文件")]),s._v(" "),t("h3",{attrs:{id:"_3、js-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、js-文件"}},[s._v("#")]),s._v(" 3、js 文件")]),s._v(" "),t("p",[s._v("① app.js")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("② pages 文件夹中的 js 文件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Page")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("手动输入时，会自动生成响应的内容结构 😘。")])]),s._v(" "),t("h2",{attrs:{id:"二、开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、开发环境"}},[s._v("#")]),s._v(" 二、开发环境")]),s._v(" "),t("p",[t("span",{staticStyle:{color:"red"}},[s._v("手机微信")]),s._v("是小程序的宿主环境，它为小程序提供了"),t("span",{staticStyle:{color:"green"}},[s._v("组件")]),s._v("、"),t("span",{staticStyle:{color:"green"}},[s._v("API")]),s._v("、"),t("span",{staticStyle:{color:"green"}},[s._v("通信模型")]),s._v("、"),t("span",{staticStyle:{color:"green"}},[s._v("运行机制")]),s._v(" 等等。")]),s._v(" "),t("img",{attrs:{src:"https://deer-sir.oss-cn-chengdu.aliyuncs.com/note-taking/20220920190859.png",width:"536.5px"}}),s._v(" "),t("p",[s._v("  正因为其宿主环境是手机微信，小程序可以完成普通网页无法完成的功能，如：微信扫码、微信支付、微信登录、地理定位……")]),s._v(" "),t("h3",{attrs:{id:"_1、渲染层和逻辑层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、渲染层和逻辑层"}},[s._v("#")]),s._v(" 1、渲染层和逻辑层")]),s._v(" "),t("img",{attrs:{src:"https://deer-sir.oss-cn-chengdu.aliyuncs.com/note-taking/20220920192032.png",width:"419px"}}),s._v(" "),t("p",[s._v("  渲染层的界面使用了 "),t("span",{staticStyle:{color:"red"}},[s._v("WebView")]),s._v(" 进行渲染；逻辑层采用 "),t("span",{staticStyle:{color:"red"}},[s._v("JsCore")]),s._v(" 线程运行 JS 脚本。两个线程的通信会经由微信客户端做中转。")]),s._v(" "),t("h3",{attrs:{id:"_2、优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、优缺点"}},[s._v("#")]),s._v(" 2、优缺点")]),s._v(" "),t("p",[s._v("① 缺点")]),s._v(" "),t("p",[s._v("  小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而"),t("span",{staticStyle:{color:"green"}},[s._v("缺少相关的 DOM API 和 BOM API")]),s._v("。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("导致了前端开发非常熟悉的一些库，例如 jQuery、 Zepto 等，在小程序中是无法运行的")])]),s._v(" "),t("li",[t("p",[s._v("JSCore 的环境同 NodeJS 环境也是不尽相同，所以一些 NPM 的包在小程序中也是无法运行的")])])]),s._v(" "),t("p",[s._v("② 优点")]),s._v(" "),t("p",[s._v("  网页开发者需要面对的环境是各式各样的浏览器，而小程序仅仅面对的是两大操作系统 iOS 和 Android 的微信客户端。")])])}),[],!1,null,null,null);t.default=e.exports}}]);