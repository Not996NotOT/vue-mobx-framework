import TableTodoViewModel from '@/models/viewmodel/TableTodoViewModel';
import ITodoDTO from '../models/dto/ITodoDTO';

export default interface ITodoService {
    addTodo(todoDTO: ITodoDTO): Promise<ITodoDTO>;
    getTodoList(): Promise<TableTodoViewModel[] | []>
    delteTodo(todoId:string):any;
    getTodoById(id:string):Promise<ITodoDTO>;
    updateTodo(todoDTO: ITodoDTO): Promise<ITodoDTO>;
}