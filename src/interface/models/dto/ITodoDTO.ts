import IBaseDTO from '../IBaseDTO';

export default interface ITodoDTO extends IBaseDTO {
    id: string;
    item: string;
    author: string;
    datetime: string;
}