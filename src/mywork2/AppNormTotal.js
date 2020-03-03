import React, { Component } from 'react'
import './AppNormTotal.css'

export default class AppNormTotal extends Component {
    render() {
        // console.log(this.props.data)
        let data = this.props.data
        return (
            <div className='app_norm_total'>
              {
                data.map(item=>(
                  <div className='app_norm_total_content'>
                    <p>{item.title}</p>
                    <h2>{item.num}</h2>
                </div>
               ))
              }
            </div>
        )
    }
}

