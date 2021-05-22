import MyLoading from "@/components/myloading/MyLoading";
import IBaseDTO from '@/interface/models/IBaseDTO';
import IBaseViewModel from '@/interface/models/IBaseViewModel';
import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
import IBaseTableController from './IBaseTableController';
@Observer
@Component
export default class BaseTable extends Vue {
  @Prop() controller!: IBaseTableController<IBaseDTO, IBaseDTO>;
  baseController: IBaseTableController<IBaseDTO, IBaseDTO>;
  baseTitle: string;
  constructor() {
    super();
    this.baseController = this.controller;
    this.baseTitle = this.controller.title;
  }

  render() {
    return <a-card title={this.baseTitle}>
      <a-button
        type="primary"
        slot="extra"
        onClick={() => this.baseController.addAndUpdate()}
      >
        新增
    </a-button>
      <MyLoading>
        <a-table
          columns={[...this.baseController.columns, {
            title: "操作",
            key: "action",
            customRender: (item: IBaseViewModel, row: any, index: any) => {
              return (
                <div>
                  <a-button
                    onClick={() => {
                      this.baseController.selectById(item.id);
                    }}
                  >
                    查看
                </a-button>
                  <a-button
                    type="danger"
                    onClick={() => {
                      this.baseController.deleteById(item.id);
                    }}
                  >
                    删除
                </a-button>
                </div>
              );
            }
          }]}
          data-source={this.baseController.dataList}
        ></a-table>
      </MyLoading>
    </a-card>
  }
}
