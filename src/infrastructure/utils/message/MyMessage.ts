import { ActionMessageEnum } from '@/enum/feedback/ActionMessageEnum';
import { MessageEnum } from '@/enum/feedback/MessageEnum';
import GlobalVue from '@/infrastructure/global/GlobalVue';
import { ModalOptions } from 'ant-design-vue/types/modal';
import IMyMessage from './IMyMessage';
export default class MyMessage implements IMyMessage {
    thisInstance: Vue;
    constructor() {
        this.thisInstance = GlobalVue.getVueInstance();
    }
    showDefualtMessage(param?: { messsage?: string, actionMesssageEnum?: ActionMessageEnum, onOk?: () => void }): void {
        let message = param?.messsage ?? "";
        let actionMessageEnum: ActionMessageEnum = param?.actionMesssageEnum ?? ActionMessageEnum.Add;
        let onOk = param?.onOk ?? (() => { });
        switch (actionMessageEnum) {
            case ActionMessageEnum.Add:
                message += "添加成功"
                break;
            case ActionMessageEnum.Update:
                message += "更新成功"
                break;
            case ActionMessageEnum.Delete:
                message += "删除成功"
                break;
        }
        this.showConfirm({
            type: MessageEnum.Success,
            content: message,
            onOk: onOk
        });
    }
    showMessage(message?: {
        content: string,
        type?: MessageEnum,
    }): void {
        let content = message?.content ?? "";
        let type: MessageEnum = message?.type ?? MessageEnum.Info;
        switch (type) {
            case MessageEnum.Success:
                this.thisInstance.$message.success(content);
                break;
            case MessageEnum.Info:
                this.thisInstance.$message.info(content);
                break;
            case MessageEnum.Warning:
                this.thisInstance.$message.warn(content);
                break;
            case MessageEnum.Error:
                this.thisInstance.$message.error(content);
                break;
        }
    }

    showConfirm(confirm?: {
        type?: MessageEnum,
        title?: string;
        content: string | any | ((h: any) => any)
        onOk?: () => void;
        onCancel?: () => void;
        okText?: string;
        cancelText?: string;
    }): void {
        let type = confirm?.type ?? MessageEnum.Info;
        let option: ModalOptions = {
            title: confirm?.title ?? "",
            content: confirm?.content ?? "",
            onOk: confirm?.onOk ?? (() => { }),
            onCancel: confirm?.onCancel ?? (() => { }),
            okText: confirm?.okText ?? "确定",
            cancelText: confirm?.cancelText ?? "取消",
        };
        if (typeof confirm?.content === "object") {
            let names = Object.getOwnPropertyNames(confirm?.content);
            option.content = (h: any) => h('div', {}, names.map(item => h("p", confirm?.content[item])));
        }
        if (confirm?.onCancel !== undefined) {
            this.thisInstance.$confirm(option);
        }
        else {
            switch (type) {
                case MessageEnum.Success:
                    this.thisInstance.$success(option);
                    break;
                case MessageEnum.Info:
                    this.thisInstance.$info(option);
                    break;
                case MessageEnum.Warning:
                    this.thisInstance.$warning(option);
                    break;
                case MessageEnum.Error:
                    this.thisInstance.$error(option);
                    break;
                case MessageEnum.Info:
                    this.thisInstance.$info(option);
                    break;
            }
        }


    }
}