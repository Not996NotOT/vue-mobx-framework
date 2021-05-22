import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
import GlobalVue from './infrastructure/global/GlobalVue';
export default class AppMain {
    vueInstance: Vue;
    myMessage: IMyMessage | undefined;
    constructor(vueInstance: Vue) {
        this.vueInstance = vueInstance;
    }
    start() {
        GlobalVue.createInstance(this.vueInstance);
    }
}