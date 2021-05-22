import { observable } from 'mobx';

export default class MyLoadingController {
    @observable isLoading = false;
    loading() {
        this.isLoading = !this.isLoading;
    }
}
