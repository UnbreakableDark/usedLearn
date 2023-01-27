let john={
    name:"john",
    age:16,
    sex:"man",
} 

let weak=new WeakMap();
weak.set(john,"is");
john=null;


let visitsCountMap = new Map(); // map: user => visits count

// 递增用户来访次数
//#region 区域描述
function countUser(user:object) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
//#endregion
