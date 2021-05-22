import IExpandService from '@/interface/services/IExpandService';
import { RouterPathEnum } from '@/router/RouterPathEnum';
import BaseFormController from '@/components/base/form/BaseFormController';
import TestDTO from '@/models/dto/TestDTO';
import TestViewModel from '@/models/viewmodel/TestViewModel';

export default class TestFormController extends BaseFormController<TestViewModel, TestDTO, TestDTO, IExpandService<TestDTO,TestDTO>>{
    constructor() {
        super({
            urlReqeustPath: "/test",
            listRouterPath: RouterPathEnum.Test,
            v: TestViewModel,
            t: TestDTO,
            r: TestDTO
        });
    }
}