import IFormDecoratorBase from './IFormDecoratorBase';

export default interface IFormDecoratorExtend extends IFormDecoratorBase{
    template?: (h: any, param: { instance: any, property: any, metaInfo: IFormDecoratorBase }) => any | undefined;
    render: (h: any,instance: any, property: any) => any
}