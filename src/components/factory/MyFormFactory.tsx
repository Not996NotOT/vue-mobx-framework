import { FormEnum } from './enum/FormEnum';
import IFormTemplate from './interface/IFormTemplate';
import MyInput from '../myinput/MyInput'
import MyEditor from '../myeditor/MyEditor';
import MySwitch from '../myswitch/MySwitch';
import { toJS } from 'mobx';

export default class MyFormFactory {
    public static getFormComponent(h: any, formTemplate: IFormTemplate) {
        let component;
        switch (formTemplate.metaInfo.component?.type) {
            case FormEnum.Input:
                component = <MyInput props={{
                    placeholder: formTemplate.metaInfo.title,
                    value: formTemplate.instance[formTemplate.metaInfo.key],
                    disabled: formTemplate.metaInfo.primaryKey,
                    onChange: (e: any) => formTemplate.instance[formTemplate.metaInfo.key] = e.target.value,
                    ...formTemplate.metaInfo.component.param
                }} />
                break;
            case FormEnum.TextArea:
                component = <a-input
                    placeholder={formTemplate.metaInfo.title}
                    value={formTemplate.property}
                    row={4}
                    {...formTemplate.metaInfo.component.param}
                />
                break;
            case FormEnum.DatePicker:
                component = <a-date-picker
                    placeholder={formTemplate.metaInfo.title}
                    value={formTemplate.property}
                    onChange={(value: any) => {
                        formTemplate.instance[formTemplate.metaInfo.key] = value;
                    }} {...formTemplate.metaInfo.component.param} />
                break;
            case FormEnum.Editor:
                console.log(formTemplate.instance[formTemplate.metaInfo.key])
                component = <MyEditor
                    props={{
                        value: formTemplate.instance[formTemplate.metaInfo.key],
                        onChange: (html: any) => {
                            formTemplate.instance[formTemplate.metaInfo.key] = html;
                        }
                    }} />
                break;
            case FormEnum.Cascader:
                component = <a-cascader
                    key={formTemplate.property}
                    placeholder="请选择"
                    options={formTemplate.instance[formTemplate.metaInfo.key + "InitialData"]}
                    defaultValue={formTemplate.property}
                    changeOnSelect={false}
                    onChange={(value: any, option: any) => {
                        formTemplate.instance[formTemplate.metaInfo.key] = toJS(value);
                    }}
                />
                break;
            case FormEnum.Switch:
                component = <MySwitch props={{
                    mySwitchProps: formTemplate.metaInfo.component.param,
                    defaultValue: formTemplate.instance[formTemplate.metaInfo.key],
                    onChange: (checked: boolean) => {
                        formTemplate.instance[formTemplate.metaInfo.key] = checked ? 1 : 0;
                    }
                }} />
                break;
            default:
                break;
        }
        return component;
    }
}