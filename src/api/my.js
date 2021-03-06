import axios from 'axios';

// 创建axios实例
import { mainUrl } from '../config'
const my = axios.create({
    baseURL: mainUrl
});

function get(path,params,config={}){
    return my.get(path,{
        ...config,
        params
    })
}

function post(path,data={},config={}){
    return my.post(path,data,config)
}

export default {
    get,
    post
}