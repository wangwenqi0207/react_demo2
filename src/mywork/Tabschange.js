import React, { Component } from 'react'
import {Tabs} from 'antd';
import './Tabschange.css'

import Tab1 from './Tab1'
import Tab2 from './Tab2'

const { TabPane } = Tabs;

// const tabBar = {
//     backgroundColor: "skyblue",  //驼峰法
//   };

export default class  extends Component {
    constructor(props){
        super(props)
        //activeKey={this.state.activeKey}
        this.state={
            // key:"1",
            tabpane:[
                {tab:"花呗页面相关数据折线" ,keys:"1" ,clild:<Tab1/>},
                {tab:"贷后入账打款" ,keys:"2",clild:<Tab2/>},
                {tab:"延期还款" ,keys:"3"},
                {tab:"交易后分期" ,keys:"4"},
                {tab:"账单分期" ,keys:"5"},
                {tab:"贷后入账打款" ,keys:"6",clild:<Tab2/>},
                {tab:"延期还款" ,keys:"7"},
                {tab:"交易后分期" ,keys:"8"},
                {tab:"账单分期" ,keys:"9"},
            ]
        }
    }
    render() {
        return (
            <div className="Tabschange">
                    <Tabs tabPosition="left" onTabClick={this.handleChange.bind(this)} >
                    {this.state.tabpane.map(item => (
                        <TabPane key={item.keys} tab={item.tab} >
                            {item.clild}
                        </TabPane>
                    ))}
                    </Tabs>
                
                
                    {/* <TabPane tab="花呗页面相关数据折线" key="1">
                        <Tab1/> 
                    </TabPane>
                    <TabPane tab="贷后入账打款" key="2">
                         <Tab2/> 
                    </TabPane>
                    <TabPane tab="延期还款" key="3">
                        sss
                    </TabPane>
                    <TabPane tab="交易后分期" key="4">
                        hhh
                    </TabPane>
                    <TabPane tab="账单分期" key="5">
                       hhh
                    </TabPane> */}
               
            </div>
        )
    }
    handleChange(key){
        // console.log(key)
        // this.setState({
        //     key:key
        // })
    }
}
