import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import TestTableController from './TestTableController';
import BaseForm from '@/components/base/form/BaseForm';
import TestFormController from './TestFormController';
@Observer
@Component
export default class TestForm extends Vue {
    testFormController:TestFormController;
    constructor() {
        super();
        this.testFormController = new TestFormController();
    }

    render() {
        return (
            <BaseForm props={{ controller: this.testFormController }}></BaseForm>
        );
    }
}
