import { RouterPathEnum } from '@/router/RouterPathEnum';
import { RouterEnum } from './../../infrastructure/ioccontainer/enum/RouterEnum';
import IRouter from '@/router/IRouter';
import ITodoService from '@/interface/services/ITodoService';
import ITodoController from './ITodoController';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import { ServiceEnum } from '@/infrastructure/ioccontainer/enum/ServiceEnum';
import TableTodoViewModel from '@/models/viewmodel/TableTodoViewModel';
import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
import { UIEnum } from '@/infrastructure/ioccontainer/enum/UIEnum';
export default class TodoController implements ITodoController {
    router: IRouter
    todoService: ITodoService
    todoList: TableTodoViewModel[];
    myMessage: IMyMessage;
    constructor() {
        this.todoService = IOCContainer.getInstance(ServiceEnum.ITodoService);
        this.router = IOCContainer.getInstance(RouterEnum.VueRouter)
        this.myMessage = IOCContainer.getInstance(UIEnum.IMessage);
        this.todoList = [];
        this.initialTableData();
    }
    async initialTableData() {
        this.todoList = await this.todoService.getTodoList();
    }

    async deleteTodo(id: string) {
        this.myMessage.showConfirm({
            content: "是否确定删除", onOk: async () => {
                await this.todoService.delteTodo(id);
                this.initialTableData();
            }, onCancel: () => { }
        })

    }

    async searchTodo(id: string) {
        this.router.push({ path: RouterPathEnum.TodoForm, query: { id } })
    }

    gotoAddTodoPage() {
        this.router.push(RouterPathEnum.TodoForm);
    }
}