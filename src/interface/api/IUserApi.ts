import IBaseDTO from '@/interface/models/IBaseDTO';
import IExpandApi from './IExpandApiT';

export default interface IUserApi<T extends IBaseDTO, R extends IBaseDTO> extends IExpandApi<T, R> {
    login(t: T):Promise<any>
}