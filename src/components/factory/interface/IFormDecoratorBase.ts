import { FormEnum } from '../enum/FormEnum';
import IFormWight from './IFormWight';

export default interface IFormDecoratorBase {
    key: string;
    primaryKey?: boolean
    component?: IFormWight;
    title?: string;
    defaultValue?: any;
    showErrorMessage?: boolean;
}