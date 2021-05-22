import { isNotEmpty } from 'class-validator';
import { AuthorizeEnum } from './enum/AuthorizeEnum';
import IMyAuthorize from './IMyAuthorize';

export default class MyAuthorize implements IMyAuthorize {
    setToken(token: string): void {
        sessionStorage.setItem(AuthorizeEnum.Token, token);
    }
    getToken(): string | null {
        return sessionStorage.getItem(AuthorizeEnum.Token);
    }
    checkIsLogin(): boolean {
        let isFlag: boolean = false;
        if (this.getToken() == null) {
            isFlag = true;
        }
        return isFlag;
    }
}