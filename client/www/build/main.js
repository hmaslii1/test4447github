/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(0);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globaldata_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smartux_client__ = __webpack_require__(3);


class Screen extends __WEBPACK_IMPORTED_MODULE_1_smartux_client__["BaseScreen"] {
    constructor() {
        super(...arguments);
        this.global = __WEBPACK_IMPORTED_MODULE_1_smartux_client__["DI"].get(__WEBPACK_IMPORTED_MODULE_0__globaldata_service__["a" /* GlobalData */]);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Screen;

//# sourceMappingURL=screen.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(63);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_menu__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_PhonePortrait_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_transferform_PhonePortrait_transferform__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_confirmation_PhonePortrait_confirmation__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_settings_PhonePortrait_settings__ = __webpack_require__(16);
/***  Generated file, do not change.  */





class Screens {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Screens;

Screens.declarations = [
    __WEBPACK_IMPORTED_MODULE_0__menu_menu__["a" /* MenuComponent */],
    __WEBPACK_IMPORTED_MODULE_1__pages_login_PhonePortrait_login__["a" /* login_PhonePortrait */],
    __WEBPACK_IMPORTED_MODULE_2__pages_transferform_PhonePortrait_transferform__["a" /* transferform_PhonePortrait */],
    __WEBPACK_IMPORTED_MODULE_3__pages_confirmation_PhonePortrait_confirmation__["a" /* confirmation_PhonePortrait */],
    __WEBPACK_IMPORTED_MODULE_4__pages_settings_PhonePortrait_settings__["a" /* settings_PhonePortrait */]
];
Screens.mapping = {
    'login': {
        PhonePortrait: __WEBPACK_IMPORTED_MODULE_1__pages_login_PhonePortrait_login__["a" /* login_PhonePortrait */]
    },
    'transferform': {
        PhonePortrait: __WEBPACK_IMPORTED_MODULE_2__pages_transferform_PhonePortrait_transferform__["a" /* transferform_PhonePortrait */]
    },
    'confirmation': {
        PhonePortrait: __WEBPACK_IMPORTED_MODULE_3__pages_confirmation_PhonePortrait_confirmation__["a" /* confirmation_PhonePortrait */]
    },
    'settings': {
        PhonePortrait: __WEBPACK_IMPORTED_MODULE_4__pages_settings_PhonePortrait_settings__["a" /* settings_PhonePortrait */]
    }
};
//# sourceMappingURL=app.screens.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let GlobalData = class GlobalData {
};
GlobalData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], GlobalData);

//# sourceMappingURL=globaldata.service.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hooks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_smartux_client__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let Hooks = class Hooks extends __WEBPACK_IMPORTED_MODULE_1_smartux_client__["AppHooks"] {
    /**
    * Initial parameters to send to the server.
    */
    getServerInitParams() {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    /**
     * Initialize the UI with data from the server.
     */
    initializeUI(params) {
    }
    /**
     * Override what happens when going to a new screen.
     */
    overrideStateHandler(oldScreen, newScreen, data) {
        return newScreen;
    }
    /**
     * Override what happens when a custom URL scheme is called.
     *
     * type - 'event' is currently the only supported type.
     * name - Name of event, e.g. 'login.submit'
     * data - JSON object containing URL data.
     *
     * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
     *          false - Don't continue with the normal flow.
     */
    interceptCustomURLScheme(type, name, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    /**
      * Override what happens when there is a push notification.
      *
      * data - JSON object containing Notification data
      *
      * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
      *          false - Don't continue with the normal flow.
      */
    onPushNotification(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    /**
     * Error when an internal Push Notification error occurs and the cache is aborted.
     */
    onPushNotificationError(e) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * Override what happens when on a file download event
     * params - information about the download
     * url - the url to download the file
     * Returns: true - Continue with normal flow, e.g. download and try to open with
     *                   the default application/ social share plugin
     *          false - Don't continue with the normal flow.
     */
    onDownloadFile(params, url) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    /**
     * Override what happens when the back button is pressed (Android)
     * Returns: true - continue with the normal flow, e.g. exit the application
     *          false - Don't continue with the normal flow.
     */
    onBackButton() {
        return true;
    }
    /**
     * Override what happens when the application enters the background
     * Returns: true - continue witht the normal flow, e.g disconnect after the time
     *                  specified in config.ts
     *          false - don't continue with the normal flow.
    */
    onPause() {
        return true;
    }
    /**
     * Override what happens when the application enters the foreground
     * Returns: true - continue witht the normal flow, e.g reconnect if disconnected
     *          false - don't continue with the normal flow.
    */
    onResume() {
        return true;
    }
    /**
     * Override what happens when a request comes in to switch applications
     * Returns: true - continue with the normal flow, e.g prompt the user
     *          false - don't prompt the user, ignore the request
     */
    onSwitchSessionRequest() {
        return true;
    }
};
Hooks = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Hooks);

//# sourceMappingURL=app.hooks.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(9);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(702);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_smartux_client__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_screens__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_hooks__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globaldata_service__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* ClientApp */], ...__WEBPACK_IMPORTED_MODULE_4__app_screens__["a" /* Screens */].declarations],
        entryComponents: __WEBPACK_IMPORTED_MODULE_4__app_screens__["a" /* Screens */].declarations,
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* ClientApp */], __WEBPACK_IMPORTED_MODULE_2_smartux_client__["config"].ionic),
            __WEBPACK_IMPORTED_MODULE_2_smartux_client__["SmartUxClient"],
            __WEBPACK_IMPORTED_MODULE_3_components__["ComponentsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__app_hooks__["a" /* Hooks */],
            __WEBPACK_IMPORTED_MODULE_7__globaldata_service__["a" /* GlobalData */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(12);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(1222);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_screen__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MenuComponent = class MenuComponent extends __WEBPACK_IMPORTED_MODULE_1_app_screen__["a" /* Screen */] {
};
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'menu-component',template:/*ion-inline-start:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\app\menu\menu.html"*/'<ion-menu [content]="content" id="menu-component">\n    <ion-header data-comp-id="header.1">\n        <ion-toolbar data-comp-id="toolbar.1" menuClose="" style="padding:0px;">\n            <div class="container-calm" data-comp-id="div.1" style="padding: 50px;"\n                text-center="">\n                <ion-icon class="ion-ios-shuffle" color="light" data-comp-id="icon.1"\n                    style="font-size: 48px;"></ion-icon>\n                <div color="light" data-comp-id="text.1" ion-text=""\n                    style="font-size: 22px; margin: 20px 0 0 0;">Asset Transfer</div>\n            </div>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content data-comp-id="content.1" menuClose="">\n        <ion-list data-comp-id="list.1">\n            <button (click)="go(\'settings\')" class="button-label-dark"\n                data-comp-id="button.1" detail-none="" ion-item=""><span>Settings</span>\n                <ion-icon class="fa fa-gear" color="calm" data-comp-id="icon.2" item-start=""\n                    style=""></ion-icon>\n            </button>\n            <ion-item (click)="logout()" data-comp-id="item.1" menuClose="">\n                <ion-icon class="ion-ios-exit-outline" color="calm" data-comp-id="icon.3"\n                    item-start="" style="font-size: 38px;"></ion-icon>\n                <div color="dark" data-comp-id="text.2" ion-text="">Logout</div>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n<ion-nav #content=""></ion-nav>'/*ion-inline-end:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\app\menu\menu.html"*/
    })
], MenuComponent);

//# sourceMappingURL=menu.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login_PhonePortrait; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_screen__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let login_PhonePortrait = class login_PhonePortrait extends __WEBPACK_IMPORTED_MODULE_1_app_screen__["a" /* Screen */] {
    ngOnInit() {
        super.ngOnInit();
        // Logic to run when the screen loads goes here.
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        // Logic to run when the screen unloads goes here.
    }
    onDataLoad(data) {
        // Logic to run when the screen's data is updated goes here.
    }
};
login_PhonePortrait = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'screen-login-phoneportrait',template:/*ion-inline-start:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\pages\login\PhonePortrait\login.html"*/'<ion-content data-comp-id="content.1" data-img=""\n    style="background-image: url(assets/images/login/Orange-Background.png);">\n    <div data-comp-id="div.1" style="padding: 10% 15%;" text-center="">\n        <img data-comp-id="img.1" src="assets/images/acme-oil-and-gas-logo.png">\n        <div color="light" data-comp-id="text.1" ion-text=""\n            style="margin: 10px; font-size: 16px;">ASSET TRANSFER REQUEST</div>\n        <div class="login-form" data-comp-id="div.2"\n            style="margin: 30px 0px 0px 0px; border-bottom: 0px none;">\n            <ion-row *ngIf="data.ErrorMessage" class="row-transparent" data-comp-id="row.1"\n                style="border-top: 2px solid #ff0000; border-right: 2px solid #ff0000; border-bottom: 2px solid #ff0000; border-left: 2px solid #ff0000; margin: 10px 0px;">\n                <ion-col class="column-transparent" data-comp-id="column.1"\n                    style="text-align: center; max-width: auto; min-width: 100%; padding: 10px;">\n                    <div [innerHTML]="data.ErrorMessage" color="light" data-comp-id="text.2"\n                        ion-text="">Some text</div>\n                </ion-col>\n            </ion-row>\n            <form data-comp-id="form.1">\n                <ion-list data-comp-id="list.1" mode="wp">\n                    <ion-item color="transparent" data-comp-id="input.1" mode="ios"\n                        style="border-top: 1px solid rgba(237,237,237, 0.5);;">\n                        <ion-icon class="ion-ios-person" item-left="" style="font-size: 24px;"></ion-icon>\n                        <ion-label mode="ios" stacked="">Username</ion-label>\n                        <ion-input [(ngModel)]="data.username" autocapitalize="off" autocorrect="off"\n                            mode="ios" name="username" placeholder="Type here..." type="text"></ion-input>\n                    </ion-item>\n                    <ion-item color="transparent" data-comp-id="input.2" mode="ios"\n                        style="border-top: 1px solid rgba(237,237,237, 0.5); border-bottom: 1px solid rgba(237,237,237, 0.5);;">\n                        <ion-icon class="fa fa-lock" item-left="" style="font-size: 24px;"></ion-icon>\n                        <ion-label mode="ios" stacked="">Password</ion-label>\n                        <ion-input [(ngModel)]="data.password" mode="ios" name="password"\n                            placeholder="Type here..." type="password"></ion-input>\n                    </ion-item>\n                    <button (click)="authaction(\'submit\')" class="button-label-black"\n                        color="highlight" data-comp-id="button.1" detail-none="" full="" ion-button=""\n                        mode="ios" style="color: #000; margin: 30px 0px;">\n                        <span>Login</span>\n                    </button>\n                </ion-list>\n            </form>\n        </div>\n        <ion-row data-comp-id="row.2">\n            <ion-col data-comp-id="column.2" style="max-width: 100%;">\n                <touchid-login (onVerify)="authaction(\'submit\')" [context]="this"\n                    data-comp-id="touchid-login.1">\n                    <div color="light" data-comp-id="text.3" ion-text="">\n                        Log in with\n                        {{getBiometricAuthType()}}\n                    </div>\n                    <ion-icon color="light" data-comp-id="icon.1" name="finger-print"\n                        style="font-size: 18px; margin: 3px;"></ion-icon>\n                </touchid-login>\n            </ion-col>\n        </ion-row>\n        <ion-row data-comp-id="row.3" style="margin: 10px 0px;">\n            <ion-col data-comp-id="column.3">\n                <button\n                    (click)="openUrl(\'https://community.powwowmobile.com/hc/en-us/articles/360006721412\')"\n                    clear="" color="highlight" data-comp-id="button.2" icon-start="" ion-button=""\n                    style="">\n                    <ion-icon class=" ion-ios-help-circle-outline"></ion-icon>\n                    <span>App Template Guidelines</span>\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\pages\login\PhonePortrait\login.html"*/
    })
], login_PhonePortrait);

//# sourceMappingURL=login.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transferform_PhonePortrait; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_screen__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let transferform_PhonePortrait = class transferform_PhonePortrait extends __WEBPACK_IMPORTED_MODULE_1_app_screen__["a" /* Screen */] {
    ngOnInit() {
        super.ngOnInit();
        // Logic to run when the screen loads goes here.
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        // Logic to run when the screen unloads goes here.
    }
    onDataLoad(data) {
        // Logic to run when the screen's data is updated goes here.
    }
};
transferform_PhonePortrait = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'screen-transferform-phoneportrait',template:/*ion-inline-start:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\pages\transferform\PhonePortrait\transferform.html"*/'<ion-header data-comp-id="header.1">\n    <ion-navbar color="highlight" data-comp-id="navbar.1">\n        <button data-comp-id="button.1" icon-only="" ion-button="" menuToggle="">\n            <ion-icon class="ion-ios-menu" name="menu"></ion-icon>\n        </button>\n        <ion-buttons data-comp-id="buttons.1" left=""></ion-buttons>\n        <ion-title data-comp-id="title.1" text-center="">\n            <div data-comp-id="text.3" ion-text="">Request Asset Transfer</div>\n        </ion-title>\n        <ion-buttons data-comp-id="buttons.2" right=""></ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content data-comp-id="content.1" style="background-color: #ecebeb;">\n    <ion-list data-comp-id="list.1">\n        <ion-item data-comp-id="input.1">\n            <ion-label color="dark" style="width: 85px;">Employee #</ion-label>\n            <ion-input [(ngModel)]="data.Employee" placeholder="Type here..." type="text"></ion-input>\n        </ion-item>\n        <ion-item data-comp-id="input.2">\n            <ion-label color="dark" style="width: 85px;">Asset Tag #</ion-label>\n            <ion-input [(ngModel)]="data.AssetTag" placeholder="Type here..." type="text"></ion-input>\n        </ion-item>\n        <ion-item data-comp-id="select.1" style="background-color: #ffffff;">\n            <ion-label color="dark">Priority</ion-label>\n            <ion-select [(ngModel)]="data.Priority.selected"\n                [selectOptions]="{cssClass: \'select-full\'}">\n                <ion-option *ngFor="let item of data.Priority.options" [innerHTML]="item.label"\n                    [value]="item.value" data-comp-id="option.1"></ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n    <ion-list data-comp-id="list.2">\n        <ion-list-header color="calm" data-comp-id="list-header.1">\n            <span color="light" data-comp-id="text.1" ion-text="">Current Asset Location</span>\n        </ion-list-header>\n        <ion-item data-comp-id="input.3">\n            <ion-label color="dark" style="width: 85px;">Building #</ion-label>\n            <ion-input [(ngModel)]="data.CurrentBuilding" placeholder="Type here"\n                type="text"></ion-input>\n        </ion-item>\n        <ion-item data-comp-id="input.4">\n            <ion-label color="dark" style="width: 85px;">Room #</ion-label>\n            <ion-input [(ngModel)]="data.CurrentRoom" placeholder="Type here" type="text"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-list data-comp-id="list.3">\n        <ion-list-header color="calm" data-comp-id="list-header.2">\n            <span color="light" data-comp-id="text.2" ion-text="">New Asset Location</span>\n        </ion-list-header>\n        <ion-item data-comp-id="input.5">\n            <ion-label color="dark" style="width: 85px;">Building #</ion-label>\n            <ion-input [(ngModel)]="data.NewBuilding" placeholder="Type here" type="text"></ion-input>\n        </ion-item>\n        <ion-item data-comp-id="input.6">\n            <ion-label color="dark" style="width: 85px;">Room #</ion-label>\n            <ion-input [(ngModel)]="data.NewRoom" placeholder="Type here" type="text"></ion-input>\n        </ion-item>\n    </ion-list>\n    <touchid-save [authRequest]="appService ? appService.getAuthRequest() : null"\n        data-comp-id="touchid-save.1" message="Would you like to use {{getBiometricAuthType()}} to login?"\n        title="{{getBiometricAuthType()}} Available"></touchid-save>\n</ion-content>\n<ion-footer data-comp-id="footer.1">\n    <ion-row data-comp-id="row.1">\n        <ion-col data-comp-id="column.1" style="text-align: center;">\n            <button (click)="action(\'Submit\')" color="highlight"\n                data-comp-id="button.1" ion-button=""\n                style="padding: 0px 20px;">\n                <ion-icon class="ion-md-arrow-round-forward"></ion-icon>\n                <span ion-text="">Submit</span>\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\pages\transferform\PhonePortrait\transferform.html"*/
    })
], transferform_PhonePortrait);

//# sourceMappingURL=transferform.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return confirmation_PhonePortrait; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_screen__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let confirmation_PhonePortrait = class confirmation_PhonePortrait extends __WEBPACK_IMPORTED_MODULE_1_app_screen__["a" /* Screen */] {
    ngOnInit() {
        super.ngOnInit();
        // Logic to run when the screen loads goes here.
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        // Logic to run when the screen unloads goes here.
    }
    onDataLoad(data) {
        // Logic to run when the screen's data is updated goes here.
    }
};
confirmation_PhonePortrait = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'screen-confirmation-phoneportrait',template:/*ion-inline-start:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\pages\confirmation\PhonePortrait\confirmation.html"*/'<ion-header data-comp-id="header.1"></ion-header>\n<ion-content class="content-calm" data-comp-id="content.1">\n    <div data-comp-id="div.1" style="padding: 20% 10%;">\n        <ion-row data-comp-id="row.1" style="margin: 0 0 0; padding: 0px;">\n            <ion-col data-comp-id="column.1" style="text-align: center;">\n                <button color="primary" data-comp-id="button.1" icon-only="" ion-button="" large=""\n                    style="font-size: 25px; border-radius: 40px;">\n                    <ion-icon class="ion-md-checkmark" color="light"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-card data-comp-id="card.1" style="margin: -40px 10px; padding: 10px;">\n            <ion-card-content data-comp-id="card-content.1" style="padding: 13px 10px;">\n                <ion-row data-comp-id="row.2">\n                    <ion-col data-comp-id="column.2" style="text-align: center;">\n                        <div color="coal" data-comp-id="text.1" ion-text=""\n                            style="font-size: 18px; margin: 30px 10px 10px;">Order Complete</div>\n                        <div color="dark" data-comp-id="text.2" ion-text=""\n                            style="font-size: 18px; margin: 10px 10px 0px;">Transaction #</div>\n                        <div [innerHTML]="data.TrackingNumber" color="primary" data-comp-id="text.3"\n                            ion-text="" style="font-size: 18px; margin: 0 0 30px;">Some text</div>\n                        <ion-row data-comp-id="row.3" style="margin: 10px 0px;">\n                            <ion-col data-comp-id="column.3" style="text-align: left;">\n                                <div color="dark" data-comp-id="text.4" ion-text="">Employee ID</div>\n                                <div [innerHTML]="data.EmployeeID" color="black" data-comp-id="text.5"\n                                    ion-text="">Some text</div>\n                            </ion-col>\n                            <ion-col data-comp-id="column.4" style="text-align: left;">\n                                <div color="dark" data-comp-id="text.6" ion-text="">Asset Tag #</div>\n                                <div [innerHTML]="data.AssetTag" color="black" data-comp-id="text.7" ion-text=""\n                                    style="">Some text</div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row data-comp-id="row.4">\n                            <ion-col data-comp-id="column.5" style="text-align: left;">\n                                <div color="dark" data-comp-id="text.8" ion-text="">Location</div>\n                                <div [innerHTML]="data.CurrentBuilding" color="black" data-comp-id="text.9"\n                                    ion-text="">Some text</div>\n                                <div [innerHTML]="data.CurrentRoom" color="coal" data-comp-id="text.10"\n                                    ion-text="">Some text</div>\n                            </ion-col>\n                            <ion-col data-comp-id="column.6" style="text-align: left;">\n                                <div color="dark" data-comp-id="text.11" ion-text="">New Location</div>\n                                <div [innerHTML]="data.NewBuilding" color="black" data-comp-id="text.12"\n                                    ion-text="">Some text</div>\n                                <div [innerHTML]="data.NewRoom" color="coal" data-comp-id="text.13" ion-text=""\n                                    style="">Some text</div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row data-comp-id="row.5">\n                            <ion-col data-comp-id="column.7" style="text-align: left;">\n                                <div color="dark" data-comp-id="text.14" ion-text="">Priority</div>\n                                <div [innerHTML]="data.Priority" color="black" data-comp-id="text.15"\n                                    ion-text="">Some text</div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-col>\n                </ion-row>\n                <button (click)="action(\'done\')" block="" color="highlight"\n                    data-comp-id="button.1" ion-button="" style="margin: 20px 0px 25px;"><span>Done</span></button>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\pages\confirmation\PhonePortrait\confirmation.html"*/
    })
], confirmation_PhonePortrait);

//# sourceMappingURL=confirmation.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settings_PhonePortrait; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_screen__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let settings_PhonePortrait = class settings_PhonePortrait extends __WEBPACK_IMPORTED_MODULE_1_app_screen__["a" /* Screen */] {
    ngOnInit() {
        super.ngOnInit();
        // Logic to run when the screen loads goes here.
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        // Logic to run when the screen unloads goes here.
    }
    onDataLoad(data) {
        // Logic to run when the screen's data is updated goes here.
    }
};
settings_PhonePortrait = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'screen-settings-phoneportrait',template:/*ion-inline-start:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\pages\settings\PhonePortrait\settings.html"*/'<ion-header data-comp-id="header.1">\n    <ion-navbar color="calm" data-comp-id="navbar.1">\n        <ion-buttons data-comp-id="buttons.1" start="">\n            <button (click)="dismissModal()" color="light" data-comp-id="button.1"\n                icon-only="" ion-button="">\n                <ion-icon class="ion-ios-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title data-comp-id="title.1">\n            <div data-comp-id="text.3" ion-text=""></div>\n        </ion-title>\n    </ion-navbar>\n    <div class="container-calm" data-comp-id="div.1"\n        style="padding: 50px 0 50px 0px; border-bottom: 1px solid rgb(221,221,221);"\n        text-center="">\n        <div color="light" data-comp-id="text.1" ion-text=""\n            style="font-size: 22px; margin: 0 0 0;">Settings</div>\n    </div>\n</ion-header>\n<ion-content data-comp-id="content.1">\n    <div data-comp-id="touchid-enable-toggle.1">\n        <ion-item data-comp-id="toggle.1" no-lines="" style="margin: 10px 0px;">\n            <ion-label>Enable {{getBiometricAuthType()}}</ion-label>\n            <ion-toggle (ionChange)="toggleTouchid($event)" [checked]="touchidEnabled()"></ion-toggle>\n        </ion-item>\n        <ion-row data-comp-id="row.1" style="border-bottom: 1px solid rgb(221,221,221);">\n            <ion-col data-comp-id="column.1" style="padding: 5px 15px 20px;">\n                <div color="dark" data-comp-id="text.2" ion-text="">All {{getBiometricAuthType()}}s\n                    stored on this device can be used to log into this app.</div>\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\pages\settings\PhonePortrait\settings.html"*/
    })
], settings_PhonePortrait);

//# sourceMappingURL=settings.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__screen__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_screens__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mocks_index__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_hooks__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_smartux_client__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






let ClientApp = class ClientApp extends __WEBPACK_IMPORTED_MODULE_1__screen__["a" /* Screen */] {
    constructor(bootstrap, hooks) {
        super();
        bootstrap(hooks, __WEBPACK_IMPORTED_MODULE_2__app_screens__["a" /* Screens */].mapping, __WEBPACK_IMPORTED_MODULE_3_mocks_index__);
    }
};
ClientApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\app\app.html"*/'<menu-component></menu-component>\n<ion-nav #nav></ion-nav>\n'/*ion-inline-end:"C:\Users\Administrator\Jenkins\workspace\Studio-Windows\build\SmartUXStudio\dataStore\templates\AcmeTransferRequests\client\src\app\app.html"*/
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5_smartux_client__["Bootstrap"])),
    __metadata("design:paramtypes", [Function, __WEBPACK_IMPORTED_MODULE_4__app_hooks__["a" /* Hooks */]])
], ClientApp);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirmation_index__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "confirmation", function() { return __WEBPACK_IMPORTED_MODULE_0__confirmation_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_index__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return __WEBPACK_IMPORTED_MODULE_1__login_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_index__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return __WEBPACK_IMPORTED_MODULE_2__menu_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_index__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return __WEBPACK_IMPORTED_MODULE_3__settings_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transferform_index__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transferform", function() { return __WEBPACK_IMPORTED_MODULE_4__transferform_index__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mock_confirmation; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let mock_confirmation = {
    done: function done(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.go("transferform");
        });
    }
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mock_login; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let mock_login = {
    submit: function submit(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.go("transferform");
        });
    }
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mock_menu; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let mock_menu = {
    logout: function logout(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.go("login");
        });
    }
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mock_settings; });
let mock_settings = {};
//# sourceMappingURL=index.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mock_transferform; });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let mock_transferform = {
    Submit: function Submit(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.go("confirmation");
        });
    },
    menu: function menu(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.go("menuicons");
        });
    },
    Submit2: function Submit2(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.go("confirmation");
        });
    }
};
//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map