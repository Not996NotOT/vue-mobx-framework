import { List } from 'linqts';
import IBaseDTO from '../models/IBaseDTO';

export default interface BaseApi<T extends IBaseDTO> {
    update(path: string, t: T): Promise<T>;
    getById(path: string, t: T): Promise<T>;
    delete(path: string, t: T): Promise<T>;
    add(path: string, t: T): Promise<T>;
    getList(path: string): Promise<List<T>>
}