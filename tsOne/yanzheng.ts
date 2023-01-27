let cn={
    name:"john",
    sex:"boy"
};

if("sex" in cn){
    console.log("cn is "+cn.sex);
    
}

class cns{
    constructor(sex:"boy" | "girl"){
        this.sex=sex;
    }
   static _name:string="john";
   sex:"boy" | "girl";
   
}

let cnsn=new cns("girl");
console.log(cnsn instanceof cns);//  cnsn is cns
console.log(typeof(cnsn));

