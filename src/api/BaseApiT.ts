import { UtilsEnum } from '@/infrastructure/ioccontainer/enum/UtilsEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import IBaseDTO from '@/interface/models/IBaseDTO';
import IAxiosHelper from '@/utils/axios/interface/IAxiosHelper';
import { List } from 'linqts';
export default class BaseApi<T extends IBaseDTO> {
    axios: IAxiosHelper;
    constructor() {
        this.axios = IOCContainer.getInstance(UtilsEnum.Axios);
    }
    id: any;
    async update(path: string, t: T): Promise<T> {
        return await this.axios.put<T>(`${path}/${t.id}`, t);
    }
    async getById(path: string, t: T): Promise<T> {
        return await this.axios.get<T>(`${path}/${t.id}`, t);
    }
    async delete(path: string, t: T): Promise<T> {
        return await this.axios.delete(`${path}/${t.id}`);
    }
    async add(path: string, t: T): Promise<T> {
        return await this.axios.post(`${path}/${t.id}`);
    }
    async getList(path: string): Promise<List<T>> {
        return new List<T>(await this.axios.get<T[]>(path));
    }

}