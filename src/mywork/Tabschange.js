
import React, { Component } from 'react'
import { Tabs } from 'antd';
import './Tabschange.css'

import Tab1 from './Tab1'
import { Children } from 'react';

const { TabPane } = Tabs;

// const tabBar = {
// backgroundColor: "skyblue", //驼峰法
// };

export default class Tabschange extends Component {
    constructor(props) {
        super(props)
        //activeKey={this.state.activeKey}
        this.state = {
            keys: "1",
            tabpane: [
                { tab: "花呗页面相关数据折线", keys: "1", },
                { tab: "贷后入账打款", keys: "2", },
                { tab: "延期还款", keys: "3" },
                { tab: "交易后分期", keys: "4" },
                { tab: "账单分期", keys: "5" },
                { tab: "贷后入账打款", keys: "6", },
                { tab: "延期还款", keys: "7" },
                { tab: "交易后分期", keys: "8" },
                { tab: "账单分期", keys: "9" },
            ],
            data: [
                { Data: "2010-01", sales: 564 },
                { Data: "2010-02", sales: 657 },
                { Data: "2010-03", sales: 565 },
                { Data: "2010-04", sales: 787 },
                { Data: "2010-05", sales: 566 },
            ]
        }
    }
    render() {
        return (
            <div className="Tabschange">
                <Tabs tabPosition="left" onTabClick={this.handleChange.bind(this)} >
                    {this.state.tabpane.map(item => (
                        <TabPane key={item.keys} tab={item.tab} >
                            <Tab1 keys={this.state.keys} data={this.state.data}></Tab1>
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
    handleChange(key) {
        console.log(key)
        this.setState({
            keys: key
        });
        if (key == 1) {
            this.setState({
                data: [
                    { Data: "2010-01", sales: 564 },
                    { Data: "2010-02", sales: 657 },
                    { Data: "2010-03", sales: 565 },
                    { Data: "2010-04", sales: 787 },
                    { Data: "2010-05", sales: 566 },
                ]
            })
        } else if (key == 2) {
            this.setState({
                data: [
                    { Data: "2010-01", sales: 342 },
                    { Data: "2010-02", sales: 1132 },
                    { Data: "2010-03", sales: 454 },
                    { Data: "2010-04", sales: 634 },
                    { Data: "2010-05", sales: 232 },
                ]
            })
        }
    }
}
