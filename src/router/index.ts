import { UtilsEnum } from './../infrastructure/ioccontainer/enum/UtilsEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import Page404 from '@/views/common/Page404'
import Layout from '@/views/layout/Layout'
import Login from '@/views/login/Login'
import Todo from '@/views/todo/Todo'
import TodoForm from '@/views/todo/TodoForm'
import Vue from 'vue'
import VueRouter, { NavigationGuard, NavigationGuardNext, Route, RouteConfig } from 'vue-router'
import { RouterPathEnum } from './RouterPathEnum'
import IMyAuthorize from '@/infrastructure/utils/authorize/IMyAuthorize';
import TestTable from '@/views/test/TestTable';
import TestForm from '@/views/test/TestForm';
import MenuTable from '@/views/menu/MenuTable';
import MenuForm from '@/views/menu/MenuForm';
import ArticleForm from '@/views/article/ArticleForm';
import ArticleTable from '@/views/article/ArticleTable';
import UserForm from '@/views/user/MyUserForm';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: RouterPathEnum.Index,
    component: Layout,
    children: [
      {
        path: RouterPathEnum.Todo,
        component: Todo
      },
      {
        path: RouterPathEnum.TodoForm,
        component: TodoForm
      },
      {
        path: RouterPathEnum.Test,
        component: TestTable
      },
      {
        path: RouterPathEnum.TestForm,
        component: TestForm
      },
      {
        path: RouterPathEnum.Menu,
        component: MenuTable
      },
      {
        path: RouterPathEnum.MenuForm,
        component: MenuForm
      },
      {
        path: RouterPathEnum.Article,
        component: ArticleTable
      },
      {
        path: RouterPathEnum.ArticleForm,
        component: ArticleForm
      },
      {
        path:RouterPathEnum.MyUserForm,
        component:UserForm
      }
    ]
  },
  {
    path: RouterPathEnum.Login,
    component: Login
  },
  {
    path: RouterPathEnum.Null,
    component: Page404
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  const myAuthorize: IMyAuthorize = IOCContainer.getInstance(UtilsEnum.Authorize);
  // if (myAuthorize.checkIsLogin() && to.path !== RouterPathEnum.Login) {
  //   next({ path: RouterPathEnum.Login })
  // }
  next();
})

export default router
