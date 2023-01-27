import React, { useRef } from "react"

export default function App(){
    let myRef=useRef<HTMLInputElement | null>(null);
    return(
        <div>
            <input type="text" ref={myRef}/>
            <button onClick={()=>{
                console.log("click",myRef.current?.value);
                if(myRef.current!=null){
                    (myRef.current as HTMLInputElement).value="88";
                }
            }}>click</button>
        </div>
    )
}

/*
//ref最基本的用法(已经弃用)
export default class App extends React.Component {
    a=100;
    render(){
        return(
            <div>
                <input type="text" ref="mytext"/>
                <button onClick={()=>{
                    console.log("click",(this.refs.mytext as HTMLInputElement).value);
                }
                }>click</button>
            </div>
        )
    }
} 
*/
