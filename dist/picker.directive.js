var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input } from "@angular/core";
import { DateTime } from "ionic-angular";
import { deepCopy } from "ionic-angular/util/util";
import { DatetimePickerAlertController } from "./alert.controller";
let DatetimePickerDirective = class DatetimePickerDirective {
    constructor(input, datetimePickerAlertController) {
        this.input = input;
        this.datetimePickerAlertController = datetimePickerAlertController;
        this.input.open = () => this.open();
    }
    open() {
        if (this.input.isFocus() || this.input._disabled) {
            return;
        }
        const pickerOptions = deepCopy(this.input.pickerOptions);
        pickerOptions.dateEnabled = this.date !== undefined && this.date !== "false";
        pickerOptions.timeEnabled = this.time !== undefined && this.time !== "false";
        pickerOptions.isMondayFirst = this.mondayFirst !== undefined && this.mondayFirst !== "false";
        pickerOptions.secondsEnabled = this.seconds !== undefined && this.seconds !== "false";
        pickerOptions.meridiemEnabled = this.amPm !== undefined && this.amPm !== "false";
        pickerOptions.onlyValid = this.onlyValid;
        if (pickerOptions.dateEnabled === false && pickerOptions.timeEnabled === false) {
            pickerOptions.dateEnabled = pickerOptions.timeEnabled = true;
        }
        pickerOptions.monthNames = this.input._locale.monthNames || ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        pickerOptions.weekdayNames = this.input._locale.dayShortNames || ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        pickerOptions.title = this.title || ("Pick " + (pickerOptions.dateEnabled ? "a date" : "") + (pickerOptions.dateEnabled && pickerOptions.timeEnabled ? " and " : "") + (pickerOptions.timeEnabled ? "a time" : ""));
        pickerOptions.subTitle = this.subTitle;
        let val = this.input.value || {};
        let now = new Date();
        pickerOptions.modelDate = new Date(val.year || (pickerOptions.dateEnabled ? now.getFullYear() : 2018), val.month ? val.month - 1 : (pickerOptions.dateEnabled ? now.getMonth() : 0), val.day || (pickerOptions.dateEnabled ? now.getDate() : 1), val.hour || (pickerOptions.timeEnabled ? now.getHours() : 0), val.minute || (pickerOptions.timeEnabled ? now.getMinutes() : 0), val.second || (pickerOptions.timeEnabled && pickerOptions.secondsEnabled ? now.getSeconds() : 0));
        const picker = this.datetimePickerAlertController.create(pickerOptions);
        picker.addButton({
            text: this.input.cancelText,
            role: "cancel",
            handler: () => this.input.ionCancel.emit(this),
        });
        picker.addButton({
            text: this.input.doneText,
            handler: (data) => this.input.value = data,
        });
        picker.ionChange.subscribe(() => {
            picker.refresh();
        });
        this.input._fireFocus();
        picker.present(pickerOptions);
        picker.onDidDismiss(() => {
            this.input._fireBlur();
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatetimePickerDirective.prototype, "date", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatetimePickerDirective.prototype, "time", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatetimePickerDirective.prototype, "mondayFirst", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatetimePickerDirective.prototype, "seconds", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatetimePickerDirective.prototype, "amPm", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DatetimePickerDirective.prototype, "onlyValid", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatetimePickerDirective.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DatetimePickerDirective.prototype, "subTitle", void 0);
DatetimePickerDirective = __decorate([
    Directive({
        selector: "ion-datetime[picker]",
    }),
    __metadata("design:paramtypes", [DateTime,
        DatetimePickerAlertController])
], DatetimePickerDirective);
export { DatetimePickerDirective };
//# sourceMappingURL=picker.directive.js.map