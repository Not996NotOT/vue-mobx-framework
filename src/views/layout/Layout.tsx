import { Observer } from "mobx-vue";
import Vue from "vue";
import Component from "vue-class-component";
//@ts-ignore
import style from "./Layout.module.scss";
import { RouterPathEnum } from "@/router/RouterPathEnum";
import ILayoutcontroller from "./ILayoutController";
import LayoutController from "./LayoutController";
@Observer
@Component
export default class Layout extends Vue {
  layoutController: ILayoutcontroller;
  constructor() {
    super();
    this.layoutController = new LayoutController();
  }
  render() {
    return (
      <div class={style.main}>
        <div class={style.left}>
          <a-layout-sider breakpoint="lg" collapsed-width="0">
            <div class="logo" />
            <a-menu
              theme="dark"
              mode="inline"
              onClick={({ key }: { key: any }) =>
                this.layoutController.handleMenuClick(key)
              }
            >
              {/* <a-menu-item key={RouterPathEnum.Todo}>
                <span class="nav-text">Todo</span>
              </a-menu-item>
              <a-menu-item key={RouterPathEnum.Test}>
                <span class="nav-text">Test</span>
              </a-menu-item> */}
              <a-menu-item key={RouterPathEnum.Menu}>
                <span class="nav-text">栏目</span>
              </a-menu-item>
              <a-menu-item key={RouterPathEnum.Article}>
                <span class="nav-text">文章</span>
              </a-menu-item>
            </a-menu>
          </a-layout-sider>
        </div>
        <div class={style.right}>
          <div class={style.top}></div>
          <div class={style.border}>
            <div class={style.content}>
              <router-view />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
