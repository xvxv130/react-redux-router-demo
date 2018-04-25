import axios from 'axios';
import {Toast} from 'antd-mobile'//ant-design-mobile 蚂蚁出品

// 拦截请求
axios.interceptors.request.use(function(config){
    Toast.loading('加载中',0);
    return config
})

// 拦截响应
axios.interceptors.response.use(function(config){
    setTimeout(()=>{
        Toast.hide();
        
    },2000)
    return config 
    
})