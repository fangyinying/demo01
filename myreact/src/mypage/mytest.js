import React, { Component } from 'react';
import Todolist from './todolist'
// import mying from './images/5.png'
import  './myText.css'
class Mytest extends React.Component {
    constructor(props){
        super(props);
        this.state={
            myClassName:this.props.effect?"cs-style-"+this.props.effect:"cs-style-1"
        }
    }
    render() {
        return (
            <div className={"grid "+this.state.myClassName}>
                <p>
                <figure>
                    <div><img src={this.props.imgsrc} alt=""/></div>
                    <figcaption>
                        <h3>{this.props.title}</h3>
                        <span>{this.props.subtitle}</span>
                        <a>{this.props.btntext}</a>
                    </figcaption>
                </figure>
                </p>
            </div>
        );
    }
}

export default Mytest;

