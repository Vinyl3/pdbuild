(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Basic/basiclayout.module": [
		"./src/app/Basic/basiclayout.module.ts",
		"common",
		"Basic-basiclayout-module"
	],
	"./Core/corelayout.module": [
		"./src/app/Core/corelayout.module.ts",
		"Core-corelayout-module~Shared-shared-module",
		"common",
		"Core-corelayout-module"
	],
	"./Shared/shared.module": [
		"./src/app/Shared/shared.module.ts",
		"Core-corelayout-module~Shared-shared-module",
		"common",
		"Shared-shared-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        loadChildren: './Basic/basiclayout.module#BasiclayoutModule'
    },
    {
        path: '',
        loadChildren: './Core/corelayout.module#CoreLayoutModule',
    },
    {
        path: '',
        loadChildren: './Shared/shared.module#SharedModule'
    },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_2__["PagenotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* empty css */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<!-- Routed views go here -->\n\n<!-- Container for sidebar(s) + page content -->\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createCompiler, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCompiler", function() { return createCompiler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









function createCompiler(compilerFactory) {
    return compilerFactory.createCompiler();
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["COMPILER_OPTIONS"], useValue: {}, multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["CompilerFactory"], useClass: _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_8__["JitCompilerFactory"], deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["COMPILER_OPTIONS"]] },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"], useFactory: createCompiler, deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CompilerFactory"]] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* empty css */\r\n "

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagenotfoundDv\">\r\n    <div>\r\n    <div class=\"fourZfour\"><span>4</span>0<span>4</span>  </div>\r\n    <div class=\"pageNfText\">Page Not Found</div>\r\n         <button mat-flat-button class=\"fourZfourBackBtn inactiveBtn\" (click)=\"backClicked()\">Go Back</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent(_location) {
        this._location = _location;
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent.prototype.backClicked = function () {
        this._location.back();
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true,
    extension: "+91",
    companylogo: "",
    timesheet: "https://testfunctionappadfb.blob.core.windows.net/timesheets/",
    userLogin: "https://projectdesktst.azurewebsites.net/api/UserLogin?code=SVz4p5NCaUuz7Aoalupc9aRtUaKNOrJXg1VfiXlq3a6guHQAGtcVXA==",
    verifyMobile: "https://projectdesktst.azurewebsites.net/api/VerifyMobile?code=tW1PF17qmYOya2CB/dNWxElUq4XkOHl9Qanoj0IISzM4hZlGiHeNyg==",
    imageUpload: "https://projectdesktst.azurewebsites.net/api/ImageUpload?code=Cj40cdOfT4LN7z8lbPJRb8k42hpVGoono0oZNudaaI2X9wEC92gh9g==",
    registerCompany: "https://projectdesktst.azurewebsites.net/api/RegisterCompany?code=dwsmaIgTrtjz5ul3XmPGVTkEf/NV2Pa7ju7ZYA8qkj8MXvucXP/XuQ==",
    resetPassword: "https://projectdesktst.azurewebsites.net/api/ResetPassword?code=LBau4MaRLkbFNGDA7CWwRApPJgzvcwCwyY/81oJLWQZ/Ft383PbACg==",
    forgotPassword: "https://projectdesktst.azurewebsites.net/api/ForgotPassword?code=JB/hvS7vcuO4fhiYPcf2UeePGBIWMS0aEPmXDdyKp6KjSdc4xxq41A==",
    emailVerificationUserRegistration: "https://projectdesktst.azurewebsites.net/api/EmailVerificationForUserRegistration?code=H8y3c3lVQKUrZqDGEnE7lJQHbHDtjtl0fwItUEGQfp4x9ojbOXmRXw==",
    registerUser: "https://projectdesktst.azurewebsites.net/api/RegisterUser?code=Aa/onrH53cSnGB8tqCmcZ5lmjrHjORdmlQc3BEQbsLzUZZEfDgfWRw==",
    checkCompanyValidity: "https://projectdesktst.azurewebsites.net/api/CheckCompanyName?code=vhESvshVI6Kq7jcUMcDzfOZb68k0UZRjC/DyC12PRfq2LePjxeavsw==",
    getAllPolicies: "https://projectdesktst.azurewebsites.net/api/GetAllPolicies?code=MiPDzy7LaNFlm8NaAa90VDQXL/QYDzfalKWmG1Gut6i7wv8xCYj/Lw==",
    deletePolicy: "https://projectdesktst.azurewebsites.net/api/DeletePolicy?code=XnwNfggOBm9I1TOler799wIL2wxc6E6oX/VgwtN0CHa2gEtBRSjsyA==",
    editPolicyComponents: "https://projectdesktst.azurewebsites.net/api/EditPolicyComponents?code=JpRe9OZbpbjLCaxATakHdswd25avxLLbIHXyYVjCLuhlH3oan1BypQ==",
    editPolicyND: "https://projectdesktst.azurewebsites.net/api/EditPolicyND?code=VYgm/3bw6FigrVNC2JQGRl2v3PlNAU0m8CBeXb0vTyiDU57oijmsXA==",
    createPolicy: "https://projectdesktst.azurewebsites.net/api/CreatePolicy?code=iScaPedWus18/FVl9BtXtCHvEv0rWr2D5P6CfBKT4gWCFLyq7wE7NA==",
    getAllRoles: "https://projectdesktst.azurewebsites.net/api/GetAllRoles?code=ge0msFBVDf3LVxW9Z8ogGHws/9VvbFsmlFj/MmicbEh0A5vIo1tcZw==",
    deleteRole: "https://projectdesktst.azurewebsites.net/api/DeleteRole?code=ow5lVta93PwhV2PlpLec1D6FbC0pSDtFPp7z/Ik65og9R4kBA1kzwA==",
    editRoleComponents: "https://projectdesktst.azurewebsites.net/api/EditRoleHasPolicy?code=iTYA59tVXtCpGPI97q9DRPgzvHBbxyDqDwANdannl4RPaQmdp7gxXw==",
    editRoleND: "https://projectdesktst.azurewebsites.net/api/EditRoleND?code=eHe9e8YVtAKHa7QaK6yZCa0Ite1kZ4YOwmpTUJIfLklXzffMKnaELQ==",
    createRole: "https://projectdesktst.azurewebsites.net/api/CreateRole?code=5kcm7lOQAMPCxvqo648gVudanuP7I/UGh3L4pq73i94P62mUOqcraw==",
    roleHasPolicyList: "https://projectdesktst.azurewebsites.net/api/RolehasPolicyList?code=mX8akhyOak3y0NI8LBCezXLSZ2qmqWanMSR4uV6L3pMCctSny7mXEw==",
    getAllUsersinCompany: "https://projectdesktst.azurewebsites.net/api/GetAllUsersInCompany?code=2N0MHylqaHkuSCaE11SxPfnqtNDJlWCL0BZHmNLttsupsB0bodujqQ==",
    getAllGroups: "https://projectdesktst.azurewebsites.net/api/GetAllGroups?code=Xjdbk8W9I5l6sWHeRualA0ftv584CZF2HlMfDXaPx1oaVYhoJbaqrQ==",
    createGroup: "https://projectdesktst.azurewebsites.net/api/CreateGroup?code=z4AJAmQHFIkyFynJeEea0aX9JZWiffAn70khklp6IXoXTMAF26sBaQ==",
    deleteGroups: "https://projectdesktst.azurewebsites.net/api/DeleteGroups?code=0YlNTtSF4MBWDV99/sBqhoYBQHk62JD9UMN/EzSjJtq5qQg85dNrGw==",
    editGroupND: "https://projectdesktst.azurewebsites.net/api/EditGroupND?code=Ms3QfPIdcVy8uDadDPFemBXGx9DMWKby6nJqGDVjoH30wBNHOdsaVQ==",
    editGroupHasPolicyorRole: "https://projectdesktst.azurewebsites.net/api/EditGroupHasPolicyorRole?code=Eclnbns9ZfV6jIHQQuIcm7TLQeB8k1VcL9P1ZdJyrWSl54K2m/oqfQ==",
    editGroupHasUsers: "https://projectdesktst.azurewebsites.net/api/EditGrouphasUsers?code=aDibDBmzLSGfLwpRGSq1094h5SmngDLl2LQA9WVcz9vNd8ud5aLQOA==",
    grouphasRolesList: "https://projectdesktst.azurewebsites.net/api/GrouphasRoles?code=nDW24S/5GmsWSaTMD1wkSNk5/dtoM40JTXFIasuXQHM25awTB8Ea6g==",
    grouphasPoliciesList: "https://projectdesktst.azurewebsites.net/api/GrouphasPolicies?code=ATPiQFpYvrsaT3JpPuLeNuQLUFXca31T7zFckOBujhKAzv1IoTsivw==",
    grouphasUsersList: "https://projectdesktst.azurewebsites.net/api/GrouphasUsers?code=0RpGfywkPHBCzG8l1H4me4kQUimuab18SrrTcWKqJQRyH/wrIbLQgQ==",
    getComponentCounts: "https://projectdesktst.azurewebsites.net/api/GetComponentCounts?code=E57wCuAx9Jh3sOxjPuruz6GIUoRNU1yAfUGWZSxbRzmBzmaeaanOYg==",
    AddUsertoCompany: "https://projectdesktst.azurewebsites.net/api/AddUsertoCompany?code=trV23OapS9e1/UM0ao0iiSUSEwhr8Nvm2A6nTU9cR3YGUKvGsq1H3A==",
    EditUserPrivileges: "https://projectdesktst.azurewebsites.net/api/EditUserPrivileges?code=ITUHGNn/nm/gbhue9bzunIudHJroFVxgk8aAUMWqCsyKItlJfs6y2Q==",
    RemoveUserFromCompany: "https://projectdesktst.azurewebsites.net/api/RemoveUserFromCompany?code=TJBHOxNVt8gx9w/pyNsbezwtjtpNZW0vjnFKg82COO1ortPqJ5J81A==",
    getAllUsers: "https://projectdesktst.azurewebsites.net/api/GetAllUsers?code=AkYYKCAq03mXj8LzAGXa8eHvuwLjZTQatT2z7pscKUoCapibNWX8tQ==",
    UserhasPoliciesList: "https://projectdesktst.azurewebsites.net/api/UserhasPolicies?code=1FGxOCcLKOhaqKqdTuAL5YhGQQgRs9RLEyoLkIav0nic0aiHCnVrIQ==",
    UserhasRolesList: "https://projectdesktst.azurewebsites.net/api/UserhasRoles?code=QGtNTipLPkNi1osvczJYcTP3L0YxiQtdY92bxTlxakQRvprsJ8EsWA==",
    UserhasGroupsList: "https://projectdesktst.azurewebsites.net/api/UserhasGroups?code=mjasqPQzmiaau9h1rikdlJ8vOmzTIiYjO2gB0TgqXToja073YEyvuw==",
    InviteUsertoRegister: "https://projectdesktst.azurewebsites.net/api/InviteUsertoRegister?code=Lih1uMFQLJa72BCoWlap7eFfgL58uliBKrFhZD3cKe/TFfHjV0gC2w==",
    registerUserInvited: "https://projectdesktst.azurewebsites.net/api/RegisterUserInvited?code=OaOXCLDUKd71qyPo04IpflrlhwAXLFQA6YmSbUj5qUlao2DYzQkS6A==",
    getUserNotinCompany: "https://projectdesktst.azurewebsites.net/api/getAllUsersNotinCompany?code=RyDWFTqDxRAqjweMWZxfM9K48scAJl24Is5WGJpDaRaYSy09jfMI3Q==",
    RemovePolicyFromRole: "https://projectdesktst.azurewebsites.net/api/RemovePolicyFromRole?code=v8UgmzJI6w888RaOMc3NFrapjdOcTYCUtKS35JBckgHz09F2koNyvA==",
    RemoveUserPrivileges: "https://projectdesktst.azurewebsites.net/api/RemoveUserPrivileges?code=vXsflDJeyg2RlxnDPy6UCdZMQDNygTxLvBDwwk7nwgx77LsHRZneag==",
    removePolicyorRoleFromGroup: "https://projectdesktst.azurewebsites.net/api/RemovePolicyorRoleFromGroup?code=CnWaadX0wfYtTle9IorsOxtRoozrSd4VdmgLQho7wyaK7ZEnfA7Wqg==",
    getUserCompanies: "https://projectdesktst.azurewebsites.net/api/getUserCompanies?code=ld9NVYaaGpHWOa2jquQJNkZ82QJAI7y0S4NzQzFxPEWdQcBJmRATfw==",
    createProject: "https://projectdesktst.azurewebsites.net/api/CreateProject?code=wolwKHWTdbeYdIpgJN91Zowk6UxG1LjXzp50ikORF2/5yA2SXQzHFQ==",
    editProject: "https://projectdesktst.azurewebsites.net/api/EditProject?code=UDMgXCnMP6WEDNcSbKUNAS95Rbqo2lL7V5TsbgWYcsz4D5BaYng00A==",
    getAllProjects: "https://projectdesktst.azurewebsites.net/api/GetAllProjects?code=6JygbWX9ZKY6LQ4/VWi82EnG3J5FD4/OA0aaOCfb89EP7zBHnrR8jw==",
    deleteProjects: "https://projectdesktst.azurewebsites.net/api/DeleteProjects?code=UCXJHz/5tVr4XiRUPuMi27efGnxcaAa9vQcKE5OuFGxXFpQy7/57NA==",
    projecthasUser: "https://projectdesktst.azurewebsites.net/api/ProjecthasUsers?code=nlFEPl6/t8s4JQ/SJ4/vwrAcaJfGMtjW24v151ClfKenNALMRMpnEg==",
    editProjecthasUser: "https://projectdesktst.azurewebsites.net/api/EditProjecthasUser?code=Y/Vz258qlNtPTjlAfUdKBtcgQYLaZVPPJK8k1chLpFU3mmRfZZcU1w==",
    removeUserFromProject: "https://projectdesktst.azurewebsites.net/api/RemoveUserFromProject?code=Gr7Yvibycq9R1MWK2hDEKdVon0/WM4NZjhIfHw4xEixMGwh2hAhi8Q==",
    createTask: "https://projectdesktst.azurewebsites.net/api/CreateTask?code=1dH4ugDYY0oD1G3xVof9KLijMhaxegr7eUU1sdVJvgyljagJypKGaQ==",
    projecthasTask: "https://projectdesktst.azurewebsites.net/api/ProjecthasTasks?code=/XEcsBlYdVRs83sXtrHZX2k7J4mN2BTS6I2v624KqUQZCWivR1HJ2A==",
    removeTaskFromProject: "https://projectdesktst.azurewebsites.net/api/RemoveTaskFromProject?code=LPTA3m6poaL9VcICuJ1yQzE1dlMs1WRZe2FCV5YrhxahNu2SobG0wg==",
    createSubTask: "https://projectdesktst.azurewebsites.net/api/CreateSubTask?code=MGA/NL/pamtErsAgC1ICZRsoL0LWIM/Mys1UWIRcAI4HilaYQsxdAg==",
    projecthasSubTask: "https://projectdesktst.azurewebsites.net/api/ProjecthasSubTasks?code=983UYjzW8HEvPrSUb8va/xa8cBgk5HChB83TjUYPuFFNyhJadtb8hQ==",
    editSubTask: "https://projectdesktst.azurewebsites.net/api/EditSubTask?code=UQv28ln35fICIJRmzc0wakOQ2Dux1Y2w0jreSCu1nUnClSrvBLlRnA==",
    userhasProjects: "https://projectdesktst.azurewebsites.net/api/UserhasProjects?code=4BzZWBTva/Bsfjgg5QB6oeBpsuDsGjQAKvGo2NCZSyFqhnRKtp5kgw==",
    userhasTasks: "https://projectdesktst.azurewebsites.net/api/UserhasTasks?code=Id6NUfHv7l1iDaxiIpEWDabqyEA0LUNaQaFEbbeY15waeVAmWDBCRg==",
    saveTimeLog: "https://projectdesktst.azurewebsites.net/api/SaveTimeLog?code=/lsZRYPFw4zQKtLNW9jaO/YSrNSvl9X4yyEcO13Erb2lMyhoTB895w==",
    userTimeLogs: "https://projectdesktst.azurewebsites.net/api/UserTimeLogs?code=diJ8eKOzr7NOa3flaTJ7R9ixd90OSt2T1aPnmwELVjt1Z1gcaKFCTg==",
    editTimeLog: "https://projectdesktst.azurewebsites.net/api/EditTimelog?code=2v7xlt8fQzdHdpGcJ41qVORM4Iz4jTtp0IdfPrH1kaxbX9d6zKPXlg==",
    deleteTimelogs: "https://projectdesktst.azurewebsites.net/api/DeleteTimelogs?code=avA2pm8Fva5CnElrG62TLdC0cGBytI9JG/Elpjd6KZRyR7RvE0E/gw==",
    timesheetPDFUpload: "https://projectdesktst.azurewebsites.net/api/TimesheetPDFUpload?code=Q/UeSR2NOKeCrQ4crpC8GqhrEdS0mOXKwCdVCD7uXngjbn0lcfQBQg==",
    submitTimesheet: "https://projectdesktst.azurewebsites.net/api/SubmitTimesheet?code=SxnSFY5HQP0KnfDrECBakGpalLWZiDVEMb0wzJhXSgfPdGCMQVLN9A==",
    userTimesheets: "https://projectdesktst.azurewebsites.net/api/UserTimesheets?code=Ho9PAPiOMO9dwYI0B4BlDxvmVEV7d5N4tRWvbjZZV0iph3dUXE8eUw==",
    projectTimesheets: "https://projectdesktst.azurewebsites.net/api/ProjectTimesheets?code=eLjBwu8Tixs0cxGV5m74KOQ8l4PYF0MQOtO51hTGDLYqFQv7XEjjLA==",
    approveTimesheets: "https://projectdesktst.azurewebsites.net/api/ApproveTimesheets?code=gMFJ1mHMB16RfWExeVsJRteo4LUgmebkMI1mDAZ2Z4D4pbETLmrRpg==",
    rejectTimesheets: "https://projectdesktst.azurewebsites.net/api/RejectTimesheets?code=ZGC14QJg5W3HmvQvsWFxxIONC4yoeXoNiFGRaSE3go0bqMcSXD1M9w==",
    rejectedTimelogs: "https://projectdesktst.azurewebsites.net/api/RejectedTimelogs?code=C56QhJ/oCXzjbXx6ulHsGaQ5sFiL05QDWChXX8U6TKKWiOCrtq2XMw==",
    reSubmitTimesheet: "https://projectdesktst.azurewebsites.net/api/ReSubmitTimesheet?code=khyUxLulAnox1lglJJ9thAykv8bASAPVl9KLy1hEtPPlfVSvAB9d6Q==",
    userPrivileges: "https://projectdesktst.azurewebsites.net/api/GetUserPrivileges?code=/f3a/8t03gGlJrmyUZSSS9szgGrxMKKwQihgYSCPphDF7OBbeAWllA=="
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ProjectDesk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map