import IMySwitchOption from './IMySwitchOption';

export default class MySwitchOption implements IMySwitchOption {
    checkedChildren: string;
    unCheckedChildren: string;
    defaultChecked: boolean;
    constructor(param?: {
        checkedChildren?: string,
        unCheckedChildren?: string,
        defaultChecked?: boolean
    }) {
        this.checkedChildren = param?.checkedChildren ?? "是"
        this.unCheckedChildren = param?.unCheckedChildren ?? "否"
        this.defaultChecked = param?.defaultChecked ?? true;
    }
}