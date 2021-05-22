export default class GlobalVue {
    private static vueInstance: Vue;
    private constructor() { }
    public static createInstance(vueInstance: Vue) {
        if (vueInstance !== undefined) {
            this.vueInstance = vueInstance;
        }
    }
    public static getVueInstance(): Vue {
        return this.vueInstance;
    }
}