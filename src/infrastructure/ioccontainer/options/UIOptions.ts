import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
import MyMessage from '@/infrastructure/utils/message/MyMessage';
import { UIEnum } from '../enum/UIEnum';
import IOCModel from '../models/IOCModel';


export const UIOptions = [
    new IOCModel<IMyMessage>(MyMessage,UIEnum.IMessage),
];