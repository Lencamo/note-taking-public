(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{324:function(_,t,v){"use strict";v.r(t);var e=v(9),d=Object(e.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("  说明一下，本文的内容大部分来源于："),t("a",{attrs:{href:"https://r2coding.com/#/README?id=%e6%ad%a3%e5%88%99%e8%a1%a8%e8%be%be%e5%bc%8f",target:"_blank",rel:"noopener noreferrer"}},[_._v("codesheep"),t("OutboundLink")],1)]),_._v(" "),t("h2",{attrs:{id:"一、正则基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、正则基础"}},[_._v("#")]),_._v(" 一、正则基础")]),_._v(" "),t("h3",{attrs:{id:"_1、字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、字符"}},[_._v("#")]),_._v(" 1、字符")]),_._v(" "),t("p",[_._v("① 单个字符")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("表达式")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("[abc]")])]),_._v(" "),t("td",[_._v("字符集。匹配集合中所含的任一字符。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("[^abc]")])]),_._v(" "),t("td",[_._v("否定字符集。匹配任何不在集合中的字符。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("[a-z]")])]),_._v(" "),t("td",[_._v("字符范围。匹配指定范围内的任意字符。")])])])]),_._v(" "),t("p",[_._v("② 多个字符")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("表达式")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("\\w")])]),_._v(" "),t("td",[_._v("匹配任何字母数字，包括下划线（等价于"),t("code",[_._v("[A-Za-z0-9_]")]),_._v("）。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\W")])]),_._v(" "),t("td",[_._v("匹配任何非字母数字（等价于"),t("code",[_._v("[^a-za-z0-9_]")]),_._v("）。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\d")])]),_._v(" "),t("td",[_._v("数字。匹配任何数字。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\D")])]),_._v(" "),t("td",[_._v("非数字。匹配任何非数字字符。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\s")])]),_._v(" "),t("td",[_._v("空白。匹配任何空白字符，包括空格、制表符等。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\S")])]),_._v(" "),t("td",[_._v("非空白。匹配任何非空白字符。")])])])]),_._v(" "),t("p",[_._v("③ 其他")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("表达式")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v(".")])]),_._v(" "),t("td",[_._v("匹配除换行符以外的任何单个字符。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\")])]),_._v(" "),t("td",[_._v("转义字符。")])])])]),_._v(" "),t("h3",{attrs:{id:"_2、分组和引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、分组和引用"}},[_._v("#")]),_._v(" 2、分组和引用")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("表达式")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("(expression)")])]),_._v(" "),t("td",[_._v("分组。匹配括号里的整个表达式。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("(?:expression)")])]),_._v(" "),t("td",[_._v("非捕获分组。匹配括号里的整个字符串但不获取匹配结果，拿不到分组引用。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\num")])]),_._v(" "),t("td",[_._v("对前面所匹配分组的引用。比如(\\d)\\1 可以匹配两个相同的数字，"),t("code",[_._v("(Code)(Sheep)\\1\\2")]),_._v(" 则可以匹配 CodeSheepCodeSheep。")])])])]),_._v(" "),t("h3",{attrs:{id:"_3、边界"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、边界"}},[_._v("#")]),_._v(" 3、边界")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("表达式")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("^")])]),_._v(" "),t("td",[_._v("匹配字符串或行开头。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("$")])]),_._v(" "),t("td",[_._v("匹配字符串或行结尾。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\b")])]),_._v(" "),t("td",[_._v("匹配单词边界。比如 "),t("code",[_._v("Sheep\\b")]),_._v(" 可以匹配 CodeSheep 末尾的 Sheep，不能匹配 CodeSheepCode 中的 Sheep")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\B")])]),_._v(" "),t("td",[_._v("匹配非单词边界。比如 "),t("code",[_._v("Code\\B")]),_._v(" 可以匹配 HelloCodeSheep 中的 Code，不能匹配 HelloCode 中的 Code。")])])])]),_._v(" "),t("h3",{attrs:{id:"_4、数量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、数量"}},[_._v("#")]),_._v(" 4、数量")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("表达式")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("?")])]),_._v(" "),t("td",[_._v("匹配前面的表达式 0 个或 1 个。即表示可选项。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("+")])]),_._v(" "),t("td",[_._v("匹配前面的表达式至少 1 个。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("\\*")])]),_._v(" "),t("td",[_._v("匹配前面的表达式 0 个或多个。")])]),_._v(" "),t("tr",[t("td"),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[t("code",[_._v("{m}")])]),_._v(" "),t("td",[_._v("匹配前面的表达式 m 个。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("{m,}")])]),_._v(" "),t("td",[_._v("匹配前面的表达式最少 m 个。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("{m,n}")])]),_._v(" "),t("td",[_._v("匹配前面的表达式最少 m 个，最多 n 个。")])])])]),_._v(" "),t("h3",{attrs:{id:"_5、预查断言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、预查断言"}},[_._v("#")]),_._v(" 5、预查断言")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("表达式")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("(?=)")])]),_._v(" "),t("td",[_._v("正向预查。比如 "),t("code",[_._v("Code(?=Sheep)")]),_._v("能匹配 CodeSheep 中的 Code，但不能匹配 CodePig 中的 Code。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("(?!)")])]),_._v(" "),t("td",[_._v("正向否定预查。比如 "),t("code",[_._v("Code(?!Sheep)")]),_._v("不能匹配 CodeSheep 中的 Code，但能匹配 CodePig 中的 Code。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("(?<=)")])]),_._v(" "),t("td",[_._v("反向预查。比如"),t("code",[_._v("(?<=Code)Sheep")]),_._v(" 能匹配 CodeSheep 中的 Sheep，但不能匹配 ReadSheep 中的 Sheep。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("(?<!)")])]),_._v(" "),t("td",[_._v("反向否定预查。比如"),t("code",[_._v("(?<!Code)Sheep")]),_._v(" 不能匹配 CodeSheep 中的 Sheep，但能匹配 ReadSheep 中的 Sheep。")])])])]),_._v(" "),t("h3",{attrs:{id:"_6、特殊标记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、特殊标记"}},[_._v("#")]),_._v(" 6、特殊标记")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("表达式")]),_._v(" "),t("th",[_._v("描述")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("/.../i")])]),_._v(" "),t("td",[_._v("忽略大小写。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("/.../g")])]),_._v(" "),t("td",[_._v("全局匹配。")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("/.../m")])]),_._v(" "),t("td",[_._v("多行修饰符。用于多行匹配。")])])])]),_._v(" "),t("h2",{attrs:{id:"二、正则速查表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、正则速查表"}},[_._v("#")]),_._v(" 二、正则速查表")]),_._v(" "),t("ul",[t("li",[_._v("邮箱："),t("code",[_._v("^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$")])]),_._v(" "),t("li",[_._v("弱密码："),t("code",[_._v("^[\\w]{6,16}$")])]),_._v(" "),t("li",[_._v("强密码："),t("code",[_._v("^.*(?=.{6,})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@\\.#$%^&*? ]).*$")])])]),_._v(" "),t("h2",{attrs:{id:"三、正则可视化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、正则可视化"}},[_._v("#")]),_._v(" 三、正则可视化")]),_._v(" "),t("iframe",{attrs:{id:"regexChart",src:"https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24",height:"500",width:"100%"}})])}),[],!1,null,null,null);t.default=d.exports}}]);