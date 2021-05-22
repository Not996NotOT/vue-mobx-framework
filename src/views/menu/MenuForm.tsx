import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import BaseForm from '@/components/base/form/BaseForm';
import MenuFormController from './MenuFormController';
@Observer
@Component
export default class MenuForm extends Vue {
    MenuFormController:MenuFormController;
    constructor() {
        super();
        this.MenuFormController = new MenuFormController();
    }

    render() {
        return (
            <BaseForm props={{ controller: this.MenuFormController }}></BaseForm>
        );
    }
}
