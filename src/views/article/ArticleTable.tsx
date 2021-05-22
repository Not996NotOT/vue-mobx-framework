import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import BaseTable from '@/components/base/table/BaseTable';
import ArticleTableController from './ArticleTableController';
@Observer
@Component
export default class ArticleTable extends Vue {
    ArticleTableController: ArticleTableController;
    constructor() {
        super();
        this.ArticleTableController = new ArticleTableController();
    }

    render() {
        return (
            <BaseTable props={{
                controller: this.ArticleTableController
            }}>
            </BaseTable>
        );
    }
}
