import { APIDOMAIN } from "../GlobalConfig";
/**
 * 请求Api的域名例如http://www.xxxtest.com/api/
 */
const baseURL = APIDOMAIN;
/**
 * 请求超时事件毫秒计算
 */
const timeout = 5000;
/**
 * 是否开启拦截器
 */
const isEnableInterceptor = true;
export { baseURL, timeout, isEnableInterceptor };
