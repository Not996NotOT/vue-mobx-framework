import TodoViewModel from '@/models/viewmodel/TodoViewModel';

export default interface ITodoFormController {
    todo: TodoViewModel;
    addAndUpdateTodo(): void;
    initialData(): void;
    selectTodoById(id:string): void;
    deleteTodoById():void;
}