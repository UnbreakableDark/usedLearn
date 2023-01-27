import React from "react";
import Navbar from "./Navbar";



export default class App extends React.Component {
    user={name:"john"}
    render(){
        return(
            <nav>
                <div>
                    <h2>首页</h2>
                    <Navbar title="首页"></Navbar>
                </div>

                <div>
                    <h2>空间</h2>
                    <Navbar title="空间" leftShow={true} rightShow={true}></Navbar>
                </div>

                <div>
                    <h2>动态</h2>
                    
                    <Navbar title="动态" data={this.user}></Navbar>
                </div>
            </nav>
        )
    }
}