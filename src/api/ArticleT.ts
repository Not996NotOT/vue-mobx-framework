import IArticleDTO from '@/interface/models/dto/IArticleDTO';
import ExpandApi from '@/api/ExpandApiT';
import IArticleApi from '@/interface/api/IArticleApiT';
import IArticleSelectDTO from '@/interface/models/dto/IArticleSelectDTO';
export default class ArticleApi extends ExpandApi<IArticleDTO, IArticleDTO> implements IArticleApi<IArticleDTO, IArticleDTO> {
    getArticleSelectList(): IArticleSelectDTO[] {
        let ArticleSelectDTO: IArticleSelectDTO[] = [];
        ArticleSelectDTO = this.axios.get("menu/select");
        return ArticleSelectDTO;
    }
}