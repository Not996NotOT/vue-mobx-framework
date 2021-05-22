import IBaseDTO from "../models/IBaseDTO";
import IExpandService from "./IExpandService";

export default interface IMyUserService<T extends IBaseDTO, R extends IBaseDTO> extends IExpandService<T, R> {
    
}