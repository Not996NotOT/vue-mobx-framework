import { IValidateModel } from '@/interface/models/IValidateModel';
import IExpandService from '@/interface/services/IExpandService';
import IBaseDTO from '@/interface/models/IBaseDTO';
import IBaseViewModel from '@/interface/models/IBaseViewModel';
import { RouterEnum } from '@/infrastructure/ioccontainer/enum/RouterEnum';
import IRouter from '@/router/IRouter';
import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import { UIEnum } from '@/infrastructure/ioccontainer/enum/UIEnum';
import { ActionMessageEnum } from '@/enum/feedback/ActionMessageEnum';
import { RouterPathEnum } from '@/router/RouterPathEnum';
import { Dictionary } from 'vue-router/types/router';
import { isNotEmpty } from 'class-validator';
import ExpandService from '@/services/ExpandService';

type VConstructor<V extends IBaseViewModel> = new (...args: any[]) => V;
type TConstructor<T extends IValidateModel<T>> = new (...args: any[]) => T;
type RConstructor<R extends IBaseDTO> = new (...args: any[]) => R;

export default class BaseFormController<V extends IBaseViewModel, T extends IValidateModel<T>, R extends IBaseDTO, S extends IExpandService<T, R> = IExpandService<T, R>>  {
    viewModel: any;
    v: VConstructor<V>
    t: TConstructor<T>
    r: RConstructor<R>
    expandService: S;
    myMessage: IMyMessage;
    router: IRouter;
    dialogTitle: string;
    listRouterPath: RouterPathEnum;
    constructor(param: {
        urlReqeustPath: string,
        listRouterPath: RouterPathEnum,
        expandService?: any,
        v: new (...args: any[]) => any,
        t: new (...args: any[]) => any,
        r: new (...args: any[]) => any,
    }) {

        this.router = IOCContainer.getInstance(RouterEnum.VueRouter)
        this.myMessage = IOCContainer.getInstance(UIEnum.IMessage);
        this.expandService = param?.expandService ?? new ExpandService<T, R>(param.urlReqeustPath);
        this.listRouterPath = param.listRouterPath;
        this.v = param.v;
        this.t = param.t;
        this.r = param.r;

        this.viewModel = new param.v();
        this.initialData();
        this.dialogTitle = "";
    }
    async initialData() {
        let routerDic = this.router.getQueryParam() as Dictionary<string>;
        let id: string = routerDic["id"];
        let ivo = await this.initialViewmodel();
        if (id) {
            let vo = Object.assign(ivo, (await this.expandService.getById(id)));
            this.viewModel = vo;
        }
        else {
            this.viewModel = ivo;
        }

    }

    async initialViewmodel(): Promise<any> {
        return new this.v();
    }

    async selectById(): Promise<void> {
        if (this.viewModel.id) {
            this.expandService.getById(this.viewModel.id);
        }
    }

    async deleteById() {
        if (isNotEmpty(this.viewModel.id)) {
            this.myMessage.showConfirm({
                content: "是否确定删除", onOk: async () => {
                    await this.expandService.delete(this.viewModel.id);
                    this.router.push(this.listRouterPath)
                }, onCancel: () => { }
            })
        }
    }

    async addAndUpdate(): Promise<void> {
        if (this.viewModel.id) {
            console.log("update");
            this.update();
        }
        else {
            console.log("add");
            this.add();
        }
    }
    private async update() {
        let t: T = new this.t!(this.viewModel);
        if (await t.validate({ viewModel: this.viewModel })) {
            let data = await this.expandService.update(t.toPureDTO());
            if (data) {
                this.myMessage.showDefualtMessage({
                    messsage: this.dialogTitle, actionMesssageEnum: ActionMessageEnum.Update, onOk: () => {
                        this.router.push(this.listRouterPath!);
                    }
                })
            }
        }
        else {
            t.mergeErrorToViewModel(this.viewModel);
        }
    }

    public async add() {
        let t: T = new this.t!(this.viewModel);
        console.log("add method")
        console.log(this.viewModel)
        console.log(await t.validate({ viewModel: this.viewModel }))
        if (await t.validate({ viewModel: this.viewModel })) {
            console.log("add success");
            let data = await this.expandService.add(t.toPureDTO());
            if (data) {
                this.myMessage.showDefualtMessage({
                    messsage: this.dialogTitle, actionMesssageEnum: ActionMessageEnum.Add, onOk: () => {
                        this.router.push(this.listRouterPath!);
                    }
                })
            }
        }
        else {
            t.mergeErrorToViewModel(this.viewModel);
        }
    }
}