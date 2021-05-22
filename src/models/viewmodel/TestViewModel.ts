import { observable } from 'mobx';

export default class TestViewModel {
    @observable
    id: string;
    @observable
    name: string;
    @observable
    age: string;
    @observable
    sex: string;
    constructor(param?: { id?: string, name?: string, age?: string, sex?: string }) {
        this.id = param?.id ?? "";
        this.name = param?.name ?? "";
        this.age = param?.age ?? "";
        this.sex = param?.sex ?? "";
    }
}