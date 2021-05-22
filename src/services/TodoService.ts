import TableTodoViewModel from '@/models/viewmodel/TableTodoViewModel';
import ITodoApi from '@/interface/api/ITodoApi';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import ITodoDTO from '@/interface/models/dto/ITodoDTO';
import ITodoService from '@/interface/services/ITodoService';
import { ApiEnum } from '@/infrastructure/ioccontainer/enum/ApiEnum';
import { authorize } from '@/infrastructure/decorator/Authorize';

export default class TodoService implements ITodoService {
    todoApi: ITodoApi
    constructor() {
        this.todoApi = IOCContainer.getInstance(ApiEnum.TodoApi);
    }
    /**
     * @methodName ����todoDto
     * @param {ITodoDTO} todoDTO
     * @return {Promise<ITodoDTO>}
     */
    @authorize()
    async updateTodo(todoDTO: ITodoDTO): Promise<ITodoDTO> {
        return await this.todoApi.update(todoDTO);
    }
    /**
     * @notFinished �������ûд���������
     * @methodName ��ȡtodoitem
     * @param {ITodoDTO} todoDTO
     * @return {Promise<ITodoDTO>}
     */
    async getTodoById(id: string): Promise<ITodoDTO> {
        return await this.todoApi.getById(id);
    }
    @authorize()
    /**
     * @methodName ���todo
     * @param {ITodoDTO} todoDTO
     * @return {Promise<ITodoDTO>}
     */
    async addTodo(todoDTO: ITodoDTO): Promise<ITodoDTO> {
        return await this.todoApi.add(todoDTO);
    }
    /**
     * @finished ��������Ѿ����ͨ����
     * @methodName ��ȡtodo�б�
     */
    async getTodoList(): Promise<TableTodoViewModel[] | []> {
        let tables: TableTodoViewModel[] = [];
        let data = await this.todoApi.getList();
        if (data.length > 0) {
            data.map(item => {
                tables.push(new TableTodoViewModel(item));
            });
        }
        return tables;
    }
    @authorize()
    async delteTodo(todoId: string): Promise<any> {
        return await this.todoApi.delete(todoId);
    }
}