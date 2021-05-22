import { Observer } from 'mobx-vue';
import Vue from 'vue'
import Component from 'vue-class-component'
import LoginController from './LoginController';
//@ts-ignore
import style from './Login.module.scss';
import ILoginController from './ILoginController';
import MyLoading from '@/components/myloading/MyLoading';
@Observer
@Component
export default class Lgoin extends Vue {
    loginController: ILoginController
    constructor() {
        super();
        this.loginController = new LoginController();
    }
    render() {
        return <div class={style.main}>
            <div class={style.logo}>
            </div>
            <div class={style.loginMain}>
                <div class={style.loginBorder}>
                </div>
                <div class={style.login}>
                    <div class={style.inputItem}>
                        <input onChange={(e: any) => this.loginController.loginViewModel.username = e.target.value} required="" />
                        <div class={style.label}>
                            用户名:
                        </div>
                    </div>
                    <div class={style.inputItem}>
                        <input type="password" onChange={(e: any) => this.loginController.loginViewModel.password = e.target.value} required="" />
                        <div class={style.label}>
                            密&nbsp;&nbsp;码:
                        </div>
                    </div>
                    <div class={style.action}>
                        <MyLoading>
                            <a-button onClick={() => this.loginController.login()}>登录</a-button>
                            <a-button>取消</a-button>
                        </MyLoading>
                    </div>
                </div>
            </div>
        </div>
    }
}