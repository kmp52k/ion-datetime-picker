import { EventEmitter } from "@angular/core";
import { App, Config, NavOptions, ViewController } from "ionic-angular";
import { DatetimePickerAlertOptions } from "./alert.options";
export declare class DatetimePickerAlert extends ViewController {
    data: DatetimePickerAlertOptions;
    ionChange: EventEmitter<void>;
    private app;
    constructor(app: App, opts: DatetimePickerAlertOptions, config: Config);
    getTransitionName(direction: string): string;
    setTitle(title: string): this;
    setSubTitle(subTitle: string): this;
    addButton(button: DatetimePickerAlertOptions["buttons"][0]): this;
    setCssClass(cssClass: string): this;
    setMode(mode: string): void;
    present(navOptions?: NavOptions): Promise<any>;
    refresh(): void;
}
