import React, { useRef } from "react";


export default class App extends React.Component {
    state={
        list:["aa","bb","cc"]
    }
    note1:string=` danrerouslySetInnerHTML 此属性可以直接将写好的代码片段直接插入到页面中`
    mineRef=React.createRef<HTMLInputElement>()
    render(){
        return(<div>
            <input type="text" ref={this.mineRef}/>
            <button onClick={()=>this.handleClick1()}>add</button>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                        return (<li key={index}>
                            {item}
                            <button onClick={()=>this.handleClick2(index)}>del</button>
                        </li>)
                    })

                }
                { this.state.list.length===0 ?<div>暂无待办事项</div>:null}
            </ul>
            <div dangerouslySetInnerHTML={ {__html:this.note1}}></div>
        </div>)
    }

    handleClick1(){
        let list1=[...this.state.list];
        list1.push(this.mineRef.current!.value);
        this.setState({
            list:list1
        })
        this.mineRef.current!.value=this.note1
    }

    handleClick2(index:number){
        let list2=this.state.list.slice();
        list2.splice(index,1);
        this.setState({
            list:list2
        })
    }
}