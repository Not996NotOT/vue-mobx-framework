import { RawLocation } from 'vue-router';
import { Dictionary } from 'vue-router/types/router';
export default interface IRouter {
    push(location: RawLocation):void;
    getQueryParam():Dictionary<string | (string | null)[]>;
}