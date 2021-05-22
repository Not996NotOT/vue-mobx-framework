import UserDTO from '@/models/dto/UserDTO';
import ExpandApi from './ExpandApiT';
import UserResult from '@/models/dto/UserResultDTO';
import IUserApi from '@/interface/api/IUserApi';
export default class UserApi extends ExpandApi<UserDTO, UserResult> implements IUserApi<UserDTO, UserResult> {
    login(userDTO: UserDTO): Promise<UserResult> {
       return this.axios.post<UserDTO>("/login",userDTO);
    }
}