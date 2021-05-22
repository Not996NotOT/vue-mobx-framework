import  IBaseDTO from '@/interface/models/IBaseDTO';
import { ValidateModel } from '../validate/ValidateModelT';

export default abstract class AbsValidateModel<T extends IBaseDTO> extends ValidateModel<T>{
    
}