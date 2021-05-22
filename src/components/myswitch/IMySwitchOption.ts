import IComponents from '@/interface/components/IComponents';

export default interface IMySwitchOption extends IComponents {
    checkedChildren: string;
    unCheckedChildren: string;
    defaultChecked:boolean;
}