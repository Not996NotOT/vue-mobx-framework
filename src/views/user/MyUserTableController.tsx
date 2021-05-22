import BaseTableController from '@/components/base/table/BaseTableController';
import MenuDTO from '@/models/dto/MenuDTO';
import { RouterPathEnum } from '@/router/RouterPathEnum';

export default class MenuTableController extends BaseTableController<MenuDTO, MenuDTO>{
    constructor() {
        super({
            urlReqeustPath: "/Menu"
        });
        this.columns = [
            {
                title: "编号",
                dataIndex: "id",
                key: "id",
            },
            {
                title: "栏目名称",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "创建时间",
                dataIndex: "createtime",
                key: "createtime",
            },
           ];
        this.formRouterPath = RouterPathEnum.MenuForm
    }
}