import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
import BaseTable from '@/components/base/table/BaseTable';
import MenuTableController from './MenuTableController';
@Observer
@Component
export default class MenuTable extends Vue {
    MenuTableController: MenuTableController;
    constructor() {
        super();
        this.MenuTableController = new MenuTableController();
    }

    render() {
        return (
            <BaseTable props={{
                controller: this.MenuTableController
            }}>
                
            </BaseTable>
        );
    }
}
