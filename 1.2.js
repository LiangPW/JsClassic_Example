/*  
 javascript经典实例1.2
 问题：有一个字符串是由几个句子组成，其中的一个句子包含一个项目列表。该列表以一个
     冒号开始(:),以一个句点结束(.)。你想要提取这个列表。
     提取之前：
     this is a list items:cherries,limes,oranges,apples.
     提取之后：
     ['cherries','limes','oranges','apples']
*/
var sentence='This is one sentence.This is a sencetence with a list of items:cherries,orange,apples,bananas.That was the list of items.';
var start=sentence.indexOf(':');
var end=sentence.indexOf('.',start+1);
var listStr=sentence.substring(start+1,end);
console.log(listStr);
//这里值得注意，是个坑，一定是start+1,因为截取字符串时，开始是包含开始的字母，结束是不包含结束的字母
var listArr=listStr.split(",");
console.log(listArr);


//总结:这一个实例考察了对字符串方法的基本运用，属于基本功，不会的话，说不过去
//为了便于复习，随后附上字符串的基本使用方法。
/*
字符串方法属性：
 length: 
 indexOf:
 charAt:
 charCodeAt:
 slice:
 substr:
 substring:
 toLowerCase:
 toUpperCase:
 concat:
 split:
*/
/* 
数组的方法属性：
   push:
   pop:
   unshift:
   shiift:
   concat:
   slice:
   splice:
   join:
   sort:
   reverse:
   forEach:
   map:
   filter:
   every:
   some:
*/

