这个demo是用react+redux+router实现的一个小的demo。对我这个菜鸟收益很大，对redeux、router跟react的结合使用有了一个新的理解
  router+redux
  app.js(组件页)
  auth.js(认证页)
  Auth.dedux.js（登录相关redux页）
  index.redux 内容
  Dashboard.js 路由逻辑
  
index.js作为主入口，其中分别设置了login跟dashboard路由
config.js是请求统一拦截器，axios来截器统一loading处理使用antd-mobile组件
auth.js和dashboard.js分别模拟登录页跟用户页面，index.redux.js和auth.redux.js分别是对这两个分页进行数据跟状态管理
reducer.js合并了index.redux.js和auth.redux.js中的定义的reducer，然后在index中统一引用创建tore。利用‘react-redux’中的‘provider’把数据传入组件
server/server.js 是用简单的express跟mogoose来模拟返回数据，来跟react模拟前后端的数据传输

细节记录

redux调试工具 
1.新建store的时候判断window.devToolsExtension
2.使用compose结合thunk和window.devToolsExtension
3.调试窗的redux选项卡，实时看到state
redux-trunk为中间件(作为异步请求数据)，需要使用applyMiddleware开启thunk中间件,主要来修改action-creater的异步书写方式


redux-thunk 异步处理数据，主要在action-creater阶段进行应用
react-redux 优雅的链接react和dedux(可以忘记subscribe)
react-redux提供provider和connect两个接口来链接react和redux
  1.Provider组件在应用最外层，传入store即可，其他参数都不要传
  2.@connect(argument1,argumrnt2)接受两个参数：argument1主要是想要的传给props的state的数据，argument2是想要传给props的方法
   Connect负责从外部获取组件需要的参数，Connect可以用装饰器的方式来写
  使用装饰器优化connect，在create-react-app中需要npm run eject 弹出个性化配置
  npm install babel-plugin-transform-decorator-legacy 支持装饰器插件
  package.js里babel加上plugins配置




React-router4 
  核心概念：动态路由、Route、Link、Switch
  npm install react-router-dom --save
  router4使用react-router-dom作为浏览器段的路由
  BrowserRouter 包裹整个应用
  Router路由对应渲染组件，可嵌套
  Link跳转专用

  复杂redux应用，多个reducer，用combineReducers合并
  Redirect组件 跳转(重定向)
  Switch只渲染一个子Route组件

 



