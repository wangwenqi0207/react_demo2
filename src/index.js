import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
// import App from './App';
// import Demofather from './components/Demo/Demofather';
// import TodoList from './components/Todo/TodoList';
// import Counter from './components/Hooks/UseState'

//ReactRedux-----------------------------------------------------
// import ReactRedux from './ReduxDemo/index'
// import ReactRedux from './ReduxDemo/index'
// import App from './ReduxDemo2/App'
// import App from './ReduxDemo3/App'
//Provider是react-redux提供的一个组件
import { Provider } from 'react-redux'
import store from './store/store'

//ReactRouter-----------------------------------------------------

// import App from './ReactRouter/view/App'
import {BrowserRouter as Router,Route} from 'react-router-dom'
// import {HashRouter as Router} from 'react-router-dom'
//Router是路由给需要用到的组件使用  Route是路由信息
// import {mainRouter} from './ReactRouter/routes'

//中文antd配置
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider } from 'antd'

//mywork-----------------------------------------------------------
//  import Demo1 from './mywork/Demo1'

//mywork2------------------------------------------------------------
import AppNorm from './mywork2/Index'

//antv--------------------------------------------
//import Demo1 from './components/Antv/Demo1'


// ReactDOM.render(
//     <ConfigProvider  locale={zhCN}>
//        <Provider store={store}>
//             <Router>
//                 <Route component={pp}></Route>   
//             </Router>
//        </Provider>
//        </ConfigProvider>A
// ,document.getElementById('root'));

ReactDOM.render(
            <AppNorm/>
,document.getElementById('root'));

//要做权限访问 没有登录不让进入
// ReactDOM.render(
//        <Provider store={store}>
//            <Router>
//            <Switch>
//                {/* 如果访问admin下面的页面，就要通过权限验证 */}
//                 <Route path='/admin' render={(routerProps)=>{
//                     return <App {...routerProps}/>
//                 }}/>
//                 {/* 这些login和404无需权限的页面可以直接渲染  引入mainRouter配置好了外层路由 可以通过url直接访问*/}
//                 {
//                     mainRouter.map(route=>{
//                         return <Route 
//                             key={route.pathname}
//                             path={route.pathname} 
//                             component={route.component}>  
//                         </Route>
//                     })
//                 }
//                 <Redirect to='/admin' from='/' exact></Redirect>
//                 <Redirect to='/404'></Redirect>
//             </Switch>
//             </Router>
//        </Provider>
// ,document.getElementById('root'));

