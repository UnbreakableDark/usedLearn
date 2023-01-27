let now=new Date();//不带参数，创建一个表示当前日期和时间的Date对象。
let now2=new Date(1000);//创建date对象，其时间等于1970.1.1 0:0:0之后经过的毫秒数(1/1000s)
//传入的整数参数 被称为 时间戳
let newDate=new Date(2021,1,10,9,0,0,0);
console.log((now.getTime()-newDate.getTime())/(3600*24*1000));

/*

参数： year,month,date,hours,minutes,seconds,ms
year必须是四位数
month计数从0-11(1-12月)
date具体的某一天,如果缺失，则默认值为1
如果hours,minutes,seconds,ms缺失，则均为默认值0

时间度量最大精确到0.001s,即1毫秒
*/
let year=newDate.getFullYear();//获取年份信息
let xingqi=newDate.getDay();//获取星期信息 从0-6 (周天-周六)
//以上所有方法返回的组件都是基于当地时区的，也能使用getUTCFullYear()得到与UTC对应时间。
console.log(newDate);
console.log(year);

console.log(Date.now());//返回当前的时间戳



