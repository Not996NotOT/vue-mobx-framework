import { AxiosResponse } from 'axios';
import { IAxiosMiddleware } from '../interface/IAxiosMiddleware';
import IAxiosPiple from '../interface/IAxiosPiple';
export default class AxiosPiple<T> implements IAxiosPiple<T>{
    chain: IAxiosMiddleware[] = [];
    axiosResponse: AxiosResponse<T>;
    constructor(axiosResponse: AxiosResponse<T>) {
        this.axiosResponse = axiosResponse;
    }
    public piple(chain: IAxiosMiddleware[]) {
        this.chain = chain;
        return this;
    }
    public next(): any {
        let data: any;
        for (let middleware of this.chain) {
            data = middleware(this.axiosResponse);
        }
        return data;
    }
}