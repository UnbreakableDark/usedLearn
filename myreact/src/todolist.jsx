import React,{ Component} from "react";

export default class App extends Component {

    state={
        list:["aa","bb","cc"]
    }
    a=100;
    myref=React.createRef();
    render(){
        return(
            <div>
                <input ref={this.myref} type="text" />
                <button onClick={()=>this.handleClick2()}>add</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            let keys=(item+index).toString();
                            
                            return (
                                <li key={keys}>
                                {item}
                                <button onClick={()=>this.handleClick3(index)}>删除</button>
                            
                            </li>)                       
                        })
                    }
                </ul>
            </div>
        )
    }

    handleClick2(){
        let list2=[...this.state.list];
        list2.push(this.myref.current.value);
        this.setState({
            list:list2,
        })
        this.myref.current.value="";
    }

    handleClick3(index){
        //不要直接修改状态
        console.log(index);
        let newList2=this.state.list.slice();
        newList2.splice(index,1);
        this.setState({
            list:newList2,
        })
    }

  
}

