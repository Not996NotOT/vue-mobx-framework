import IExpandApi from '../api/IExpandApiT';
import IService from '../api/IService';
import IBaseDTO from '../models/IBaseDTO';

export default interface IExpandService<T extends IBaseDTO, R extends IBaseDTO,A = IExpandApi<T, R>> extends IService<T,R> {
    path: string;
    api: A;
    update(t: T): Promise<R>;
    getById(id: any): Promise<R>;
    add(t: T): Promise<R>;
    getList(): Promise<R[] | []>;
    delete(id: any): Promise<R>;
}