import ITodoDTO from '@/interface/models/dto/ITodoDTO';
export default interface ITodoApi {
    add(todoDTO: ITodoDTO): Promise<ITodoDTO>;
    getList(): Promise<ITodoDTO[]>;
    delete(todoId: string): Promise<any>;
    getById(todoId: string): Promise<any>;
    update(todoDTO: ITodoDTO): Promise<ITodoDTO>;
}