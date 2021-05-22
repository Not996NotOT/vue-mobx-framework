export default class LoginViewModel {
    username: string;
    password: string;
    constructor({ username, password }: LoginViewModel = { username: "", password: "" }) {
        this.username = username;
        this.password = password;
    }
}