
import React, { Component } from 'react'
import './AppNormChart.css'
import G2 from '@antv/g2';
import TimeChart from './TimeChart'
import { Drawer, Button } from 'antd';
import Popup1 from './Popup1'
// import Popup2 from './Popup2'
// import Popup3 from './Popup3'
import DALPopup from './DALPopup'

export default class AppNormChart extends Component {
  //弹窗

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  constructor(props){
    super(props)
    this.state={
       container:"container",
       key:this.props.keys,
       data:this.props.charts,
       chartTitle:["Σ","ɹʣ%","ʱms","ʧΣ"],
       propsChart:this.props.charts[0],
       display:{display:'none'},
       keys:"0",
       maskSelected:false,
       visible: false,
    }
    this.chart1=this.chart1.bind(this);
    this.pfn = this.pfn.bind(this)
    this.toParentClose = this.toParentClose.bind(this)
  }

  chart1(){
     // fetch('https:/g2.antv.vision/zh/examples/data/fireworks-sales.json')
        // .then(res => res.json())
        // .then(data => {
        // console.log("data",data)
        // let data =this.props.chartlist[0]
        // console.log('chartlist[0]',this.state.data[0])
          let data =this.state.data[0]
          let container = this.state.container
          let key = this.state.key
          const chart = new G2.Chart({
            container: container+key+0,
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
  chart2(){
     // fetch('https:/g2.antv.vision/zh/examples/data/fireworks-sales.json')
        // .then(res => res.json())
        // .then(data => {
        // console.log("data",data)
        // let data =this.props.chartlist[0]
        // console.log('chartlist[0]',this.state.data[0])
          let data =this.state.data[1]
          let container = this.state.container
          let key = this.state.key
          const chart = new G2.Chart({
            container: container+key+1,
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
  chart3(){
     // fetch('https:/g2.antv.vision/zh/examples/data/fireworks-sales.json')
        // .then(res => res.json())
        // .then(data => {
        // console.log("data",data)
        // let data =this.props.chartlist[0]
        // console.log('chartlist[0]',this.state.data[0])
          let data =this.state.data[2]
          let container = this.state.container
          let key = this.state.key
          const chart = new G2.Chart({
            container: container+key+2,
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
            showTitle: false,
            itemTpl: '<div class="g2-tooltip-list-item" style="background-color:#fff;width:205px;height:60px;">'
                    + '<p style="color:rgba(0,0,0,0.447)">19:03</p>'
                    + '<div style="dispaly:flex">'
                    + '<a style="display:-webkit-inline-box;width:6px;height:6px;border-radius:50%;background-color:rgb(0,153,255);margin-right:5px;"></a>'
                    + `<span style="color:rgba(51,51,51,0.647);font-size:14px;margin-right:60px;">总量</span>`
                    + `<span style="color:rgba(51,51,51);font-size:14px;margin-right:8px;">121</span>`
                    + `<span style="color:rgba(0,153,255);font-size:14px;margin-right:8px;">分布</span>`
                    + `<span style="color:rgba(0,153,255);font-size:14px;margin-right:8px;">详情</span>`
                    + '</div>'
                    + '</div>',
        });
          chart.legend({
            attachLast: true
          });

          chart.line().position('Data*sales');
          chart.render();
        // });
  }
  chart4(){
     // fetch('https:/g2.antv.vision/zh/examples/data/fireworks-sales.json')
        // .then(res => res.json())
        // .then(data => {
        // console.log("data",data)
        // let data =this.props.chartlist[0]
        // console.log('chartlist[0]',this.state.data[0])
          let data =this.state.data[0]
          let container = this.state.container
          let key = this.state.key
          const chart = new G2.Chart({
            container: container+key+3,
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
  componentDidMount(){
       this.chart1()
       this.chart2()
       this.chart3()
       this.chart4()
  }
    render() {
      let chartTitle = this.state.chartTitle;
      // console.log(chartTitle)
      // console.log("this.state.data",this.state.data)
        return (
              <div className="app_norm_chart">
                 <TimeChart propsChart={this.state.propsChart}
                            display={this.state.display}
                            pfn={this.pfn}
                            keys={this.state.keys}
                 ></TimeChart>
                  {
                  chartTitle.map((item,keys) =>{
                    return <div className="app_norm_chart_view" key={keys}>
                          <div className='app_norm_chart_title'>
                            <h4>{item}
                            <Button type="primary" onClick={this.showDrawer} size='small'>
                              分布
                            </Button>
                            <Drawer
                              placement="right"
                              closable={false}
                              onClose={this.onClose}
                              visible={this.state.visible}
                            >
                             <DALPopup toParentClose={this.toParentClose}></DALPopup>
                            </Drawer>
                            </h4>
                            <p onClick={this.PopupChart.bind(this,keys)}>icon</p>
                          </div>
                          <div id={this.state.container+this.state.key+keys}></div>
                  </div>
                  })
                }
                <div className={this.state.maskSelected ? "mask" : ""}></div>
                {/* <Popup1></Popup1> */}
                {/* <Popup3></Popup3> */}
                {/* <DALPopup></DALPopup> */}
              </div>
        )
    }

    PopupChart(keys){
      // console.log("keys",keys)
      this.setState({
        keys:keys
      })
        if(keys==0){
          this.setState({
            propsChart:this.state.data[0],
            display:{dispaly:"block"},
            maskSelected:true,
            keys:"0",
          })
        }else if(keys==1){
          this.setState({
            propsChart:this.state.data[1],
            display:{dispaly:"block"},
            maskSelected:true,
            keys:"1",
          })
        }else if(keys==2){
          this.setState({
            propsChart:this.props.charts[2],
            display:{dispaly:"block"},
            maskSelected:true,
            keys:"2",
          })
        }else if(keys==3){
          this.setState({
            propsChart:this.props.charts[3],
            display:{dispaly:"block"},
            maskSelected:true,
            keys:"3",
          })
        }
    }

    //弹窗子传父点击关闭
    pfn(text){
        // console.log(text)
        if(text==false){
          this.setState({
            display:{display:'none'},
            maskSelected:false,
          })
        }
    }
    //抽屉子传父点击关闭2
    toParentClose(text){
      // console.log(text)
      if(text==false){
        this.setState({
          visible: false,
        });
      }
  }
}
