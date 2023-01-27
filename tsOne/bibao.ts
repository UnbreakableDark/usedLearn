function makeCounter(){
    let count=0;
console.log(count+" omo");
    return function(){
        console.log(count+"  _内部");
        return count++;    
    };
}

let doCount=makeCounter();//count值为0
//Function
//doCount();
//makeCounter();//最后 count的值还是0



let contain=0;//也验证了闭包能修改外部变量
function countor(){
    let count=0;
    //console.log(contain+"_a_");
    return contain++;//多次运行后count=0没有做任何改变 contain一直在改变
}
countor();
//console.log(contain+" contain");//contain改变为1




function he(){
   let message="hello function";
   function hes(){
       message="hello world"
   }
   hes();
   console.log(message);//hello world
   //闭包能修改外部变量
}
//he();

