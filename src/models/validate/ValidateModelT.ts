import IBaseDTO from '@/interface/models/IBaseDTO';
import { MessageEnum } from '@/enum/feedback/MessageEnum';
import { ValidateDialogEnum } from '@/enum/validate/ValidateDialogEnum';
import { UIEnum } from '@/infrastructure/ioccontainer/enum/UIEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
import { IValidateModel } from '@/interface/models/IValidateModel';
import { validateOrReject, ValidationArguments } from 'class-validator';

let errorsMessage: { [key: string]: any };
export class ValidateModel<T extends IBaseDTO> implements IValidateModel<T>{
    id: any;
    constructor() {
        errorsMessage = {};
    }

    getErrorsMessage(): { [key: string]: any } {
        return errorsMessage;
    }

    getErrorsMessageSingle(): string | undefined {
        let singleError = undefined;
        let obj = Object.getOwnPropertyNames(errorsMessage);
        if (obj.length > 0) {
            singleError = errorsMessage[obj[0]];
        }
        return singleError;
    }

    public async validate<T extends Object>(param?: {
        viewModel?: T
    }): Promise<T | boolean> {
        let obj: unknown = this;
        try {
            await validateOrReject(this);
            errorsMessage = [];
            this.cleanViewModelError(param?.viewModel ?? {});
            return obj as T;
        } catch (errors) {
            if (errors.length > 0) {
                const e = errors as ValidationArguments[];
                let eMessage = {};
                for (let item of e) {
                    let names = Object.getOwnPropertyNames(item.constraints);
                    let key = names[names.length - 1];
                    eMessage[`${item.property}ErrorMessage`] = item.constraints[key];
                }
                console.log(errorsMessage);
                errorsMessage = eMessage;
            }
            return false;
        }
    }

    public async getReturnDialog(param?: {
        validateDialogEnum?: ValidateDialogEnum,
        messageEnum?: MessageEnum,
        title?: string,
        onOk?: () => void
        onCancel?: () => void
    }) {
        let myMessage = IOCContainer.getInstance<IMyMessage>(UIEnum.IMessage);
        let messageEnum: MessageEnum = param?.messageEnum ?? MessageEnum.Warning;
        let validateDialogEnum = param?.validateDialogEnum ?? ValidateDialogEnum.Single;
        let title = param?.title ?? "提示信息";

        let onOk: () => void = param?.onOk ?? (() => { });
        let onCancel: () => void = param?.onCancel ?? (() => { });
        switch (validateDialogEnum) {
            case ValidateDialogEnum.Single:
                let message = this.getErrorsMessageSingle();
                myMessage.showMessage({ content: message, type: messageEnum });
                break;
            case ValidateDialogEnum.Mulit:
                myMessage.showConfirm({
                    title: title,
                    content: errorsMessage,
                    onOk: onOk,
                    onCancel: onCancel
                })
        }

    }

    private cleanViewModelError<T extends Object>(t: T) {
        for (let item of Object.getOwnPropertyNames(t)) {
            if (item.indexOf("ErrorMessage") !== -1) {
                if (t.hasOwnProperty(item)) {
                    t[item] = "";
                }
            }
        }
    }

    public mergeToViewModel<T extends Object>(t: T): T {
        this.cleanViewModelError(t);
        for (let item of Object.getOwnPropertyNames(this)) {
            if (t.hasOwnProperty(item)) {
                t[item] = this[item]
            }
        }
        return t;
    }

    public mergeErrorToViewModel<T>(t: T): T {
        this.cleanViewModelError(t);
        let errors: Object = errorsMessage as Object;
        for (let item of Object.getOwnPropertyNames(errors)) {
            if (errors.hasOwnProperty(item)) {
                t[item] = errorsMessage[item]
            }
        }
        return t;
    }
    public async autoMergeToViewModel<T>(t: T, SuccessCallBack?: Function, ErrorCallBack?: Function): Promise<T | boolean> {
        if (await this.validate()) {
            this.mergeToViewModel<T>(t);
            if (SuccessCallBack !== undefined) {
                SuccessCallBack();
            }
            return t;
        }
        else {
            this.mergeErrorToViewModel<T>(t);
            if (ErrorCallBack !== undefined) {
                ErrorCallBack();
            }
            return false;
        }
    }

    public toPureDTO(): any {
        let newObj = Object.create({});
        for (let key of Reflect.ownKeys(this)) {
            Object.assign(newObj, { [key]: this[key] })
        }
        return newObj;
    }
}