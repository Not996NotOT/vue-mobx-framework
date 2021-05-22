import IBaseDTO from '@/interface/models/IBaseDTO';
import ExpandService from './ExpandService';
import ArticleApi from '@/api/ArticleT';
import IArticleService from '@/interface/services/IArticleService';
import IArticleApi from '@/interface/api/IArticleApiT';
export default class MenuService<T extends IBaseDTO, R extends IBaseDTO> extends ExpandService<T, R, IArticleApi<T, R>> implements IArticleService<T, R>{
    constructor(path:string){
        super(path,{
            Contructor:ArticleApi
        })
    }
    /**
     * 
     * @methodname ≥ı ºªØSelectData
     * @return {any}
     */
    async getInitialArticleSelectData() {
        return await this.api.getArticleSelectList();
    }
}