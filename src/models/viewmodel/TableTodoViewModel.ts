import ITodoDTO from '@/interface/models/dto/ITodoDTO';
import { observable } from 'mobx';
export default class TableTodoViewModel implements ITodoDTO {
    @observable id: string;
    @observable item: string;
    @observable author: string;
    @observable datetime: string;
    constructor(param?: {
        id?: string;
        item?: string;
        author?: string;
        datetime?: string;
    }) {
        this.id = param?.id ?? "";
        this.item = param?.item ?? "";
        this.author = param?.author ?? "";
        this.datetime = param?.datetime ?? "";
    }
}