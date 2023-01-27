async function f(){
    /*
    const response=await fetch("http://...");
    const json=await response.json();
    console.log(json);
    */
   //上面两个不是并非的  
   const promise1=fetch("http://");
   const promise2=fetch("http://")
   const [a,b]=await Promise.all([promise1,promise2]);
   console.log(a,b);

}


//使用async将函数标记为异步函数  异步函数就是指返回值为Promise对象的函数
/*
    在循环中执行异步操作，是不能够直接调用forEach或者map这一类方法的
    尽管在循环中使用  await 但forEach会立刻返回，
    它并不会暂停等到所有的异步操作都执行完毕，
    如果需要如此  那么得使用传统的for循环
    更进一步 for await
    这里的for循环会等到所有的异步操作都完成之后才继续向后执行


    不能直接使用await关键字  它只能被用在异步函数中


*/































/*
//回调地狱
setTimeout(()=>{
    console.log("等三秒");
    
    setTimeout(()=>{
        console.log("又等三秒");
        
        setTimeout(()=>{
            console.log("再等三秒");
            
        },3000)
    },3000);
},3000)

*/






















/*
//正常回调
setTimeout(()=>{
    console.log("回调函数执行");
    
},3000);
console.log("now 执行");
*/
