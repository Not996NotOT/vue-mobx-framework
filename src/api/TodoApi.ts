import { UtilsEnum } from '@/infrastructure/ioccontainer/enum/UtilsEnum';
import IOCContainer from '@/infrastructure/ioccontainer/IOCContainer';
import ITodoApi from '@/interface/api/ITodoApi';
import ITodoDTO from '@/interface/models/dto/ITodoDTO';
import IAxiosHelper from '@/utils/axios/interface/IAxiosHelper';
export default class TodoApi implements ITodoApi {
    axios: IAxiosHelper;
    constructor() {
        this.axios = IOCContainer.getInstance(UtilsEnum.Axios);
    }
    async update(todoDTO: ITodoDTO): Promise<ITodoDTO> {
        return await this.axios.put<ITodoDTO>("/todo/" + todoDTO.id, todoDTO);
    }
    async getById(todoId: string): Promise<ITodoDTO> {
        return await this.axios.get<ITodoDTO[]>("/todo/" + todoId);
    }
    async delete(todoId: string): Promise<any> {
        return await this.axios.delete("/todo/" + todoId);
    }
    async add(todoDTO: ITodoDTO): Promise<ITodoDTO> {
        return await this.axios.post<ITodoDTO>("/todo", todoDTO);
    }
    async getList(): Promise<ITodoDTO[]> {
        return await this.axios.get<ITodoDTO[]>("/todo");
    }
}