import { MessageEnum } from './../../enum/feedback/MessageEnum';
import { RouterPathEnum } from './../../router/RouterPathEnum';
import { RouterEnum } from './../ioccontainer/enum/RouterEnum';
import IRouter from '@/router/IRouter';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import { UtilsEnum } from '../ioccontainer/enum/UtilsEnum';
import IMyAuthorize from "../utils/authorize/IMyAuthorize";
import { UIEnum } from '../ioccontainer/enum/UIEnum';
import IMyMessage from '../utils/message/IMyMessage';


export const authorize = (isAuthorize: boolean = true): MethodDecorator => {
    return (target: Object, propertyKey: string | symbol, descriptor: any) => {

        let method = descriptor.value;
        descriptor.value = function (...arg: []) {
            if (isAuthorize) {
                const myAuthorize: IMyAuthorize = IOCContainer.getInstance(UtilsEnum.Authorize);
                const router: IRouter = IOCContainer.getInstance(RouterEnum.VueRouter);
                const myMessage: IMyMessage = IOCContainer.getInstance(UIEnum.IMessage);
                if (myAuthorize.checkIsLogin()) {
                    myMessage.showConfirm({
                        type: MessageEnum.Error,
                        title: "权限",
                        content: "你没有权限,请重新登录",
                        onOk: () => router.push(RouterPathEnum.Login)
                    })
                    return;
                }
            }
            return method.apply(this, arg);
        };
    }
}