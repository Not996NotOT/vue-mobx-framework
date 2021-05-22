import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import BaseTable from '@/components/base/table/BaseTable';
import TestTableController from './TestTableController';
@Observer
@Component
export default class TestTable extends Vue {
    testTableController: TestTableController;
    constructor() {
        super();
        this.testTableController = new TestTableController();
    }

    render() {
        return (
            <BaseTable props={{
                controller: this.testTableController
            }}></BaseTable>
        );
    }
}
