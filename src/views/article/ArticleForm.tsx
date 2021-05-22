import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import BaseForm from '@/components/base/form/BaseForm';
import ArticleFormController from './ArticleFormController';
@Observer
@Component
export default class ArticleForm extends Vue {
    ArticleFormController:ArticleFormController;
    constructor() {
        super();
        this.ArticleFormController = new ArticleFormController();
    }

    render() {
        return (
            <BaseForm props={{ controller: this.ArticleFormController }}></BaseForm>
        );
    }
}
