import React from "react";

export default class App extends React.Component {
    state={ count:1,a:20}

    render(){
        return <div>
            {this.state.count}
            <button onClick={()=>this.clickAdd()}>add</button>
            {this.state.a}
        </div>
    }

    clickAdd(){
        //连续调用多次  会合并
        this.setState({
            count:this.state.count+1
        })

        this.setState({
            count:this.state.count+1
        })

        this.setState({
            a:30
        })
    }
}