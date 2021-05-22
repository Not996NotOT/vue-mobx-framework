import IBaseDTO from '@/interface/models/IBaseDTO';
import { AxiosInstance, AxiosRequestConfig } from "axios";
export default interface IAxiosHelper {
    axios: AxiosInstance;
    get<T extends IBaseDTO | IBaseDTO[]>(url: string, data?: T, config?: AxiosRequestConfig | undefined): any;
    post<T extends IBaseDTO>(url: string, data?: T, config?: AxiosRequestConfig | undefined): any;
    put<T extends IBaseDTO>(url: string, data?: T, config?: AxiosRequestConfig | undefined): any;
    delete<T extends IBaseDTO>(url: string, data?: T, config?: AxiosRequestConfig | undefined): any;
    RequestInterceptors(): void;
    ResponseInterceptors(): void;
}