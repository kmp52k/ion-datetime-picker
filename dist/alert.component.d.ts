import { ElementRef, Renderer } from "@angular/core";
import { AlertCmp, Config, GestureController, NavParams, Platform, ViewController } from "ionic-angular";
import { DatetimePickerAlertOptions } from "./alert.options";
export declare class DatetimePickerAlertComponent extends AlertCmp {
    d: DatetimePickerAlertOptions;
    constructor(viewController: ViewController, elementRef: ElementRef, config: Config, gestureCtrl: GestureController, params: NavParams, renderer: Renderer, platform: Platform);
    onChange(modelDate: Date): void;
    getValues(): any;
}
