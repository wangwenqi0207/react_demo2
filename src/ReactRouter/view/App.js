import React, { Component } from 'react';
import {Route,NavLink as Link,Redirect,Switch} from 'react-router-dom'
//引入antd
// import { Button } from 'antd';
import Home from './Home'
import Article from './Artical'
import Users from './User'
import ArticalDetail from './ArticalDetail'
import NotFound from './NotFound'

//exact 严格匹配
class App extends Component {
  render() {
    //console.log(this.props) //路由信息
    return (
      <div> 
          {/* <Button type='primary'>antd里面的组件</Button> */}
          <ul>
                <li><Link to='/home'>首页</Link></li>
                <li><Link to='/art'>文章</Link></li>
                <li><Link to='/user'>用户</Link></li>
          </ul>
        <Switch>
          {/* 路由可以通过component方法去渲染  也可以通过render，这两个是排他的，render必须是个方法*/}
            <Route path='/home' render={(routerProps)=>{
              //console.log(routerProps) //路由信息
              return <Home {...routerProps} x={1}/>
            }}></Route>
            <Route component={Article} path='/art' exact></Route>
            <Route component={ArticalDetail} path='/art/:id'></Route>
            <Route component={Users} path='/user'></Route>
            <Route component={NotFound} path='/404'></Route>
            {/* 默认跳到首页 */}
            <Redirect to='/home' from='/' exact></Redirect>
            <Redirect to='/404'></Redirect>
        </Switch>
     </div>
    );
  }
}


export default App