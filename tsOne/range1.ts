module rabge1{
let range={
    from:1,
    to:5,
    [Symbol.iterator](){
        return {
            current:this.from,
            last:this.to,
   
            next(){
                if(this.current<=this.last){
                    return {done:false,value:this.current++}
                }else {
                    return {done:true,value:'finish'}//这个value不显示
                }
            }
        }
    }
    
};


 for(let num of range){
     console.log(num);
     
 }


}