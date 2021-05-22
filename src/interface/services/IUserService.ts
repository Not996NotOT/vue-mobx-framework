import UserDTO from '@/models/dto/UserDTO';
import UserResultDTO from '@/models/dto/UserResultDTO';
export default interface IUserService{
    login(userDto: UserDTO): UserResultDTO | boolean;
}