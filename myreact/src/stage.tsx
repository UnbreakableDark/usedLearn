import React, { useState } from "react"

let user={
    name:"user",
    age:25,
    sex:"boy",
    myText:"收藏"
}


export default function App(){
    let [stage,setStage]=useState(user);
    return(
        <div>
            <p>hello  world</p>
            <button onClick={
                ()=>{
                    if(stage.myText==="收藏"){
                        setStage(user);
                    }else {
                        setStage(user);
                    }
                }
            }>{stage.myText}</button>
        </div>
    )
}