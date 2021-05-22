import IBaseDTO from '@/interface/models/IBaseDTO';
import { List } from 'linqts';
import IApi from './IApi';
export default interface IExpandApi<T extends IBaseDTO = IBaseDTO, R extends IBaseDTO = IBaseDTO> extends IApi {
    update(path: string, t: T): Promise<R>;
    getById(path: string, id: any): Promise<R>;
    delete(path: string, id: any): Promise<R>;
    add(path: string, t: T): Promise<R>;
    getList(path: string): Promise<List<R>>;
}