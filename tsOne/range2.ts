module range2{
    let range2={
        from:1,
        to:5,
        current:1,

        [Symbol.iterator](){
            this.current=this.from;
            return this;
        },
        next(){
            if(this.current<=this.to){
                return {done:false,value:this.current++};
            }else{
                return {done:true};
            }
        }
    };   


    for(let num of range2){
        console.log(num);
    }

}

