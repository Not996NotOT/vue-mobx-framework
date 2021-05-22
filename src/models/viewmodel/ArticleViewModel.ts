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
        title: "所属栏目", component: {
            type: FormEnum.Cascader
        }
    })
    @observable
    mid: number | number[] | undefined;
    @observable
    midInitialData: [] | undefined;
    @observable
    midErrorMessage: string | undefined;
    @Form({ title: "文章标题" })
    @observable
    title: string;
    @observable
    titleErrorMessage: string | undefined;
    @Form({
        title: "文章内容", component: {
            type: FormEnum.Editor
        }
    })
    @observable
    content: string;
    @observable
    contentErrorMessage: string | undefined;

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
        mid?: number,
        title?: string,
        content?: string,
        isenable?: number;
        isaudit?: number;
    }) {
        this.id = param?.id ?? undefined;
        this.mid = param?.mid ?? undefined;
        this.title = param?.title ?? "";
        this.content = param?.content ?? "";
        this.isenable = param?.isenable ?? 1;
        this.isaudit = param?.isaudit ?? 1;
    }
}