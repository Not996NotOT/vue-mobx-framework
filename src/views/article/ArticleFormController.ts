import { RouterPathEnum } from '@/router/RouterPathEnum';
import BaseFormController from '@/components/base/form/BaseFormController';
import ArticleDTO from '@/models/dto/ArticleDTO';
import ArticleViewModel from '@/models/viewmodel/ArticleViewModel';
import ArticleService from '@/services/ArticleService';
import IArticleService from '@/interface/services/IArticleService';

export default class ArticleFormController extends BaseFormController<ArticleViewModel, ArticleDTO, ArticleDTO, IArticleService<ArticleDTO, ArticleDTO>>{
    constructor() {
        super({
            urlReqeustPath: "/article",
            listRouterPath: RouterPathEnum.Article,
            v: ArticleViewModel,
            t: ArticleDTO,
            r: ArticleDTO,
            expandService: new ArticleService("/article"),
        });
    }

    async initialViewmodel() {
        let v = new ArticleViewModel;
        v.midInitialData = await this.expandService.getInitialArticleSelectData();
        return v;
    }

}