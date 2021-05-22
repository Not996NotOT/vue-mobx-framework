import { FormEnum } from "../enum/FormEnum";
import IFormDecoratorBase from './IFormDecoratorBase';
import IFormWight from './IFormWight';

export default interface IFormDecoratorParam {
    primaryKey?: boolean
    component?: IFormWight;
    title?: string;
    defaultValue?: any;
    showErrorMessage?:boolean;
    template?: (h: any, param: { instance: any, property: any, metaInfo: IFormDecoratorBase }) => any | undefined;
}