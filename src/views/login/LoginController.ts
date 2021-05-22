import { RouterPathEnum } from './../../router/RouterPathEnum';
import { RouterEnum } from './../../infrastructure/ioccontainer/enum/RouterEnum';
import IRouter from '@/router/IRouter';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import IMyAuthorize from '@/infrastructure/utils/authorize/IMyAuthorize';
import { ServiceEnum } from '@/infrastructure/ioccontainer/enum/ServiceEnum';
import IUserService from '@/interface/services/IUserService';
import UserDTO from '@/models/dto/UserDTO';
import LoginViewModel from '@/models/viewmodel/LoginViewModel';
import { UtilsEnum } from '@/infrastructure/ioccontainer/enum/UtilsEnum';
import UserResultDTO from '@/models/dto/UserResultDTO';
import { UIEnum } from '@/infrastructure/ioccontainer/enum/UIEnum';
import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
export default class LoginController {
    loginViewModel: LoginViewModel;
    userService: IUserService;
    myAuthorize: IMyAuthorize;
    router: IRouter;
    myMessage: IMyMessage;
    constructor() {
        this.loginViewModel = new LoginViewModel();
        this.userService = IOCContainer.getInstance(ServiceEnum.IUserService);
        this.myAuthorize = IOCContainer.getInstance(UtilsEnum.Authorize);
        this.router = IOCContainer.getInstance(RouterEnum.VueRouter);
        this.myMessage = IOCContainer.getInstance(UIEnum.IMessage);
    }
    async login() {
        const userDto: UserDTO = new UserDTO({ username: this.loginViewModel.username, password: this.loginViewModel.password });
        if (await userDto.validate()) {
            let user: UserResultDTO | boolean = await this.userService.login(userDto.toPureDTO());
            if (user) {
                let u = user as UserResultDTO;
                this.myAuthorize.setToken(u.token)
                this.router.push(RouterPathEnum.Index);
            }
        }
        else {
            userDto.getReturnDialog();
        }
    }
}