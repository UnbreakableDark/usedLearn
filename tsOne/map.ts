let obj={
    name:"john",
    age:16,
    sex:"man",
};
let map1=new Map(Object.entries(obj));
console.log(map1);//  Map(3){'name'=>'john','age'=>16,'sex'=>'man'}
console.log(map1.get('name'));//注 不能用 obj.name  会返回undefined 因为没john这个键




















let recipeMap=new Map([
    ['cucumber',500],
    ['tomatoes',350],
    ['onion',50]
]);

for(let vegetable of recipeMap.keys()){
  //  console.log(vegetable);//遍历所有的键
}

for(let amount of recipeMap.values()){
  //  console.log(amount);//遍历所有的值    
}


for(let entry of recipeMap){
   // console.log(entry);//遍历所有的实体
}

recipeMap.forEach((value,key,map)=>{
   // console.log(`vaule:${value},key:${key}`);
    
})








/*
let map=new Map();
let tom={
    name:"tom",
    age:16,
    sex:"man",
}
map.set(tom,"student");
console.log(map.get(tom));
*/

