import { DateTime } from "ionic-angular";
import { DatetimePickerAlertController } from "./alert.controller";
export declare class DatetimePickerDirective {
    private input;
    private datetimePickerAlertController;
    date: boolean | string;
    time: boolean | string;
    mondayFirst: boolean | string;
    seconds: boolean | string;
    amPm: boolean | string;
    onlyValid: any;
    title: string;
    subTitle: string;
    constructor(input: DateTime, datetimePickerAlertController: DatetimePickerAlertController);
    private open();
}
