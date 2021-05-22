import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from 'vue-property-decorator';
import { Observer } from "mobx-vue";
import MySwitchProps from './MySwitchOption';
import { observable } from 'mobx';
//@ts-ignore

@Observer
@Component
export default class MySwitch extends Vue {
    @Prop() mySwitchProps: MySwitchProps | undefined;
    @Prop() defaultValue!: number;
    @Prop() onChange!: (checked: boolean) => void;
    mySwitchPropsBind: MySwitchProps;
    constructor() {
        super();
        this.mySwitchPropsBind = this.mySwitchProps ?? new MySwitchProps();
    }
    render() {
        return (
            <a-switch
                checked-children={this.mySwitchPropsBind?.checkedChildren}
                un-checked-children={this.mySwitchPropsBind?.unCheckedChildren}
                default-checked={this.defaultValue === 1}
                on-change={(checked: boolean) => this.onChange(checked)}
                checked={this.defaultValue === 1}
            />
        );
    }
}