import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import BaseForm from '@/components/base/form/BaseForm';
import MyUserFormController from './MyUserFormController';
@Observer
@Component
export default class MyUserForm extends Vue {
    MyUserFormController:MyUserFormController;
    constructor() {
        super();
        this.MyUserFormController = new MyUserFormController();
    }

    render() {
        return (
            <BaseForm props={{ controller: this.MyUserFormController }}></BaseForm>
        );
    }
}
