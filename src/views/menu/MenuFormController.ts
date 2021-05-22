import { RouterPathEnum } from '@/router/RouterPathEnum';
import BaseFormController from '@/components/base/form/BaseFormController';
import MenuDTO from '@/models/dto/MenuDTO';
import MenuViewModel from '@/models/viewmodel/MenuViewModel';
import MenuService from '@/services/MenuService';
import IMenuService from '@/interface/services/IMenuService';

export default class MenuFormController extends BaseFormController<MenuViewModel, MenuDTO, MenuDTO, IMenuService<MenuDTO, MenuDTO>>{
    constructor() {
        super({
            urlReqeustPath: "/Menu",
            listRouterPath: RouterPathEnum.Menu,
            v: MenuViewModel,
            t: MenuDTO,
            r: MenuDTO,
            expandService: new MenuService("/Menu"),
        });
    }

    async initialViewmodel() {
        let v = new MenuViewModel;
        v.pidInitialData = await this.expandService.getInitialMenuData();
        return v;
    }

}