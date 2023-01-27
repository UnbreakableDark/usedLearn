let promise=new Promise(function(reslove,reject){
    //executor  生产者代码
}).then(function(){
    //消费者代码 调用生存者代码的
},
function(){},
).catch(function(){
    //发生错误后
}).finally(function(){
    //无论如何  必须执行的
});
