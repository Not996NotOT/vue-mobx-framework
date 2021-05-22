import IMenuDTO from '@/interface/models/dto/IMenuDTO';
import { IsNotEmpty } from 'class-validator';
import AbsBaseDTO from '../abstract/AbsBaseDTO';
export default class MenuDTO extends AbsBaseDTO<MenuDTO> implements IMenuDTO {
    id: number | undefined;
    @IsNotEmpty({ message: "父编号不能为空" })
    pid: number | undefined;
    @IsNotEmpty({ message: "栏目名称不能为空" })
    name: string;
    isenable: number;
    isaudit: number;
    constructor(param?: {
        id?: number,
        pid?: number,
        name?: string,
        createtime?: string,
        isenable?: number,
        isaudit?: number,
    }) {
        super();
        this.id = param?.id ?? undefined;
        this.pid = param?.pid ?? undefined;
        this.name = param?.name ?? "";
        this.isenable = param?.isenable ?? 0;
        this.isaudit = param?.isaudit ?? 0;
    }
}