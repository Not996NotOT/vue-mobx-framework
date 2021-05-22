import { RouterEnum } from '@/infrastructure/ioccontainer/enum/RouterEnum';
import { UIEnum } from '@/infrastructure/ioccontainer/enum/UIEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
import IService from '@/interface/api/IService';
import IBaseDTO from '@/interface/models/IBaseDTO';
import IExpandService from '@/interface/services/IExpandService';
import IRouter from '@/router/IRouter';
import { RouterPathEnum } from '@/router/RouterPathEnum';
import ExpandService from '@/services/ExpandService';
import IBaseTableController from './IBaseTableController';

export default class BaseTableController<T extends IBaseDTO, R extends IBaseDTO, S extends IExpandService<T, R> = IExpandService<T, R>> implements IBaseTableController<T, R, S>{
    title: string = "";
    formRouterPath: RouterPathEnum | undefined;
    dataList: R[];
    router: IRouter
    baseService: S;
    myMessage: IMyMessage;
    urlReqeustPath: string = "";
    columns: any[];
    constructor(param: { urlReqeustPath: string, baseService?: any }) {
        this.columns = [];
        this.dataList = [];
        this.router = IOCContainer.getInstance(RouterEnum.VueRouter)
        this.myMessage = IOCContainer.getInstance(UIEnum.IMessage);
        this.baseService = param?.baseService ?? new ExpandService<T, R>(param.urlReqeustPath);
        this.initialData();
    }

    addAndUpdate(): void {
        if (this.formRouterPath) {
            this.router.push(this.formRouterPath);
        }
    }
    async initialData(): Promise<void> {
        console.log(this.urlReqeustPath);
        this.dataList = await this.baseService.getList();
    }
    selectById(id: string): void {
        if (this.formRouterPath) {
            this.router.push({ path: this.formRouterPath, query: { id } })
        }
    }
    deleteById(id: string): void {
        this.myMessage.showConfirm({
            content: "是否确定删除", onOk: async () => {
                await this.baseService.delete(id);
                this.initialData();
            }, onCancel: () => { }
        })
    }

}