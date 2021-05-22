import ExpandApi from '@/api/ExpandApiT';
import IBaseDTO from '@/interface/models/IBaseDTO';
import IExpandApi from '@/interface/api/IExpandApiT';
import { List } from 'linqts';
import IExpandService from '@/interface/services/IExpandService';
import { Contructor } from '@/type/BaseType';
export default class ExpandService<T extends IBaseDTO, R extends IBaseDTO, A extends IExpandApi<T, R> = IExpandApi<T, R>> implements IExpandService<T, R>{
    path: string;
    api: A;
    constructor(path: string, param?: {
        Contructor?: Contructor
    }) {
        //@ts-ignore
        this.api = param?.Contructor ? new param.Contructor() : new ExpandApi();
        this.path = path;
    }
    async update(t: T): Promise<R> {
        return await this.api.update(this.path, t);
    }
    async getById(id: any): Promise<R> {
        return await this.api.getById(this.path, id);
    }
    async add(t: T): Promise<R> {
        return await this.api.add(this.path, t);
    }
    async getList(): Promise<R[] | []> {
        let tables: R[] = [];
        let data: List<R> = await this.api.getList(this.path);
        if (data.Count() > 0) {
            data.ForEach(item => {
                tables.push(item as R);
            });
        }
        return tables;
    }
    async delete(id: any): Promise<R> {
        return await this.api.delete(this.path, id);
    }
}