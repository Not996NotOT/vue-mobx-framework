import IMenuDTO from '@/interface/models/dto/IMenuDTO';
import ExpandApi from '@/api/ExpandApiT';
import IMenuApi from '@/interface/api/IMenuApiT';
import IMenuSelectDTO from '@/interface/models/dto/IMenuSelectDTO';
export default class MenuApi extends ExpandApi<IMenuDTO, IMenuDTO> implements IMenuApi<IMenuDTO, IMenuDTO> {
    getMenuSelectList(): IMenuSelectDTO[] {
        let menuSelectDTO: IMenuSelectDTO[] = [];
        menuSelectDTO = this.axios.get("menu/select");
        return menuSelectDTO;
    }
}