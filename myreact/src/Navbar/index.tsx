import React from "react";

interface Iprops{
    title?:string;
    leftShow?:boolean;
    rightShow?:boolean
    data?:{name:string}
}

export default class Navbar extends React.Component{
    
    state={
        //state只能内部使用，外面无法改变
    }
    props:Iprops={}
/*
    //props是父组件传来的  this.props
    props:Iprops={
        leftShow:false,
        rightShow:false,
        title:"",
        data:{
            name:""
        }
    }
*/
    static defaultProps={leftShow:true,}

    render(){
        return(
            <nav>
                { this.props.leftShow && <button>主页</button>}
                <div style={{display:"inline"}}>Navbar-{this.props.title}</div>
                {this.props.rightShow && <button>动态</button>}
                {this.props.data && <div>{this.props.data.name}</div> }
            </nav>
        )
    }
}