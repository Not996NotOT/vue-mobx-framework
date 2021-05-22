import ITodoDTO from '@/interface/models/dto/ITodoDTO';
import { IsNotEmpty } from 'class-validator';
import AbsBaseDTO from '../abstract/AbsBaseDTO';
export default class TodoDTO extends AbsBaseDTO<TodoDTO> implements ITodoDTO{
    id: string;
    @IsNotEmpty({ message: "代办事项不能为空" })
    item: string;
    @IsNotEmpty({ message: "代办人不能为空" })
    author: string;
    @IsNotEmpty({ message: "代办时间不能为空" })
    datetime: string;
    constructor(param?: { id?: string, item?: string, author?: string, datetime?: string }) {
        super();
        this.id = param?.id ?? "";
        this.item = param?.item ?? "";
        this.author = param?.author ?? "";
        this.datetime = param?.datetime ?? "";
    }
}