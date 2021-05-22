export default class Querstring {
    private constructor() { }
    static ConvertToString(newClass: any): string {
        let param = [];
        for (let item of Object.getOwnPropertyNames(newClass)) {
            param.push(`${item}=${newClass[item]}`)
        }
        return `?${param.join('&')}`;
    }

}