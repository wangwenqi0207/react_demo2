import React, { Component } from 'react'
import './relevance.css'
import Relevancenum from './Relevancenum'
import Tabschange from './Tabschange'
// import $ from 'jquery'


export default class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state={
            data_num:{
                num1:45,
                num2:40
            },
            show:true,
        }
    }
    componentDidMount(){
        // console.log($("h4").text()) 
        // $("#slideDown").click(function(event) {
        //     $('.app_relevance').animate({'height':'430px'}).delay(500);
        //     // $(".app_relevance").height(430);
        //     $(".Tabschange").slideDown(500);
        //     $('.slideButtons').css({'margin-top':'0px'});
        //     event.stopPropagation();
        //     return false;
        // });
        // $("#slideUp").click(function(event) {
        //     $('.app_relevance').animate({'height':'130px'}).delay(500);
        //     // $(".app_relevance").height(130);
        //     $(".Tabschange"). slideUp(500);
        //     $('.slideButtons').css({'margin-top':'10px'});
        //     event.stopPropagation();
        //     return false;
        // });
    }
    render() {
        return (
            <div className='App'>
                <div className="app_relevance"  style={{height: (this.state.show) ? "430px" : "130px"}}>
                    <h4>应用关联业务</h4>
                        <Relevancenum data_num={this.state.data_num}/>
                        <Tabschange className="Tabschange"/>
                    </div>
                <div className='slideButtons' onClick={this.slideButton.bind(this)}>
                    <button id="slideUp">{this.state.show ? "点击收起∧":"查看更多信息∨"}</button>
                </div>
            </div>
        )
    }
    slideButton(){
        this.setState({
            show:! this.state.show
        })
    }
}


