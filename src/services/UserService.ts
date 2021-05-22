import { ApiEnum } from '@/infrastructure/ioccontainer/enum/ApiEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import UserResultDTO from '@/models/dto/UserResultDTO';
import UserDTO from "@/models/dto/UserDTO";
import IUserApi from '@/interface/api/IUserApi';

export default class UserService {
    path = "";
    userApi: IUserApi<UserDTO, UserResultDTO>
    constructor() {
        this.userApi = IOCContainer.getInstance(ApiEnum.UserApi);
        this.path = "/user";
    }
    async login(userDTO: UserDTO) {
        var isFlag = false;
        let data = await this.userApi.login(userDTO);
        if (data) {
            isFlag = true;
        }
        return false;
    }
}