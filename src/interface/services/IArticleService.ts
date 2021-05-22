import IBaseDTO from '@/interface/models/IBaseDTO';
import IExpandService from './IExpandService';

export default interface IArticleService<T extends IBaseDTO, R extends IBaseDTO> extends IExpandService<T, R> {
    getInitialArticleSelectData(): any;
}