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
import { EventEmitter, Output } from "@angular/core";
import { ViewController } from "ionic-angular";
import { AlertMdPopIn, AlertMdPopOut, AlertPopIn, AlertPopOut, AlertWpPopIn, AlertWpPopOut } from "ionic-angular/components/alert/alert-transitions";
import { isPresent } from "ionic-angular/util/util";
import { DatetimePickerAlertComponent } from "./alert.component";
export class DatetimePickerAlert extends ViewController {
    constructor(app, opts = {}, config) {
        opts.inputs = opts.inputs || [];
        opts.buttons = opts.buttons || [];
        opts.enableBackdropDismiss = isPresent(opts.enableBackdropDismiss) ? !!opts.enableBackdropDismiss : true;
        super(DatetimePickerAlertComponent, opts, null);
        this.app = app;
        this.isOverlay = true;
        config.setTransition("alert-pop-in", AlertPopIn);
        config.setTransition("alert-pop-out", AlertPopOut);
        config.setTransition("alert-md-pop-in", AlertMdPopIn);
        config.setTransition("alert-md-pop-out", AlertMdPopOut);
        config.setTransition("alert-wp-pop-in", AlertWpPopIn);
        config.setTransition("alert-wp-pop-out", AlertWpPopOut);
        this.ionChange = new EventEmitter();
    }
    getTransitionName(direction) {
        let key = (direction === "back" ? "alertLeave" : "alertEnter");
        return this._nav && this._nav.config.get(key);
    }
    setTitle(title) {
        this.data.title = title;
        return this;
    }
    setSubTitle(subTitle) {
        this.data.subTitle = subTitle;
        return this;
    }
    addButton(button) {
        this.data.buttons.push(button);
        return this;
    }
    setCssClass(cssClass) {
        this.data.cssClass = cssClass;
        return this;
    }
    setMode(mode) {
        this.data.mode = mode;
    }
    present(navOptions = {}) {
        navOptions.minClickBlockDuration = navOptions.minClickBlockDuration || 400;
        return this.app.present(this, navOptions);
    }
    refresh() {
        console.assert(!!this._cmp, "componentRef must be valid");
        console.assert(!!this._cmp.instance.refresh, "instance must implement refresh()");
        if (this._cmp && this._cmp.instance.refresh) {
            this._cmp.instance.refresh();
        }
    }
}
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DatetimePickerAlert.prototype, "ionChange", void 0);
//# sourceMappingURL=alert.js.map