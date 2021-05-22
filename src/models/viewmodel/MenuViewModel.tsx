import { Form } from '@/components/factory/decorator/FormComponentDecorator';
import { FormEnum } from '@/components/factory/enum/FormEnum';
import MySwitchOption from '@/components/myswitch/MySwitchOption';
import { observable } from 'mobx';

export default class MenuViewModel {
    @Form({ title: "编号", primaryKey: true })
    @observable
    id: number | undefined;
    @observable
    idErrorMessage: string | undefined;
    @Form({
        title: " 父编号", component: {
            type: FormEnum.Cascader
        }
    })
    @observable
    pid: number | number[] | undefined;
    @observable
    pidInitialData: [] | undefined;
    @observable
    midErrorMessage: string | undefined;
    @Form({ title: "名称" })
    @observable
    name: string;
    @observable
    nameErrorMessage: string | undefined;
    @observable
    createtimeErrorMessage: string | undefined;

    @Form({
        title: "禁用启用",
        component: {
            type: FormEnum.Switch,
            param: new MySwitchOption({
                checkedChildren: "启用",
                unCheckedChildren: "禁用",
            })
        }
    })
    @observable isenable: number | undefined;

    @Form({
        title: "审核通过",
        component: {
            type: FormEnum.Switch,
        }
    })
    @observable isaudit: number | undefined;
    constructor(param?: {
        id?: number,
        pid?: number,
        name?: string,
        isenable: number;
        isaudit: number;
    }) {
        this.id = param?.id ?? undefined;
        this.pid = param?.pid ?? undefined;
        this.name = param?.name ?? "";
        this.isenable = param?.isenable ?? 1;
        this.isaudit = param?.isaudit ?? 1;
    }
}