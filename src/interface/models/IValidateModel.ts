import { MessageEnum } from '@/enum/feedback/MessageEnum';
import { ValidateDialogEnum } from '@/enum/validate/ValidateDialogEnum';
import IMyMessage from '@/infrastructure/utils/message/IMyMessage';
import IBaseDTO from './IBaseDTO';
export interface IValidateModel<T extends IBaseDTO> extends IBaseDTO {
    validate(param?: {
        viewModel?: any
    }): Promise<T | boolean>;
    getErrorsMessage(): { [key: string]: any };
    getErrorsMessageSingle(): string | undefined;
    mergeToViewModel(t: T): T;
    mergeErrorToViewModel(t: T): T;
    getReturnDialog(param?: { validateDialogEnum: ValidateDialogEnum, messageEnum?: MessageEnum, title?: string }): void;
    toPureDTO(): any;
}