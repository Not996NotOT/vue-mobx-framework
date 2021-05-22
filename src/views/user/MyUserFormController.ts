import { RouterPathEnum } from '@/router/RouterPathEnum';
import BaseFormController from '@/components/base/form/BaseFormController';
import MyUserDTO from '@/models/dto/MyUserDTO';
import MyUserViewModel from '@/models/viewmodel/MyUserViewModel';
import MyUserService from '@/services/MyUserService';
import IMyUserService from '@/interface/services/IMyUserService';

export default class MyUserFormController extends BaseFormController<MyUserViewModel, MyUserDTO, MyUserDTO, IMyUserService<MyUserDTO, MyUserDTO>>{
    constructor() {
        super({
            urlReqeustPath: "/MyUser",
            listRouterPath: RouterPathEnum.MyUser,
            v: MyUserViewModel,
            t: MyUserDTO,
            r: MyUserDTO,
        });
    }

}