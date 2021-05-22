import IBaseDTO from '@/interface/models/IBaseDTO';
import { UtilsEnum } from '@/infrastructure/ioccontainer/enum/UtilsEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import IAxiosHelper from '@/utils/axios/interface/IAxiosHelper';
import { List } from 'linqts';
import IExpandApi from '@/interface/api/IExpandApiT';
export default class ExpandApi<T extends IBaseDTO, R extends IBaseDTO> implements IExpandApi<T, R> {
    axios: IAxiosHelper;
    constructor() {
        this.axios = IOCContainer.getInstance(UtilsEnum.Axios);
    }
    async update(path: string, t: T): Promise<R> {
        return await this.axios.put<T>(`${path}/${t.id}`, t);
    }
    async getById(path: string, id: any): Promise<R> {
        return await this.axios.get<T>(`${path}/${id}`);
    }
    async delete(path: string, id: any): Promise<R> {
        return await this.axios.delete(`${path}/${id}`);
    }
    async add(path: string, t: T): Promise<R> {
        return await this.axios.post(`${path}`, t);
    }
    async getList(path: string): Promise<List<R>> {
        return new List<R>(await this.axios.get<R[]>(path));
    }

}