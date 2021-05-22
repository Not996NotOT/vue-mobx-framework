import IBaseDTO from '@/interface/models/IBaseDTO';
export default class UserResultDTO implements IBaseDTO {
    id: string | undefined;
    username:string | undefined;
    password:string | undefined;
    token:string | undefined;
}