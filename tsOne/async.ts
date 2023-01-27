(async function fn(){
    let promise=new Promise((reslove,reject)=>{
        setTimeout(()=>reslove("done"),1000);
    });

    let result=await promise;//等待，直到promise reslove
    console.log(result);
    
})();

