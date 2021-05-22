import { IsNotEmpty } from 'class-validator';
import AbsBaseDTO from '../abstract/AbsBaseDTO';
import IUserDTO from '../../interface/models/dto/IUserDTO';

export default class UserDTO extends AbsBaseDTO<UserDTO> implements IUserDTO {
    @IsNotEmpty({ message: `用户名不能为空` })
    username: string;
    @IsNotEmpty({ message: `密码不能为空` })
    password: string;
    constructor(userDto?: {
        username?: string,
        password?: string
    }) {
        super();
        this.username = userDto?.username ?? "";
        this.password = userDto?.password ?? "";
    }
    id: any;
}