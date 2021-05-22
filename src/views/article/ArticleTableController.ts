import BaseTableController from '@/components/base/table/BaseTableController';
import ArticleDTO from '@/models/dto/ArticleDTO';
import { RouterPathEnum } from '@/router/RouterPathEnum';

export default class ArticleTableController extends BaseTableController<ArticleDTO, ArticleDTO>{
    constructor() {
        super({
            urlReqeustPath: "/article"
        });
        this.columns = [
            {
                title: "编号",
                dataIndex: "id",
                key: "id",
            },
            {
                title: "文章标题",
                dataIndex: "title",
                key: "title",
            },
            {
                title: "创建时间",
                dataIndex: "createtime",
                key: "createtime",
            },
           ];
        this.formRouterPath = RouterPathEnum.ArticleForm
    }
}