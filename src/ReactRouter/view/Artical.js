import React, { Component } from 'react';
import {NavLink as Link} from 'react-router-dom'

//query传参
//动态路由 /path/:id
//使用state 隐式传参

class Artical extends Component {
  render() {
    // 隐式传参的参数不会现实在地址栏里
    return (
      <div> 
          <Link to='/art/1'>文章一</Link>
          <br/>
          <Link to={
            {pathname:'/art/2',
            state:{
                from:"art隐式传参"
              }
            }
            }>
              文章二
          </Link>
      </div>
    );
  }
}


export default Artical