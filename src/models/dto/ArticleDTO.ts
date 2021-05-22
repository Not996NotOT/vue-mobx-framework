import IArticleDTO from '@/interface/models/dto/IArticleDTO';
import { IsNotEmpty } from 'class-validator';
import AbsBaseDTO from '../abstract/AbsBaseDTO';
export default class ArticleDTO extends AbsBaseDTO<ArticleDTO> implements IArticleDTO {
    id: number | undefined;
    @IsNotEmpty({ message: "所属栏目不能为空" })
    mid: number | undefined;
    @IsNotEmpty({ message: "标题不能为空" })
    title: string;
    @IsNotEmpty({ message: "内容不能为空"})
    content: string;
    isaudit: number;
    isenable: number;
    constructor(param?: {
        id?: number,
        mid?: number,
        title?: string,
        content?: string,
        isaudit?: number,
        isenable?: number,
    }) {
        super();
        this.id = param?.id ?? undefined;
        this.mid = param?.mid ?? undefined;
        this.title = param?.title ?? "";
        this.content = param?.content ?? "";
        this.isaudit = param?.isaudit ?? 1;
        this.isenable = param?.isenable ?? 1;
    }
}