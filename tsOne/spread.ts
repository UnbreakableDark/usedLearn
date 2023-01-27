let arr4=[1,2,3];
let arr4Copy=[...arr4];
console.log(JSON.stringify(arr4) === JSON.stringify(arr4Copy));//true
console.log(arr4===arr4Copy);//false  因为它们引用的不是同一个数组
