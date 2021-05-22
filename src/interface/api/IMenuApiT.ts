import IBaseDTO from '@/interface/models/IBaseDTO';
import IMenuSelectDTO from '../models/dto/IMenuSelectDTO';
import IExpandApi from './IExpandApiT';

export default interface IMenuApi<T extends IBaseDTO, R extends IBaseDTO> extends IExpandApi<T, R> {
    getMenuSelectList(): IMenuSelectDTO[];
}