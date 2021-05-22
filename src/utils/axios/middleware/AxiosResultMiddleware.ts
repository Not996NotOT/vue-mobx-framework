import { AxiosResponse } from 'axios';
import { IAxiosMiddleware } from '../interface/IAxiosMiddleware';
import AxiosResult from '../model/AxiosResultT';

export const AxiosResultMiddleware: IAxiosMiddleware = (axiosResponse: AxiosResponse) => {
    let result: AxiosResult = axiosResponse.data as AxiosResult;
    if (result.data !== null) {
        return result.data
    }
    else {
        return axiosResponse.data;
    }
}