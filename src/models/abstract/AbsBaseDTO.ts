import IBaseDTO from '@/interface/models/IBaseDTO';
import AbsValidateModel from './AbsValidateModel';

export default class AbsBaseDTO<T extends IBaseDTO> extends AbsValidateModel<T> implements IBaseDTO {
    id: any;
}