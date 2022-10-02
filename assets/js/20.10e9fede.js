(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{300:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、小程序与-npm-构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、小程序与-npm-构建"}},[s._v("#")]),s._v(" 一、小程序与 npm 构建")]),s._v(" "),a("p",[s._v("  小程序目前是支持 npm 包下载的，但也有一些局限性。")]),s._v(" "),a("h3",{attrs:{id:"_1、npm-选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、npm-选择"}},[s._v("#")]),s._v(" 1、npm 选择")]),s._v(" "),a("p",[s._v("  通过学习小程序的通信模型后，可以知道小程序中使用 npm 包有如下 3 个限制：")]),s._v(" "),a("ul",[a("li",[s._v("不支持依赖于 Node.js 内置库的包")]),s._v(" "),a("li",[s._v("不支持依赖于浏览器内置对象的包")]),s._v(" "),a("li",[s._v("不支持依赖于 C++插件的包")])]),s._v(" "),a("p",[s._v("初始化")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2、npm-构建-🚩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、npm-构建-🚩"}},[s._v("#")]),s._v(" 2、npm 构建 🚩")]),s._v(" "),a("p",[s._v(" 参与构建 npm 的 package.json 需要在 project.config.json 定义的 miniprogramRoot 之内。")]),s._v(" "),a("blockquote",[a("p",[s._v("miniprogramRoot 字段不存在时，miniprogramRoot 就是 project.config.js 所在的目录")])]),s._v(" "),a("p",[s._v("① 变化：")]),s._v(" "),a("p",[s._v("  开发者工具 v1.02.1811150 版本开始，调整为根据 package.json 的 dependencies 字段构建")]),s._v(" "),a("p",[s._v("  所以，声明在 devDependencies 里的包也可以在开发过程中被安装使用而不会参与到构建中。")]),s._v(" "),a("blockquote",[a("p",[s._v("这之前的版本，还是建议使用--production 选项")])]),s._v(" "),a("p",[s._v("② 构建：")]),s._v(" "),a("p",[s._v("  现在的微信开发者工具只需要在菜单栏：工具 --\x3e 构建 npm 即可完成构建")]),s._v(" "),a("h3",{attrs:{id:"_3、vant-weapp-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、vant-weapp-示例"}},[s._v("#")]),s._v(" 3、Vant Weapp 示例")]),s._v(" "),a("p",[s._v("  Vant Weapp 是有赞前端团队开源的一套小程序 UI 组件库，开源快速搭建小程序应用。")]),s._v(" "),a("p",[s._v("官方文档：")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://vant-contrib.gitee.io/vant-weapp/#/home",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vant Weapp"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("① 安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i @vant/weapp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-S")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--production")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("② 配置")]),s._v(" "),a("ul",[a("li",[s._v("app.js")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 移除默认组件样式")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "style": "v2"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("project.config.json")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"setting"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packNpmManually"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packNpmRelationList"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"packageJsonPath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./package.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"miniprogramNpmDistDir"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("blockquote",[a("p",[s._v("目前新版开发者工具创建的小程序目录文件结构问题，npm 构建的文件目录为 "),a("code",[s._v("miniprogram_npm")]),s._v("，并且开发工具会默认在当前目录下创建 miniprogram_npm 的文件名")])]),s._v(" "),a("p",[s._v("③ 构建 npm 包")]),s._v(" "),a("p",[s._v("略")]),s._v(" "),a("h2",{attrs:{id:"二、小程序分包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、小程序分包"}},[s._v("#")]),s._v(" 二、小程序分包")])])}),[],!1,null,null,null);a.default=e.exports}}]);