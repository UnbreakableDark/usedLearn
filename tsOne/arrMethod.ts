module arrMethod{


    let arr=["I","go","home"];
    arr.splice(1,1,"want",'to','your');//从索引1开始删除一个元素
//当只填写了statr一个参数，splice会从该索引开始删除后面所有的数组项
//之后的是替代删除数组项后替换的内容
   
let arrF=arr.slice(1,4);//索引1，4之间  不包括end
//console.log(arrF);

  arrF.forEach(function(item,index,array){
      item=item+"so";
     // console.log(item);
  })  


  //console.log(arr.includes("go"));//flase
  //console.log(arr.includes('want'));//true
  /*
    arr.indexOf(),arr.lastIndexOf(),arr.includes()都是在数组中搜索元素的方法
    首选  arr.includes()因为它可以正确处理 NaN
  */

   let sortArray:number[]=[1,23,12,22,6];
   sortArray.sort((a,b)=>a-b);
   console.log(sortArray.toString());

   let names='神里凌华,九条裟罗,巴尔的摩,琴';
   let namess=names.split(',');
   //调用带有空参数的split('')会将字符串拆分为字母数组
   

   let result1=sortArray.reduce((sum,current)=>sum+current,0);
   console.log(result1);
   
}
