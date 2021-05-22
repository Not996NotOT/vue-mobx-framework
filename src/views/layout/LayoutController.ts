import { RouterEnum } from '@/infrastructure/ioccontainer/enum/RouterEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import IRouter from '@/router/IRouter';
import { RouterPathEnum } from '@/router/RouterPathEnum';
import ILayoutcontroller from './ILayoutController';

export default class LayoutController implements ILayoutcontroller {
    router: IRouter;
    constructor() {
        this.router = IOCContainer.getInstance(RouterEnum.VueRouter);
    }
    handleMenuClick(routerPathEnum: RouterPathEnum) {
        this.router.push(routerPathEnum);
    }
}