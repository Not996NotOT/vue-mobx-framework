import { InjectTypeEnum } from '../enum/InjectTypeEnum';
import { Constructor, IOCEnum } from '../type/IOCType';

export default interface IIOCModel<T> {
    iocObject: Constructor<T>;
    iocName: IOCEnum;
    iocInjectType: InjectTypeEnum;
}