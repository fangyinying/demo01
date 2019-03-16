import React, { Component } from 'react';
// import Todo from './todolist'
import MyList from './doneList'
import './main.css'
class Main extends React.Component{
    constructor(){
        super();
        this.state={
            todolist:localStorage.todo?localStorage.todo.split(","):[],
            donelist:localStorage.done?localStorage.done.split(","):[],
        }
    }
    getData(e){
        if(e.keyCode===13){
            if(localStorage.todo===undefined||localStorage.todo===''){
                localStorage.todo=this.refs.input22.value;
            }else {
                localStorage.todo+=','+this.refs.input22.value;
            }
            this.setState({
                todolist:localStorage.todo?localStorage.todo.split(","):[],
                donelist:localStorage.done?localStorage.done.split(","):[]
            });
            this.refs.input22.value='';
        }
    }
    mychange(){
        this.setState({
            todolist:localStorage.todo?localStorage.todo.split(","):[],
            donelist:localStorage.done?localStorage.done.split(","):[]
        });
    }
    render(){
        return(
            <div>
                <div>
                    <input className="mysearch" type="text" ref="input22" placeholder="添加待办事项" onKeyDown={this.getData.bind(this)}/>
                </div>
            <div>
                <p>正在进行<span className="mycicrl">{this.state.todolist.length}</span></p>
                <MyList mytodo={this.state.todolist} updateSate={this.mychange.bind(this)} mycheck={false}/>
                </div>
                <div>
                <p>已经完成<span className="mycicrl mycolor">{this.state.donelist.length}</span></p>
                <MyList mytodo={this.state.donelist} updateSate={this.mychange.bind(this)} mycheck={true}/>
            </div>

            </div>
        );
    }
}
export  default Main