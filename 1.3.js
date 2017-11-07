/*  
 javascript经典实例1.3
 检查一个存在的非空字符串
 问题：
    想要验证一个变量已经定义了，是一个字符串，并且他不为空
    str!==undefined && typeof str=="string" &&str.length!=0
 */

//简便方法
//   typeof str==="string" && str.length>0
//复杂方法，不论str是字符串变量还是字符串对象
//   (typeof str !='undefined' && str) && (str.length>0) &&(typeof str.valueOf()=='string')
// 检查一个变量是否未定义光是!=undefined还不够，因为null也是未定义，但null的typeof返回值是object
// 所以是typeof str !='undefined' && str