import { observable } from 'mobx';
export default class TodoViewModel {
    /**编号 */
    @observable id: string;
    @observable item: string;
    @observable itemErrorMessage: string | undefined;
    @observable author: string;
    @observable authorErrorMessage: string | undefined;
    @observable datetime: string;
    @observable datetimeErrorMessage: string | undefined;
    constructor(param?: { id?: string, item?: string, author?: string, datetime?: string }) {
        this.id = param?.id ?? "";
        this.item = param?.item ?? "";
        this.author = param?.author ?? "";
        this.datetime = param?.datetime ?? "";
    }
}