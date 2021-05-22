import IMenuApi from '@/interface/api/IMenuApiT';
import MenuApi from '@/api/MenuApiT';
import IBaseDTO from '@/interface/models/IBaseDTO';
import IMenuService from '@/interface/services/IMenuService';
import ExpandService from './ExpandService';
export default class MenuService<T extends IBaseDTO, R extends IBaseDTO> extends ExpandService<T, R, IMenuApi<T, R>> implements IMenuService<T, R>{
    constructor(path:string){
        super(path,{
            Contructor:MenuApi
        })
    }
    async getInitialMenuData() {
        return await this.api.getMenuSelectList()
    }
}