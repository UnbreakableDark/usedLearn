module test{

    function filterRangeInPlace(array:Array<number>,a:number,b:number){
        let arr11:number[]=[];
        array.filter(function(item,index,array){
           
            if(item>a && item<b){
                //return item;
                arr11.push(item);
                console.log(arr11);  
            }
            //return arr11;
        });
        array= arr11;
        return array;
    }

    let arr=[5,3,8,1];
    filterRangeInPlace(arr,2,6);
    console.log(arr);
    


}
