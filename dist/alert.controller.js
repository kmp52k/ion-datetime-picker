// Using my own implementation of Alert-related stuff until https://github.com/driftyco/ionic/pull/11458 is merged
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { App, Config } from "ionic-angular";
import { DatetimePickerAlert } from "./alert";
let DatetimePickerAlertController = class DatetimePickerAlertController {
    constructor(app, config) {
        this.app = app;
        this.config = config;
    }
    create(opts = {}) {
        return new DatetimePickerAlert(this.app, opts, this.config);
    }
};
DatetimePickerAlertController = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [App, Config])
], DatetimePickerAlertController);
export { DatetimePickerAlertController };
//# sourceMappingURL=alert.controller.js.map