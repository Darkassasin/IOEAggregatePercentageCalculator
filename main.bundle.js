webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\r\n  text-align: center;\r\n  font-weight: bold;\r\n}\r\nimg,h1{\r\n  display: inline-block;\r\n  text-align:center;\r\n}\r\ninput{\r\n\ttext-align:center;\r\n}\r\n\r\nselect{\r\n  width: 250px;\r\n}\r\nh4,select{\r\n  display: inline-block;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<img src=\"../assets/ioe.png\" alt=\"ioe\"><h1 align=\"center\">IOE Aggregate Percentage Calculator</h1> <button class=\"btn btn-success glyphicon glyphicon-refresh\" (click)=\"reset()\"><span class=\"\"></span></button>\n<br>\n<h4><strong>Select your faculty:</strong></h4>\n<select [(ngModel)]=\"faculty\" class=\"form-control\" (change)=\"onChangeFaculty(faculty)\">\n  <option value=\"1\">B.C.T</option>\n  <option value=\"2\">B.C.E</option>\n</select>\n<!--<div class=\"col-md-2\"></div>-->\n<table class=\"table-bordered table-striped table-hover col-md-8\">\n    <tr>\n        <td>Semester</td>\n        <td>Total</td>\n        <td>Marks Obtained</td>\n        <td>Percentage(%)</td>\n        <td>Aggregate (%)</td>\n    </tr>\n    <tbody>\n      <tr>\n        <td>First Semester</td>\n        <td>{{total[0]}}</td>\n        <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"sem[0]\" (keyup)=\"CalculatePercentageandAggregate()\" min=\"0\" max={{total[0]}}></td>\n        <td><label>{{this.percentage[0]| number : '1.2-2'}}</label></td>\n        <td><label>{{this.aggregate[0]| number : '1.2-2'}}</label></td>\n      </tr>\n      <tr>\n        <td>Second Semester</td>\n        <td>{{total[1]}}</td>\n        <td><input class=\"form-control\" type=\"number\" [(ngModel)]=\"sem[1]\" (keyup)=\"CalculatePercentageandAggregate()\" min=\"0\"max={{total[1]}}></td>\n        <td><label>{{this.percentage[1]| number : '1.2-2'}}</label></td>\n        <td><label>{{this.aggregate[1]| number : '1.2-2'}}</label></td>\n      </tr>\n      <tr>\n        <td>Third Semester</td>\n        <td>{{total[2]}}</td>\n        <td><input class=\"form-control\"  type=\"number\" [(ngModel)]=\"sem[2]\" (keyup)=\"CalculatePercentageandAggregate()\" min=\"0\" max={{total[2]}}></td>\n        <td><label>{{this.percentage[2]| number : '1.2-2'}}</label></td>\n        <td><label>{{this.aggregate[2]| number : '1.2-2'}}</label></td>\n      </tr>\n      <tr>\n        <td>Fourth Semester</td>\n        <td>{{total[3]}}</td>\n        <td><input class=\"form-control\"  type=\"number\" [(ngModel)]=\"sem[3]\" (keyup)=\"CalculatePercentageandAggregate()\" min=\"0\" max={{total[3]}}></td>\n        <td><label>{{this.percentage[3]| number : '1.2-2'}}</label></td>\n        <td><label>{{this.aggregate[3]| number : '1.2-2'}}</label></td>\n      </tr>\n      <tr>\n        <td>Fifth Semester</td>\n        <td>{{total[4]}}</td>\n        <td><input class=\"form-control\"  type=\"number\" [(ngModel)]=\"sem[4]\" (keyup)=\"CalculatePercentageandAggregate()\" min=\"0\" max={{total[4]}}></td>\n        <td><label>{{this.percentage[4]| number : '1.2-2'}}</label></td>\n        <td><label>{{this.aggregate[4]| number : '1.2-2'}}</label></td>\n      </tr>\n      <tr>\n        <td>Sixth Semester</td>\n        <td>{{total[5]}}</td>\n        <td><input class=\"form-control\"  type=\"number\" [(ngModel)]=\"sem[5]\" (keyup)=\"CalculatePercentageandAggregate()\" min=\"0\" max={{total[5]}}></td>\n        <td><label>{{this.percentage[5]| number : '1.2-2'}}</label></td>\n        <td><label>{{this.aggregate[5]| number : '1.2-2'}}</label></td>\n      </tr>\n      <tr>\n        <td>Seventh Semester</td>\n        <td>{{total[6]}}</td>\n        <td><input class=\"form-control\"  type=\"number\" [(ngModel)]=\"sem[6]\" (keyup)=\"CalculatePercentageandAggregate()\" min=\"0\" max={{total[6]}}></td>\n        <td><label>{{this.percentage[6]| number : '1.2-2'}}</label></td>\n        <td><label>{{this.aggregate[6]| number : '1.2-2'}}</label></td>\n      </tr>\n      <tr>\n        <td>Eight Semester</td>\n        <td>{{total[7]}}</td>\n        <td><input class=\"form-control\"  type=\"number\" [(ngModel)]=\"sem[7]\" (keyup)=\"CalculatePercentageandAggregate(); flagOn()\" min=\"0\" max={{total[7]}}></td>\n        <td><label>{{this.percentage[7]| number : '1.2-2'}}</label></td>\n        <td><label>{{this.aggregate[7]| number : '1.2-2'}}</label></td>\n      </tr>\n      <tr>\n        <td colspan=\"4\">Total Aggregate %</td>\n        <td>{{aggregateTotal| number : '1.2-2'}}%</td>\n        <td></td>\n      </tr>\n    </tbody>\n  </table>\n<br>\n<ng-container *ngIf=\"flag\">\n  <ng-container *ngIf=\"aggregateTotal>80\">\n    <h2>Congratulations You have achieved <strong style=\"color: green\">Distinction</strong> with {{aggregateTotal| number : '1.2-2'}}%</h2>\n  </ng-container>\n  <ng-container *ngIf=\"aggregateTotal>65 && aggregateTotal<80\">\n    <h2>Congratulations You have achieved <strong style=\"color: green\">First Division</strong> with {{aggregateTotal| number : '1.2-2'}}%</h2>\n  </ng-container>\n  <ng-container *ngIf=\"aggregateTotal>50 && aggregateTotal<65\">\n    <h2>Congratulations You have achieved <strong style=\"color: green\">Second Division</strong> with {{aggregateTotal| number : '1.2-2'}}%</h2>\n  </ng-container>\n  <ng-container *ngIf=\"aggregateTotal>40 && aggregateTotal<50\">\n    <h2>Congratulations You have <strong style=\"color: green\">passed</strong> with {{aggregateTotal| number : '1.2-2'}}%</h2>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.percentage = [0, 0, 0, 0, 0, 0, 0, 0];
        this.aggregate = [0, 0, 0, 0, 0, 0, 0, 0];
        this.sem = [0, 0, 0, 0, 0, 0, 0, 0];
        this.faculty = 1;
        this.aggregateTotal = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.total = [725, 650, 875, 900, 875, 825, 825, 750];
    };
    AppComponent.prototype.onChangeFaculty = function (faculty) {
        if (faculty == 1) {
            this.total = [725, 650, 875, 900, 875, 825, 825, 750];
        }
        else if (faculty == 2) {
            this.total = [675, 700, 700, 750, 875, 750, 750, 650];
        }
    };
    AppComponent.prototype.CalculatePercentageandAggregate = function () {
        this.percentage[0] = (this.sem[0] / this.total[0]) * 100;
        this.percentage[1] = (this.sem[1] / this.total[1]) * 100;
        this.percentage[2] = (this.sem[2] / this.total[2]) * 100;
        this.percentage[3] = (this.sem[3] / this.total[3]) * 100;
        this.percentage[4] = (this.sem[4] / this.total[4]) * 100;
        this.percentage[5] = (this.sem[5] / this.total[5]) * 100;
        this.percentage[6] = (this.sem[6] / this.total[6]) * 100;
        this.percentage[7] = (this.sem[7] / this.total[7]) * 100;
        this.aggregate[0] = 0.1 * this.percentage[0];
        this.aggregate[1] = 0.1 * this.percentage[1];
        this.aggregate[2] = 0.1 * this.percentage[2];
        this.aggregate[3] = 0.1 * this.percentage[3];
        this.aggregate[4] = 0.15 * this.percentage[4];
        this.aggregate[5] = 0.15 * this.percentage[5];
        this.aggregate[6] = 0.15 * this.percentage[6];
        this.aggregate[7] = 0.15 * this.percentage[7];
        this.aggregateTotal = this.aggregate[0] + this.aggregate[1] + this.aggregate[2] + this.aggregate[3] + this.aggregate[4] + this.aggregate[5] + this.aggregate[6] + this.aggregate[7];
    };
    AppComponent.prototype.reset = function () {
        this.percentage = [0, 0, 0, 0, 0, 0, 0, 0];
        this.aggregate = [0, 0, 0, 0, 0, 0, 0, 0];
        this.sem = [0, 0, 0, 0, 0, 0, 0, 0];
        this.aggregateTotal = 0;
    };
    AppComponent.prototype.flagOn = function () {
        this.flag = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map