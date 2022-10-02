(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{310:function(_,v,e){"use strict";e.r(v);var t=e(12),a=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"正则表达式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[_._v("#")]),_._v(" 正则表达式")]),_._v(" "),v("blockquote",[v("p",[_._v("正则表达式是一组由字母和符号组成的特殊文本, 它可以用来从文本中找出满足你想要的格式的句子.")])]),_._v(" "),v("p",[_._v('一个正则表达式是在一个主体字符串中从左到右匹配字符串时的一种样式.\n例如"Regular expression"是一个完整的句子, 但我们常使用缩写的术语"regex"或"regexp".\n正则表达式可以用来替换文本中的字符串,验证形式,提取字符串等等.')]),_._v(" "),v("p",[_._v("想象你正在写一个应用, 然后你想设定一个用户命名的规则, 让用户名包含字符,数字,下划线和连字符,以及限制字符的个数,好让名字看起来没那么丑.\n我们使用以下正则表达式来验证一个用户名:")]),_._v(" "),v("p",{attrs:{align:"center"}},[v("img",{attrs:{src:"https://deer-sir.oss-cn-chengdu.aliyuncs.com/note-taking/regexp-cn.png",width:"500px"}})]),_._v(" "),v("p",[_._v("以上的正则表达式可以接受 "),v("code",[_._v("john_doe")]),_._v(", "),v("code",[_._v("jo-hn_doe")]),_._v(", "),v("code",[_._v("john12_as")]),_._v(".\n但不匹配"),v("code",[_._v("Jo")]),_._v(", 因为它包含了大写的字母而且太短了.")]),_._v(" "),v("h2",{attrs:{id:"一、基本匹配"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一、基本匹配"}},[_._v("#")]),_._v(" 一、基本匹配")]),_._v(" "),v("p",[_._v("正则表达式其实就是在执行搜索时的格式, 它由一些字母和数字组合而成.\n例如: 一个正则表达式 "),v("code",[_._v("the")]),_._v(", 它表示一个规则: 由字母"),v("code",[_._v("t")]),_._v("开始,接着是"),v("code",[_._v("h")]),_._v(",再接着是"),v("code",[_._v("e")]),_._v(".")]),_._v(" "),v("pre",[_._v('"the" => The fat cat sat on '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("the")])]),_._v(" mat. \n")]),_._v(" "),v("p",[_._v("正则表达式"),v("code",[_._v("123")]),_._v("匹配字符串"),v("code",[_._v("123")]),_._v(". 它逐个字符的与输入的正则表达式做比较.")]),_._v(" "),v("p",[_._v("正则表达式是大小写敏感的, 所以"),v("code",[_._v("The")]),_._v("不会匹配"),v("code",[_._v("the")]),_._v(".")]),_._v(" "),v("pre",[_._v('"The" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" fat cat sat on the mat.\n")]),_._v(" "),v("h2",{attrs:{id:"二、元字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二、元字符"}},[_._v("#")]),_._v(" 二、元字符")]),_._v(" "),v("p",[_._v("正则表达式主要依赖于元字符."),v("br"),_._v("\n元字符不代表他们本身的字面意思, 他们都有特殊的含义. 一些元字符写在方括号中的时候有一些特殊的意思. 以下是一些元字符的介绍:")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[_._v("元字符")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v(".")]),_._v(" "),v("td",[_._v("句号匹配任意单个字符除了换行符.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("[ ]")]),_._v(" "),v("td",[_._v("字符种类. 匹配方括号内的任意字符.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("[^ ]")]),_._v(" "),v("td",[_._v("否定的字符种类. 匹配除了方括号里的任意字符")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("*")]),_._v(" "),v("td",[_._v("匹配>=0 个重复的在*号之前的字符.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("+")]),_._v(" "),v("td",[_._v("匹配>1 个重复的+号前的字符.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("?")]),_._v(" "),v("td",[_._v("标记?之前的字符为可选.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("{n,m}")]),_._v(" "),v("td",[_._v("匹配 num 个中括号之前的字符 (n <= num <= m).")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("(xyz)")]),_._v(" "),v("td",[_._v("字符集, 匹配与 xyz 完全相等的字符串.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("|")]),_._v(" "),v("td",[_._v("或运算符,匹配符号前或后的字符.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("\\")]),_._v(" "),v("td",[_._v("转义字符,用于匹配一些保留的字符 "),v("code",[_._v("[ ] ( ) { } . * + ? ^ $ \\ |")])])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("^")]),_._v(" "),v("td",[_._v("从开始行开始匹配.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("$")]),_._v(" "),v("td",[_._v("从末端开始匹配.")])])])]),_._v(" "),v("h3",{attrs:{id:"_1、点运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、点运算符"}},[_._v("#")]),_._v(" 1、点运算符 "),v("code",[_._v(".")])]),_._v(" "),v("p",[v("code",[_._v(".")]),_._v("是元字符中最简单的例子.\n"),v("code",[_._v(".")]),_._v("匹配任意单个字符, 但不匹配换行符.\n例如, 表达式"),v("code",[_._v(".ar")]),_._v("匹配一个任意字符后面跟着是"),v("code",[_._v("a")]),_._v("和"),v("code",[_._v("r")]),_._v("的字符串.")]),_._v(" "),v("pre",[_._v('".ar" => The '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("car")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("par")])]),_._v("ked in the "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("gar")])]),_._v("age.\n")]),_._v(" "),v("h3",{attrs:{id:"_2、字符集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、字符集"}},[_._v("#")]),_._v(" 2、字符集")]),_._v(" "),v("p",[_._v("字符集也叫做字符类.\n方括号用来指定一个字符集.\n在方括号中使用连字符来指定字符集的范围.\n在方括号中的字符集不关心顺序.\n例如, 表达式"),v("code",[_._v("[Tt]he")]),_._v(" 匹配 "),v("code",[_._v("the")]),_._v(" 和 "),v("code",[_._v("The")]),_._v(".")]),_._v(" "),v("pre",[_._v('"[Tt]he" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" car parked in "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("the")])]),_._v(" garage.\n")]),_._v(" "),v("p",[_._v("方括号的句号就表示句号.\n表达式 "),v("code",[_._v("ar[.]")]),_._v(" 匹配 "),v("code",[_._v("ar.")]),_._v("字符串")]),_._v(" "),v("pre",[_._v('"ar[.]" => A garage is a good place to park a c'),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("ar.")])]),_._v("\n")]),_._v(" "),v("h4",{attrs:{id:"否定字符集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#否定字符集"}},[_._v("#")]),_._v(" 否定字符集")]),_._v(" "),v("p",[_._v("一般来说 "),v("code",[_._v("^")]),_._v(" 表示一个字符串的开头, 但它用在一个方括号的开头的时候, 它表示这个字符集是否定的.\n例如, 表达式"),v("code",[_._v("[^c]ar")]),_._v(" 匹配一个后面跟着"),v("code",[_._v("ar")]),_._v("的除了"),v("code",[_._v("c")]),_._v("的任意字符.")]),_._v(" "),v("pre",[_._v('"[^c]ar" => The car '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("par")])]),_._v("ked in the "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("gar")])]),_._v("age.\n")]),_._v(" "),v("h3",{attrs:{id:"_3、重复次数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、重复次数"}},[_._v("#")]),_._v(" 3、重复次数")]),_._v(" "),v("p",[_._v("后面跟着元字符 "),v("code",[_._v("+")]),_._v(", "),v("code",[_._v("*")]),_._v(" or "),v("code",[_._v("?")]),_._v(" 的, 用来指定匹配子模式的次数.\n这些元字符在不同的情况下有着不同的意思.")]),_._v(" "),v("h4",{attrs:{id:"_1-号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-号"}},[_._v("#")]),_._v(" ① "),v("code",[_._v("*")]),_._v(" 号")]),_._v(" "),v("p",[v("code",[_._v("*")]),_._v("号匹配 在"),v("code",[_._v("*")]),_._v("之前的字符出现"),v("code",[_._v("大于等于0")]),_._v("次.\n例如, 表达式 "),v("code",[_._v("a*")]),_._v(" 匹配以 0 或更多个 a 开头的字符, 因为有 0 个这个条件, 其实也就匹配了所有的字符. 表达式"),v("code",[_._v("[a-z]*")]),_._v(" 匹配一个行中所有以小写字母开头的字符串.")]),_._v(" "),v("pre",[_._v('"[a-z]*" => T'),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("he")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("car")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("parked")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("in")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("the")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("garage")])]),_._v(" #21.\n")]),_._v(" "),v("p",[v("code",[_._v("*")]),_._v("字符和"),v("code",[_._v(".")]),_._v("字符搭配可以匹配所有的字符"),v("code",[_._v(".*")]),_._v(".\n"),v("code",[_._v("*")]),_._v("和表示匹配空格的符号"),v("code",[_._v("\\s")]),_._v("连起来用, 如表达式"),v("code",[_._v("\\s*cat\\s*")]),_._v("匹配 0 或更多个空格开头和 0 或更多个空格结尾的 cat 字符串.")]),_._v(" "),v("pre",[_._v('"\\s*cat\\s*" => The fat'),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v(" cat ")])]),_._v("sat on the "),v("a",{attrs:{href:"#learn-regex"}},[_._v("con"),v("strong",[_._v("cat")]),_._v("enation")]),_._v(".\n")]),_._v(" "),v("h4",{attrs:{id:"_2-号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-号"}},[_._v("#")]),_._v(" ② "),v("code",[_._v("+")]),_._v(" 号")]),_._v(" "),v("p",[v("code",[_._v("+")]),_._v("号匹配"),v("code",[_._v("+")]),_._v("号之前的字符出现 >=1 次个字符.\n例如表达式"),v("code",[_._v("c.+t")]),_._v(" 匹配以首字母"),v("code",[_._v("c")]),_._v("开头以"),v("code",[_._v("t")]),_._v("结尾,中间跟着任意个字符的字符串.")]),_._v(" "),v("pre",[_._v('"c.+t" => The fat '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("cat sat on the mat")])]),_._v(".\n")]),_._v(" "),v("h4",{attrs:{id:"_3-号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-号"}},[_._v("#")]),_._v(" ③ "),v("code",[_._v("?")]),_._v(" 号")]),_._v(" "),v("p",[_._v("在正则表达式中元字符 "),v("code",[_._v("?")]),_._v(" 标记在符号前面的字符为可选, 即出现 0 或 1 次.\n例如, 表达式 "),v("code",[_._v("[T]?he")]),_._v(" 匹配字符串 "),v("code",[_._v("he")]),_._v(" 和 "),v("code",[_._v("The")]),_._v(".")]),_._v(" "),v("pre",[_._v('"[T]he" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" car is parked in the garage.\n")]),_._v(" "),v("pre",[_._v('"[T]?he" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" car is parked in t"),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("he")])]),_._v(" garage.\n")]),_._v(" "),v("h3",{attrs:{id:"_4、-号"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、-号"}},[_._v("#")]),_._v(" 4、"),v("code",[_._v("{}")]),_._v(" 号")]),_._v(" "),v("p",[_._v("在正则表达式中 "),v("code",[_._v("{}")]),_._v(" 是一个量词, 常用来一个或一组字符可以重复出现的次数.\n例如, 表达式 "),v("code",[_._v("[0-9]{2,3}")]),_._v(" 匹配 2~3 位 0~9 的数字.")]),_._v(" "),v("pre",[_._v('"[0-9]{2,3}" => The number was 9.'),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("999")])]),_._v("7 but we rounded it off to "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("10")])]),_._v(".0.\n")]),_._v(" "),v("p",[_._v("我们可以省略第二个参数.\n例如, "),v("code",[_._v("[0-9]{2,}")]),_._v(" 匹配至少两位 0~9 的数字.")]),_._v(" "),v("p",[_._v("如果逗号也省略掉则表示重复固定的次数.\n例如, "),v("code",[_._v("[0-9]{3}")]),_._v(" 匹配 3 位数字")]),_._v(" "),v("pre",[_._v('"[0-9]{2,}" => The number was 9.'),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("9997")])]),_._v(" but we rounded it off to "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("10")])]),_._v(".0.\n")]),_._v(" "),v("pre",[_._v('"[0-9]{3}" => The number was 9.'),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("999")])]),_._v("7 but we rounded it off to 10.0.\n")]),_._v(" "),v("h3",{attrs:{id:"_5、-特征标群"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、-特征标群"}},[_._v("#")]),_._v(" 5、"),v("code",[_._v("(...)")]),_._v(" 特征标群")]),_._v(" "),v("p",[_._v("特征标群是一组写在 "),v("code",[_._v("(...)")]),_._v(" 中的子模式. 例如之前说的 "),v("code",[_._v("{}")]),_._v(" 是用来表示前面一个字符出现指定次数. 但如果在 "),v("code",[_._v("{}")]),_._v(" 前加入特征标群则表示整个标群内的字符重复 N 次. 例如, 表达式 "),v("code",[_._v("(ab)*")]),_._v(" 匹配连续出现 0 或更多个 "),v("code",[_._v("ab")]),_._v(".")]),_._v(" "),v("p",[_._v("我们还可以在 "),v("code",[_._v("()")]),_._v(" 中用或字符 "),v("code",[_._v("|")]),_._v(" 表示或. 例如, "),v("code",[_._v("(c|g|p)ar")]),_._v(" 匹配 "),v("code",[_._v("car")]),_._v(" 或 "),v("code",[_._v("gar")]),_._v(" 或 "),v("code",[_._v("par")]),_._v(".")]),_._v(" "),v("pre",[_._v('"(c|g|p)ar" => The '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("car")])]),_._v(" is "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("par")])]),_._v("ked in the "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("gar")])]),_._v("age.\n")]),_._v(" "),v("h3",{attrs:{id:"_6、-或运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、-或运算符"}},[_._v("#")]),_._v(" 6、"),v("code",[_._v("|")]),_._v(" 或运算符")]),_._v(" "),v("p",[_._v("或运算符就表示或, 用作判断条件.")]),_._v(" "),v("p",[_._v("例如 "),v("code",[_._v("(T|t)he|car")]),_._v(" 匹配 "),v("code",[_._v("(T|t)he")]),_._v(" 或 "),v("code",[_._v("car")]),_._v(".")]),_._v(" "),v("pre",[_._v('"(T|t)he|car" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("car")])]),_._v(" is parked in "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("the")])]),_._v(" garage.\n")]),_._v(" "),v("h3",{attrs:{id:"_7、转码特殊字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7、转码特殊字符"}},[_._v("#")]),_._v(" 7、转码特殊字符")]),_._v(" "),v("p",[_._v("反斜线 "),v("code",[_._v("\\")]),_._v(" 在表达式中用于转码紧跟其后的字符. 用于指定 "),v("code",[_._v("{ } [ ] / \\ + * . $ ^ | ?")]),_._v(" 这些特殊字符. 如果想要匹配这些特殊字符则要在其前面加上反斜线 "),v("code",[_._v("\\")]),_._v(".")]),_._v(" "),v("p",[_._v("例如 "),v("code",[_._v(".")]),_._v(" 是用来匹配除换行符外的所有字符的. 如果想要匹配句子中的 "),v("code",[_._v(".")]),_._v(" 则要写成 "),v("code",[_._v("\\.")]),_._v(".")]),_._v(" "),v("pre",[_._v('"(f|c|m)at\\.?" => The '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("fat")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("cat")])]),_._v(" sat on the "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("mat.")])]),_._v("\n")]),_._v(" "),v("h3",{attrs:{id:"_8、锚点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8、锚点"}},[_._v("#")]),_._v(" 8、锚点")]),_._v(" "),v("p",[_._v("在正则表达式中, 想要匹配指定开头或结尾的字符串就要使用到锚点. "),v("code",[_._v("^")]),_._v(" 指定开头, "),v("code",[_._v("$")]),_._v(" 指定结尾.")]),_._v(" "),v("h4",{attrs:{id:"_1-号-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-号-2"}},[_._v("#")]),_._v(" ① "),v("code",[_._v("^")]),_._v(" 号")]),_._v(" "),v("p",[v("code",[_._v("^")]),_._v(" 用来检查匹配的字符串是否在所匹配字符串的开头.")]),_._v(" "),v("p",[_._v("例如, 在 "),v("code",[_._v("abc")]),_._v(" 中使用表达式 "),v("code",[_._v("^a")]),_._v(" 会得到结果 "),v("code",[_._v("a")]),_._v(". 但如果使用 "),v("code",[_._v("^b")]),_._v(" 将匹配不到任何结果. 应为在字符串 "),v("code",[_._v("abc")]),_._v(" 中并不是以 "),v("code",[_._v("b")]),_._v(" 开头.")]),_._v(" "),v("p",[_._v("例如, "),v("code",[_._v("^(T|t)he")]),_._v(" 匹配以 "),v("code",[_._v("The")]),_._v(" 或 "),v("code",[_._v("the")]),_._v(" 开头的字符串.")]),_._v(" "),v("pre",[_._v('"(T|t)he" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" car is parked in "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("the")])]),_._v(" garage.\n")]),_._v(" "),v("pre",[_._v('"^(T|t)he" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" car is parked in the garage.\n")]),_._v(" "),v("h4",{attrs:{id:"_2-号-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-号-2"}},[_._v("#")]),_._v(" ② "),v("code",[_._v("$")]),_._v("号")]),_._v(" "),v("p",[_._v("同理于 "),v("code",[_._v("^")]),_._v(" 号, "),v("code",[_._v("$")]),_._v(" 号用来匹配字符是否是最后一个.")]),_._v(" "),v("p",[_._v("例如, "),v("code",[_._v("(at\\.)$")]),_._v(" 匹配以 "),v("code",[_._v("at.")]),_._v(" 结尾的字符串.")]),_._v(" "),v("pre",[_._v('"(at\\.)" => The fat c'),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("at.")])]),_._v(" s"),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("at.")])]),_._v(" on the m"),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("at.")])]),_._v("\n")]),_._v(" "),v("pre",[_._v('"(at\\.)$" => The fat cat. sat. on the m'),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("at.")])]),_._v("\n")]),_._v(" "),v("h2",{attrs:{id:"三、简写字符集"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三、简写字符集"}},[_._v("#")]),_._v(" 三、简写字符集")]),_._v(" "),v("p",[_._v("正则表达式提供一些常用的字符集简写. 如下:")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[_._v("简写")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v(".")]),_._v(" "),v("td",[_._v("除换行符外的所有字符")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("\\w")]),_._v(" "),v("td",[_._v("匹配所有字母数字, 等同于 "),v("code",[_._v("[a-zA-Z0-9_]")])])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("\\W")]),_._v(" "),v("td",[_._v("匹配所有非字母数字, 即符号, 等同于: "),v("code",[_._v("[^\\w]")])])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("\\d")]),_._v(" "),v("td",[_._v("匹配数字: "),v("code",[_._v("[0-9]")])])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("\\D")]),_._v(" "),v("td",[_._v("匹配非数字: "),v("code",[_._v("[^\\d]")])])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("\\s")]),_._v(" "),v("td",[_._v("匹配所有空格字符, 等同于: "),v("code",[_._v("[\\t\\n\\f\\r\\p{Z}]")])])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("\\S")]),_._v(" "),v("td",[_._v("匹配所有非空格字符: "),v("code",[_._v("[^\\s]")])])])])]),_._v(" "),v("h2",{attrs:{id:"四、前后关联约束-前后预查"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四、前后关联约束-前后预查"}},[_._v("#")]),_._v(" 四、前后关联约束(前后预查)")]),_._v(" "),v("p",[_._v("前置约束和后置约束都属于"),v("strong",[_._v("非捕获簇")]),_._v("(用于匹配不在匹配列表中的格式).\n前置约束用于判断所匹配的格式是否在另一个确定的格式之后.")]),_._v(" "),v("p",[_._v("例如, 我们想要获得所有跟在 "),v("code",[_._v("$")]),_._v(" 符号后的数字, 我们可以使用正向向后约束 "),v("code",[_._v("(?<=\\$)[0-9\\.]*")]),_._v(".\n这个表达式匹配 "),v("code",[_._v("$")]),_._v(" 开头, 之后跟着 "),v("code",[_._v("0,1,2,3,4,5,6,7,8,9,.")]),_._v(" 这些字符可以出现大于等于 0 次.")]),_._v(" "),v("p",[_._v("前后关联约束如下:")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[_._v("符号")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("?=")]),_._v(" "),v("td",[_._v("前置约束-存在")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("?!")]),_._v(" "),v("td",[_._v("前置约束-排除")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("?<=")]),_._v(" "),v("td",[_._v("后置约束-存在")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("?<!")]),_._v(" "),v("td",[_._v("后置约束-排除")])])])]),_._v(" "),v("h3",{attrs:{id:"_1、-前置约束-存在"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、-前置约束-存在"}},[_._v("#")]),_._v(" 1、"),v("code",[_._v("?=...")]),_._v(" 前置约束(存在)")]),_._v(" "),v("p",[v("code",[_._v("?=...")]),_._v(" 前置约束(存在), 表示第一部分表达式必须跟在 "),v("code",[_._v("?=...")]),_._v("定义的表达式之后.")]),_._v(" "),v("p",[_._v("返回结果只瞒住第一部分表达式.\n定义一个前置约束(存在)要使用 "),v("code",[_._v("()")]),_._v(". 在括号内部使用一个问号和等号: "),v("code",[_._v("(?=...)")]),_._v(".")]),_._v(" "),v("p",[_._v("前置约束的内容写在括号中的等号后面.\n例如, 表达式 "),v("code",[_._v("[T|t]he(?=\\sfat)")]),_._v(" 匹配 "),v("code",[_._v("The")]),_._v(" 和 "),v("code",[_._v("the")]),_._v(", 在括号中我们又定义了前置约束(存在) "),v("code",[_._v("(?=\\sfat)")]),_._v(" ,即 "),v("code",[_._v("The")]),_._v(" 和 "),v("code",[_._v("the")]),_._v(" 后面紧跟着 "),v("code",[_._v("(空格)fat")]),_._v(".")]),_._v(" "),v("pre",[_._v('"[T|t]he(?=\\sfat)" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" fat cat sat on the mat.\n")]),_._v(" "),v("h3",{attrs:{id:"_2、-前置约束-排除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、-前置约束-排除"}},[_._v("#")]),_._v(" 2、"),v("code",[_._v("?!...")]),_._v(" 前置约束-排除")]),_._v(" "),v("p",[_._v("前置约束-排除 "),v("code",[_._v("?!")]),_._v(" 用于筛选所有匹配结果, 筛选条件为 其后不跟随着定义的格式\n"),v("code",[_._v("前置约束-排除")]),_._v(" 定义和 "),v("code",[_._v("前置约束(存在)")]),_._v(" 一样, 区别就是 "),v("code",[_._v("=")]),_._v(" 替换成 "),v("code",[_._v("!")]),_._v(" 也就是 "),v("code",[_._v("(?!...)")]),_._v(".")]),_._v(" "),v("p",[_._v("表达式 "),v("code",[_._v("[T|t]he(?!\\sfat)")]),_._v(" 匹配 "),v("code",[_._v("The")]),_._v(" 和 "),v("code",[_._v("the")]),_._v(", 且其后不跟着 "),v("code",[_._v("(空格)fat")]),_._v(".")]),_._v(" "),v("pre",[_._v('"[T|t]he(?!\\sfat)" => The fat cat sat on '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("the")])]),_._v(" mat.\n")]),_._v(" "),v("h3",{attrs:{id:"_3、-后置约束-存在"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、-后置约束-存在"}},[_._v("#")]),_._v(" 3、"),v("code",[_._v("?<= ...")]),_._v(" 后置约束-存在")]),_._v(" "),v("p",[_._v("后置约束-存在 记作"),v("code",[_._v("(?<=...)")]),_._v(" 用于筛选所有匹配结果, 筛选条件为 其前跟随着定义的格式.\n例如, 表达式 "),v("code",[_._v("(?<=[T|t]he\\s)(fat|mat)")]),_._v(" 匹配 "),v("code",[_._v("fat")]),_._v(" 和 "),v("code",[_._v("mat")]),_._v(", 且其前跟着 "),v("code",[_._v("The")]),_._v(" 或 "),v("code",[_._v("the")]),_._v(".")]),_._v(" "),v("pre",[_._v('"(?<=[T|t]he\\s)(fat|mat)" => The '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("fat")])]),_._v(" cat sat on the "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("mat")])]),_._v(".\n")]),_._v(" "),v("h3",{attrs:{id:"_4、-后置约束-排除"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、-后置约束-排除"}},[_._v("#")]),_._v(" 4、"),v("code",[_._v("?<!...")]),_._v(" 后置约束-排除")]),_._v(" "),v("p",[_._v("后置约束-排除 记作 "),v("code",[_._v("(?<!...)")]),_._v(" 用于筛选所有匹配结果, 筛选条件为 其前不跟着定义的格式.\n例如, 表达式 "),v("code",[_._v("(?<!(T|t)he\\s)(cat)")]),_._v(" 匹配 "),v("code",[_._v("cat")]),_._v(", 且其前不跟着 "),v("code",[_._v("The")]),_._v(" 或 "),v("code",[_._v("the")]),_._v(".")]),_._v(" "),v("pre",[_._v('"(?<![T|t]he\\s)(cat)" => The cat sat on '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("cat")])]),_._v(".\n")]),_._v(" "),v("h2",{attrs:{id:"五、标志"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#五、标志"}},[_._v("#")]),_._v(" 五、标志")]),_._v(" "),v("p",[_._v("标志也叫修饰语, 因为它可以用来修改表达式的搜索结果.\n这些标志可以任意的组合使用, 它也是整个正则表达式的一部分.")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[_._v("标志")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("i")]),_._v(" "),v("td",[_._v("忽略大小写.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("g")]),_._v(" "),v("td",[_._v("全局搜索.")])]),_._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[_._v("m")]),_._v(" "),v("td",[_._v("多行的: 锚点元字符 "),v("code",[_._v("^")]),_._v(" "),v("code",[_._v("$")]),_._v(" 工作范围在每行的起始.")])])])]),_._v(" "),v("h3",{attrs:{id:"_1、忽略大小写-case-insensitive"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、忽略大小写-case-insensitive"}},[_._v("#")]),_._v(" 1、忽略大小写 (Case Insensitive)")]),_._v(" "),v("p",[_._v("修饰语 "),v("code",[_._v("i")]),_._v(" 用于忽略大小写.\n例如, 表达式 "),v("code",[_._v("/The/gi")]),_._v(" 表示在全局搜索 "),v("code",[_._v("The")]),_._v(", 在后面的 "),v("code",[_._v("i")]),_._v(" 将其条件修改为忽略大小写, 则变成搜索 "),v("code",[_._v("the")]),_._v(" 和 "),v("code",[_._v("The")]),_._v(", "),v("code",[_._v("g")]),_._v(" 表示全局搜索.")]),_._v(" "),v("pre",[_._v('"The" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" fat cat sat on the mat.\n")]),_._v(" "),v("pre",[_._v('"/The/gi" => '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("The")])]),_._v(" fat cat sat on "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("the")])]),_._v(" mat.\n")]),_._v(" "),v("h3",{attrs:{id:"_2、全局搜索-global-search"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、全局搜索-global-search"}},[_._v("#")]),_._v(" 2、全局搜索 (Global search)")]),_._v(" "),v("p",[_._v("修饰符 "),v("code",[_._v("g")]),_._v(" 常用于执行一个全局搜索匹配, 即(不仅仅返回第一个匹配的, 而是返回全部).\n例如, 表达式 "),v("code",[_._v("/.(at)/g")]),_._v(" 表示搜索 任意字符(除了换行) + "),v("code",[_._v("at")]),_._v(", 并返回全部结果.")]),_._v(" "),v("pre",[_._v('"/.(at)/" => The '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("fat")])]),_._v(" cat sat on the mat.\n")]),_._v(" "),v("pre",[_._v('"/.(at)/g" => The '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("fat")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("cat")])]),_._v(" "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("sat")])]),_._v(" on the "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("mat")])]),_._v(".\n")]),_._v(" "),v("h3",{attrs:{id:"_3、多行修饰符-multiline"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、多行修饰符-multiline"}},[_._v("#")]),_._v(" 3、多行修饰符 (Multiline)")]),_._v(" "),v("p",[_._v("多行修饰符 "),v("code",[_._v("m")]),_._v(" 常用于执行一个多行匹配.")]),_._v(" "),v("p",[_._v("像之前介绍的 "),v("code",[_._v("(^,$)")]),_._v(" 用于检查格式是否是在待检测字符串的开头或结尾. 但我们如果想要它在每行的开头和结尾生效, 我们需要用到多行修饰符 "),v("code",[_._v("m")]),_._v(".")]),_._v(" "),v("p",[_._v("例如, 表达式 "),v("code",[_._v("/at(.)?$/gm")]),_._v(" 表示在待检测字符串每行的末尾搜索 "),v("code",[_._v("at")]),_._v("后跟一个或多个 "),v("code",[_._v(".")]),_._v(" 的字符串, 并返回全部结果.")]),_._v(" "),v("pre",[_._v('"/.at(.)?$/" => The fat\n                cat sat\n                on the '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("mat.")])]),_._v("\n")]),_._v(" "),v("pre",[_._v('"/.at(.)?$/gm" => The '),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("fat")])]),_._v("\n                  cat "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("sat")])]),_._v("\n                  on the "),v("a",{attrs:{href:"#learn-regex"}},[v("strong",[_._v("mat.")])]),_._v("\n")]),_._v(" "),v("h2",{attrs:{id:"正则表达式应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式应用"}},[_._v("#")]),_._v(" 正则表达式应用：")]),_._v(" "),v("ul",[v("li",[v("em",[_._v("正整数")]),_._v(": "),v("code",[_._v("^\\d+$")])]),_._v(" "),v("li",[v("em",[_._v("负整数")]),_._v(": "),v("code",[_._v("^-\\d+$")])]),_._v(" "),v("li",[v("em",[_._v("手机国家号")]),_._v(": "),v("code",[_._v("^+?[\\d\\s]{3,}$")])]),_._v(" "),v("li",[v("em",[_._v("手机号")]),_._v(": "),v("code",[_._v("^+?[\\d\\s]+(?[\\d\\s]{10,}$")])]),_._v(" "),v("li",[v("em",[_._v("整数")]),_._v(": "),v("code",[_._v("^-?\\d+$")])]),_._v(" "),v("li",[v("em",[_._v("用户名")]),_._v(": "),v("code",[_._v("^[\\w\\d_.]{4,16}$")])]),_._v(" "),v("li",[v("em",[_._v("数字和英文字母")]),_._v(": "),v("code",[_._v("^[a-zA-Z0-9]*$")])]),_._v(" "),v("li",[v("em",[_._v("数字和应为字母和空格")]),_._v(": "),v("code",[_._v("^[a-zA-Z0-9 ]*$")])]),_._v(" "),v("li",[v("em",[_._v("密码")]),_._v(": "),v("code",[_._v("^(?=^.{6,}$)((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.*$")])]),_._v(" "),v("li",[v("em",[_._v("邮箱")]),_._v(": "),v("code",[_._v("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4})*$")])]),_._v(" "),v("li",[v("em",[_._v("IP4 地址")]),_._v(": "),v("code",[_._v("^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$")])]),_._v(" "),v("li",[v("em",[_._v("纯小写字母")]),_._v(": "),v("code",[_._v("^([a-z])*$")])]),_._v(" "),v("li",[v("em",[_._v("纯大写字母")]),_._v(": "),v("code",[_._v("^([A-Z])*$")])]),_._v(" "),v("li",[v("em",[_._v("URL")]),_._v(": "),v("code",[_._v("^(((http|https|ftp):\\/\\/)?([[a-zA-Z0-9]\\-\\.])+(\\.)([[a-zA-Z0-9]]){2,4}([[a-zA-Z0-9]\\/+=%&_\\.~?\\-]*))*$")])]),_._v(" "),v("li",[v("em",[_._v("VISA 信用卡号")]),_._v(": "),v("code",[_._v("^(4[0-9]{12}(?:[0-9]{3})?)*$")])]),_._v(" "),v("li",[v("em",[_._v("日期 (MM/DD/YYYY)")]),_._v(": "),v("code",[_._v("^(0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2}$")])]),_._v(" "),v("li",[v("em",[_._v("日期 (YYYY/MM/DD)")]),_._v(": "),v("code",[_._v("^(19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])$")])]),_._v(" "),v("li",[v("em",[_._v("MasterCard 信用卡号")]),_._v(": "),v("code",[_._v("^(5[1-5][0-9]{14})*$")])])])])}),[],!1,null,null,null);v.default=a.exports}}]);