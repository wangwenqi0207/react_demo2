import React, { Component } from 'react'
import './Index.css'
import TabsBox from './TabsBox'


export default class AppNorm extends Component {
   constructor(props){
    super(props)
    this.state={
       
    }
  }
    render() {
        return (
            <div className="norm_box">
              <div className='app_norm'>
                  <h4>Ӧָ</h4>
                  <TabsBox></TabsBox>
              </div>
            </div>
        )
    }
}
