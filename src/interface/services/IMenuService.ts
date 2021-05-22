import IBaseDTO from '@/interface/models/IBaseDTO';
import IExpandService from './IExpandService';

export default interface IMenuService<T extends IBaseDTO, R extends IBaseDTO> extends IExpandService<T, R> {
    getInitialMenuData(): any;
}