import IMenuApi from '@/interface/api/IMenuApiT';
import IBaseDTO from '@/interface/models/IBaseDTO';
import IMyUserService from '@/interface/services/IMyUserService';
import ExpandService from './ExpandService';
export default class MyUserService<T extends IBaseDTO, R extends IBaseDTO> extends ExpandService<T, R, IMenuApi<T, R>> implements IMyUserService<T, R>{
   
}