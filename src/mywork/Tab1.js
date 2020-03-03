import React, { Component } from 'react'
import G2 from '@antv/g2';

export default class Tab1 extends Component {

    componentDidMount(){
        // fetch('https:/g2.antv.vision/zh/examples/data/fireworks-sales.json')
        // .then(res => res.json())
        // .then(data => {
        //   console.log("data",data)
        let data =[
            {Data: "2010-01", sales: 564},
            {Data: "2010-02", sales: 657},
            {Data: "2010-03", sales: 565},
            {Data: "2010-04", sales: 787},
            {Data: "2010-05", sales: 566},
        ]
          const chart = new G2.Chart({
            container: 'container',
            forceFit: true,
            height: 270,
            padding: [ 20, 40, 50, 50 ]
          });
          chart.source(data);
          chart.scale('Data', {
            range: [ 0, 1 ],
            tickCount: 10,
            type: 'timeCat'
          });
          chart.axis('Data', {
            label: {
              textStyle: {
                fill: '#aaaaaa'
              }
            }
          });
          chart.axis('sales', {
            label: {
              textStyle: {
                fill: '#aaaaaa'
              },
              formatter: text => {
                return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
              }
            }
          });
          chart.tooltip({
            crosshairs: 'y',
            share: true
          });
          chart.legend({
            attachLast: true
          });
        //   chart.guide().dataMarker({
        //     top: true,
        //     content: '因政策调整导致销量下滑',
        //     position: [ '2014-01', 1750 ],
        //     style: {
        //       text: {
        //         fontSize: 13
        //       }
        //     },
        //     lineLength: 30
        //   });
  
          chart.line().position('Data*sales');
          chart.area().position('Data*sales');
          chart.render();
        // });
    }
    render() {
        return (
            <>
                <div id='container'></div>
            </>
        )
    }
    
}
