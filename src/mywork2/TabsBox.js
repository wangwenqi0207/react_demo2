import React, { Component } from 'react'
import './Index.css'
import './TabsBox.css'
import AppNormTotal from './AppNormTotal'
import AppNormChart from './AppNormChart'


import { Tabs } from 'antd';

const { TabPane } = Tabs;


export default class TabsBox extends Component {
  constructor(props){
    super(props)
    this.state={
       keys:"1",
       tabpane:[
                {tab:"Service" ,keys:"1" ,},
                {tab:"SAL" ,keys:"2",},
                {tab:"DAL" ,keys:"3"},
                {tab:"CAL" ,keys:"4"},
                {tab:"CE Thread" ,keys:"5"},
            ],
       data:[
              {title:"ǰ Service ",num:"240"},
              {title:"ǰ Service ɹ",num:"40%"},
              {title:"ǰ Service ʱ (ms)",num:"40"},
              {title:"ǰ Service ʧ",num:"1240"},
          ],
      chartlist:[
        [
          {Data: "2010-01", sales: 564},
          {Data: "2010-02", sales: 657},
          {Data: "2010-03", sales: 565},
          {Data: "2010-04", sales: 787},
          {Data: "2010-05", sales: 566},
         ],
          [
          {Data: "2010-01", sales: 123},
          {Data: "2010-02", sales: 465},
          {Data: "2010-03", sales: 134},
          {Data: "2010-04", sales: 246},
          {Data: "2010-05", sales: 765},
         ],
          [
          {Data: "2010-01", sales: 453},
          {Data: "2010-02", sales: 435},
          {Data: "2010-03", sales: 223},
          {Data: "2010-04", sales: 755},
          {Data: "2010-05", sales: 344},
         ],
          [
          {Data: "2010-01", sales: 743},
          {Data: "2010-02", sales: 332},
          {Data: "2010-03", sales: 453},
          {Data: "2010-04", sales: 643},
          {Data: "2010-05", sales: 123},
         ],
      ]
    }
  }
    render() {
        return (
            <div className="">
                    <div className='app_norm_tabs'>
                      <Tabs onTabClick={this.handleChange.bind(this)}>
                        {this.state.tabpane.map(item => (
                            <TabPane key={item.keys} tab={item.tab} >
                                 <AppNormTotal data={this.state.data}></AppNormTotal>
                                 <AppNormChart  keys={this.state.keys} charts={this.state.chartlist}></AppNormChart>
                            </TabPane>
                        ))}
                    </Tabs>
                    </div>
            </div>
        )
    }
     handleChange(key){
        console.log(key)
        this.setState({
            keys:key
        });
        if(key ==1){
            this.setState({
             chartlist:[
           [
            {Data: "2010-01", sales: 564},
            {Data: "2010-02", sales: 657},
            {Data: "2010-03", sales: 565},
            {Data: "2010-04", sales: 787},
            {Data: "2010-05", sales: 566},
           ],
            [
            {Data: "2010-01", sales: 123},
            {Data: "2010-02", sales: 465},
            {Data: "2010-03", sales: 134},
            {Data: "2010-04", sales: 246},
            {Data: "2010-05", sales: 765},
           ],
            [
            {Data: "2010-01", sales: 453},
            {Data: "2010-02", sales: 435},
            {Data: "2010-03", sales: 223},
            {Data: "2010-04", sales: 755},
            {Data: "2010-05", sales: 344},
           ],
            [
            {Data: "2010-01", sales: 743},
            {Data: "2010-02", sales: 332},
            {Data: "2010-03", sales: 453},
            {Data: "2010-04", sales: 643},
            {Data: "2010-05", sales: 123},
           ],
          ]
          })
        }else if(key ==2){
          this.setState({
              chartlist:[
            [
            {Data: "2010-01", sales: 1223},
            {Data: "2010-02", sales: 435},
            {Data: "2010-03", sales: 223},
            {Data: "2010-04", sales: 755},
            {Data: "2010-05", sales: 344},
           ],
           [
            {Data: "2010-01", sales: 532},
            {Data: "2010-02", sales: 657},
            {Data: "2010-03", sales: 565},
            {Data: "2010-04", sales: 787},
            {Data: "2010-05", sales: 566},
           ],
            [
            {Data: "2010-01", sales: 743},
            {Data: "2010-02", sales: 332},
            {Data: "2010-03", sales: 453},
            {Data: "2010-04", sales: 643},
            {Data: "2010-05", sales: 123},
           ],
            [
            {Data: "2010-01", sales: 564},
            {Data: "2010-02", sales: 465},
            {Data: "2010-03", sales: 134},
            {Data: "2010-04", sales: 246},
            {Data: "2010-05", sales: 765},
           ],
          ]
          })
       }
      }
    }
