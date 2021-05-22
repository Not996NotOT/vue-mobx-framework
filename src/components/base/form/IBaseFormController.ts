import { IValidateModel } from '@/interface/models/IValidateModel';
import IBaseDTO from '@/interface/models/IBaseDTO';
import IBaseViewModel from '@/interface/models/IBaseViewModel';

export default interface IBaseFormController<V extends IBaseViewModel, T extends IValidateModel<T>, R extends IBaseDTO> {
    viewModel: any;
    selectById(): Promise<any>;
    deleteById(): Promise<any>;
    addAndUpdate(): Promise<any>;
    update(): Promise<any>;
    add(): Promise<any>;
}