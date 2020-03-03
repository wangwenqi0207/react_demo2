安装redux 可在任何框架使用
npm install redux --S

安装react redux  react使用的redux
npm install react-redux --S


Provider：它是react-redux 提供的一个 React 组件，作用是把state传给它的所有子组件，也就是说 当你用Provider传入数据后 ，下面的所有子组件都可以共享数据，十分的方便。
Provider的使用方法是：把Provider组件包裹在最外层的组件，如代码所示，把整个APP组件给包裹住，然后在Provider里面把store传过去。注意：一定是在Provider中传store，不能在APP组件中传store。
connect：它是一个高阶组件 所谓高阶组件就是你给它传入一个组件，它会给你返回新的加工后的组件，注重用法倒简单，深究其原理就有点难度。这里不做connect的深究，主要是学会它的用法，毕竟想要深究必须先会使用它。首先它有四个参数([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])，后面两个参数可以不写，不写的话它是有默认值的。我们主要关注下前两个参数mapStateToProps和mapDispatchToProps。
connect的使用方法是：把指定的state和指定的action与React组件连接起来，后面括号里面写UI组件名。

除此之外demo中还多出了mapStateToProps mapDispatchToProps 他们又有什么作用呢？通俗一点讲的话就是：
比如你在一个很深的UI组件里 当你想要获得store的数据就很麻烦。mapStateToProps就是告诉store你需要哪个state，需要什么数据就直接在mapStateToProps中写出来，然后store就会返回给你。同理，如果你想要dispatch派发一些行为怎么办呢，mapDispatchToProps就是告诉store你要派发什么行为，需要派发什么行为就在mapDispatchToProps中写出来，然后store就会把你想要派发的行为告诉reducer，接下来大家都应该知道了 reducer就会根据旧的state和action返回新的state。


/*
dispatch用来派发action，store判断执行哪个action
dispatch的作用就是告诉reducer 我给你action, 你要根据我的action.type返回新的state。 
然后reducer就会根据action的type，返回新的state。
 */
store.dispatch(increase)


npm install less-loader less --save -dev
npm run eject   来暴露webpack的配置文件，你会发现多了config为名的文件夹。
最后是我们需要手动在webpack.config.js里配置less


数据类型检查：
npm install prop-types --save

异步中间件：
npm install redux-thunk --save


1.action文件中定义了函数方法，组件中去引入和使用action中的方法函数
2.action文件中未定义方法，是对象，组件用connect(mapStateToProps, mapDispatchToProps)(ReactRedux)
mapDispatchToProps函数去解析reducer中action的type去判断逻辑，返回新数据
组件中自定义一个方法接收add: () => dispatch({ type: 'add' }),



----------------------------------------
安装router
npm install react-router-dom
npm install --save-dev 安装到开发环境 例如 gulp ，babel，webpack 一般都是辅助工具
npm install --save 安装到生产环境 如 vue ,react 等

安装ant Design
npm i antd -S
npm i react-app-rewired customize-cra -D
npm install --save react-scripts
npm i babel-plugin-import -D