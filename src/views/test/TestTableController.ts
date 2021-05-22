import BaseTableController from '@/components/base/table/BaseTableController';
import TestDTO from '@/models/dto/TestDTO';
import { RouterPathEnum } from '@/router/RouterPathEnum';

export default class TestTableController extends BaseTableController<TestDTO, TestDTO>{
    constructor() {
        super({
            urlReqeustPath: "/test"
        });
        this.columns = [
            {
                title: "编号",
                dataIndex: "id",
                key: "id",
            },
            {
                title: "姓名",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "年龄",
                dataIndex: "age",
                key: "age",
            },
            {
                title: "性别",
                dataIndex: "sex",
                key: "sex",
            },];
        this.formRouterPath = RouterPathEnum.TestForm
    }
}