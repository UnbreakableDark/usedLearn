let arr=["Ilya","kantor","ken"]
//let [firstName,lastName]="Ilya kantor".split(' ');
let [firstName,,lastName]=arr;
//数组中不需要的元素可以通过添加额外的逗号来把它丢弃。
//console.log(firstName+"    "+lastName);
//let firstName=arr[0]; lastName=arr[1];
let user238={
    name:"john",
    age:30,
}

for(let [key,value] of Object.entries(user238)){
    //console.log(key+"   "+value); 
}

//let [name1,name2,...rest]="Julius,Caesar,Consul,of the Roman Republic".split(",");
//console.log(rest);
//rest的值就是数组中剩下的元素组成的数组。不一定非要使用rest这个名字，其他变量名也可以


//let [nameo=prompt("name?"),surnamse=prompt("surname?")]="Ilya"