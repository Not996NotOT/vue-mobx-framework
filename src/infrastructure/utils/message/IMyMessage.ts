import { ActionMessageEnum } from '@/enum/feedback/ActionMessageEnum';
import { MessageEnum } from '@/enum/feedback/MessageEnum';

export default interface IMyMessage {
    showMessage(message?: {
        content?: string,
        type?: MessageEnum,
    }): void;

    showConfirm(confirm?: {
        type?: MessageEnum,
        title?: string | any;
        content?: string | any | ((h: any) => any);
        onOk?: () => void;
        onCancel?: () => void;
        okText?: string;
        cancelText?: string;
    }): void;

    /**
     * 
     */
    showDefualtMessage(param?: {
        messsage?: string,
        actionMesssageEnum?: ActionMessageEnum
        onOk?: () => void
    }): void;
}