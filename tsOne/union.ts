interface Square{
    kind:"square";
    size:number;
}

interface Rectangle{
    kind:"rectangle";
    width:number;
    height:number;
}

interface Circle{
    kind:"circle";
    radius:number;
}
// 每个接口都有 kind属性但有不同的字符串字面量类型。 kind属性称做 可辨识的特征或 标签
function assertNever(x:never){
    throw new Error("Unexpected object"+ x);
    
}

type Shape=Square | Rectangle | Circle;
function area(s:Shape){
    switch(s.kind){
        case "square" : return s.size*s.size;
        case "rectangle" : return s.height*s.width;
        case "circle" : return Math.PI*s.radius**2;
        default : return assertNever(s);
    }
}
