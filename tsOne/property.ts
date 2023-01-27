let user={
    name:"john",
}

let descriptor=Object.getOwnPropertyDescriptor(user,'name');
//console.log(descriptor);
Object.defineProperty(user,'sex',{value:"man",writable:true,enumerable:true,configurable:true});
console.log(user);

Object.defineProperties(user,{
    age: {value:30,writable:true,configurable:true,enumerable:true},
    surName:{value: "Smith", writable: false}
})

let obj2={
    proname:"pro",
    get proName(){
        return this.proName;
    },
    set proName(value:string){
        this.proName=value;
    }
}