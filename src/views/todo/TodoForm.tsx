import MyLoading from "@/components/myloading/MyLoading";
import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import ITodoFormController from "./ITodoFormController";
//@ts-ignore
import style from "./TodoForm.module.scss";
import TodoFormController from "./TodoFormController";
@Observer
@Component
export default class TodoForm extends Vue {
  todoController: ITodoFormController;
  constructor() {
    super();
    this.todoController = new TodoFormController();
  }
  render() {
    return (
      <MyLoading>
        <div class={style.main}>
          <div class={style.form}>
            <a-input
              placeholder="编号"
              v-model={this.todoController.todo.id}
              disabled
            />
            <div class={style.inputError}></div>
            <a-input
              placeholder="事项"
              v-model={this.todoController.todo.item}
              style={{
                borderColor:
                  this.todoController.todo.itemErrorMessage && "#f5222d",
              }}
            />
            <div class={style.inputError}>
              {this.todoController.todo.itemErrorMessage}
            </div>
            <a-input
              placeholder="代办人"
              v-model={this.todoController.todo.author}
              style={{
                borderColor:
                  this.todoController.todo.authorErrorMessage && "#f5222d",
              }}
            />
            <div class={style.inputError}>
              {this.todoController.todo.authorErrorMessage}
            </div>
            <a-input
              placeholder="时间"
              v-model={this.todoController.todo.datetime}
              style={{
                borderColor:
                  this.todoController.todo.datetimeErrorMessage && "#f5222d",
              }}
            />
            <div class={style.inputError}>
              {this.todoController.todo.datetimeErrorMessage}
            </div>
          </div>
          <div clas={style.action}>
            <a-button
              type="primary"
              onClick={() => this.todoController.addAndUpdateTodo()}
            >
              保存
            </a-button>
            <a-button
              type="danger"
              onClick={() => this.todoController.deleteTodoById()}
            >
              删除
            </a-button>
          </div>
        </div>
      </MyLoading>
    );
  }
}
