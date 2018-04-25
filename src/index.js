import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux'//compose对函数进行组合
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import './config'
import 'antd-mobile/dist/antd-mobile.css'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
// import {counter} from './index.redux'
import reducers from './reducer'
import Auth from './Auth'
import Dashboard from './Dashboard'


const store=createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));

// 登录
//     没有登录信息 统一跳转login
// 页面  导航+显示+注销
//     一营
//     二营
//     骑兵连    

 ReactDOM.render(
        (<Provider  store={store}>
            <BrowserRouter>
                <Switch>
                     {/* 路由对应渲染模版，exact表明完全匹配 */}
                    <Route path='/login' component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='/dashboard'></Redirect>
            
                </Switch>
            </BrowserRouter>
         </Provider>),
         document.getElementById('root')
        );



