import React, { Component } from 'react';
import './doneLis.css'
class MyList extends React.Component {
    constructor(props){
        super(props);
    }
    myClick(ite){
        if(!ite[2]){
            if(localStorage.done===undefined||localStorage.done===""){
                localStorage.done=ite[0];
            }else {
                localStorage.done+=","+ite[0];
            }
            this.props.mytodo.splice(ite[1],1);
            localStorage.todo=this.props.mytodo.toString();
        }else {
            if(localStorage.todo===undefined||localStorage.todo===''){
                localStorage.todo=ite[0];
            }else {
                localStorage.todo+=','+ite[0];
            }
            this.props.mytodo.splice(ite[1],1);
            localStorage.done=this.props.mytodo.toString();
        }
        this.props.updateSate();
    }
    deleteDiv(obj){
        if(!obj[1]){
            this.props.mytodo.splice(obj[0],1);
            localStorage.todo=this.props.mytodo.toString();
        }else {
            this.props.mytodo.splice(obj[0],1);
            localStorage.done=this.props.mytodo.toString();
        }
        this.props.updateSate();
    }
    render() {
        let newTodo=this.props.mytodo.map((item,n)=>{
            return(
                <div key={n} className="mydiv">
                    <span className="myinput" ><input type="checkbox" onChange={this.myClick.bind(this,[item,n,this.props.mycheck])} checked={this.props.mycheck} />
                    <span onClick={this.myClick.bind(this,[item,n,this.props.mycheck])}>{item}</span></span>
                    <div className="mybutton" onClick={this.deleteDiv.bind(this,[n,this.props.mycheck])}>删除</div>
                </div>
            )
        });
        return (
            <div>
                {newTodo}
            </div>
        );
    }
}

export default MyList;
