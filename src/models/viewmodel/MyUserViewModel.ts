import { Form } from '@/components/factory/decorator/FormComponentDecorator';
import { FormEnum } from '@/components/factory/enum/FormEnum';
import MySwitchOption from '@/components/myswitch/MySwitchOption';
import { observable } from 'mobx';

export default class MyUserViewModel {
    @Form({ title: "编号", primaryKey: true })
    @observable
    id:any |undefined;
    @Form({ title: "用户名" })
    @observable
    username:string |undefined;

    @Form({ title: "密码" })
    @observable
    password:string |undefined;

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
        username?:string,
        password?:string,
        content?: string,
        isenable?: number;
        isaudit?: number;
    }) {
        this.id = param?.id ?? undefined;
        this.isenable = param?.isenable ?? 1;
        this.isaudit = param?.isaudit ?? 1;
    }
}