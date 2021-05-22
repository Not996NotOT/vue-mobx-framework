import { UtilsEnum } from './../enum/UtilsEnum';
import { ContextEnum } from '../enum/ContextEnum';
import { RouterEnum } from '../enum/RouterEnum';
import { ServiceEnum } from '../enum/ServiceEnum';
import { UIEnum } from '../enum/UIEnum';
import { ApiEnum } from '../enum/ApiEnum';
export declare type Constructor<T = any> = {
    new(...args: any[]): T;
} | any;
export declare type IOCEnum = UIEnum | ServiceEnum | RouterEnum | ContextEnum | UtilsEnum | ApiEnum;