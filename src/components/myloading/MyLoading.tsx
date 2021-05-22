import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from "vue-property-decorator";
import IMyLoadingController from "./IMyLoadingController";
import MyLoadingControllerSingle from "./MyLoadingController";
import IOCContainer from "@/infrastructure/ioccontainer/IOCContainer";
import { UIEnum } from "@/infrastructure/ioccontainer/enum/UIEnum";

@Component
export default class MyLoading extends Vue {
  myLoadingController: IMyLoadingController;
  constructor() {
    super();
    this.myLoadingController = IOCContainer.getInstance(UIEnum.IMyLoading);
  }
  render() {
    return (
      <a-spin tip="Loading..." spinning={this.myLoadingController.isLoading}>
        {this.$scopedSlots.default && this.$scopedSlots.default({})}
      </a-spin>
    );
  }
}
