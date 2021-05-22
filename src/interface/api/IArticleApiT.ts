import IBaseDTO from '@/interface/models/IBaseDTO';
import IArticleSelectDTO from '../models/dto/IArticleSelectDTO';
import IExpandApi from './IExpandApiT';

export default interface IArticleApi<T extends IBaseDTO, R extends IBaseDTO> extends IExpandApi<T, R> {
    getArticleSelectList(): IArticleSelectDTO[];
}