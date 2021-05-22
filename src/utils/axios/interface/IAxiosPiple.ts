export default interface IAxiosPiple<T> {
    piple(chain: any[]): any;
    next(): any;
}