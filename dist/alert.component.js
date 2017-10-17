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
import { Component, ElementRef, Renderer, ViewEncapsulation } from "@angular/core";
import { AlertCmp, Config, GestureController, NavParams, Platform, ViewController } from "ionic-angular";
let DatetimePickerAlertComponent = class DatetimePickerAlertComponent extends AlertCmp {
    constructor(viewController, elementRef, config, gestureCtrl, params, renderer, platform) {
        super(viewController, elementRef, config, gestureCtrl, params, renderer, platform);
    }
    onChange(modelDate) {
        this.d.modelDate = modelDate;
    }
    getValues() {
        if (!this.d.modelDate) {
            return {};
        }
        return {
            year: { value: this.d.dateEnabled ? this.d.modelDate.getFullYear() : null },
            month: { value: this.d.dateEnabled ? this.d.modelDate.getMonth() + 1 : null },
            day: { value: this.d.dateEnabled ? this.d.modelDate.getDate() : null },
            hour: { value: this.d.timeEnabled ? this.d.modelDate.getHours() : null },
            minute: { value: this.d.timeEnabled ? this.d.modelDate.getMinutes() : null },
            second: { value: this.d.timeEnabled && this.d.secondsEnabled ? this.d.modelDate.getSeconds() : null },
            millisecond: { value: null },
            tzOffset: { value: null },
        };
    }
};
DatetimePickerAlertComponent = __decorate([
    Component({
        selector: "ion-alert",
        template: `
    <ion-backdrop (click)="bdClick()" [class.backdrop-no-tappable]="!d.enableBackdropDismiss"></ion-backdrop>
    <div class="alert-wrapper ion-datetime-picker-wrapper">
      <div class="alert-head">
        <h2 id="{{hdrId}}" class="alert-title pwcorange" *ngIf="d.title" [innerHTML]="d.title"></h2>
        <h3 id="{{subHdrId}}" class="alert-sub-title pwcorange" *ngIf="d.subTitle" [innerHTML]="d.subTitle"></h3>
      </div>
      <ion-datetime-picker [modelDate]="d.modelDate" [dateEnabled]="d.dateEnabled" [timeEnabled]="d.timeEnabled" [isMondayFirst]="d.isMondayFirst" [secondsEnabled]="d.secondsEnabled" [meridiemEnabled]="d.meridiemEnabled" [onlyValid]="d.onlyValid" [monthNames]="d.monthNames" [weekdayNames]="d.weekdayNames" (pickerChange)="onChange($event)"></ion-datetime-picker>
      <div class="alert-button-group" [ngClass]="{'alert-button-group-vertical':d.buttons.length>2}">
        <button ion-button="alert-button" *ngFor="let b of d.buttons" (click)="btnClick(b)" [ngClass]="b.cssClass">
          <span class="pwcorange" style="font-weight: normal;">{{b.text}}</span>
        </button>
      </div>
    </div>
  `,
        styles: [`
                .alert-button-group {
                    flex-shrink: 0;
                }
                .pwcorange {
                    color: #DC6900;
                }
            `],
        host: {
            "role": "dialog",
            "[attr.aria-labelledby]": "hdrId",
            "class": "ion-datetime-picker-alert",
        },
        encapsulation: ViewEncapsulation.Emulated,
    }),
    __metadata("design:paramtypes", [ViewController,
        ElementRef,
        Config,
        GestureController,
        NavParams,
        Renderer,
        Platform])
], DatetimePickerAlertComponent);
export { DatetimePickerAlertComponent };
//# sourceMappingURL=alert.component.js.map