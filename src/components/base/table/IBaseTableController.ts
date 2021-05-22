import IApi from '@/interface/api/IApi';
import IBaseDTO from '@/interface/models/IBaseDTO';

export default interface IBaseTableController<T extends IBaseDTO,R extends IBaseDTO,S extends IApi = IApi> {
    title:string;
    dataList: R[]
    columns:any[];
    addAndUpdate(): void;
    initialData(): void;
    selectById(id: string): void;
    deleteById(id: string): void;
}