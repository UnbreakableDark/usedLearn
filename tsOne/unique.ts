const s0:unique symbol=Symbol("up");
let s1:symbol=s0;
interface he{
    [s0],
    //[s1],
}

let c2:ReadonlyArray<number>=[1,2,3];
let c3:Readonly<number[]>=[1,2,3];
let c4:Readonly<number>=4;
c4=6;
console.log(c4);//6
