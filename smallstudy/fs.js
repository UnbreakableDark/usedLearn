const fs=require("fs")
fs.readFile("text.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());//data是buffer类型的格式
})