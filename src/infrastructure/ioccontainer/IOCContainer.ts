import { container } from 'inversify-props';
import { InjectTypeEnum } from './enum/InjectTypeEnum';
import IBaseIOCModel from './interface/IBaseIOCModel';
import IOCModel from './models/IOCModel';
import { IOCEnum } from './type/IOCType';
import 'reflect-metadata';

export default class IOCContainer {
    private constructor() { }
    private static injectToIOCContainer<T>(iOCModel: IOCModel<T>): void {
        switch (iOCModel.iocInjectType) {
            case InjectTypeEnum.Request:
                container.addRequest<T>(iOCModel.iocObject, iOCModel.iocName);
                break;
            case InjectTypeEnum.Singleton:
                container.addSingleton<T>(iOCModel.iocObject, iOCModel.iocName);
                break;
            case InjectTypeEnum.Transient:
                container.addTransient<T>(iOCModel.iocObject, iOCModel.iocName);
                break;
        }
    }


    public static getInstance<T extends IBaseIOCModel>(iOCEnum: IOCEnum) {
        return container.get<T>(iOCEnum);
    }

    public static addUtils<T extends IBaseIOCModel>(utilsIOCModel: IOCModel<T>): void {
        this.injectToIOCContainer(utilsIOCModel);
    }

    public static addContext<T extends IBaseIOCModel>(contextIOCModel: IOCModel<T>): void {
        this.injectToIOCContainer(contextIOCModel);
    }

    public static addUI<T extends IBaseIOCModel>(uiIOCModel: IOCModel<T>): void {
        this.injectToIOCContainer(uiIOCModel);
    }
    public static addService<T extends IBaseIOCModel>(serviceIOCModel: IOCModel<T>): void {
        this.injectToIOCContainer(serviceIOCModel);
    }
    public static addApi<T extends IBaseIOCModel>(apiIOCModel: IOCModel<T>) {
        this.injectToIOCContainer(apiIOCModel);
    }

    public static addRouter<T extends IBaseIOCModel>(routerIOCModel: IOCModel<T>) {
        this.injectToIOCContainer(routerIOCModel);
    }
}