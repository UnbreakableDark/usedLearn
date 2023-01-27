let mengde=['安柏','琴','芭芭拉','诺埃尔','砂糖'];
mengde.push('温迪');//在数组尾部添加一个元素
//console.log(mengde);
mengde.pop();//从末端取出一个元素
//console.log(mengde);
mengde.shift();//从前端取出一个元素
//console.log(mengde);
mengde.unshift('丽莎');//在首段添加一个元素
//console.log(mengde);

let arr2=['Apple','Orange','Pear'];
for(let i=0;i<arr2.length;i++){
    //console.log(arr2[i]);
}
//console.log("_________________________________");
let fruits=['Apple','orange','plum'];
for(let i in fruits){
    //console.log(fruits[i]);
}
//console.log("_________________________________");
for(let fruit of fruits){
   // console.log(fruit);
}

let fruits1 = ["Apples", "Pear", "Orange"];

// 在“副本”里 push 了一个新的值
let shoppingCart = fruits1;
shoppingCart.push("Banana");

// fruits 里面是什么？
console.log( fruits1.length ); // ?