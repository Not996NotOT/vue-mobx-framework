import ITodoDTO from '@/interface/models/dto/ITodoDTO';
import { IsNotEmpty } from 'class-validator';
import AbsBaseDTO from '../abstract/AbsBaseDTO';
export default class TestDTO extends AbsBaseDTO<TestDTO>{
    id: string;
    name: string;
    age: string;
    sex: string;
    constructor(param?: { id?: string, name?: string, age?: string, sex?: string }) {
        super();
        this.id = param?.id ?? "";
        this.name = param?.name ?? "";
        this.age = param?.age ?? "";
        this.sex = param?.sex ?? "";
    }
}