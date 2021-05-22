import Component from "vue-class-component";
import Vue from "vue";
//@ts-ignore
import style from './MyEditor.module.scss';
import { Prop, Watch } from 'vue-property-decorator';
@Component
export default class MyEditor extends Vue {
    @Prop() value!: string;
    @Prop() onChange!: (html: any) => void;
    content: string = '';
    editorOption: any = {
        placeholder: '编辑文章内容'
    };
    @Watch('value', { immediate: true, deep: true })
    onValueChanged(value: string, oldValue: string) {
        if(value!==oldValue){
            this.content = this.value;
        }
    }
    mounted() {
        console.log(this.value)
    }
    updated() {
        this.onChange(this.content);
    }
    constructor() {
        super();
    }
    render() {
        return <div>
            <quill-editor ref="myTextEditor" v-model={this.content} options={this.editorOption}></quill-editor>
        </div>
    }
}