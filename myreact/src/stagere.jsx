import React ,{ Component } from "react"

export default class App extends Component{
    constructor(){
        super();
        this.state={//这个state是固定的
            mytext:"收藏",
            myShow:true,
            list:[{
                id:1,
                text:"1111",
            },
            {
                id:2,
                text:"2222"
            },
            {
                id:3,
                text:"3333"
            }]
        }
    }
    render(){
        return(
            <div>
                <h2>welcome to learn react </h2>
                <button onClick={()=>{
                   this.setState({
                       myShow:!this.state.myShow,
                       myOf:"hehe"//这不能新加入一个属性
                   })
                }}>{this.state.myShow?"收藏":"取消收藏"}</button>
                <ul>
                    {
                       //map的回调函数  需要有 返回值
                       this.state.list.map(function(item){
                        return <li key={item.id}>{item.id}:{item.text}</li>
                    })
                    }
                </ul>
            </div>
        )
    }
}
