export default interface IMyAuthorize {
    setToken(token:any): void;
    getToken(): string | null;
    checkIsLogin(): boolean;
}