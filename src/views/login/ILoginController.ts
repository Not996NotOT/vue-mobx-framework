import LoginViewModel from '@/models/viewmodel/LoginViewModel';
export default interface ILoginController {
    loginViewModel:LoginViewModel;
    login(): void;
}