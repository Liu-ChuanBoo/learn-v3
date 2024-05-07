import {AxiosHeaders, AxiosPromise, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import { Interceptors } from "./request2";
import {Method, RawAxiosRequestHeaders} from "axios";
 
interface RequestConfigType {
    url?: string;
    method?: Method | string;
    headers?: RawAxiosRequestHeaders | AxiosHeaders;
    params?: any;
    data?: any;
    duplicateRequestValidation?: boolean;
    duplicateRequestValidationTime?: number;
}
 
// 请求配置
export class HttpServer {
    axios: any;
    // 初始化对象 获取axios实例
    constructor() {
        this.axios = new Interceptors().getInterceptors();
    }
    // 简单封装一下方法
    request(config:RequestConfigType): AxiosPromise {
        return new Promise((resolve, reject) => {
            this.axios(config as InternalAxiosRequestConfig).then((res: AxiosResponse) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err)
            });
        });
    }
 
    post(config:RequestConfigType): AxiosPromise {
        return new Promise((resolve, reject) => {
            this.axios.post(config.url, config.data, config as InternalAxiosRequestConfig).then((res: AxiosResponse) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err)
            });
        });
    }
 
    get(config:RequestConfigType): AxiosPromise {
        return new Promise((resolve, reject) => {
            this.axios.get(config.url, config as InternalAxiosRequestConfig).then((res: AxiosResponse) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err)
            });
        });
    }
 
    delete(config:RequestConfigType): AxiosPromise {
        return new Promise((resolve, reject) => {
            this.axios.delete(config.url, config as InternalAxiosRequestConfig).then((res: AxiosResponse) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err)
            });
        });
    }
 
    put(config:RequestConfigType): AxiosPromise {
        return new Promise((resolve, reject) => {
            this.axios.put(config.url, config.data, config as InternalAxiosRequestConfig).then((res: AxiosResponse) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err)
            });
        });
    }
 
    patch(config:RequestConfigType): AxiosPromise {
        return new Promise((resolve, reject) => {
            this.axios.patch(config.url, config.data, config).then((res: AxiosResponse) => {
                resolve(res);
            }).catch((err: any) => {
                reject(err)
            });
        });
    }
}
 
const http = new HttpServer()
 
export default http