import { InjectTypeEnum } from './../enum/InjectTypeEnum';
import IBaseIOCModel from '../interface/IBaseIOCModel';
import IIOCModel from '../interface/IIOCModel';
import { Constructor, IOCEnum } from '../type/IOCType';

export default class IOCModel<T extends IBaseIOCModel> implements IIOCModel<T>{
    iocObject: Constructor<T>;
    iocName: IOCEnum;
    iocInjectType: InjectTypeEnum;
    constructor(iocObject: Constructor<T>, iocName: IOCEnum, iocInjectType?: InjectTypeEnum) {
        this.iocName = iocName;
        this.iocObject = iocObject;
        this.iocInjectType = iocInjectType ?? InjectTypeEnum.Singleton;
    }
}