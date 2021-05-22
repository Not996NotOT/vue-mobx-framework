import MyLoading from "@/components/myloading/MyLoading";
import TodoViewModel from "@/models/viewmodel/TodoViewModel";
import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import ITodoController from "./ITodoController";
//@ts-ignore
import TodoController from "./TodoController";
@Observer
@Component
export default class Todo extends Vue {
  todoController: ITodoController;
  constructor() {
    super();
    this.todoController = new TodoController();
  }

  render() {
    return (
      <a-card title="TodoList">
        <a-button
          type="primary"
          slot="extra"
          onClick={() => this.todoController.gotoAddTodoPage()}
        >
          新增
        </a-button>
        <MyLoading>
          <a-table
            columns={[
              {
                title: "编号",
                dataIndex: "id",
                key: "id",
              },
              {
                title: "待办事项",
                dataIndex: "item",
                key: "item",
              },
              {
                title: "代办人",
                dataIndex: "author",
                key: "author",
              },
              {
                title: "时间",
                dataIndex: "datetime",
                key: "datetime",
              },
              {
                title: "操作",
                key: "action",
                customRender: (todo: TodoViewModel, row: any, index: any) => {
                  console.log(todo.id);
                  return (
                    <div>
                      <a-button
                        onClick={() => {
                          this.todoController.searchTodo(todo.id);
                        }}
                      >
                        查看
                      </a-button>
                      <a-button
                        type="danger"
                        onClick={() => {
                          this.todoController.deleteTodo(todo.id);
                        }}
                      >
                        删除
                      </a-button>
                    </div>
                  );
                },
              },
            ]}
            data-source={this.todoController.todoList}
          ></a-table>
        </MyLoading>
      </a-card>
    );
  }
}
