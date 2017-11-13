/*  
 javascript经典实例1.4
 插入一个特殊字符
 想要在字符串中插入一个特殊字符，例如换行
 var str="<p>This page \u00A9 Shelly Powers</p>"
 console.log(str)
 javascript中的转义序列都是以一个反斜杠开始（\）,这个字符告诉处理字符串的应用程序。后续的部分是需要特殊处理的一个字符序列。
 */
/* 
转译序列：
\'  单引号
\"  双引号
\\  反斜杠
\b  退格
\f  换页符
\n  换行
\r  回车
\t  水平制表符
\ddd  八进制序列
\xdd  十六进制序列
\udddd  Unicode序列
*/
//转义字符最重要的用法之一，实在双引号或单引号分隔开的字符串中，包含双引号或单引号
var newString ="You can\'t use single quotes in a string surrounded by single Quotes. Oh ,wait a sec...yes you can."
console.log(newString);
