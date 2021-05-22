import { UIEnum } from '@/infrastructure/ioccontainer/enum/UIEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
import { AxiosResponse } from 'axios';
import { IAxiosMiddleware } from '../interface/IAxiosMiddleware';
import AxiosResult from '../model/AxiosResultT';


export const AxiosResultMessageMiddleware: IAxiosMiddleware = (axiosResponse: AxiosResponse) => {
    let result: AxiosResult = axiosResponse.data as AxiosResult;
    const myMessage: IMyMessage = IOCContainer.getInstance(UIEnum.IMessage)
    if (result.message !== undefined && result.message !== "") {
        myMessage.showMessage({ content: result.message });
    }
}