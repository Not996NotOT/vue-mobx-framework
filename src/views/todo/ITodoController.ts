import TableTodoViewModel from '@/models/viewmodel/TableTodoViewModel';

export default interface ITodoController {
    todoList:TableTodoViewModel[];
    gotoAddTodoPage(): void;
    initialTableData():any;
    deleteTodo(id:string):any;
    searchTodo(id: string):any;
}