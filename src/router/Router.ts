import GlobalVue from '@/infrastructure/global/GlobalVue'
import { RawLocation } from 'vue-router';
import { Dictionary } from 'vue-router/types/router';
import IRouter from './IRouter';

export default class Router implements IRouter {
    vueInstance: Vue
    constructor() {
        this.vueInstance = GlobalVue.getVueInstance();
    }
    push(location: RawLocation) {
        this.vueInstance.$router.push(location)
    }
    getQueryParam():Dictionary<string | (string | null)[]>{
        return this.vueInstance.$route.query;
    }
}