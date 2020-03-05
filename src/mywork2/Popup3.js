
import React, { Component } from 'react'
import './Popup3.css'
import  G2  from '@antv/g2';


export default class Popup3 extends Component {
   constructor(props){
    super(props)
    this.state={
       
    }
    this.DisPopChart =  this.DisPopChart.bind(this)
    this.DisPopChart2 =  this.DisPopChart2.bind(this)
    this.DisPopChart3 =  this.DisPopChart3.bind(this)
  }
  componentDidMount(){
    this.DisPopChart()
    this.DisPopChart2()
    this.DisPopChart3()
  }
    render() {
        return (
            <div className="distribution_popup">
              <div className='details_second_tit1'>
                    <h4>Service 接口概览ֲ</h4>
                    <p>X</p>
              </div>
              <div className='distribution_popup_cahrts'>
                <div className='distribution_popup_cahrts_top'>
                  <div id="mountNode" className='chartView'></div>
                  <div id="mountNode2"  className='chartView'></div>
              </div>
               <div id="mountNode3"  className='chartView2'></div>
            </div>
            </div>

        )
    }
    DisPopChart(){
        var data = [{
        year: '1951 ',
        sales: 38
      }, {
        year: '1952 ',
        sales: 52
      }, {
        year: '1956 ',
        sales: 61
      }, {
        year: '1957 ',
        sales: 145
      }, {
        year: '1958 ',
        sales: 48
      }, {
        year: '1959 ',
        sales: 38
      }, {
        year: '1960 ',
        sales: 38
      }, {
        year: '1962 ',
        sales: 38
      }];
      var chart = new G2.Chart({
        container: 'mountNode',
        forceFit: true,
        height: 220,
      });
      chart.source(data);
      chart.scale('sales', {
        tickInterval: 20
      });
      chart.interval().position('year*sales');
      //衡柱状图
      chart.coord({
        transposed: true
      });
      chart.render();
    }
    DisPopChart2(){
        var data = [{
        year: '1951 ',
        sales: 38
      }, {
        year: '1952 ',
        sales: 52
      }, {
        year: '1956 ',
        sales: 61
      }, {
        year: '1957 ',
        sales: 145
      }, {
        year: '1958 ',
        sales: 48
      }, {
        year: '1959 ',
        sales: 38
      }, {
        year: '1960 ',
        sales: 38
      }, {
        year: '1962 ',
        sales: 38
      }];
      var chart = new G2.Chart({
        container: 'mountNode2',
        forceFit: true,
        height: 220,
      });
      chart.source(data);
      chart.scale('sales', {
        tickInterval: 20
      });
      chart.interval().position('year*sales');
      chart.render();
    }
     DisPopChart3(){
        var data = [{
        year: '1951 ',
        sales: 38
      }, {
        year: '1952 ',
        sales: 52
      }, {
        year: '1956 ',
        sales: 61
      }, {
        year: '1957 ',
        sales: 145
      }, {
        year: '1958 ',
        sales: 48
      }, {
        year: '1959 ',
        sales: 38
      }, {
        year: '1960 ',
        sales: 38
      }, {
        year: '1962 ',
        sales: 38
      }];
      var chart = new G2.Chart({
        container: 'mountNode3',
        forceFit: true,
        height: 300,
      });
      chart.source(data);
      chart.scale('sales', {
        tickInterval: 20
      });
      chart.interval().position('year*sales');
      chart.render();
    }
}
