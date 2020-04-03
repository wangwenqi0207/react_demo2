//
import React, { Component } from 'react'
import './CALPopup.css'
import { Table } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'money',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '5',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
      },
      {
        key: '6',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '7',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '8',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
      },
      {
        key: '9',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '10',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
      },
  ];

  const columns2 = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'money',
      },

  ];
  
  const data2 = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '5',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
      },
  ];
  const columns3 = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
  ];
  
  const data3 = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '5',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
      },
  ];


export default class CALPopup extends Component {
   constructor(props){
    super(props)
    this.state={

    }
  }

    render() {
        return (
            <div className="DAL_popup">
              <div className='DAL_popup_tit1'>
                    <h4>CAL详情ֲ</h4>
                    <p>X</p>
              </div>
              <div className='app_norm_tabs'>
                    <Tabs>
                        <TabPane key="1" tab="数据源" >
                        <Table
                            columns={columns}
                            dataSource={data}
                            bordered
                        />
                        </TabPane>
                        <TabPane key="2" tab="服务端性能" >
                            <h4>Instance RT</h4>
                            <Table
                                columns={columns2}
                                dataSource={data2}
                                bordered
                            />
                            <h4>MySQL 集群RT</h4>
                            <Table
                                columns={columns3}
                                dataSource={data3}
                                bordered
                            />
                        </TabPane>
                        <TabPane key="3" tab="Top SQL" >
                        <h4>Tair QPS</h4>
                            <Table
                                columns={columns2}
                                dataSource={data2}
                                bordered
                            />
                            <h4>Tbase QPS</h4>
                            <Table
                                columns={columns3}
                                dataSource={data3}
                                bordered
                            />
                            <h4>TCP 重传</h4>
                            <Table
                                columns={columns3}
                                dataSource={data3}
                                bordered
                            />
                        </TabPane>
                    </Tabs>
                </div>
                <div style={{width:"100%",height:"300px"}}></div>
            </div>
        )
    }
}
