import Component from "vue-class-component";
import Vue from "vue";
import { Prop } from 'vue-property-decorator';
//@ts-ignore
import style from './MyInput.module.scss';

@Component
export default class MyInput extends Vue {
    @Prop() placeholder!: string;
    @Prop() value!: any;
    @Prop() disabled!: boolean;
    @Prop() onChange!:(e:any)=>any;
    constructor() {
        super();
    }
    render() {
        return (
            <div class={style.main}>
                <input class={style.input}
                    placeholder={this.placeholder}
                    value={this.value}
                    on-input={(e:any)=>this.onChange(e)}
                    disabled={this.disabled}
                />
            </div>

        );
    }
}