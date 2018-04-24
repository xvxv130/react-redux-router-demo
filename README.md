这个demo是用react+redux+router实现的一个小的demo。对我这个菜鸟收益很大，对redeux有了一个新的理解

redux-thunk 异步处理数据，主要在action-creater阶段进行应用
react-redux 优雅的链接react和dedux(可以忘记subscribe)
react-redux提供provider和connect两个接口来链接react和redux
  1.Provider组件在应用最外层，传入store即可，其他参数都不要传
  2.@connect(argument1,argumrnt2)接受两个参数：argument1主要是想要的传给props的state的数据，argument2是想要传给props的方法
   Connect负责从外部获取组件需要的参数，Connect可以用装饰器的方式来写
  使用装饰器优化connect，在create-react-app中需要npm run eject 弹出个性化配置
  npm install babel-plugin-transform-decorator-legacy 支持装饰器插件
  package.js里babel加上plugins配置



chrome安装redux调试工具安装
新建store的时候判断window.devToolsExtension,使用compose结合thunk和window.devToolsExtension。调试窗的redux选项卡实时查看state



React-router4 
  核心概念：动态路由、Route、Link、Switch
  npm install react-router-dom --save
  router4使用react-router-dom作为浏览器段的路由
  BrowserRouter 包裹整个应用
  Router路由对应渲染组件，可嵌套
  Link跳转专用

  url参数，Route组件参数可用冒号标识参数
  Redirect组件 跳转(重定向)
  Switch只渲染一个子Route组件




  router+redux
  app.js(组件页)
  auth.js(认证页)
  Auth.dedux.js（登录相关redux页）
  index.redux 内容
  Dashboard.js 路由逻辑
