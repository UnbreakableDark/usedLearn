import React from "react";


function add(){
    let i=0;
    alert(`is : ${++i}`)
}

export default function App(){
    
    return(
        <div>
            <input type="text" />
            <button onClick={add}>add</button>
        </div>
    )
}