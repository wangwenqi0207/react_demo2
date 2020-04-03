import React, { Component } from 'react';
import {Chart} from '@antv/g2';

export default class Demo2 extends Component {

  render() {
    return (
      <div> 
        <div id='container'></div>
      </div>
    );
  }
  componentDidMount(){
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
      ];
      const chart = new Chart({
        container: 'container',
        autoFit: true,
        height: 500,
      });
      
      chart.source(data);
      chart.scale('value', {
        min: 0,
        nice: true,
      });
      chart.scale('year', {
        range: [0, 1],
      });
      
      chart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
        shared: true,
        showTitle: false,
        itemTpl: `<li>{year} 有 {value} 个</li>`,
      });
      
      chart
        .line()
        .position('year*value')
        .tooltip('year*value', (year, value) => {
          return {
            year: `${year} 年`,
            value: value,
          };
        });
        //点击绘图区域内部时显示 tooltip
        // chart.interaction('tooltip', {
        //     start: [{ trigger: 'plot:click', action: 'tooltip:show' }],
        //   });
        //
        // registerInteraction('tooltip', {
        //     start: [{ trigger: 'plot:mousemove', action: 'tooltip:show' }],
        //     end: [{ trigger: 'plot:mouseleave', action: 'tooltip:hide' }],
        //   });
        // 点击选中，允许取消
        // registerInteraction('element-selected', {
        //     start: [{ trigger: 'element:click', action: 'element-seleted:toggle' }],
        // });
        //// tooltip 显示时触发
        // chart.on('tooltip:show', ev => {
        //     // x: 当前鼠标的 x 坐标,
        //     // y: 当前鼠标的 y 坐标,
        //     // tooltip: 当前的 tooltip 对象
        //     // items: 数组对象，当前 tooltip 显示的每条内容
        //     // title: tooltip 标题
        //     console.log('hello world')
        //   });
        // tooltip 内容变更时触发
        chart.on('tooltip:change', ev => {
            // x: 当前鼠标的 x 坐标,
            // y: 当前鼠标的 y 坐标,
            // tooltip: 当前的 tooltip 对象
            // items: 数组对象，当前 tooltip 显示的每条内容
            // title: tooltip 标题
            // console.log('hello world')
        });
      chart.render();
  }
}
