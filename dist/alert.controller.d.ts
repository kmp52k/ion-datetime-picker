import { App, Config } from "ionic-angular";
import { DatetimePickerAlert } from "./alert";
import { DatetimePickerAlertOptions } from "./alert.options";
export declare class DatetimePickerAlertController {
    private app;
    config: Config;
    constructor(app: App, config: Config);
    create(opts?: DatetimePickerAlertOptions): DatetimePickerAlert;
}
