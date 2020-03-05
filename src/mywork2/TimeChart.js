import React, { Component } from 'react'
import './TimeChart.css'
import { DatePicker,TimePicker  } from 'antd';
import { Button } from 'antd';
import moment from 'moment';
import G2 from '@antv/g2';


const dateFormat = 'YYYY/MM/DD';
const format = 'HH:mm';


export default class TimeChart extends Component {
    constructor(props){
        super(props)
        this.state={
            data:this.props.propsChart,
            toFather:false,
            keys:this.props.keys,
            container:'time_chart_container'
        }
        this.toParent =this.toParent.bind(this,this.state.toFather)
        this.timeChart1 = this.timeChart1.bind(this)
    }
    componentDidMount() {
        // fetch('https:/g2.antv.vision/zh/examples/data/fireworks-sales.json')
        // .then(res => res.json())
        // .then(data => {
        // console.log("data",data)
        // let data =this.props.chartlist[0]
        // console.log('chartlist[0]',this.state.data[0])
        let container = this.state.container
        let keys = this.state.keys
        const chart = new G2.Chart({
          container: container + keys,
          forceFit: true,
          height: 230,
          padding: [ 20, 40, 50, 50 ]
        });
        chart.source(this.state.data);
        chart.scale('Data', {
          range: [ 0, 1 ],
          tickCount: 10,
          type: 'timeCat'
        });
        chart.tooltip({
          crosshairs: 'y',
          share: true
        });
        chart.legend({
          attachLast: true
        });
        chart.line().position('Data*sales');
        chart.render();
      // }); 
      }
    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         data:nextProps.propsChart,
    //         keys:nextProps.keys
    //     },()=>{
    //     // console.log("data",data)
    //     let container = this.state.container
    //     let keys = this.state.keys
    //     // fetch('https:/g2.antv.vision/zh/examples/data/fireworks-sales.json')
    //     // .then(res => res.json())
    //     // .then(data => {
    //     // console.log("data",data)
    //     // let data =this.props.chartlist[0]
    //     // console.log('chartlist[0]',this.state.data[0])
    //     const chart = new G2.Chart({
    //       container: container + keys,
    //       forceFit: true,
    //       height: 230,
    //       padding: [ 20, 40, 50, 50 ]
    //     });
    //     chart.source(this.state.data);
    //     chart.scale('Data', {
    //       range: [ 0, 1 ],
    //       tickCount: 10,
    //       type: 'timeCat'
    //     });
    //     chart.tooltip({
    //       crosshairs: 'y',
    //       share: true
    //     });
    //     chart.legend({
    //       attachLast: true
    //     });
    //     chart.line().position('Data*sales');
    //     chart.render();
    //   // }); 
    // });
    // }
    render() {
        // console.log('父元素Chart',this.props.propsChart)
        // console.log('display',this.props.display)
        return (
            <div className='time_chart' style={this.props.display}>
                <div className='time_chart_title'>
                    <h4>总量</h4>
                    <p className='close_chart' onClick={ this.toParent }>X</p>
                </div>
                <div className='time_chart_change'>
                    <span>时间筛选：</span>
                        <DatePicker defaultValue={moment('2019/04/01', dateFormat)} format={dateFormat}/>
                        <TimePicker defaultValue={moment('12:08', format)} format={format}  className='time_picker'/>
                            <span className='connect'>~</span>
                        <DatePicker defaultValue={moment('2019/04/01', dateFormat)} format={dateFormat}/>
                        <TimePicker defaultValue={moment('12:08', format)} format={format}  className='time_picker'/>
                </div>
                <div className='time_chart_change'>
                    <span>对比时间：</span>
                    <Button>昨日</Button>
                    <Button>7天前</Button>
                    <Button>15天前</Button>
                    <Button>30天前</Button>
                </div>
                <div className='time_chart_container' id={this.state.container+this.props.keys}></div>
            </div>
        )
    }
    //判断关闭 给父元素传值
    toParent(text){
        // console.log(text)
        this.props.pfn(text)
    }
    timeChart1(){
        let data = this.state.data
        let keys =this.state.keys
        // fetch('https:/g2.antv.vision/zh/examples/data/fireworks-sales.json')
        // .then(res => res.json())
        // .then(data => {
        // console.log("data",data)
        // let data =this.props.chartlist[0]
        // console.log('chartlist[0]',this.state.data[0])
        const chart = new G2.Chart({
          container: `time_chart_container${keys}`,
          forceFit: true,
          height: 230,
          padding: [ 20, 40, 50, 50 ]
        });
        chart.source(data);
        chart.scale('Data', {
          range: [ 0, 1 ],
          tickCount: 10,
          type: 'timeCat'
        });
        chart.tooltip({
          crosshairs: 'y',
          share: true
        });
        chart.legend({
          attachLast: true
        });
        chart.line().position('Data*sales');
        chart.render();
      // }); 
    }
}
