import { RouterEnum } from '@/infrastructure/ioccontainer/enum/RouterEnum';
import IRouter from '@/router/IRouter';
import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
import { ServiceEnum } from '@/infrastructure/ioccontainer/enum/ServiceEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import ITodoService from '@/interface/services/ITodoService';
import TodoDTO from '@/models/dto/TodoDTO';
import TodoViewModel from '@/models/viewmodel/TodoViewModel';
import ITodoFormController from './ITodoFormController';
import { UIEnum } from '@/infrastructure/ioccontainer/enum/UIEnum';
import { ActionMessageEnum } from '@/enum/feedback/ActionMessageEnum';
import { RouterPathEnum } from '@/router/RouterPathEnum';
import { Dictionary } from 'vue-router/types/router';
import { isNotEmpty } from 'class-validator';
export default class TodoFormController implements ITodoFormController {
    todo: TodoViewModel;
    todoService: ITodoService;
    myMessage: IMyMessage;
    router: IRouter;
    constructor() {
        this.todoService = IOCContainer.getInstance(ServiceEnum.ITodoService);
        this.myMessage = IOCContainer.getInstance(UIEnum.IMessage);
        this.router = IOCContainer.getInstance(RouterEnum.VueRouter);
        this.todo = new TodoViewModel();
        this.initialData();
    }
    async initialData() {
        let routerDic = this.router.getQueryParam() as Dictionary<string>;
        let id: string = routerDic["id"];
        if (id) {
            this.todo = new TodoViewModel(await this.todoService.getTodoById(id))
        }
        else {
            this.todo = new TodoViewModel();
        }
    }
    async selectTodoById(): Promise<void> {
        if (this.todo.id) {
            this.todoService.getTodoById(this.todo.id);
        }
    }

    async deleteTodoById() {
        if (isNotEmpty(this.todo.id)) {
            this.myMessage.showConfirm({
                content: "是否确定删除", onOk: async () => {
                    await this.todoService.delteTodo(this.todo.id);
                    this.router.push(RouterPathEnum.Todo)
                }, onCancel: () => { }
            })
        }
    }

    async addAndUpdateTodo(): Promise<void> {
        if (isNotEmpty(this.todo.id)) {
            this.UpdateTodo();
        }
        else {
            this.addTodo();
        }
    }
    private async UpdateTodo() {
        let todoDTO: TodoDTO = new TodoDTO({
            id: this.todo.id,
            item: this.todo.item,
            author: this.todo.author,
            datetime: this.todo.datetime,
        })
        if (await todoDTO.validate({ viewModel: this.todo })) {
            let data = await this.todoService.updateTodo(todoDTO.toPureDTO());
            if (data) {
                this.myMessage.showDefualtMessage({
                    messsage: "代办事项", actionMesssageEnum: ActionMessageEnum.Update, onOk: () => {
                        this.router.push(RouterPathEnum.Todo);
                    }
                })
            }
        }
        else {
            todoDTO.mergeErrorToViewModel<TodoViewModel>(this.todo);
        }
    }

    private async addTodo() {
        let todoDTO: TodoDTO = new TodoDTO({
            item: this.todo.item,
            author: this.todo.author,
            datetime: this.todo.datetime,
        })
        if (await todoDTO.validate({ viewModel: this.todo })) {
            let data = await this.todoService.addTodo(todoDTO.toPureDTO());
            if (data) {
                this.myMessage.showDefualtMessage({
                    messsage: "代办事项", actionMesssageEnum: ActionMessageEnum.Add, onOk: () => {
                        this.router.push(RouterPathEnum.Todo);
                    }
                })
            }
        }
        else {
            todoDTO.mergeErrorToViewModel<TodoViewModel>(this.todo);
        }
    }
}