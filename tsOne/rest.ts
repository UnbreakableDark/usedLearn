function sumAny(...args:number[]){
    let sum:number=0;
    function sums(){
        //let sum=0;
    for(let arg of args){//这里不能用 in 因为in遍历的是对象的属性
        sum=sum+arg
    }
}
    sums();
    return sum;
}

let jie=sumAny(1,2,3,4,5,6,7,8,10,9);
console.log(jie);
