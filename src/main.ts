import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';
import 'reflect-metadata';
import IOCContainer from './infrastructure/ioccontainer/IOCContainer';
import IOCModel from './infrastructure/ioccontainer/models/IOCModel';
import ITodoService from './interface/services/ITodoService';
import ITodoApi from './interface/api/ITodoApi';
import IAxiosHelper from './utils/axios/interface/IAxiosHelper';
import IMyAuthorize from './infrastructure/utils/authorize/IMyAuthorize';
import IRouter from './router/IRouter';
import IMyMessage from './infrastructure/utils/message/IMyMessage';
import IMyLoadingController from './components/myloading/IMyLoadingController';
import TodoService from './services/TodoService';
import { ServiceEnum } from './infrastructure/ioccontainer/enum/ServiceEnum';
import TodoApi from './api/TodoApi';
import { ApiEnum } from './infrastructure/ioccontainer/enum/ApiEnum';
import AxiosHelper from './utils/axios/AxiosHelper';
import { UtilsEnum } from './infrastructure/ioccontainer/enum/UtilsEnum';
import MyAuthorize from './infrastructure/utils/authorize/MyAuthorize';
import { RouterEnum } from './infrastructure/ioccontainer/enum/RouterEnum';
import MyMessage from './infrastructure/utils/message/MyMessage';
import { UIEnum } from './infrastructure/ioccontainer/enum/UIEnum';
import MyLoadingController from './components/myloading/MyLoadingController';
import Router from './router/Router';
import IUserApi from './interface/api/IUserApi';
import UserApi from './api/UserApi';
import IUserService from './interface/services/IUserService';
import UserService from './services/UserService';
import IDateTimeHelper from './utils/datetime/IDatetimeHelper';
import DateTimeHelper from './utils/datetime/DatetimeHelper';
//@ts-ignore
import VueQuillEditor from 'vue-quill-editor';

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'




IOCContainer.addRouter(new IOCModel<IRouter>(Router, RouterEnum.VueRouter));
IOCContainer.addUtils(new IOCModel<IAxiosHelper>(AxiosHelper, UtilsEnum.Axios));
IOCContainer.addUtils(new IOCModel<IDateTimeHelper>(DateTimeHelper, UtilsEnum.DateTime));
IOCContainer.addUtils(new IOCModel<IMyAuthorize>(MyAuthorize, UtilsEnum.Authorize));
IOCContainer.addApi(new IOCModel<ITodoApi>(TodoApi, ApiEnum.TodoApi))
IOCContainer.addApi(new IOCModel<IUserApi<any,any>>(UserApi, ApiEnum.UserApi))
IOCContainer.addService(new IOCModel<ITodoService>(TodoService, ServiceEnum.ITodoService));
IOCContainer.addService(new IOCModel<IUserService>(UserService, ServiceEnum.IUserService));
IOCContainer.addUI(new IOCModel<IMyMessage>(MyMessage, UIEnum.IMessage));
IOCContainer.addUI(new IOCModel<IMyLoadingController>(MyLoadingController, UIEnum.IMyLoading));


Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(VueQuillEditor)

const vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
