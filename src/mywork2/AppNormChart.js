
import React, { Component } from 'react'
import './AppNormChart.css'
import G2 from '@antv/g2';
import TimeChart from './TimeChart'


export default class AppNormChart extends Component {
  constructor(props){
    super(props)
    this.state={
       container:"container",
       key:this.props.keys,
       data:this.props.charts,
       chartTitle:["Σ","ɹʣ%","ʱms","ʧΣ"],
       propsChart:this.props.charts[0],
       display:{display:'none'}
    }
    this.chart1=this.chart1.bind(this);
    this.pfn = this.pfn.bind(this)
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
        return (
              <div className="app_norm_chart">
                 <TimeChart propsChart={this.state.propsChart}
                            display={this.state.display}
                            pfn={this.pfn}
                            container={this.state.container}
                 ></TimeChart>
                  {
                  chartTitle.map((item,keys) =>{
                    return <div className="app_norm_chart_view" key={keys}>
                          <div className='app_norm_chart_title'>
                            <h4>{item}</h4>
                            <p onClick={this.PopupChart.bind(this,keys)}>icon</p>
                          </div>
                          <div id={this.state.container+this.state.key+keys}></div>
                  </div>
                  })
                }
              </div>
        )
    }

    PopupChart(keys){
      this.setState({
        display:{dispaly:"block"}
      })
      console.log(keys)
        if(keys==1){
          this.setState({
            propsChart:this.props.charts[0]
          })
        }else if(keys==2){
          this.setState({
            propsChart:this.props.charts[1]
          })
        }else if(keys==3){
          this.setState({
            propsChart:this.props.charts[2]
          })
        }else if(keys==4){
          this.setState({
            propsChart:this.props.charts[3]
          })
        }
    }

    //子传父点击关闭
    pfn(text){
        // console.log(text)
        if(text==false){
          this.setState({
            display:{display:'none'}
          })
        }
    }
}
