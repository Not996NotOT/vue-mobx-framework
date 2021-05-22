import dayjs from 'dayjs';
import IDateTimeHelper from './IDatetimeHelper';
export default class DateTimeHelper implements IDateTimeHelper{
    getCurrentDateTime() {
        return dayjs().format("YYYY-MM-DD HH:mm:ss");
    }
}