import IBaseDTO from '@/interface/models/IBaseDTO';

export default interface IUserDTO extends IBaseDTO {
    username: string;
    password: string;
}