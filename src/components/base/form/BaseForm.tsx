import IFormDecoratorDefine from '@/components/factory/interface/IFormDecoratorExtend';
import MyFormFactory from '@/components/factory/MyFormFactory';
import MyLoading from "@/components/myloading/MyLoading";
import IBaseDTO from '@/interface/models/IBaseDTO';
import IBaseViewModel from '@/interface/models/IBaseViewModel';
import { IValidateModel } from '@/interface/models/IValidateModel';
import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
//@ts-ignore
import style from "./BaseForm.module.scss";
import BaseFormController from './BaseFormController';
@Observer
@Component
export default class BaseForm extends Vue {
    @Prop() controller!: BaseFormController<IBaseViewModel, IValidateModel<any>, IBaseDTO, any>;
    baseFormController: BaseFormController<IBaseViewModel, IValidateModel<any>, IBaseDTO, any>;
    constructor() {
        super();
        this.baseFormController = this.controller;
    }
    render(h: any) {
        let formInstance = Reflect.getMetadata(this.baseFormController.viewModel.constructor.name, this.baseFormController.viewModel)
        return (
            <MyLoading>
                <div class={style.main}>
                    <div class={style.form}>
                        {
                            formInstance.map((item: IFormDecoratorDefine) => {
                                let component;
                                if (item.template) {
                                    component = item.render(h, this.baseFormController.viewModel, this.baseFormController.viewModel[item.key]);
                                }
                                else {
                                    component = MyFormFactory.getFormComponent(h, {
                                        instance: this.baseFormController.viewModel,
                                        property: this.baseFormController.viewModel[item.key],
                                        metaInfo: item
                                    })
                                }
                                return <div class={style.formItem}>
                                    <div class={style.formLabel}>
                                        <div>{item.title}：</div>
                                    </div>
                                    <div class={style.formComponent}>
                                        <div class={this.baseFormController.viewModel[item.key + "ErrorMessage"] && style.borderError}>
                                            {component}
                                        </div>
                                        <div class={style.inputError}>
                                            {this.baseFormController.viewModel[item.key + "ErrorMessage"] && this.baseFormController.viewModel[item.key + "ErrorMessage"]}
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div clas={style.action}>
                        <a-button
                            type="primary"
                            onClick={() => this.baseFormController.addAndUpdate()}
                        >
                            保存
                        </a-button>
                        <a-button
                            type="danger"
                            onClick={() => this.baseFormController.deleteById()}
                        >
                            删除
                        </a-button>
                    </div>
                </div>
            </MyLoading>
        );
    }
}
