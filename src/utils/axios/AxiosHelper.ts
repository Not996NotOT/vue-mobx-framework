import { AxiosResultMiddleware } from './middleware/AxiosResultMiddleware';
import IAxiosHelper from '@/utils/axios/interface/IAxiosHelper';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { baseURL, isEnableInterceptor, timeout } from '@/config/axios/AxiosConfig';
import Querstring from './param/Querstring';
import IBaseDTO from '@/interface/models/IBaseDTO';
import IMyLoadingController from '@/components/myloading/IMyLoadingController';
import { UIEnum } from '@/infrastructure/ioccontainer/enum/UIEnum';
import AxiosPiple from './piple/AxiosPiple';
import { IAxiosMiddleware } from './interface/IAxiosMiddleware';
import { AxiosResultMessageMiddleware } from './middleware/AxiosResultMessageMiddleware';
class AxiosHelper implements IAxiosHelper {
    axiosPiple: IAxiosMiddleware[] = [
        AxiosResultMessageMiddleware,
        AxiosResultMiddleware
    ]
    loadingController: IMyLoadingController;
    axios: AxiosInstance;
    /**
     * 创建axios的实例
     * @param _baseURL 请求api的域名地址，默认从配置文件里面获取
     * @param _timeout 请求的超时时间，默认从配置文件里面获取
     */
    constructor(_baseURL: string = baseURL, _timeout: number = timeout) {
        this.axios = axios.create({
            baseURL: _baseURL,
            timeout: _timeout
        })
        this.loadingController = IOCContainer.getInstance(UIEnum.IMyLoading);
        this.RequestInterceptors();
        this.ResponseInterceptors();
    }
    /**
     * 请求拦截器
     */
    RequestInterceptors() {
        this.axios.interceptors.request.use(
            config => {
                this.loadingController.loading()
                if (isEnableInterceptor) {
                }
                return config;
            },
            error => {
                alert(error);
            }
        );
        return this;
    }

    /**
     * 响应拦截器
     */
    ResponseInterceptors() {
        this.axios.interceptors.response.use(
            response => {
                this.loadingController.loading();
                if (isEnableInterceptor) {
                    return response;
                }
                else {
                    return response;
                }

            },
            error => {
                alert(error);
            }
        );

        return this;
    }
    public async get<T extends IBaseDTO | IBaseDTO[]>(url: string, data?: T, config?: AxiosRequestConfig | undefined): Promise<T | undefined> {
        try {
            if (data != undefined) {
                url += Querstring.ConvertToString(data);
            }
            let response = await this.axios.get(url, config);
            return new AxiosPiple<T>(response).
                piple(this.axiosPiple).next();
        }
        catch (error) {
            console.log(error)
        }

    }
    public async post<T extends IBaseDTO>(url: string, data?: T, config?: AxiosRequestConfig | undefined): Promise<T | undefined> {
        try {
            let response = await this.axios.post(url, data, config);
            return new AxiosPiple<T>(response).
                piple(this.axiosPiple).next();
        }
        catch (error) {
            console.log(error)
        }

    }

    public async put<T extends IBaseDTO>(url: string, data?: T, config?: AxiosRequestConfig | undefined): Promise<T | undefined> {
        try {
            console.log("axios")
            let response = await this.axios.put(url, data, config);
            return response.data;
        }
        catch (error) {
            console.log(error)
        }

    }

    public async delete<T extends IBaseDTO>(url: string, data?: T, config?: AxiosRequestConfig | undefined): Promise<T | undefined> {
        try {
            if (data != undefined) {
                url += Querstring.ConvertToString(data);
            }
            let response = await this.axios.delete(url, config);
            return response.data;
        }
        catch (error) {
            console.log(error)
        }

    }
}
export default AxiosHelper;
