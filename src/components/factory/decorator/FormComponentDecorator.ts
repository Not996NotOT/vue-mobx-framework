import { FormEnum } from "../enum/FormEnum";
import IFormDecoratorExtend from '../interface/IFormDecoratorExtend';
import IFormDecoratorParam from '../interface/IFormDecoratorParam';
export const Form = (param?: IFormDecoratorParam): PropertyDecorator => {
  return (target: Object, propertyKey: string | symbol) => {
    let name = target.constructor.name;
    let key = propertyKey as string;
    if (Reflect.hasMetadata(target.constructor.name, target)) {
      const typeArray: IFormDecoratorExtend[] = Reflect.getMetadata(name, target) as IFormDecoratorExtend[];
      let type = {
        key,
        primaryKey: param?.primaryKey ?? false,
        title: param?.title ?? key,
        component: param?.component ?? { type: FormEnum.Input },
        defaultValue: param?.defaultValue ?? undefined,
        showErrorMessage: param?.showErrorMessage ?? true
      };
      typeArray.push({
        ...type, template: param?.template ?? undefined,
        render: (h: any, instance: any, property: any) => param?.template ? param?.template(h, { instance, property, metaInfo: type }) : undefined
      })
    }
    else {
      const typeArray: IFormDecoratorExtend[] = [];
      let type = {
        key,
        primaryKey: param?.primaryKey ?? false,
        title: param?.title ?? key,
        component: param?.component ?? { type: FormEnum.Input },
        defaultValue: param?.defaultValue ?? undefined,
        showErrorMessage: param?.showErrorMessage ?? true
      };
      typeArray.push({
        ...type, template: param?.template ?? undefined,
        render: (h: any, instance: any, property: any) => param?.template ? param?.template(h, { instance, property, metaInfo: type }) : undefined
      })
      Reflect.defineMetadata(target.constructor.name, typeArray, target);
    }
  }
}