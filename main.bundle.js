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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"page-translator\" (@routerTransition.done)=\"routerTransitionDone($event)\" [@routerTransition]=\"getState(o)\">\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>\r\n<div class=\"app-loader\" [ngClass]=\"{'loading': isLoading }\">\r\n\r\n</div>\r\n\r\n<div class=\"svd-modal\" [ngClass]=\"{'hidden': statusModal.showStatusModal === false }\">\r\n    <div class=\"svd-modal-overlay\"></div>\r\n    <div class=\"svd-modal-content\">\r\n        <div class=\"svd-table-cell\">\r\n            <div class=\"center-div\">\r\n                <div class=\"svd-modal-title\" *ngIf=\"statusModal.title\">\r\n                    {{ statusModal.title }}\r\n                </div>\r\n                <div class=\"font-{{ statusModal.modalStatus }}\">\r\n                    {{statusModal.content }}\r\n                </div>\r\n                <div class=\"svd-modal-footer\">\r\n                    <button class=\"btn btn-danger button is-primary\" type=\"button\" (click)=\"statusModal.showStatusModal = false;\"> close </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-loader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  min-height: 100vh;\n  width: 100vw;\n  background-color: black;\n  opacity: .5;\n  display: none;\n}\n.app-loader.loading {\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animations__ = __webpack_require__("../../../../../src/app/route-animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_customer_service__ = __webpack_require__("../../../../../src/app/services/user/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
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
    function AppComponent(auth, router, api, session, customer, userService) {
        this.auth = auth;
        this.router = router;
        this.api = api;
        this.session = session;
        this.customer = customer;
        this.userService = userService;
        this.title = 'svd';
        this.pageTransition = '';
        this.isLoading = true;
        this.isDesktop = false;
        this.statusModal = {
            title: null,
            modalStatus: 'success',
            showStatusModal: false,
            content: 'Account created Successfully'
        };
        this.autheticationPromise = null;
        this.autheticationPromiseInProgress = false;
        this.isLoading = false;
    }
    AppComponent.prototype.getState = function (outlet) {
        return this.pageTransition;
    };
    AppComponent.prototype.routerTransitionDone = function ($event) {
        this.pageTransition = '';
    };
    AppComponent.prototype.navigateByUrl = function (url, pageTransition) {
        this.pageTransition = pageTransition || 'slideleft';
        this.router.navigateByUrl(url);
    };
    AppComponent.prototype.setAccountType = function (roleName) {
        this.session.set('role', roleName);
    };
    AppComponent.prototype.showStatusModal = function (type, content, opts) {
        this.statusModal.modalStatus = type;
        this.statusModal.content = content;
        if (opts && opts.title) {
            this.statusModal.title = opts.title;
        }
        else {
            this.statusModal.title = null;
        }
        this.statusModal.showStatusModal = true;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.isDesktop = window.innerWidth <= 1024 ? false : true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")],
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animations__["a" /* routerTransition */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_data_session_service__["a" /* SessionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_user_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_user_customer_service__["a" /* CustomerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_user_user_service__["a" /* UserService */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routing__ = __webpack_require__("../../../../../src/app/routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_utils_pub_sub_service__ = __webpack_require__("../../../../../src/app/services/utils/pub-sub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_provider_service__ = __webpack_require__("../../../../../src/app/services/user/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_customer_service__ = __webpack_require__("../../../../../src/app/services/user/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_utils_utils_service__ = __webpack_require__("../../../../../src/app/services/utils/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_region_region_service__ = __webpack_require__("../../../../../src/app/services/region/region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_machine_machine_service__ = __webpack_require__("../../../../../src/app/services/machine/machine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_style_guide_style_guide_component__ = __webpack_require__("../../../../../src/app/components/style-guide/style-guide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_create_account_type_create_account_type_component__ = __webpack_require__("../../../../../src/app/components/create-account-type/create-account-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_create_account_authority_create_account_authority_component__ = __webpack_require__("../../../../../src/app/components/create-account-authority/create-account-authority.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_create_account_password_create_account_password_component__ = __webpack_require__("../../../../../src/app/components/create-account-password/create-account-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_create_account_name_create_account_name_component__ = __webpack_require__("../../../../../src/app/components/create-account-name/create-account-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_create_account_code_create_account_code_component__ = __webpack_require__("../../../../../src/app/components/create-account-code/create-account-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_create_account_jointeam_create_account_jointeam_component__ = __webpack_require__("../../../../../src/app/components/create-account-jointeam/create-account-jointeam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_create_account_createteam_create_account_createteam_component__ = __webpack_require__("../../../../../src/app/components/create-account-createteam/create-account-createteam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_address_list_address_list_component__ = __webpack_require__("../../../../../src/app/components/address-list/address-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_address_new_edit_address_new_edit_component__ = __webpack_require__("../../../../../src/app/components/address-new-edit/address-new-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_my_machines_my_machines_component__ = __webpack_require__("../../../../../src/app/components/my-machines/my-machines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_machines_new_edit_machines_new_edit_component__ = __webpack_require__("../../../../../src/app/components/machines-new-edit/machines-new-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_technology_list_technology_list_component__ = __webpack_require__("../../../../../src/app/components/technology-list/technology-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_technology_new_edit_technology_new_edit_component__ = __webpack_require__("../../../../../src/app/components/technology-new-edit/technology-new-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_manufacturer_list_manufacturer_list_component__ = __webpack_require__("../../../../../src/app/components/manufacturer-list/manufacturer-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_manufacturer_new_edit_manufacturer_new_edit_component__ = __webpack_require__("../../../../../src/app/components/manufacturer-new-edit/manufacturer-new-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_create_account_nameaddress_create_account_nameaddress_component__ = __webpack_require__("../../../../../src/app/components/create-account-nameaddress/create-account-nameaddress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_company_details_company_details_component__ = __webpack_require__("../../../../../src/app/components/company-details/company-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_service_areas_service_areas_component__ = __webpack_require__("../../../../../src/app/components/service-areas/service-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var deps = [
    __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_18__components_style_guide_style_guide_component__["a" /* StyleGuideComponent */],
    __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_20__components_create_account_type_create_account_type_component__["a" /* CreateAccountTypeComponent */],
    __WEBPACK_IMPORTED_MODULE_21__components_create_account_authority_create_account_authority_component__["a" /* CreateAccountAuthorityComponent */],
    __WEBPACK_IMPORTED_MODULE_22__components_create_account_password_create_account_password_component__["a" /* CreateAccountPasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_23__components_create_account_name_create_account_name_component__["a" /* CreateAccountNameComponent */],
    __WEBPACK_IMPORTED_MODULE_24__components_create_account_code_create_account_code_component__["a" /* CreateAccountCodeComponent */],
    __WEBPACK_IMPORTED_MODULE_25__components_create_account_jointeam_create_account_jointeam_component__["a" /* CreateAccountJointeamComponent */],
    __WEBPACK_IMPORTED_MODULE_26__components_create_account_createteam_create_account_createteam_component__["a" /* CreateAccountCreateteamComponent */],
    __WEBPACK_IMPORTED_MODULE_27__components_address_list_address_list_component__["a" /* AddressListComponent */],
    __WEBPACK_IMPORTED_MODULE_28__components_address_new_edit_address_new_edit_component__["a" /* AddressNewEditComponent */],
    __WEBPACK_IMPORTED_MODULE_29__components_my_machines_my_machines_component__["a" /* MyMachinesComponent */],
    __WEBPACK_IMPORTED_MODULE_30__components_machines_new_edit_machines_new_edit_component__["a" /* MachinesNewEditComponent */],
    __WEBPACK_IMPORTED_MODULE_31__components_technology_list_technology_list_component__["a" /* TechnologyListComponent */],
    __WEBPACK_IMPORTED_MODULE_32__components_technology_new_edit_technology_new_edit_component__["a" /* TechnologyNewEditComponent */],
    __WEBPACK_IMPORTED_MODULE_33__components_manufacturer_list_manufacturer_list_component__["a" /* ManufacturerListComponent */],
    __WEBPACK_IMPORTED_MODULE_34__components_manufacturer_new_edit_manufacturer_new_edit_component__["a" /* ManufacturerNewEditComponent */],
    __WEBPACK_IMPORTED_MODULE_35__components_create_account_nameaddress_create_account_nameaddress_component__["a" /* CreateAccountNameaddressComponent */],
    __WEBPACK_IMPORTED_MODULE_36__components_company_details_company_details_component__["a" /* CompanyDetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_37__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
    __WEBPACK_IMPORTED_MODULE_38__components_service_areas_service_areas_component__["a" /* ServiceAreasComponent */],
    __WEBPACK_IMPORTED_MODULE_39__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_40__components_change_password_change_password_component__["a" /* ChangePasswordComponent */]
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: deps,
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__routing__["a" /* Routings */].paths),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__services_utils_pub_sub_service__["a" /* PubSubService */],
            __WEBPACK_IMPORTED_MODULE_9__services_data_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_10__services_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__services_utils_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_user_customer_service__["a" /* CustomerService */],
            __WEBPACK_IMPORTED_MODULE_14__services_auxilary_service__["a" /* AuxilaryService */],
            __WEBPACK_IMPORTED_MODULE_15__services_region_region_service__["a" /* RegionService */],
            __WEBPACK_IMPORTED_MODULE_16__services_machine_machine_service__["a" /* MachineService */],
            __WEBPACK_IMPORTED_MODULE_11__services_user_provider_service__["a" /* ProviderService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/address-list/address-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg address-list\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"flex flex-center space-between page-head-section\">\r\n            <button type=\"button\" class=\"button is-small bg-transparent no-border white\" (click)=\"app.navigateByUrl('/address-list', 'slideright')\">BACK</button>\r\n            <h4 class=\"white\">My Address</h4>\r\n            <button class=\"invisible\">hidden</button>\r\n        </div>\r\n        <div class=\"primary-divider\"></div>\r\n        <div class=\"search-box\">\r\n            <div class=\"flex flex-center search-container\">\r\n                <i class=\"fa fa-search\"></i>\r\n                <form class=\"flex-container\" #teamForm=\"ngForm\" (submit)=\"getFilterAddress(searchtrm)\">\r\n                    <input #searchtrm type=\"text\" class=\"txt-input form-control\" (onEnter)=\"getFilterAddress(searchtrm)\" name=\"searchterm\" id=\"searchterm\" (keyup)=\"getFilterAddress(searchtrm)\" placeholder=\"Search for an address\" />\r\n                </form>\r\n                <i class=\"fa fa-times-circle\"></i>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div *ngIf=\"Addresses.length === 0\">\r\n        <div class=\"well upperCase\">\r\n            <h4 class=\"subtitle is-6\">addresses</h4>\r\n        </div>\r\n        <div class=\"well-nobg\">\r\n            Please add an address so that we can find the right technicians for you.\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"Addresses.length > 0\">\r\n        <div class=\"well upperCase\">\r\n            <h4 class=\"subtitle is-6\" *ngIf=\"isMachine === true\">select a address</h4>\r\n            <h4 class=\"subtitle is-6\" *ngIf=\"isMachine === false\">addresses</h4>\r\n        </div>\r\n        <div class=\"secondary-divider\"></div>\r\n        <div class=\"address-list\" *ngIf=\"Addresses.length > 0\">\r\n            <div class=\"flex flex-center space-between well-nobg address\" (click)=\"selectAddress(address)\" *ngFor=\"let address of filterAddresses\">\r\n                <div>\r\n                    <p class=\"capitalize\">{{address.street1 }}, {{address.street2 }}</p>\r\n                    <p class=\"capitalize\">{{address.city }}, {{address.region }}</p>\r\n                    <p class=\"capitalize\">{{address.postcode }}</p>\r\n                </div>\r\n                <div (click)=\"editAddress($event, address)\">\r\n                    <i class=\"fa fa-pencil\"></i> Edit\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"flex space-around mt-2\">\r\n        <button class=\"button is-success\" (click)=\"addAdrress()\"> ADD AN ADDRESS </button>\r\n    </div>\r\n\r\n    <div class=\"flex space-around\" style=\"margin-top: 10px;\" *ngIf=\"Addresses.length > 0 && isMachine === false\">\r\n        <button class=\"button is-success mb-1\" (click)=\"goToMachines()\"> Add Machine </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/address-list/address-list.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address-list .address {\n  border-bottom: 1px solid #E6E9ED;\n}\n.address-list .address p {\n  font-weight: 300;\n}\n.address-list .address p:first-child {\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/address-list/address-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddressListComponent = (function () {
    function AddressListComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.Addresses = [];
        this.filterAddresses = [];
        this.isMachine = false;
    }
    AddressListComponent.prototype.getAddresses = function (user) {
        var _this = this;
        this.aux.getCustomersByOwnerEmail({
            owneremail: user.email
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err) {
                _this.session.set('customer', resp);
            }
            if (resp.addresses) {
                _this.Addresses = resp.addresses;
            }
            else {
                _this.Addresses = [];
            }
            _this.getFilterAddress();
        });
    };
    AddressListComponent.prototype.getFilterAddress = function (control) {
        var termToSearch = null;
        if (control) {
            termToSearch = control.value;
        }
        if (!termToSearch) {
            this.filterAddresses = this.Addresses;
        }
        else {
            this.filterAddresses = this.Addresses.filter(function (a) {
                var found = false;
                if (a['companyName'] && a['companyName'].toLowerCase().indexOf(termToSearch.toLowerCase()) === 0) {
                    found = true;
                }
                if (a['street1'] && a['street1'].toLowerCase().indexOf(termToSearch.toLowerCase()) === 0) {
                    found = true;
                }
                if (a['street2'] && a['street2'].toLowerCase().indexOf(termToSearch.toLowerCase()) === 0) {
                    found = true;
                }
                return found;
            });
        }
    };
    AddressListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.session.get('user');
        if (user) {
            var customer = this.session.get('customer');
            if (customer) {
                this.Addresses = customer.addresses;
                this.getFilterAddress();
            }
            else {
                this.getAddresses(user);
            }
        }
        else {
            this.aux.authenticate().then(function (_a) {
                var err = _a.err, resp = _a.resp;
                if (!err) {
                    _this.session.set('user', resp);
                    _this.getAddresses(resp);
                }
            });
        }
        if (this.session.get('isMachine')) {
            this.isMachine = true;
        }
        this.session.set('editAddress', null);
    };
    AddressListComponent.prototype.addAdrress = function () {
        this.app.navigateByUrl('/address-new');
    };
    AddressListComponent.prototype.goToMachines = function () {
        this.app.navigateByUrl('/machines-list');
    };
    AddressListComponent.prototype.selectAddress = function (address) {
        if (this.session.get('isMachine') && this.session.get('back_url')) {
            this.session.set('isMachine', null);
            this.session.set('selectedAddress', address);
            this.app.navigateByUrl(this.session.get('back_url'));
        }
    };
    AddressListComponent.prototype.editAddress = function (event, address) {
        event.stopPropagation();
        this.session.set('editAddress', address);
        this.app.navigateByUrl('/address-edit/' + address.id);
    };
    return AddressListComponent;
}());
AddressListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-address-list',
        template: __webpack_require__("../../../../../src/app/components/address-list/address-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/address-list/address-list.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], AddressListComponent);

var _a, _b, _c;
//# sourceMappingURL=address-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/address-new-edit/address-new-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg address-list\">\r\n    <form #newAddressForm=\"ngForm\" (submit)=\"saveAddress()\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"flex flex-center space-between page-head-section\">\r\n                <button type=\"button\" class=\"button is-small bg-transparent no-border white\" (click)=\"app.navigateByUrl('/address-list', 'slideright')\">BACK</button>\r\n                <h4 class=\"white\">New Address</h4>\r\n                <button type=\"submit\" [disabled]=\"newAddressForm.invalid\" class=\"button is-success is-small bg-transparent no-border black\"> Save</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"well upperCase\">\r\n            <div class=\"flex tabs\">\r\n                <input style=\"display: none;\" type=\"radio\" #county=\"ngModel\" (change)=\"updateCountry('USA')\" [(ngModel)]=\"newAddress.country\" id=\"countyusa\" name=\"country\" value=\"USA\" />\r\n                <input style=\"display: none;\" type=\"radio\" #county=\"ngModel\" (change)=\"updateCountry('CANADA')\" [(ngModel)]=\"newAddress.country\" id=\"countycanada\" name=\"country\" value=\"CANADA\" />\r\n                <label for=\"countyusa\" class=\"button is-small is-info is-outlined\" [ngClass]=\"{ 'active' :newAddress.country === 'USA' }\">USA</label>\r\n                <label for=\"countycanada\" class=\"button is-small is-info is-outlined\" [ngClass]=\"{ 'active' :newAddress.country === 'CANADA' }\">CANADA</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"form-group\">\r\n\t\t\t\t<input required #companyName=\"ngModel\" [(ngModel)]=\"newAddress.companyName\" id=\"companyName\" name=\"companyName\" type=\"text\" />\r\n\t\t\t\t<label class=\"control-label\" for=\"input\">Company Name</label>\r\n\t\t\t\t<i class=\"bar\"></i>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t<input required #street1=\"ngModel\" [(ngModel)]=\"newAddress.street1\" id=\"street1\" name=\"street1\" type=\"text\" />\r\n\t\t\t\t<label class=\"control-label\" for=\"input\">Address 1</label>\r\n\t\t\t\t<i class=\"bar\"></i>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t<input required #street2=\"ngModel\" [(ngModel)]=\"newAddress.street2\" id=\"street2\" name=\"street2\" type=\"text\" />\r\n\t\t\t\t<label class=\"control-label\" for=\"input\">Address 2</label>\r\n\t\t\t\t<i class=\"bar\"></i>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t<input required #city=\"ngModel\" [(ngModel)]=\"newAddress.city\" id=\"city\" name=\"city\" type=\"text\" />\r\n\t\t\t\t<label class=\"control-label\" for=\"input\">City</label>\r\n\t\t\t\t<i class=\"bar\"></i>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t<input required #region=\"ngModel\" (click)=\"showStates = true;\" [(ngModel)]=\"newAddress.region\" id=\"region\" name=\"region\" type=\"text\" />\r\n\t\t\t\t<label class=\"control-label\" for=\"input\">State</label>\r\n\t\t\t\t<i class=\"bar\"></i>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t<input required #district=\"ngModel\" (click)=\"showCounty = true;\" [(ngModel)]=\"newAddress.district\" id=\"district\" name=\"district\" type=\"text\" />\r\n\t\t\t\t<label class=\"control-label\" for=\"input\">County</label>\r\n\t\t\t\t<i class=\"bar\"></i>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t<input required #postcode=\"ngModel\" [(ngModel)]=\"newAddress.postcode\" id=\"postcode\" name=\"postcode\" type=\"text\" />\r\n\t\t\t\t<label class=\"control-label\" for=\"input\">Zip Code</label>\r\n\t\t\t\t<i class=\"bar\"></i>\r\n            </div>\r\n            <div class=\"form-group\">\r\n\t\t\t\t<textarea required #location=\"ngModel\" [(ngModel)]=\"newAddress.location\" name=\"location\" id=\"location\"></textarea>\r\n\t\t\t\t<label class=\"control-label\" for=\"textarea\">Location Notes</label>\r\n\t\t\t\t<i class=\"bar\"></i>\r\n\t\t\t</div>\r\n        </div>\r\n    </form>\r\n    <div class=\"modal-pro modal-states\" *ngIf=\"showStates\">\r\n        <div class=\"modal-overlay\" (click)=\"showStates = false;\"></div>\r\n        <div class=\"modal-pro-content offset-1 col-10 mt-5\">\r\n            <div class=\"state-list-item\" *ngFor=\"let state of StatesByCountry\" (click)=\"setState(state);showStates = false;\"> {{ state.description}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-pro modal-county\" *ngIf=\"showCounty\">\r\n        <div class=\"modal-overlay\" (click)=\"showCounty = false;\"></div>\r\n        <div class=\"modal-pro-content offset-1 col-10 mt-5\">\r\n            <div class=\"county-list-item\" *ngFor=\"let county of Districts\" (click)=\"setCounty(county);showCounty = false;\"> {{ county.description}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/address-new-edit/address-new-edit.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contry-field {\n  color: #aaa;\n}\n.contry-field .country-item.checked {\n  border-bottom: 1px solid #00A153;\n  color: #00A153;\n  box-shadow: 0px 3px 4px -3px #00A153;\n}\n.form-control {\n  border-radius: 0;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  background-color: transparent;\n  padding-left: 3px;\n}\n.form-control.last-control {\n  border-top: 1px solid #ced4da;\n  border-bottom: none;\n}\n.form-control:focus {\n  box-shadow: 0 4px 2px -4px #00A153;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/address-new-edit/address-new-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressNewEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddressNewEditComponent = (function () {
    function AddressNewEditComponent(app, aux, session, route) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.route = route;
        this.newAddress = {
            region: '',
            country: 'USA',
            street1: '',
            street2: '',
            postcode: '',
            city: '',
            district: '',
            location: ''
        };
        this.showStates = false;
        this.showCounty = false;
        this.StatesByCountry = [];
        this.States = [];
        this.Districts = [];
    }
    AddressNewEditComponent.prototype.getStates = function () {
        var _this = this;
        var isEdit = false;
        if (this.session.get('editAddress')) {
            this.newAddress = this.session.get('editAddress');
            isEdit = true;
        }
        this.aux.getStates().then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err && resp._embedded && resp._embedded.regions) {
                _this.States = resp._embedded.regions;
                var states = resp._embedded.regions.filter(function (s) {
                    return s.country === _this.newAddress.country;
                });
                _this.StatesByCountry = states;
                if (isEdit) {
                    _this.setState();
                }
            }
        });
    };
    AddressNewEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.session.get('user')) {
            this.getStates();
        }
        else {
            this.aux.authenticate().then(function () {
                _this.getStates();
            });
        }
    };
    AddressNewEditComponent.prototype.setState = function (state) {
        var _this = this;
        if (state) {
            this.newAddress.region = state.abbreviation;
        }
        this.aux.getDistricts({
            country: this.newAddress.country,
            region: this.newAddress.region
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err && resp._embedded && resp._embedded.serviceAreas) {
                _this.Districts = resp._embedded.serviceAreas;
            }
        });
    };
    AddressNewEditComponent.prototype.setCounty = function (county) {
        this.newAddress.district = county.description;
    };
    AddressNewEditComponent.prototype.updateCountry = function (selectedCountry) {
        var states = this.States.filter(function (s) {
            return s.country === selectedCountry;
        });
        this.StatesByCountry = states;
        this.newAddress.region = '';
        this.newAddress.district = '';
    };
    AddressNewEditComponent.prototype.updateCustomer = function (customer) {
        var _this = this;
        this.aux.updateCustomer({
            address: this.newAddress,
            customerid: customer.id
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err) {
                _this.session.set('customer', resp);
                _this.app.navigateByUrl('/address-list', 'slidedown');
            }
        });
    };
    AddressNewEditComponent.prototype.saveAddress = function () {
        var _this = this;
        var customer = this.session.get('customer');
        if (customer && customer.id) {
            this.updateCustomer(customer);
        }
        else {
            var user = this.session.get('user');
            if (user) {
                this.aux.getCustomersByOwnerEmail({
                    owneremail: user.email
                }).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    if (!err) {
                        _this.updateCustomer(resp);
                    }
                });
            }
        }
    };
    return AddressNewEditComponent;
}());
AddressNewEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-address-new-edit',
        template: __webpack_require__("../../../../../src/app/components/address-new-edit/address-new-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/address-new-edit/address-new-edit.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], AddressNewEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=address-new-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\">\r\n    <div class=\"container-fluid\">\r\n        <form #changePassword=\"ngForm\" class=\"pl-3 pr-3 pt-1\" (submit)=\"changePasswordFn()\">\r\n            <div class=\"form-field\">\r\n                <div class=\"\">\r\n                    <label>Email</label>\r\n                </div>\r\n                <input [(ngModel)]=\"changePassword.email\" type=\"text\" pattern=\"^[a-zA-Z]+[a-zA-Z0-9.+]*@[a-zA-Z]+\\.\\w*$\" required class=\"txt-input\" #email name=\"email\" id=\"email\" />\r\n            </div>\r\n            <div class=\"form-field\" *ngIf=\"isAnonymous\">\r\n                <div class=\"\">\r\n                    <label>Authentication Code</label>\r\n                </div>\r\n                <input [(ngModel)]=\"changePassword.authToken\" type=\"password\" required class=\"txt-input\" #authToken name=\"authToken\" id=\"authToken\" />\r\n            </div>\r\n            <div class=\"form-field\" *ngIf=\"isAnonymous === false\">\r\n                <div class=\"\">\r\n                    <label>Current password</label>\r\n                </div>\r\n                <input [(ngModel)]=\"changePassword.currentPassword\" type=\"password\" required class=\"txt-input\" #currentPassword name=\"currentPassword\" id=\"currentPassword\" />\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <div class=\"\">\r\n                    <label>New password</label>\r\n                </div>\r\n                <input [(ngModel)]=\"changePassword.password\" type=\"password\" required class=\"txt-input\" #password name=\"password\" id=\"password\" />\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <div class=\"\">\r\n                    <label>Confirm new password</label>\r\n                </div>\r\n                <input [(ngModel)]=\"changePassword.confirmpassword\" type=\"text\" required class=\"txt-input\" #confirmpassword name=\"confirmpassword\" id=\"confirmpassword\" />\r\n            </div>\r\n            <div class=\"mt-1\">\r\n                <button type=\"submit\" class=\"button btn-submit is-success\" [disabled]=\"changePassword.invalid\"> RESET PASSWORD </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-field:after,\n.form-field:before {\n  clear: both;\n}\n.form-field label {\n  color: white;\n}\n.form-field .txt-input {\n  display: block;\n  width: 100%;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.btn-submit {\n  background-color: #00823F;\n  width: 100%;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(app, session, aux) {
        this.app = app;
        this.session = session;
        this.aux = aux;
        this.changePassword = {};
        this.isAnonymous = true;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        if (this.session.get('user')) {
            this.isAnonymous = false;
        }
    };
    ChangePasswordComponent.prototype.changePasswordFn = function () {
        this.aux.changePassword(this.changePassword).then(function (_a) {
            var err = _a.err, resp = _a.resp;
        });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-change-password',
        template: __webpack_require__("../../../../../src/app/components/change-password/change-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/change-password/change-password.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _c || Object])
], ChangePasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/company-details/company-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\">\r\n    <div class=\"full-height flex-row flex-dir-col\">\r\n        <div class=\"page-head-section\">\r\n            <div class=\"flex-row\">\r\n                <button class=\"button is-text btn-back\" type=\"button\" (click)=\"app.navigateByUrl('/create-account-nameaddress', 'slideright')\">BACK</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex-row flex-dir-col flex-grow-2 flex-basis-auto no-bg\">\r\n            <form #companyDetailsForm=\"ngForm\" (submit)=\"updateProvider()\">\r\n                <div class=\"mt-1\" *ngIf=\"isProvider\">\r\n                    <input (click)=\"changeServiceAreas()\" required type=\"text\" class=\"input\" placeholder=\" States/Provinces Serviced \" />\r\n                </div>\r\n                <div class=\"mt-1\" *ngIf=\"isTechnician\">\r\n                    <input (click)=\"changeManufacturer()\" type=\"text\" class=\"input\" placeholder=\" Manufacturers Services \" />\r\n                </div>\r\n                <div class=\"mt-1\" *ngIf=\"isTechnician\">\r\n                    <input (click)=\"changeTechnologyTypes()\" type=\"text\" class=\"input\" placeholder=\" Technology Types \" />\r\n                </div>\r\n                <div class=\"mt-1\" *ngIf=\"isProvider\">\r\n                    <label>I have worker's compensation insurance </label>\r\n                    <input [(ngModel)]=\"companyDetails.providerData.hasWorkersComp\" type=\"checkbox\" name=\"hasWorkersComp\" id=\"hasWorkersComp\" />\r\n                </div>\r\n                <div class=\"mt-1\" *ngIf=\"isProvider\">\r\n                    <label>I have liability insurance </label>\r\n                    <input [(ngModel)]=\"companyDetails.providerData.insured\" type=\"checkbox\" name=\"insured\" id=\"insured\" />\r\n                </div>\r\n                <div class=\"mt-1\" *ngIf=\"!isProvider && isTechnician\">\r\n                    <label>I have received safety training </label>\r\n                    <input [(ngModel)]=\"companyDetails.safetyTrained\" type=\"checkbox\" name=\"safetyTrained\" id=\"safetyTrained\" />\r\n                </div>\r\n                <div class=\"mt-1\" *ngIf=\"isProvider && ProviderTypes.length > 0\">\r\n                    <div class=\"flex tabs\">\r\n                        <label (click)=\"companyDetails.providerData.type = item;\" [ngClass]=\"{'active': item.id === companyDetails.providerData.type.id }\" class=\"button is-small is-info is-outlined\" *ngFor=\"let item of ProviderTypes\">{{ item.name }}</label>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"flex-row space-around mt-1\">\r\n                    <button type=\"submit\" class=\"button is-success\" [disabled]=\"companyDetailsForm.invalid\"> Get Up! </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/company-details/company-details.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-details/company-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyDetailsComponent = (function () {
    function CompanyDetailsComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.ProviderTypes = [];
        this.companyDetails = {
            providerData: {
                id: null,
                insured: '',
                hasWorkersComp: '',
                type: {
                    id: null,
                    name: ''
                },
                serviceAreas: []
            },
            safetyTrained: false,
            selectedTechnologyTypes: [],
            selectedManufacturers: []
        };
        this.isTechnician = false;
        this.isProvider = true;
    }
    CompanyDetailsComponent.prototype.getProvider = function (user) {
        var _this = this;
        if (user.roles && user.roles.filter(function (r) { return r.role === 'TECHNICIAN'; }).length > 0) {
            this.isTechnician = true;
            if (user.roles.length === 1) {
                this.isProvider = false;
            }
        }
        this.aux.getProviderByOwnerEmail({
            owneremail: user.email
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err) {
                _this.session.set('provider', resp);
            }
        });
        this.getProviderTypes();
    };
    CompanyDetailsComponent.prototype.getProviderTypes = function () {
        var _this = this;
        this.aux.getProviderTypes().then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err && resp._embedded && resp._embedded.providerTypes) {
                _this.ProviderTypes = resp._embedded.providerTypes;
            }
        });
    };
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.session.get('user');
        if (user) {
            this.getProvider(user);
        }
        else {
            this.aux.authenticate().then(function (_a) {
                var err = _a.err, resp = _a.resp;
                _this.getProvider(resp);
            });
        }
        if (this.session.get('obpCompanyDetails')) {
            this.companyDetails = this.session.get('obpCompanyDetails');
        }
        if (this.session.get('selectedServiceAreas')) {
            this.companyDetails.providerData.serviceAreas = this.session.get('selectedServiceAreas');
            this.session.set('selectedServiceAreas', null);
        }
        if (this.session.get('selectedManufacturers')) {
            this.companyDetails.selectedManufacturers = this.session.get('selectedManufacturers');
            this.session.set('selectedManufacturers', null);
        }
        if (this.session.get('selectedTechnologyTypes')) {
            this.companyDetails.selectedTechnologyTypes = this.session.get('selectedTechnologyTypes');
            this.session.set('selectedTechnologyTypes', null);
        }
        this.session.set('obpCompanyDetails', null);
        this.session.set('back_url', null);
    };
    CompanyDetailsComponent.prototype.updateProvider = function () {
        var _this = this;
        var provider = this.session.get('provider');
        var user = this.session.get('user');
        if (user && provider) {
            this.companyDetails.providerData.id = provider.id;
            var promises = [];
            if (this.isProvider) {
                promises.push(this.aux.updateProvider(this.companyDetails.providerData));
            }
            if (!this.isProvider && this.isTechnician) {
                promises.push(this.aux.updateUser({
                    id: user.id,
                    safetyTrained: this.companyDetails.safetyTrained
                }));
            }
            if (this.companyDetails.selectedManufacturers.length > 0) {
                promises.push(this.aux.updateUserManufacturers({
                    id: user.id,
                    manufacturers: this.companyDetails.selectedManufacturers
                }));
            }
            if (this.companyDetails.selectedTechnologyTypes.length > 0) {
                promises.push(this.aux.updateUserTechnologyTypes({
                    id: user.id,
                    technologyTypes: this.companyDetails.selectedTechnologyTypes
                }));
            }
            Promise.all(promises).then(function () {
                _this.app.navigateByUrl('/dashboard');
            });
        }
        else if (user && !this.isProvider && this.isTechnician) {
            var promises = [];
            promises.push(this.aux.updateUser({
                id: user.id,
                safetyTrained: this.companyDetails.safetyTrained
            }));
            if (this.companyDetails.selectedManufacturers.length > 0) {
                promises.push(this.aux.updateUserManufacturers({
                    id: user.id,
                    manufacturers: this.companyDetails.selectedManufacturers
                }));
            }
            if (this.companyDetails.selectedTechnologyTypes.length > 0) {
                promises.push(this.aux.updateUserTechnologyTypes({
                    id: user.id,
                    technologyTypes: this.companyDetails.selectedTechnologyTypes
                }));
            }
            Promise.all(promises).then(function () {
                _this.app.navigateByUrl('/dashboard');
            });
        }
    };
    CompanyDetailsComponent.prototype.changeManufacturer = function () {
        this.session.set('back_url', '/company-details');
        this.session.set('obpCompanyDetails', this.companyDetails);
        this.app.navigateByUrl('/manufacturer-list');
    };
    CompanyDetailsComponent.prototype.changeServiceAreas = function () {
        this.session.set('obpCompanyDetails', this.companyDetails);
        this.session.set('selectedServiceAreas', this.companyDetails.providerData.serviceAreas);
        this.app.navigateByUrl('/company-details/service-areas');
    };
    CompanyDetailsComponent.prototype.changeTechnologyTypes = function () {
        this.session.set('back_url', '/company-details');
        this.session.set('obpCompanyDetails', this.companyDetails);
        this.app.navigateByUrl('/technology-list');
    };
    return CompanyDetailsComponent;
}());
CompanyDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-company-details',
        template: __webpack_require__("../../../../../src/app/components/company-details/company-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/company-details/company-details.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CompanyDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=company-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-account-authority/create-account-authority.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\">\r\n    <div class=\"container-fluid\" *ngIf=\"role === 'CUSTOMER' || !role\">\r\n        <div class=\"page-head-section\">\r\n            <button class=\"button is-text btn-back\" (click)=\"app.navigateByUrl('/create-account-type', 'slideright')\">BACK</button>\r\n        </div>\r\n        <div class=\"hero-title text-center\">\r\n            Would you like to create a new team or join a team?\r\n        </div>\r\n        <div class=\"gutter\">\r\n            <div class=\"mt-2\">\r\n                <div class=\"btn text-center p-1 font-weight-bold glory\" (click)=\"setRoleTypeAndNavigate('CUSTOMER_PURCHASER', '/create-account-password', 'slideleft')\">Create a team </div>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n                <div class=\"btn text-center p-1 font-weight-bold glory\" (click)=\"setRoleTypeAndNavigate('CUSTOMER', '/create-account-name', 'slideleft')\"> Join a team </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container-fluid\" *ngIf=\"role && role === 'PROVIDER'\">\r\n        <div class=\"page-head-section\">\r\n            <button class=\"button is-text btn-back\" (click)=\"app.navigateByUrl('/create-account-type', 'slideright')\">BACK</button>\r\n        </div>\r\n        <div class=\"hero-title text-center\">\r\n            Do you schedule service calls?\r\n        </div>\r\n        <div class=\"gutter\">\r\n            <div class=\"mt-2\">\r\n                <div class=\"btn text-center p-1 font-weight-bold glory\" (click)=\"setRoleTypeAndNavigate('PROVIDER', '/create-account-password', 'slideleft')\"> Yes </div>\r\n            </div>\r\n            <div class=\"mt-1\">\r\n                <div class=\"btn text-center p-1 font-weight-bold glory\" (click)=\"setRoleTypeAndNavigate('TECHNICIAN', '/create-account-name', 'slideleft')\"> No</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-account-authority/create-account-authority.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero-title {\n  font-size: 5vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-account-authority/create-account-authority.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountAuthorityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAccountAuthorityComponent = (function () {
    function CreateAccountAuthorityComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
    }
    CreateAccountAuthorityComponent.prototype.ngOnInit = function () {
        var role = this.session.get('role');
        if (role) {
            this.role = role;
        }
    };
    CreateAccountAuthorityComponent.prototype.setRoleTypeAndNavigate = function (role, url, routeAnimation) {
        this.session.set('role', role);
        this.app.navigateByUrl(url, routeAnimation);
    };
    return CreateAccountAuthorityComponent;
}());
CreateAccountAuthorityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-account-authority',
        template: __webpack_require__("../../../../../src/app/components/create-account-authority/create-account-authority.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-account-authority/create-account-authority.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CreateAccountAuthorityComponent);

var _a, _b, _c;
//# sourceMappingURL=create-account-authority.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-account-code/create-account-code.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg\">\r\n    <div class=\"container-fluid  page-head-section\">\r\n        <div class=\"row\">\r\n            <div class=\"col-10\">\r\n                <button class=\"button is-text   btn btn-link btn-back\" (click)=\"app.navigateByUrl('/create-account-password', 'slideright')\">BACK</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"hero-title\">\r\n            <div>\r\n                Please enter the verification code that has been sent to your email.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"mt-1 tblContainer\">\r\n        <form #codeVerifyForm=\"ngForm\" (submit)=\"verify()\">\r\n            <table class=\"tbl\">\r\n                <tr>\r\n                    <td>\r\n                        Code\r\n                    </td>\r\n                    <td>\r\n                        <input required placeholder=\"enter verification code\" class=\"col-12 form-control no-b-radius\" type=\"text\" [(ngModel)]=\"verificationCode\" #authcode=\"ngModel\" name=\"authcode\" id=\"authcode\" />\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div class=\" mt-2\">\r\n                <div class=\"flex-row text-center space-around\">\r\n                    <span>Code not working?</span>\r\n                </div>\r\n                <div class=\"flex-row  text-center space-around\">\r\n                    <button type=\"button\" class=\"button is-text btn btn-link btn-send-code\" (click)=\"resendVerificationCode()\">Send a new code</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex-row  text-center space-around mt-2\">\r\n                <button [disabled]=\"codeVerifyForm.invalid\" type=\"submit\" class=\"button is-success btn prime col-8 offset-2\" > VERIFY </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-account-code/create-account-code.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-send-code {\n  color: black;\n  text-decoration: underline;\n}\n.no-b-radius {\n  border-radius: 0;\n}\n.hero-title {\n  font-size: 3.8vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-account-code/create-account-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAccountCodeComponent = (function () {
    function CreateAccountCodeComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
    }
    CreateAccountCodeComponent.prototype.ngOnInit = function () {
        this.verificationCode = '';
    };
    CreateAccountCodeComponent.prototype.verify = function () {
        var _this = this;
        var user = this.session.get('user');
        if (user) {
            this.aux.verifyAuthCode({
                email: user.email,
                authToken: this.verificationCode
            }).then(function (_a) {
                var err = _a.err, resp = _a.resp;
                if (!err) {
                    _this.session.set('user', resp);
                    var role = _this.session.get('role');
                    if (!role && user.roles && user.roles[0]) {
                        role = user.roles[0].role;
                    }
                    if (role === 'CUSTOMER') {
                        _this.aux.createCustomer({
                            name: user.firstName + ' ' + user.lastName
                        }).then(function (_a) {
                            var err1 = _a.err1, resp1 = _a.resp1;
                            _this.app.navigateByUrl('/address-list');
                        });
                    }
                    else if (role === 'CUSTOMER_PURCHASER') {
                        _this.app.navigateByUrl('/create-account-teamname');
                    }
                    else if (role === 'PROVIDER') {
                        _this.app.navigateByUrl('/create-account-nameaddress');
                    }
                    else if (role === 'TECHNICIAN') {
                        _this.aux.addProvider({
                            name: (user.firstName || '') + ' ' + (user.lastName || ''),
                            address: []
                        }).then(function (_a) {
                            var pErr = _a.pErr, pResp = _a.pResp;
                            if (!pErr) {
                                _this.app.navigateByUrl('/company-details');
                            }
                        });
                    }
                }
            });
        }
    };
    CreateAccountCodeComponent.prototype.resendVerificationCode = function () {
        var _this = this;
        var user = this.session.get('user');
        if (user) {
            this.aux.resendVerifyCode({
                id: user.id
            });
        }
        else {
            this.aux.authenticate().then(function (_a) {
                var err = _a.err, resp = _a.resp;
                _this.aux.resendVerifyCode({
                    id: resp.id
                });
            });
        }
    };
    return CreateAccountCodeComponent;
}());
CreateAccountCodeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-account-code',
        template: __webpack_require__("../../../../../src/app/components/create-account-code/create-account-code.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-account-code/create-account-code.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CreateAccountCodeComponent);

var _a, _b, _c;
//# sourceMappingURL=create-account-code.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-account-createteam/create-account-createteam.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg\">\r\n    <div class=\"full-width page-head-section\">\r\n        <div class=\"flex-row pt-1\">\r\n            <button class=\"button is-text btn btn-link btn-back\" (click)=\"app.navigateByUrl('/create-account-code', 'slideright')\">BACK</button>\r\n        </div>\r\n        <div class=\"hero-title\">\r\n            <div>\r\n                Help us connect you with the right technichians when you need service\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"tblContainer\">\r\n        <form #teamForm=\"ngForm\" (submit)=\"createTeam()\">\r\n            <table class=\"tbl\">\r\n                <tr>\r\n                    <td>\r\n                        First Name\r\n                    </td>\r\n                    <td>\r\n                        <input placeholder=\"First Name\" #firstName=\"ngModel\" required type=\"text\" [(ngModel)]=\"teamDetails.firstName\" id=\"firstname\" name=\"firstName\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        Last Name\r\n                    </td>\r\n                    <td>\r\n                        <input placeholder=\"Last Name\" #lastName=\"ngModel\" required type=\"text\" [(ngModel)]=\"teamDetails.lastName\" id=\"lastName\" name=\"lastName\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        Team Name\r\n                    </td>\r\n                    <td>\r\n                        <input placeholder=\"Team Name\" #teamName=\"ngModel\" required type=\"text\" [(ngModel)]=\"teamDetails.teamName\" id=\"teamName\" name=\"teamName\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        Phone Number\r\n                    </td>\r\n                    <td>\r\n                        <input placeholder=\"Phone Number\" #phone=\"ngModel\" required type=\"text\" [(ngModel)]=\"teamDetails.phone\" id=\"phone\" name=\"phone\" />\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"flex-row mt-1 space-around\">\r\n                <button type=\"submit\" [disabled]=\"teamForm.invalid\" class=\"button is-success btn prime col-8 offset-2\"> ADD AN ADDRESS </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-account-createteam/create-account-createteam.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  border-left: none;\n  border-right: none;\n  border-radius: 0;\n}\n.hero-title {\n  font-size: 3.8vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-account-createteam/create-account-createteam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountCreateteamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAccountCreateteamComponent = (function () {
    function CreateAccountCreateteamComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.teamDetails = {};
    }
    CreateAccountCreateteamComponent.prototype.ngOnInit = function () {
        var user = this.session.get('user');
        if (!user) {
            this.aux.authenticate();
        }
    };
    CreateAccountCreateteamComponent.prototype.createCustomer = function (user) {
        var _this = this;
        this.aux.createCustomer({
            isTeamCreation: true,
            id: user.id,
            firstName: this.teamDetails.firstName,
            lastName: this.teamDetails.lastName,
            phone: this.teamDetails.phone,
            teamName: this.teamDetails.teamName
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err) {
                _this.app.navigateByUrl('/address-list');
            }
        });
    };
    CreateAccountCreateteamComponent.prototype.createTeam = function () {
        var _this = this;
        var user = this.session.get('user');
        if (user) {
            this.createCustomer(user);
        }
        else {
            this.aux.authenticate().then(function (_a) {
                var err = _a.err, resp = _a.resp;
                if (!err) {
                    _this.createCustomer(resp);
                }
            });
        }
    };
    return CreateAccountCreateteamComponent;
}());
CreateAccountCreateteamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-account-createteam',
        template: __webpack_require__("../../../../../src/app/components/create-account-createteam/create-account-createteam.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-account-createteam/create-account-createteam.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CreateAccountCreateteamComponent);

var _a, _b, _c;
//# sourceMappingURL=create-account-createteam.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-account-jointeam/create-account-jointeam.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg\">\r\n    <div class=\"full-width page-head-section\">\r\n        <div class=\"flex-row\">\r\n            <button class=\"button is-text btn btn-link btn-back\" (click)=\"app.navigateByUrl('/create-account-password', 'slideright')\">BACK</button>\r\n        </div>\r\n        <div class=\"hero-title\">\r\n            <div>\r\n                To join a team, please enter the email address of your team lead and they will add you to the team.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"tblContainer\">\r\n        <form #teamLeadForm=\"ngForm\" (submit)=\"joinTeam()\">\r\n            <table class=\"tbl\">\r\n                <tr>\r\n                    <td>Email</td>\r\n                    <td>\r\n                        <input placeholder=\"Team lead email\" type=\"text\" [(ngModel)]=\"formData.teamleadmail\" #teamleadmail=\"ngModel\" name=\"teamleadmail\" id=\"teamleadmail\" />\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"flex-row mt-2 space-around\">\r\n                <button type=\"submit\" class=\"button is-success btn prime col-8 offset-2\" [disabled]=\"teamLeadForm.invalid || loadSpinner\"><i *ngIf=\"loadSpinner\" class=\"fa fa-spinner fa-spin mr-1\"></i> Join Team </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-account-jointeam/create-account-jointeam.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero-title {\n  font-size: 3.3vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-account-jointeam/create-account-jointeam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountJointeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAccountJointeamComponent = (function () {
    function CreateAccountJointeamComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.formData = {};
        this.loadSpinner = false;
    }
    CreateAccountJointeamComponent.prototype.ngOnInit = function () {
        this.formData.teamleadmail = 'muralikrishna8811+pr1510331419661@gmail.com';
    };
    CreateAccountJointeamComponent.prototype.joinTeam = function () {
        var _this = this;
        var user, customer, role, provider;
        this.loadSpinner = true;
        this.aux.authenticate().then(function (_a) {
            var err = _a.err, resp = _a.resp;
            _this.loadSpinner = false;
            if (!err) {
                _this.session.set('user', resp);
                user = resp;
            }
            role = _this.session.get('role');
            if (!role && user.roles && user.roles.length > 0) {
                role = user.roles[0].role;
            }
            if (role === 'CUSTOMER') {
                return _this.aux.getCustomersByOwnerEmail({
                    owneremail: _this.formData.teamleadmail
                });
            }
            else if (role === 'TECHNICIAN') {
                return _this.aux.getProviderByOwnerEmail({
                    owneremail: _this.formData.teamleadmail
                });
            }
            else {
                return new Promise(function (r, j) {
                    r({
                        err: {
                            code: 400,
                            msg: 'user not found'
                        }
                    });
                });
            }
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            _this.loadSpinner = false;
            if (!err) {
                if (role === 'CUSTOMER') {
                    customer = resp;
                    return _this.aux.setUserToCustomer({
                        userid: user.id,
                        customerid: customer.id
                    });
                }
                else if (role === 'TECHNICIAN') {
                    provider = resp;
                    return _this.aux.setUserToProvider({
                        userid: user.id,
                        providerid: provider.id
                    });
                }
            }
            else {
                return new Promise(function (r, j) {
                    r({ err: 'user and customer not found' });
                });
            }
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            _this.loadSpinner = false;
            if (!err) {
                _this.app.navigateByUrl('/create-account-code');
            }
        });
    };
    return CreateAccountJointeamComponent;
}());
CreateAccountJointeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-account-jointeam',
        template: __webpack_require__("../../../../../src/app/components/create-account-jointeam/create-account-jointeam.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-account-jointeam/create-account-jointeam.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CreateAccountJointeamComponent);

var _a, _b, _c;
//# sourceMappingURL=create-account-jointeam.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-account-name/create-account-name.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg\">\r\n    <div class=\"full-width page-head-section\">\r\n        <div class=\"flex-row \">\r\n            <button class=\"button is-text btn btn-link btn-back\" (click)=\"app.navigateByUrl('/create-account-code', 'slideright')\">BACK</button>\r\n        </div>\r\n        <div class=\"hero-title\">\r\n            <div>\r\n                Please tell us a little about yourself, this will help us connect you with your team lead when we create your account.\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"tblContainer\">\r\n        <form #userDetailsForm=\"ngForm\" (submit)=\"saveToSession()\">\r\n            <table class=\"tbl\">\r\n                <tr>\r\n                    <td>\r\n                        First Name\r\n                    </td>\r\n                    <td>\r\n                        <input placeholder=\"First Name\" #firstName=\"ngModel\" required type=\"text\" [(ngModel)]=\"userDetails.firstName\" id=\"firstname\" name=\"firstName\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        Last Name\r\n                    </td>\r\n                    <td>\r\n                        <input placeholder=\"Last Name\" #lastName=\"ngModel\" required type=\"text\" [(ngModel)]=\"userDetails.lastName\" id=\"lastName\" name=\"lastName\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        Phone Number\r\n                    </td>\r\n                    <td>\r\n                        <input placeholder=\"Phone Number\" #phone=\"ngModel\" required type=\"text\" [(ngModel)]=\"userDetails.phone\" id=\"phone\" name=\"phone\" />\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"full-width\">\r\n                <div class=\"flex-row mt-1 space-around\">\r\n                    <button [disabled]=\"userDetailsForm.invalid || loadSpinner\" class=\"button is-success btn prime col-8 offset-2\"><i *ngIf=\"loadSpinner\" class=\"fa fa-spinner fa-spin mr-1\"></i> Add My Location </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-account-name/create-account-name.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero-title {\n  font-size: 2.95vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-account-name/create-account-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateAccountNameComponent = (function () {
    function CreateAccountNameComponent(app, session) {
        this.app = app;
        this.session = session;
        this.userDetails = {};
        this.loadSpinner = false;
    }
    CreateAccountNameComponent.prototype.ngOnInit = function () {
    };
    CreateAccountNameComponent.prototype.saveToSession = function () {
        this.loadSpinner = true;
        this.session.set('userDetails', this.userDetails);
        this.app.navigateByUrl('/create-account-password');
        this.loadSpinner = false;
    };
    return CreateAccountNameComponent;
}());
CreateAccountNameComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-account-name',
        template: __webpack_require__("../../../../../src/app/components/create-account-name/create-account-name.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-account-name/create-account-name.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], CreateAccountNameComponent);

var _a, _b;
//# sourceMappingURL=create-account-name.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-account-nameaddress/create-account-nameaddress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"flex-row page-head-section\">\r\n            <button class=\"button is-text btn btn-link btn-back\" (click)=\"app.navigateByUrl('/company-details', 'slideright')\">BACK</button>\r\n        </div>\r\n        <form #teamForm=\"ngForm\" (submit)=\"createProviderTeam()\">\r\n            <div style=\"padding-left:1rem;padding-right:1rem;\">\r\n                <div class=\"flex-row mt-1 space-between\">\r\n                    <label>I schedule myself</label>\r\n                    <input type=\"checkbox\" name=\"istechnician\" id=\"istechnician\" [(ngModel)]=\"isTechnician\" #istechnician />\r\n                </div>\r\n                <div class=\"field-hint\">\r\n                    Turn this on if you are a technician and you perform your own scheduling\r\n                </div>\r\n                <div class=\"flex-row  mt-1\">\r\n                    <input placeholder=\"First Name\" class=\" input\" #firstName=\"ngModel\" required type=\"text\" [(ngModel)]=\"teamDetails.firstName\" id=\"firstname\" name=\"firstName\" />\r\n                </div>\r\n                <div class=\"flex-row  mt-1\">\r\n                    <input placeholder=\"Last Name\" class=\" input\" #lastName=\"ngModel\" required type=\"text\" [(ngModel)]=\"teamDetails.lastName\" id=\"lastName\" name=\"lastName\" />\r\n                </div>\r\n                <div class=\"flex-row  mt-1\">\r\n                    <input placeholder=\"Team Name\" class=\"input\" #teamName=\"ngModel\" required type=\"text\" [(ngModel)]=\"teamDetails.teamName\" id=\"teamName\" name=\"teamName\" />\r\n                </div>\r\n                <div class=\"flex-row  mt-1\">\r\n                    <input placeholder=\"Phone Number\" class=\"input\" #phone=\"ngModel\" required type=\"text\" [(ngModel)]=\"teamDetails.phone\" id=\"phone\" name=\"phone\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"flex-row flex-dir-col mt-1\" style=\"padding-left:1rem;padding-right:1rem;\">\r\n                <div>\r\n                    Address\r\n                </div>\r\n                <div class=\"upperCase mt-1\">\r\n                    <div class=\"flex tabs\">\r\n                        <input style=\"display: none;\" type=\"radio\" #county=\"ngModel\" (change)=\"updateCountry('USA')\" [(ngModel)]=\"teamDetails.address.country\" id=\"countyusa\" name=\"country\" value=\"USA\" />\r\n                        <input style=\"display: none;\" type=\"radio\" #county=\"ngModel\" (change)=\"updateCountry('CANADA')\" [(ngModel)]=\"teamDetails.address.country\" id=\"countycanada\" name=\"country\" value=\"CANADA\" />\r\n                        <label for=\"countyusa\" class=\"button is-small is-info is-outlined\" [ngClass]=\"{ 'active' :teamDetails.address.country === 'USA' }\">USA</label>\r\n                        <label for=\"countycanada\" class=\"button is-small is-info is-outlined\" [ngClass]=\"{ 'active' :teamDetails.address.country === 'CANADA' }\">CANADA</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"full-width mt-1\">\r\n                    <div class=\"flex-row mt-1\">\r\n                        <input required #companyName=\"ngModel\" [(ngModel)]=\"teamDetails.address.companyName\" id=\"companyName\" name=\"companyName\" type=\"text\" placeholder=\"company Name\" class=\"form-control\" />\r\n                    </div>\r\n                    <div class=\"flex-row mt-1\">\r\n                        <input required #street1=\"ngModel\" [(ngModel)]=\"teamDetails.address.street1\" id=\"street1\" name=\"street1\" type=\"text\" placeholder=\"Address 1\" class=\"form-control col-12\" />\r\n                    </div>\r\n                    <div class=\"flex-row mt-1\">\r\n                        <input #street2=\"ngModel\" [(ngModel)]=\"teamDetails.address.street2\" id=\"street2\" name=\"street2\" type=\"text\" placeholder=\"Address 2\" class=\"form-control col-12\" />\r\n                    </div>\r\n                    <div class=\"flex-row mt-1\">\r\n                        <input required #city=\"ngModel\" [(ngModel)]=\"teamDetails.address.city\" id=\"city\" name=\"city\" type=\"text\" placeholder=\"City\" class=\"form-control col-12\" />\r\n                    </div>\r\n                    <div class=\"flex-row mt-1 space-between\">\r\n                        <div class=\"col-4 pl-0\" style=\"flex-basis: 40%;\">\r\n                            <input class=\"form-control\" placeholder=\"State\" required #region=\"ngModel\" (click)=\"showStates = true;\" [(ngModel)]=\"teamDetails.address.region\" id=\"region\" name=\"region\" type=\"text\" />\r\n                        </div>\r\n                        <div class=\"col-7 offset-1 pr-0\" style=\"flex-basis: 50%;\">\r\n                            <input class=\"form-control\" placeholder=\"County\" required #district=\"ngModel\" (click)=\"showCounty = true;\" [(ngModel)]=\"teamDetails.address.district\" id=\"district\" name=\"district\" type=\"text\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"flex-row mt-1\">\r\n                        <input required #postcode=\"ngModel\" [(ngModel)]=\"teamDetails.address.postcode\" id=\"postcode\" name=\"postcode\" type=\"text\" placeholder=\"Zipcode\" class=\"form-control col-12\" />\r\n                    </div>\r\n                    <div class=\"flex-row mt-1\">\r\n                        <!-- <label for=\"location\">Location Notes</label> -->\r\n                        <textarea class=\"textarea\" #location=\"ngModel\" placeholder=\"Location Notes\" [(ngModel)]=\"teamDetails.address.location\" name=\"location\" id=\"location\" style=\"width:100%; height:70px; padding: 7px;resize: none;\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"flex-row  mt-2 space-around pb-3\">\r\n                <button type=\"submit\" [disabled]=\"teamForm.invalid\" class=\"button is-success btn prime col-8 offset-2\"> Company Details </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"modal-pro modal-states\" *ngIf=\"showStates\">\r\n        <div class=\"modal-overlay\" (click)=\"showStates = false;\"></div>\r\n        <div class=\"modal-pro-content offset-1 col-10 mt-5\">\r\n            <div class=\"state-list-item\" *ngFor=\"let state of StatesByCountry\" (click)=\"setState(state);showStates = false;\"> {{ state.description}}</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-pro modal-county\" *ngIf=\"showCounty\">\r\n        <div class=\"modal-overlay\" (click)=\"showCounty = false;\"></div>\r\n        <div class=\"modal-pro-content offset-1 col-10 mt-5\">\r\n            <div class=\"county-list-item\" *ngFor=\"let county of Districts\" (click)=\"setCounty(county);showCounty = false;\"> {{ county.description}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-account-nameaddress/create-account-nameaddress.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contry-field {\n  color: #aaa;\n}\n.contry-field .country-item.checked {\n  border-bottom: 1px solid #00A153;\n  color: #00A153;\n  box-shadow: 0px 3px 4px -3px #00A153;\n}\n.field-hint {\n  color: #D9D9D9;\n  font-size: 14px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-account-nameaddress/create-account-nameaddress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountNameaddressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAccountNameaddressComponent = (function () {
    function CreateAccountNameaddressComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.teamDetails = {
            firstName: '',
            lastName: '',
            phone: '',
            teamName: '',
            address: {
                region: '',
                country: 'USA',
                street1: '',
                street2: '',
                postcode: '',
                city: '',
                district: ''
            }
        };
        this.isTechnician = false;
        this.showStates = false;
        this.showCounty = false;
        this.StatesByCountry = [];
        this.States = [];
        this.Districts = [];
    }
    CreateAccountNameaddressComponent.prototype.getStates = function () {
        var _this = this;
        this.aux.getStates().then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err && resp._embedded && resp._embedded.regions) {
                _this.States = resp._embedded.regions;
                var states = resp._embedded.regions.filter(function (s) {
                    return s.country === _this.teamDetails.address.country;
                });
                _this.StatesByCountry = states;
            }
        });
    };
    CreateAccountNameaddressComponent.prototype.setState = function (state) {
        var _this = this;
        this.teamDetails.address.region = state.abbreviation;
        this.aux.getDistricts({
            country: this.teamDetails.address.country,
            region: this.teamDetails.address.region
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err && resp._embedded && resp._embedded.serviceAreas) {
                _this.Districts = resp._embedded.serviceAreas;
            }
        });
    };
    CreateAccountNameaddressComponent.prototype.setCounty = function (county) {
        this.teamDetails.address.district = county.description;
    };
    CreateAccountNameaddressComponent.prototype.getProvider = function (user) {
        this.aux.getCustomersByOwnerEmail({
            owneremail: user.email
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
        });
    };
    CreateAccountNameaddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isTechnician = false;
        var user = this.session.get('user');
        if (user) {
            this.getStates();
        }
        else {
            this.aux.authenticate().then(function (_a) {
                var err = _a.err, resp = _a.resp;
                var user = resp;
                _this.getStates();
            });
        }
    };
    CreateAccountNameaddressComponent.prototype.updateCountry = function (selectedCountry) {
        var states = this.States.filter(function (s) {
            return s.country === selectedCountry;
        });
        this.StatesByCountry = states;
        this.teamDetails.address.region = '';
        this.teamDetails.address.district = '';
    };
    CreateAccountNameaddressComponent.prototype.updateUser = function (user) {
        var _this = this;
        return new Promise(function (r, j) {
            if (_this.isTechnician) {
                var roles = user.roles;
                if (roles.filter(function (r) { return r.role === 'TECHNICIAN'; }).length === 0) {
                    user.roles.push({
                        role: 'TECHNICIAN'
                    });
                }
                _this.aux.updateUser({
                    id: user.id,
                    firstName: _this.teamDetails.firstName,
                    lastName: _this.teamDetails.lastName,
                    phone: _this.teamDetails.phone,
                    roles: user.roles
                }).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    r({ err: err, resp: resp });
                });
            }
            else {
                _this.aux.updateUser({
                    id: user.id,
                    firstName: _this.teamDetails.firstName,
                    lastName: _this.teamDetails.lastName,
                    phone: _this.teamDetails.phone
                }).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    r({ err: err, resp: resp });
                });
            }
        });
    };
    CreateAccountNameaddressComponent.prototype.createProviderTeam = function () {
        var _this = this;
        var user = this.session.get('user');
        if (user) {
            this.updateUser(user).then(function (_a) {
                var err = _a.err, resp = _a.resp;
                if (!err) {
                    _this.session.set('user', resp);
                }
                _this.aux.addProvider({
                    name: _this.teamDetails.teamName,
                    address: _this.teamDetails.address
                }).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    if (!err) {
                        _this.session.set('provider', resp);
                        _this.app.navigateByUrl('/company-details');
                    }
                });
            });
        }
    };
    return CreateAccountNameaddressComponent;
}());
CreateAccountNameaddressComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-account-nameaddress',
        template: __webpack_require__("../../../../../src/app/components/create-account-nameaddress/create-account-nameaddress.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-account-nameaddress/create-account-nameaddress.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CreateAccountNameaddressComponent);

var _a, _b, _c;
//# sourceMappingURL=create-account-nameaddress.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-account-password/create-account-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg\">\r\n  <div class=\"container-fluid  page-head-section\">\r\n    <div class=\"row\">\r\n      <button class=\"button is-text btn-back\" (click)=\"app.navigateByUrl('/login', 'slideright')\">BACK</button>\r\n    </div>\r\n    <div class=\"hero-title text-center\">\r\n        To get started, please create a new account using your email address.\r\n    </div>\r\n  </div>\r\n  <div class=\"mt-1\">\r\n    <form #passwordForm=\"ngForm\" (ngSubmit)=\"createAccount(passwordForm)\" *ngIf=\"!app.isDesktop\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" pattern=\"^[a-zA-Z]+[a-zA-Z0-9.+]*@[a-zA-Z]+\\.\\w*$\" type=\"email\" id=\"email\" required name=\"email\" [(ngModel)]=\"user.email\"\r\n          #email=\"ngModel\" />\r\n        <label class=\"control-label\" for=\"email\">Email</label>\r\n        <i class=\"bar\"></i>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" type=\"password\" id=\"password\" required name=\"password\" [(ngModel)]=\"user.password\"\r\n          #password=\"ngModel\" />\r\n        <label class=\"control-label\" for=\"password\">Password</label>\r\n        <i class=\"bar\"></i>\r\n      </div>\r\n      <div class=\"field-hint mt-1\">Passwords must be a minimum of 6 characters</div>\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" type=\"password\" id=\"confirmpassword\" required name=\"confirmpassword\" [(ngModel)]=\"user.confirmpassword\"\r\n          #confirmpassword=\"ngModel\" />\r\n        <label class=\"control-label\" for=\"confirmpassword\">Re-enter Password</label>\r\n        <i class=\"bar\"></i>\r\n      </div>\r\n      <div class=\"checkbox mt-1\">\r\n        <label class=\"flex flex-center\">\r\n          <input type=\"checkbox\" id=\"iagree\" required name=\"iagree\" [(ngModel)]=\"user.iagree\" #iagree=\"ngModel\" />\r\n          I agree to the terms & conditions\r\n        </label>\r\n      </div>\r\n      <div class=\"mt-2 flex space-around\">\r\n        <button [disabled]=\"passwordForm.invalid || loadSpinner\" type=\"sumbit\" class=\"button is-success\">\r\n          <i *ngIf=\"loadSpinner\" class=\"fa fa-spinner fa-spin mr-1\"></i> CREATE MY ACCOUNT </button>\r\n      </div>\r\n    </form>\r\n    <div class=\"tblContainer\" *ngIf=\"app.isDesktop\">\r\n            <form #passwordForm=\"ngForm\" (ngSubmit)=\"createAccount(passwordForm)\">\r\n                <table class=\"tbl\">\r\n                    <tr>\r\n                        <td>\r\n                            Email\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"text\" pattern=\"^[a-zA-Z]+[a-zA-Z0-9.+]*@[a-zA-Z]+\\.\\w*$\" placeholder=\"Enter email\" type=\"email\" id=\"email\" required name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" />                            \r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            Password\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"text\" placeholder=\"Enter password\" type=\"password\" id=\"password\" required name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" />                \r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"2\">\r\n                            <span class=\"field-hint\">Passwords must be a minimum of 6 characters</span>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            Re-enter Password\r\n                        </td>\r\n                        <td>\r\n                            <input type=\"text\" placeholder=\"Re-enter password\" type=\"password\" id=\"confirmpassword\" required name=\"confirmpassword\" [(ngModel)]=\"user.confirmpassword\" #confirmpassword=\"ngModel\" />\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"2\">\r\n                            <label for=\"iagree\" class=\"pl-0 flex flex-center\">\r\n                                <input class=\"placeholder\" class=\"mr-1 i-agree\" type=\"checkbox\" id=\"iagree\" required name=\"iagree\" [(ngModel)]=\"user.iagree\" #iagree=\"ngModel\" />\r\n                                I agree to the terms & conditions\r\n                            </label>\r\n                        </td>\r\n                    </tr>\r\n                </table>\r\n                <div class=\"mt-2 flex space-around\">\r\n                    <button [disabled]=\"passwordForm.invalid || loadSpinner\" type=\"sumbit\" class=\"button btn prime col-8 offset-2\"><i *ngIf=\"loadSpinner\" class=\"fa fa-spinner fa-spin mr-1\"></i> CREATE MY ACCOUNT </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/create-account-password/create-account-password.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group .form-control {\n  border-radius: 0;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  background-color: transparent;\n}\n.form-group .form-control.last-control {\n  border-top: 1px solid #ced4da;\n  border-bottom: none;\n}\n.form-group .field-hint {\n  color: #D9D9D9;\n  font-size: 14px;\n}\n.hero-title {\n  font-size: 3.7vh;\n}\n.tblContainer .tbl td:first-child {\n  width: 43% !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-account-password/create-account-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAccountPasswordComponent = (function () {
    function CreateAccountPasswordComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.user = {};
        this.formSubmitted = false;
        this.loadSpinner = false;
    }
    CreateAccountPasswordComponent.prototype.ngOnInit = function () {
        // if (!this.session.get('role') && this.session.get('flow') === 'ONBOARDING') {
        //   this.app.navigateByUrl('/create-account-type');
        // }
        // TODO: Remove below code
        if (this.aux.environment['preLoad']) {
            var extns = this.session.get('role') === 'CUSTOMER' ? 'cs' : 'cp';
            if (this.session.get('role') === 'PROVIDER') {
                extns = 'pr';
            }
            if (this.session.get('role') === 'TECHNICIAN') {
                extns = 'tc';
            }
            this.user.email = 'muralikrishna8811+' + (extns) + (new Date).getTime() + '@gmail.com';
            this.user.password = 'password';
            this.user.confirmpassword = 'password';
        }
    };
    CreateAccountPasswordComponent.prototype.createAccount = function (form) {
        var _this = this;
        this.formSubmitted = true;
        this.loadSpinner = true;
        var newUserData = {
            email: this.user.email,
            password: this.user.password,
            roles: [
                {
                    'role': this.session.get('role')
                }
            ]
        };
        switch (this.session.get('role')) {
            case 'CUSTOMER':
                var userDetails = this.session.get('userDetails');
                if (userDetails) {
                    newUserData.firstName = userDetails.firstName;
                    newUserData.lastName = userDetails.lastName;
                    newUserData.phone = userDetails.phone;
                }
                this.aux.createUser(newUserData).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    _this.formSubmitted = false;
                    _this.loadSpinner = false;
                    if (!err) {
                        _this.aux.login({
                            email: newUserData.email,
                            password: newUserData.password
                        }).then(function (_a) {
                            var errLogin = _a.err, respLogin = _a.resp;
                            _this.session.set('user', respLogin);
                            _this.app.navigateByUrl('/create-account-jointeam');
                        });
                    }
                    else {
                        _this.app.showStatusModal('error', err.message || 'Unable to create account', {
                            title: err.error
                        });
                    }
                });
                break;
            case 'CUSTOMER_PURCHASER':
                this.aux.createUser(newUserData).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    _this.formSubmitted = false;
                    _this.loadSpinner = false;
                    if (!err) {
                        _this.aux.login({
                            email: newUserData.email,
                            password: newUserData.password
                        }).then(function (_a) {
                            var errLogin = _a.err, respLogin = _a.resp;
                            _this.session.set('user', respLogin);
                            _this.app.navigateByUrl('/create-account-code');
                            _this.aux.resendVerifyCode({
                                id: respLogin.id
                            });
                        });
                    }
                    else {
                        _this.app.showStatusModal('error', err.message || 'Unable to create account', {
                            title: err.error
                        });
                    }
                });
                break;
            case 'PROVIDER':
                this.aux.createUser(newUserData).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    _this.formSubmitted = false;
                    _this.loadSpinner = false;
                    if (!err) {
                        _this.aux.login({
                            email: newUserData.email,
                            password: newUserData.password
                        }).then(function (_a) {
                            var errLogin = _a.err, respLogin = _a.resp;
                            _this.session.set('user', respLogin);
                            _this.app.navigateByUrl('/create-account-code');
                            _this.aux.resendVerifyCode({
                                id: respLogin.id
                            });
                        });
                    }
                    else {
                        _this.app.showStatusModal('error', err.message || 'Unable to create account', {
                            title: err.error
                        });
                    }
                });
                break;
            case 'TECHNICIAN':
                var tecnicianDetails = this.session.get('userDetails');
                if (tecnicianDetails) {
                    newUserData.firstName = tecnicianDetails.firstName;
                    newUserData.lastName = tecnicianDetails.lastName;
                    newUserData.phone = tecnicianDetails.phone;
                }
                this.aux.createUser(newUserData).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    _this.formSubmitted = false;
                    _this.loadSpinner = false;
                    if (!err) {
                        _this.aux.login({
                            email: newUserData.email,
                            password: newUserData.password
                        }).then(function (_a) {
                            var errLogin = _a.err, respLogin = _a.resp;
                            _this.session.set('user', respLogin);
                            _this.app.navigateByUrl('/create-account-jointeam');
                        });
                    }
                    else {
                        _this.app.showStatusModal('error', err.message || 'Unable to create account', {
                            title: err.error
                        });
                    }
                });
                break;
            default:
                break;
        }
    };
    return CreateAccountPasswordComponent;
}());
CreateAccountPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-account-password',
        template: __webpack_require__("../../../../../src/app/components/create-account-password/create-account-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-account-password/create-account-password.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], CreateAccountPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=create-account-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-account-type/create-account-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"page-head-section\">\r\n            <button class=\"button is-text btn-back\" (click)=\"app.navigateByUrl('/login', 'slideright')\">BACK</button>\r\n        </div>\r\n        <div class=\"hero-title text-center\">\r\n            Tell us about yourself.\r\n        </div>\r\n        <div class=\"gutter\">\r\n            <div class=\"row mt-2\">\r\n                <div class=\"btn text-center p-1 font-weight-bold glory\" (click)=\"setRoleTypeAndNavigate('CUSTOMER','/create-account-authority', 'slideleft')\"> I need service </div>\r\n            </div>\r\n            <div class=\"row mt-1\">\r\n                <div class=\"btn text-center p-1 font-weight-bold glory\" (click)=\"setRoleTypeAndNavigate('PROVIDER','/create-account-authority', 'slideleft')\"> I provide service </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-account-type/create-account-type.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero-title {\n  font-size: 6vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-account-type/create-account-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAccountTypeComponent = (function () {
    function CreateAccountTypeComponent(app, session, aux) {
        this.app = app;
        this.session = session;
        this.aux = aux;
    }
    CreateAccountTypeComponent.prototype.ngOnInit = function () {
    };
    CreateAccountTypeComponent.prototype.navigateByUrl = function (url, pageTransiation) {
        this.app.navigateByUrl(url, pageTransiation);
    };
    CreateAccountTypeComponent.prototype.setRoleTypeAndNavigate = function (role, url, routeAnimation) {
        this.session.set('role', role);
        this.app.navigateByUrl(url, routeAnimation);
    };
    return CreateAccountTypeComponent;
}());
CreateAccountTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-account-type',
        template: __webpack_require__("../../../../../src/app/components/create-account-type/create-account-type.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-account-type/create-account-type.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _c || Object])
], CreateAccountTypeComponent);

var _a, _b, _c;
//# sourceMappingURL=create-account-type.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
    }
    DashboardComponent.prototype.getUserTechnologyTypes = function () {
    };
    DashboardComponent.prototype.ngOnInit = function () {
        if (this.session.get('user')) {
        }
        else {
            this.aux.authenticate().then(function () {
            });
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-section page-section\">\r\n    <div>\r\n\r\n    </div>\r\n    <div class=\"container-fluid full-height flex-row flex-dir-col space-between\">\r\n        <div>\r\n            <div class=\"flex space-around pt-3\">\r\n                <div style=\"flex: 0 1 51%;\">\r\n                    <img class=\"login-logo\" src=\"assets/img/uplogo.png\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"flex flex-dir-col space-around\">\r\n                <div class=\"mt-1 pl-2 pr-2\">\r\n                    <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\">\r\n                        <div class=\"form-group \">\r\n                            <label>Email</label>\r\n                            <input pattern=\"^[a-zA-Z]+[a-zA-Z0-9.+]*@[a-zA-Z]+\\.\\w*$\"  type=\"email\" class=\"form-control\" id=\"email\" required name=\"email\" [(ngModel)]=\"user.email\" #email=\"ngModel\" />\r\n                        </div>\r\n                        <div class=\"form-group mt-1\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" class=\"form-control\" id=\"password\" required name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" />\r\n                        </div>\r\n                        <div class=\"mt-1 flex space-around\">\r\n                            <button [disabled]=\"loginForm.invalid || formSubmitted || user.password.length < 6\" type=\"sumbit\" class=\"button is-success btn-login\"><i *ngIf=\"formSubmitted\" class=\"fa fa-spinner fa-spin mr-1\"></i> SIGN IN </button>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <div class=\"flex space-around mt-1\">\r\n                    <a class=\"btn btn-link btn-trouble-signin\" (click)=\"app.navigateByUrl('/reset-password', 'slideleft')\">Trouble signing in?</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"flex space-around create-account-section\">\r\n            <div class=\"table-d pos-rel\">\r\n                <div class=\"mask\"></div>\r\n                <div class=\"table-cell\">\r\n                    <div class=\"center-div\">\r\n                        <a class=\"btn btn-link btn-create-account button is-text white\" (click)=\"app.navigateByUrl('/create-account-type', 'slideleft')\">Create an account</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-section {\n  background: linear-gradient(11deg, white -26%, #37C444 54%);\n  background-image: url('/assets/img/andriod_login_background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: bottom;\n}\n.login-section .logo-container .login-logo {\n  max-width: 100%;\n}\n.login-section .is-success {\n  background-color: #00823F;\n  width: 100%;\n  border-radius: 0;\n  font-weight: bold;\n}\n.login-section .form-group label {\n  color: white;\n}\n.login-section .form-group .form-control {\n  background-color: #D9F5D8;\n}\n.login-section .form-control {\n  border-radius: 0;\n}\n.login-section .button.is-text.white {\n  color: white;\n}\n.login-section .button.btn-login {\n  height: 50px;\n}\n.login-section .create-account-section {\n  height: 52px;\n}\n.login-section .mask {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.2;\n  left: 0;\n  top: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(app, aux, session, router) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.router = router;
        this.user = {
            password: ''
        };
        this.formSubmitted = false;
        this.passwordInvalid = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.formSubmitted = true;
        this.aux.login({
            email: this.user.email,
            password: this.user.password
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            _this.formSubmitted = false;
            if (!err) {
                _this.session.set('user', resp);
                if (resp.status === 'PENDING_EMAIL_VERIFICATION' || resp.status === 'PENDING_APPROVAL') {
                    _this.router.navigateByUrl('/create-account-code');
                }
                else if (resp.status === 'PENDING_ACCOUNT_CREATION') {
                    if (resp.roles[0] && resp.roles[0].role === 'PROVIDER') {
                        _this.router.navigateByUrl('/create-account-nameaddress');
                    }
                    else {
                        _this.router.navigateByUrl('/create-account-teamname');
                    }
                }
                else if (resp.status === 'PENDING_JOIN') {
                    _this.router.navigateByUrl('/create-account-jointeam');
                }
                else if (resp.status === 'ACTIVE') {
                    _this.router.navigateByUrl('/dashboard');
                }
                else if (resp.status === 'PENDING_TECH_OPTIONS') {
                    _this.router.navigateByUrl('/dashboard');
                }
            }
            else {
                _this.user.password = '';
                _this.app.showStatusModal('error', 'Email and password not matched with system');
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/machines-new-edit/machines-new-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg machines-list\">\r\n    <form #newMachineForm=\"ngForm\" (submit)=\"saveMachine()\">\r\n        <div class=\"flex flex-center space-between page-head-section\">\r\n            <button type=\"button\" class=\"button is-small bg-transparent no-border white\" (click)=\"app.navigateByUrl('/machines-list', 'slideright')\">BACK</button>\r\n            <h4 class=\"white\">Add Machines</h4>\r\n            <button type=\"submit\" [disabled]=\"newMachineForm.invalid\" class=\"button is-success is-small bg-transparent no-border black\">Save</button>\r\n        </div>\r\n        <div class=\"well upperCase\">\r\n            <h4 class=\"subtitle is-6\">machine details</h4>\r\n        </div>\r\n        <div class=\"tblContainer\">\r\n            <table class=\"tbl\">\r\n                <tr>\r\n                    <td>Manufacturer</td>\r\n                    <td>\r\n                        <input (click)=\"selectManufacturer()\" type=\"text\" placeholder=\"Select Manufacturer\" value=\"{{ newMachine.manufacturer.name }}\" />\r\n                        <input style=\"display:none;\" (click)=\"selectManufacturer()\" required type=\"text\" placeholder=\"select manufacturer\" name=\"manufacturerid\" id=\"manufacturerid\" [(ngModel)]=\"newMachine.manufacturer.id\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Model Number</td>\r\n                    <td>\r\n                        <input required type=\"text\" placeholder=\"enter model number\" name=\"modelNumber\" id=\"modelNumber\" [(ngModel)]=\"newMachine.modelNumber\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Serial Number</td>\r\n                    <td>\r\n                        <input required type=\"text\" placeholder=\"enter serial number\" name=\"serialNumber\" id=\"serialNumber\" [(ngModel)]=\"newMachine.serialNumber\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Technology</td>\r\n                    <td>\r\n                        <input (click)=\"selectTechnologyType()\" type=\"text\" placeholder=\"Select Technology\" value=\"{{ newMachine.technologyType.name }}\" />\r\n                        <input style=\"display:none;\" (click)=\"selectTechnologyType()\" required type=\"text\" placeholder=\"select technology type\" name=\"technologyTypeid\" id=\"technologyTypeid\" [(ngModel)]=\"newMachine.technologyType.id\" />\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>Control Type</td>\r\n                    <td>\r\n                        <input required type=\"text\" placeholder=\"enter control type\" name=\"controlType\" id=\"controlType\" [(ngModel)]=\"newMachine.controlType\" />\r\n                        <input style=\"display:none;\" required type=\"text\" placeholder=\"enter control type\" name=\"addressid\" id=\"addressid\" [(ngModel)]=\"newMachine.address.id\" />\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n        <div class=\"secondary-divider\"></div>\r\n        <div class=\"well upperCase\">\r\n            <h4 class=\"subtitle is-6\">service address</h4>\r\n        </div>\r\n        <div class=\"flex flex-center mt-1 space-around\" *ngIf=\"!newMachine.address.id\">\r\n            <button class=\"button is-success glory\" type=\"button\" (click)=\"selectAnAddress()\"> SELECT AN ADDRESS </button>\r\n        </div>\r\n        <div class=\"flex flex-center space-between well-nobg address\" style=\"background-color: white;\" *ngIf=\"newMachine.address.id\">\r\n            <div>\r\n                <p class=\"capitalize\">{{newMachine.address.street1 }}, {{newMachine.address.street2 }}</p>\r\n                <p class=\"capitalize\">{{newMachine.address.city }}, {{newMachine.address.region }}</p>\r\n                <p class=\"capitalize\">{{newMachine.address.postcode }}</p>\r\n            </div>\r\n            <div (click)=\"selectAnAddress()\">\r\n                <i class=\"fa fa-pencil\"></i> Change\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/machines-new-edit/machines-new-edit.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address-item div {\n  width: 100%;\n  font-size: 12px;\n}\n.address-item div.company-name {\n  font-size: 13px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/machines-new-edit/machines-new-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachinesNewEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MachinesNewEditComponent = (function () {
    function MachinesNewEditComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.newMachine = {
            manufacturer: {
                id: null,
                name: ''
            },
            "modelNumber": "",
            "serialNumber": "",
            "controlType": "",
            "technologyType": {
                "id": null,
                "name": ''
            },
            "address": {
                id: null
            }
        };
    }
    MachinesNewEditComponent.prototype.ngOnInit = function () {
        if (this.session.get('editMachine')) {
            this.newMachine = this.session.get('editMachine');
            this.session.set('editMachine', null);
        }
        if (this.session.get('newMachine')) {
            this.newMachine = this.session.get('newMachine');
            this.session.set('newMachine', null);
        }
        if (this.session.get('selectedManufacturer')) {
            this.newMachine.manufacturer.id = this.session.get('selectedManufacturer').id;
            this.newMachine.manufacturer.name = this.session.get('selectedManufacturer').name;
            this.session.set('selectedManufacturerId', null);
        }
        if (this.session.get('selectedTechnologiesType')) {
            this.newMachine.technologyType.id = this.session.get('selectedTechnologiesType').id;
            this.newMachine.technologyType.name = this.session.get('selectedTechnologiesType').name;
            this.session.set('selectedTechnologiesType', null);
        }
        if (this.session.get('selectedAddress')) {
            this.newMachine.address = this.session.get('selectedAddress');
            this.session.set('selectedAddress', null);
        }
    };
    MachinesNewEditComponent.prototype.addMachine = function (customer) {
        var _this = this;
        if (this.newMachine.id) {
            this.aux.updateMachine({
                customerid: customer.id,
                newMachine: this.newMachine
            }).then(function (_a) {
                var err = _a.err, resp = _a.resp;
                _this.app.navigateByUrl('/machines-list', 'slidedown');
            });
        }
        else {
            this.aux.addMachine({
                customerid: customer.id,
                newMachine: this.newMachine
            }).then(function (_a) {
                var err = _a.err, resp = _a.resp;
                _this.app.navigateByUrl('/machines-list', 'slidedown');
            });
        }
    };
    MachinesNewEditComponent.prototype.getCustomer = function (user) {
        var _this = this;
        this.aux.getCustomersByOwnerEmail({
            owneremail: user.email
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err) {
                _this.addMachine(resp);
            }
        });
    };
    MachinesNewEditComponent.prototype.saveMachine = function () {
        var _this = this;
        var customer = this.session.get('customer');
        if (customer) {
            this.addMachine(customer);
        }
        else {
            var user = this.session.get('user');
            if (user) {
                this.getCustomer(user);
            }
            else {
                this.aux.authenticate().then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    if (!err) {
                        _this.getCustomer(resp);
                    }
                });
            }
        }
    };
    MachinesNewEditComponent.prototype.selectAnAddress = function () {
        this.session.set('back_url', '/machines-new');
        this.session.set('isMachine', true);
        this.session.set('newMachine', this.newMachine);
        this.app.navigateByUrl('/address-list');
    };
    MachinesNewEditComponent.prototype.selectManufacturer = function () {
        this.session.set('back_url', '/machines-new');
        this.session.set('isMachine', true);
        this.session.set('newMachine', this.newMachine);
        this.app.navigateByUrl('/manufacturer-list');
    };
    MachinesNewEditComponent.prototype.selectTechnologyType = function () {
        this.session.set('back_url', '/machines-new');
        this.session.set('isMachine', true);
        this.session.set('newMachine', this.newMachine);
        this.app.navigateByUrl('/technology-list');
    };
    return MachinesNewEditComponent;
}());
MachinesNewEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-machines-new-edit',
        template: __webpack_require__("../../../../../src/app/components/machines-new-edit/machines-new-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/machines-new-edit/machines-new-edit.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], MachinesNewEditComponent);

var _a, _b, _c;
//# sourceMappingURL=machines-new-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manufacturer-list/manufacturer-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg address-list\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"flex-row page-head-section space-between\">\r\n            <button class=\"button is-text btn btn-link btn-back col-2\" (click)=\"navigateBack()\">BACK</button>\r\n            <div class=\"col-8 my-address-heading\">Manufacturers</div>\r\n            <button *ngIf=\"isMultiSelection\" class=\"button is-success\" (click)=\"doneSelection()\">Done</button>\r\n        </div>\r\n        <div class=\"\">\r\n            <div *ngFor=\"let item of Manufacturers\">\r\n                <div class=\"selection-list-item\" (click)=\"selectManufacturer(item)\">{{ item.name }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/manufacturer-list/manufacturer-list.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selection-list-item {\n  padding-left: 10px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.my-address-heading {\n  padding-top: 4px;\n  padding-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manufacturer-list/manufacturer-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManufacturerListComponent = (function () {
    function ManufacturerListComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.Manufacturers = [];
        this.isMultiSelection = false;
        this.selectedManufacturers = [];
    }
    ManufacturerListComponent.prototype.getManufacturers = function () {
        var _this = this;
        this.aux.getManufacturers().then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err && resp._embedded && resp._embedded.manufacturers) {
                _this.Manufacturers = resp._embedded.manufacturers;
                var newMachine = _this.session.get('newMachine');
                if (newMachine && newMachine.id) {
                    _this.selectedManufacturers.push(newMachine.manufacturer);
                }
            }
        });
    };
    ManufacturerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedManufacturers = [];
        var user = this.session.get('user');
        if (user) {
            this.getManufacturers();
        }
        else {
            this.aux.getLoggedUser().then(function (_a) {
                var err = _a.err, user = _a.user;
                _this.getManufacturers();
            });
        }
        if (this.session.get('obpCompanyDetails')) {
            this.isMultiSelection = true;
        }
    };
    ManufacturerListComponent.prototype.navigateBack = function () {
        var backUrl = this.session.get('back_url');
        if (backUrl) {
            this.app.navigateByUrl(backUrl, 'slidedown');
        }
        else {
            this.app.navigateByUrl('/machines-list', 'slidedown');
        }
    };
    ManufacturerListComponent.prototype.selectManufacturer = function (item) {
        if (!this.isMultiSelection) {
            this.session.set('selectedManufacturer', item);
            this.navigateBack();
        }
        else {
            this.selectedManufacturers.push(item);
        }
    };
    ManufacturerListComponent.prototype.doneSelection = function () {
        var backUrl = this.session.get('back_url');
        if (backUrl) {
            this.session.set('selectedManufacturers', this.selectedManufacturers);
            this.app.navigateByUrl(backUrl, 'slidedown');
        }
    };
    return ManufacturerListComponent;
}());
ManufacturerListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manufacturer-list',
        template: __webpack_require__("../../../../../src/app/components/manufacturer-list/manufacturer-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manufacturer-list/manufacturer-list.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], ManufacturerListComponent);

var _a, _b, _c;
//# sourceMappingURL=manufacturer-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/manufacturer-new-edit/manufacturer-new-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  manufacturer-new-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/manufacturer-new-edit/manufacturer-new-edit.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/manufacturer-new-edit/manufacturer-new-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerNewEditComponent; });
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

var ManufacturerNewEditComponent = (function () {
    function ManufacturerNewEditComponent() {
    }
    ManufacturerNewEditComponent.prototype.ngOnInit = function () {
    };
    return ManufacturerNewEditComponent;
}());
ManufacturerNewEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manufacturer-new-edit',
        template: __webpack_require__("../../../../../src/app/components/manufacturer-new-edit/manufacturer-new-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/manufacturer-new-edit/manufacturer-new-edit.component.less")]
    }),
    __metadata("design:paramtypes", [])
], ManufacturerNewEditComponent);

//# sourceMappingURL=manufacturer-new-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/my-machines/my-machines.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"flex flex-center space-between page-head-section\">\r\n            <button class=\"button is-small bg-transparent no-border white\" (click)=\"app.navigateByUrl('/address-list', 'slideright')\">BACK</button>\r\n            <h4 class=\"white\">Machines</h4>\r\n            <button class=\"invisible\">hidden</button>\r\n        </div>\r\n        <div class=\"primary-divider\"></div>\r\n        <div class=\"search-box\">\r\n            <div class=\"flex flex-center search-container\">\r\n                <i class=\"fa fa-search\"></i>\r\n                <form class=\"flex-container\" #teamForm=\"ngForm\" (submit)=\"getFilterMachines(searchtrm)\">\r\n                    <input #searchtrm type=\"text\" class=\"txt-input form-control\" (onEnter)=\"getFilterMachines(searchtrm)\" name=\"searchterm\" id=\"searchterm\" (keyup)=\"getFilterMachines(searchtrm)\" placeholder=\"Search for an machine\" />\r\n                </form>\r\n                <i class=\"fa fa-times-circle\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"well upperCase\">\r\n            <h4 class=\"subtitle is-6\">machines</h4>\r\n        </div>\r\n        <div class=\"secondary-divider\"></div>\r\n        <div *ngIf=\"Machines.length === 0\">\r\n            <div class=\"well-nobg\">\r\n                Add machines to your inventory to help set up Service requests. you can also add them later in the app.\r\n            </div>\r\n        </div>\r\n        <div class=\"machines-list\" *ngIf=\"Machines.length > 0\">\r\n            <div class=\"flex flex-center space-between well-nobg machine\" *ngFor=\"let machine of filterMachines\">\r\n                <div>\r\n                    <p class=\"capitalize\">{{machine.manufacturer.name }}</p>\r\n                    <p class=\"upperCase\">{{machine.modelNumber }}</p>\r\n                    <p>Serial: {{ machine.serialNumber }}</p>\r\n                    <p class=\"capitalize\">{{ machine.technologyType.name }}</p>\r\n                </div>\r\n                <div>\r\n                    <a (click)=\"editMachine($event, machine)\">\r\n                        <i class=\"fa fa-pencil\"></i> Edit\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex space-around mt-2\">\r\n            <button class=\"button is-success\" (click)=\"addMachine()\"> ADD A MACHINE </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"full-width mt-2 flex space-around\">\r\n        <button class=\"button is-success mb-1\" (click)=\"app.navigateByUrl('/dashboard', 'slideup')\"> ALL SIGNED UP </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/my-machines/my-machines.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".machines-list .machine {\n  border-bottom: 1px solid #E6E9ED;\n}\n.machines-list .machine p {\n  font-weight: 300;\n}\n.machines-list .machine p:first-child {\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-machines/my-machines.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMachinesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyMachinesComponent = (function () {
    function MyMachinesComponent(app, session, aux) {
        this.app = app;
        this.session = session;
        this.aux = aux;
        this.Machines = [];
        this.filterMachines = [];
    }
    MyMachinesComponent.prototype.getMachines = function (customer) {
        var _this = this;
        this.aux.getMachinesByCustomer({
            customerid: customer.id
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err && resp._embedded && resp._embedded.machines) {
                _this.Machines = resp._embedded.machines;
            }
            else {
                _this.Machines = [];
            }
            _this.getFilterMachines();
        });
    };
    MyMachinesComponent.prototype.getFilterMachines = function (control) {
        var termToSearch = null;
        if (control) {
            termToSearch = control.value;
        }
        if (!termToSearch) {
            this.filterMachines = this.Machines;
        }
        else {
            this.filterMachines = this.Machines.filter(function (a) {
                var found = false;
                if (a['manufacturer'] && a['manufacturer'].name && a['manufacturer'].name.toLowerCase().indexOf(termToSearch.toLowerCase()) === 0) {
                    found = true;
                }
                if (a['modelNumber'] && a['modelNumber'].toLowerCase().indexOf(termToSearch.toLowerCase()) === 0) {
                    found = true;
                }
                if (a['serialNumber'] && a['serialNumber'].toLowerCase().indexOf(termToSearch.toLowerCase()) === 0) {
                    found = true;
                }
                return found;
            });
        }
    };
    MyMachinesComponent.prototype.getCustomer = function (user) {
        var _this = this;
        this.aux.getCustomersByOwnerEmail({
            owneremail: user.email
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            _this.getMachines(resp);
        });
    };
    MyMachinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var customer = this.session.get('customer');
        if (customer) {
            this.getMachines(customer);
        }
        else {
            var user = this.session.get('user');
            if (user) {
                this.getCustomer(user);
            }
            else {
                this.aux.authenticate().then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    if (!err) {
                        _this.getCustomer(resp);
                    }
                });
            }
        }
    };
    MyMachinesComponent.prototype.addMachine = function () {
        this.app.navigateByUrl('/machines-new');
    };
    MyMachinesComponent.prototype.editMachine = function (event, machine) {
        event.stopPropagation();
        this.session.set('editMachine', machine);
        this.app.navigateByUrl('/machines-edit/' + machine.id);
    };
    return MyMachinesComponent;
}());
MyMachinesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-machines',
        template: __webpack_require__("../../../../../src/app/components/my-machines/my-machines.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/my-machines/my-machines.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _c || Object])
], MyMachinesComponent);

var _a, _b, _c;
//# sourceMappingURL=my-machines.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"flex space-around pt-3\">\r\n            <div style=\"flex: 0 1 51%;\">\r\n                <img class=\"login-logo\" src=\"assets/img/uplogo.png\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"pl-3 pr-3 white mt-1\">\r\n            Trouble signing in?\r\n        </div>\r\n        <div class=\"pl-3 pr-3 white mt-1\">\r\n            Enter your email address and we will help you reset your password.\r\n        </div>\r\n\r\n        <form #resetPassword=\"ngForm\" class=\"pl-3 pr-3 pt-1\" (submit)=\"resetPasswordEmail()\">\r\n            <div class=\"form-field\">\r\n                <div class=\"\">\r\n                    <label>Email</label>\r\n                </div>\r\n                <input [(ngModel)]=\"emailToReset\" type=\"text\" pattern=\"^[a-zA-Z]+[a-zA-Z0-9.+]*@[a-zA-Z]+\\.\\w*$\" required class=\"txt-input\" #email name=\"email\" id=\"email\" />\r\n            </div>\r\n            <div class=\"mt-1\">\r\n                <button type=\"submit\"  class=\"button btn-resetpassword is-success\" [disabled]=\"resetPassword.invalid\"> RESET PASSWORD </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/reset-password/reset-password.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-field:after,\n.form-field:before {\n  clear: both;\n}\n.form-field label {\n  color: white;\n}\n.form-field .txt-input {\n  display: block;\n  width: 100%;\n  padding: .375rem .75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-image: none;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n}\n.btn-resetpassword {\n  background-color: #00823F;\n  width: 100%;\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(app, session, aux) {
        this.app = app;
        this.session = session;
        this.aux = aux;
        this.emailToReset = 'muralikrishna8811+cp1509751073509@gmail.com';
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
    };
    ResetPasswordComponent.prototype.resetPasswordEmail = function () {
        this.aux.resetPassword({
            email: this.emailToReset
        });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-reset-password',
        template: __webpack_require__("../../../../../src/app/components/reset-password/reset-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/reset-password/reset-password.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _c || Object])
], ResetPasswordComponent);

var _a, _b, _c;
//# sourceMappingURL=reset-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/service-areas/service-areas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg\">\r\n    <form #serviceAreasForm=\"ngForm\" (submit)=\"setServiceArea()\">\r\n        <div class=\"flex-row page-head-section space-between\">\r\n            <button type=\"button\" class=\"button is-small is-text btn-back\" (click)=\"app.navigateByUrl('/company-details', 'slideright')\">BACK</button>\r\n            <div class=\"white\">Service Areas</div>\r\n            <button type=\"submit\" class=\"button is-small is-success\" [disabled]=\"serviceAreasForm.invalid\">DONE</button>\r\n        </div>\r\n        <div class=\"search-box\">\r\n            <div class=\"flex flex-center search-container\">\r\n                <i class=\"fa fa-search\"></i>\r\n                <input (keyup)=\"getFilterResults(searchtrm)\" #searchtrm name=\"searchtrm\" id=\"searchtrm\" type=\"text\" class=\"txt-input form-control\" placeholder=\"Search\" />\r\n                <i class=\"fa fa-times-circle\"></i>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex tabs\">\r\n            <input style=\"display: none;\" (change)=\"isStates = true;\" type=\"radio\" id=\"states\" name=\"isstates\" />\r\n            <input style=\"display: none;\" (change)=\"isStates = false;\" type=\"radio\" id=\"provinces\" name=\"isstates\" />\r\n            <label [ngClass]=\"{ 'active' : isStates === true }\" for=\"states\" class=\"button is-small is-info is-outlined\"> States </label>\r\n            <label [ngClass]=\"{ 'active' : isStates === false }\" for=\"provinces\" class=\"button is-small is-info is-outlined\"> Provinces </label>\r\n        </div>\r\n        <div *ngIf=\"isStates\">\r\n            <div (click)=\"toggleServiceArea(item)\" [ngClass]=\"{'selected': isSelected(item, 'region', 'abbreviation') }\" class=\"select-list-item\" *ngFor=\"let item of filterStates\">\r\n                {{ item.description }}\r\n                <i class=\"fa fa-check\"></i>\r\n\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!isStates\">\r\n            <div (click)=\"toggleServiceArea(item)\" [ngClass]=\"{'selected': isSelected(item, 'region', 'abbreviation') }\" class=\"select-list-item\" *ngFor=\"let item of filterRegions\">\r\n                {{ item.description }}\r\n                <i class=\"fa fa-check\"></i>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"modal-pro modal-county\" *ngIf=\"showCounty\">\r\n    <div class=\"modal-overlay\" (click)=\"showCounty = false;\"></div>\r\n    <div class=\"modal-pro-content offset-1 col-10 mt-5\">\r\n        <div class=\"flex-row space-between px-1 head-bg\">\r\n            <div class=\"white\">\r\n                <div>Select District</div>\r\n            </div>\r\n            <button class=\"button is-text\" (click)=\"showCounty = false;\">Done</button>\r\n        </div>\r\n        <div [ngClass]=\"{'selected': isSelected(county, 'id', 'id') }\" class=\"select-list-item\" *ngFor=\"let county of Districts\" (click)=\"setCounty(county);\">\r\n            {{ county.description}}\r\n            <i class=\"fa fa-check\"></i>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/service-areas/service-areas.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select-list-item {\n  padding-left: 15px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  position: relative;\n}\n.select-list-item .fa-check {\n  display: none;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.select-list-item.selected .fa-check {\n  display: inline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/service-areas/service-areas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceAreasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceAreasComponent = (function () {
    function ServiceAreasComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.States = [];
        this.Regions = [];
        this.filterStates = [];
        this.filterRegions = [];
        this.Districts = [];
        this.DistrictsHash = {};
        this.isStates = true;
        this.showCounty = false;
        this.selectedServiceAreas = [];
    }
    ServiceAreasComponent.prototype.getProvider = function (user) {
        var _this = this;
        this.aux.getProviderByOwnerEmail({
            owneremail: user.email
        }).then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err) {
                _this.session.set('provider', resp);
            }
        });
        this.getStates();
    };
    ServiceAreasComponent.prototype.getStates = function () {
        var _this = this;
        this.aux.getStates().then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err && resp._embedded && resp._embedded.regions) {
                var list = resp._embedded.regions;
                var states_1 = [], regions_1 = [];
                list.forEach(function (r) {
                    if (r.country === 'USA') {
                        states_1.push(r);
                    }
                    else {
                        regions_1.push(r);
                    }
                });
                _this.Regions = regions_1;
                _this.States = states_1;
                _this.filterRegions = regions_1;
                _this.filterStates = states_1;
            }
        });
    };
    ServiceAreasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.session.get('user');
        if (user) {
            this.getProvider(user);
        }
        else {
            this.aux.authenticate().then(function (_a) {
                var err = _a.err, resp = _a.resp;
                _this.getProvider(resp);
            });
        }
    };
    ServiceAreasComponent.prototype.setServiceArea = function () {
        this.session.set('selectedServiceAreas', this.selectedServiceAreas);
        this.app.navigateByUrl('/company-details');
    };
    ServiceAreasComponent.prototype.toggleServiceArea = function (item) {
        item.selected = !item.selected;
        this.Districts = [];
        this.getDistricts(item);
        this.showCounty = true;
    };
    ServiceAreasComponent.prototype.getDistricts = function (item) {
        var _this = this;
        if (this.DistrictsHash[item.country] && this.DistrictsHash[item.country][item.abbreviation]) {
            this.Districts = this.DistrictsHash[item.country][item.abbreviation];
        }
        else {
            this.aux.getDistricts({
                country: item.country,
                region: item.abbreviation
            }).then(function (_a) {
                var err = _a.err, resp = _a.resp;
                if (!err && resp._embedded && resp._embedded.serviceAreas) {
                    _this.Districts = resp._embedded.serviceAreas;
                    if (!_this.DistrictsHash[item.country]) {
                        _this.DistrictsHash[item.country] = {};
                    }
                    _this.DistrictsHash[item.country][item.abbreviation] = resp._embedded.serviceAreas;
                }
            });
        }
    };
    ServiceAreasComponent.prototype.getFilterResults = function (control) {
        var searchTerm = null;
        if (control) {
            searchTerm = control.value;
            if (searchTerm && searchTerm.length > 0) {
                searchTerm = searchTerm.toLowerCase();
                this.filterRegions = this.Regions.filter(function (r) { return r.description.toLowerCase().indexOf(searchTerm) === 0; });
                this.filterStates = this.States.filter(function (r) { return r.description.toLowerCase().indexOf(searchTerm) === 0; });
            }
            else {
                this.filterRegions = this.Regions;
                this.filterStates = this.States;
            }
        }
        else {
            this.filterRegions = this.Regions;
            this.filterStates = this.States;
        }
    };
    ServiceAreasComponent.prototype.setCounty = function (item) {
        var items = [], itemAdded = false;
        this.selectedServiceAreas.forEach(function (s) {
            if (item.id === s.id) {
                itemAdded = true;
            }
            else {
                items.push(s);
            }
        });
        if (!itemAdded) {
            items.push(item);
        }
        this.selectedServiceAreas = items;
    };
    ServiceAreasComponent.prototype.isSelected = function (item, prop1, prop2) {
        return this.selectedServiceAreas.filter(function (s) {
            if (s && item && s[prop1] === item[prop2]) {
                return true;
            }
            else {
                return false;
            }
        }).length > 0;
    };
    return ServiceAreasComponent;
}());
ServiceAreasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-service-areas',
        template: __webpack_require__("../../../../../src/app/components/service-areas/service-areas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/service-areas/service-areas.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], ServiceAreasComponent);

var _a, _b, _c;
//# sourceMappingURL=service-areas.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/style-guide/style-guide.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"style-guide-section\">\r\n    <nav>\r\n        <a class=\"lnk-nav\" (click)=\"navigationTo('/login', 'slideright')\">Login</a>\r\n        <a class=\"lnk-nav\" (click)=\"navigationTo('/style-guide', 'slideleft')\">Style Guide</a>\r\n    </nav>\r\n    Style Guide Page\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/style-guide/style-guide.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".style-guide-section {\n  min-height: 100vh;\n  background: linear-gradient(46deg, #00A153 65%, #21BD47 90%);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/style-guide/style-guide.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleGuideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StyleGuideComponent = (function () {
    function StyleGuideComponent(app) {
        this.app = app;
    }
    StyleGuideComponent.prototype.ngOnInit = function () {
    };
    StyleGuideComponent.prototype.navigationTo = function (url, pageTrasition) {
        this.app.navigateByUrl(url, pageTrasition);
    };
    return StyleGuideComponent;
}());
StyleGuideComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-style-guide',
        template: __webpack_require__("../../../../../src/app/components/style-guide/style-guide.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/style-guide/style-guide.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object])
], StyleGuideComponent);

var _a;
//# sourceMappingURL=style-guide.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/technology-list/technology-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-section no-bg address-list\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"flex-row page-head-section\">\r\n            <button class=\"button is-text btn btn-link btn-back col-2\" (click)=\"navigateBack()\">BACK</button>\r\n            <div class=\"col-8 my-address-heading white\">TechnologiesTypes</div>\r\n            <button *ngIf=\"isMultiSelection\" (click)=\"doneSelection()\" class=\"button is-success\"> Done </button>\r\n        </div>\r\n        <div class=\"\">\r\n            <div *ngFor=\"let item of TechnologiesTypes\">\r\n                <div class=\"selection-list-item\" (click)=\"selectTechnologiesType(item)\">{{ item.name }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/technology-list/technology-list.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selection-list-item {\n  padding-left: 10px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.my-address-heading {\n  padding-top: 4px;\n  padding-left: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/technology-list/technology-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__ = __webpack_require__("../../../../../src/app/services/auxilary.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TechnologyListComponent = (function () {
    function TechnologyListComponent(app, aux, session) {
        this.app = app;
        this.aux = aux;
        this.session = session;
        this.TechnologiesTypes = [];
        this.isMultiSelection = false;
        this.selectedTechnologyTypes = [];
    }
    TechnologyListComponent.prototype.getTechnologiesTypes = function () {
        var _this = this;
        this.aux.getTechnologies().then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err && resp._embedded && resp._embedded.technologyTypes) {
                _this.TechnologiesTypes = resp._embedded.technologyTypes;
            }
        });
    };
    TechnologyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aux.getLoggedUser().then(function (_a) {
            var err = _a.err, user = _a.user;
            _this.getTechnologiesTypes();
        });
        if (this.session.get('obpCompanyDetails')) {
            this.isMultiSelection = true;
        }
    };
    TechnologyListComponent.prototype.navigateBack = function () {
        var backUrl = this.session.get('back_url');
        if (backUrl) {
            this.app.navigateByUrl(backUrl, 'slidedown');
        }
        else {
            this.app.navigateByUrl('/machines-new', 'slidedown');
        }
    };
    TechnologyListComponent.prototype.selectTechnologiesType = function (item) {
        if (!this.isMultiSelection) {
            this.session.set('selectedTechnologiesType', item);
            this.navigateBack();
        }
        else {
            this.selectedTechnologyTypes.push(item);
        }
    };
    TechnologyListComponent.prototype.doneSelection = function () {
        var backUrl = this.session.get('back_url');
        if (backUrl) {
            this.session.set('selectedTechnologyTypes', this.selectedTechnologyTypes);
            this.app.navigateByUrl(backUrl, 'slidedown');
        }
    };
    return TechnologyListComponent;
}());
TechnologyListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-technology-list',
        template: __webpack_require__("../../../../../src/app/components/technology-list/technology-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/technology-list/technology-list.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auxilary_service__["a" /* AuxilaryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_session_service__["a" /* SessionService */]) === "function" && _c || Object])
], TechnologyListComponent);

var _a, _b, _c;
//# sourceMappingURL=technology-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/technology-new-edit/technology-new-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  technology-new-edit works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/technology-new-edit/technology-new-edit.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/technology-new-edit/technology-new-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyNewEditComponent; });
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

var TechnologyNewEditComponent = (function () {
    function TechnologyNewEditComponent() {
    }
    TechnologyNewEditComponent.prototype.ngOnInit = function () {
    };
    return TechnologyNewEditComponent;
}());
TechnologyNewEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-technology-new-edit',
        template: __webpack_require__("../../../../../src/app/components/technology-new-edit/technology-new-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/technology-new-edit/technology-new-edit.component.less")]
    }),
    __metadata("design:paramtypes", [])
], TechnologyNewEditComponent);

//# sourceMappingURL=technology-new-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/route-animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");

var routerTransition = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => slideup', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(500px)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.3s ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }))
            ], { optional: true })
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => slideleft', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)', zIndex: '0' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.6s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(500px)', zIndex: '1' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.3s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
            ], { optional: true })
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => slideright', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)', zIndex: '0' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.6s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-500px)', zIndex: '1' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.3s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
            ], { optional: true })
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => slidedown', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* query */])(':leave', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }))
            ], { optional: true })
        ])
    ]),
]);
//# sourceMappingURL=route-animations.js.map

/***/ }),

/***/ "../../../../../src/app/routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_style_guide_style_guide_component__ = __webpack_require__("../../../../../src/app/components/style-guide/style-guide.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_create_account_type_create_account_type_component__ = __webpack_require__("../../../../../src/app/components/create-account-type/create-account-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_create_account_authority_create_account_authority_component__ = __webpack_require__("../../../../../src/app/components/create-account-authority/create-account-authority.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_create_account_password_create_account_password_component__ = __webpack_require__("../../../../../src/app/components/create-account-password/create-account-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_create_account_name_create_account_name_component__ = __webpack_require__("../../../../../src/app/components/create-account-name/create-account-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_create_account_code_create_account_code_component__ = __webpack_require__("../../../../../src/app/components/create-account-code/create-account-code.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_create_account_jointeam_create_account_jointeam_component__ = __webpack_require__("../../../../../src/app/components/create-account-jointeam/create-account-jointeam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_create_account_createteam_create_account_createteam_component__ = __webpack_require__("../../../../../src/app/components/create-account-createteam/create-account-createteam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_address_list_address_list_component__ = __webpack_require__("../../../../../src/app/components/address-list/address-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_address_new_edit_address_new_edit_component__ = __webpack_require__("../../../../../src/app/components/address-new-edit/address-new-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_my_machines_my_machines_component__ = __webpack_require__("../../../../../src/app/components/my-machines/my-machines.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_machines_new_edit_machines_new_edit_component__ = __webpack_require__("../../../../../src/app/components/machines-new-edit/machines-new-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_technology_list_technology_list_component__ = __webpack_require__("../../../../../src/app/components/technology-list/technology-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_technology_new_edit_technology_new_edit_component__ = __webpack_require__("../../../../../src/app/components/technology-new-edit/technology-new-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_manufacturer_list_manufacturer_list_component__ = __webpack_require__("../../../../../src/app/components/manufacturer-list/manufacturer-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_manufacturer_new_edit_manufacturer_new_edit_component__ = __webpack_require__("../../../../../src/app/components/manufacturer-new-edit/manufacturer-new-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_create_account_nameaddress_create_account_nameaddress_component__ = __webpack_require__("../../../../../src/app/components/create-account-nameaddress/create-account-nameaddress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_company_details_company_details_component__ = __webpack_require__("../../../../../src/app/components/company-details/company-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_service_areas_service_areas_component__ = __webpack_require__("../../../../../src/app/components/service-areas/service-areas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");























var routings = [
    {
        path: 'style-guide',
        component: __WEBPACK_IMPORTED_MODULE_0__components_style_guide_style_guide_component__["a" /* StyleGuideComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'reset-password',
        component: __WEBPACK_IMPORTED_MODULE_21__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */]
    },
    {
        path: 'change-password',
        component: __WEBPACK_IMPORTED_MODULE_22__components_change_password_change_password_component__["a" /* ChangePasswordComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'create-account-type',
        component: __WEBPACK_IMPORTED_MODULE_2__components_create_account_type_create_account_type_component__["a" /* CreateAccountTypeComponent */]
    },
    {
        path: 'create-account-authority',
        component: __WEBPACK_IMPORTED_MODULE_3__components_create_account_authority_create_account_authority_component__["a" /* CreateAccountAuthorityComponent */]
    },
    {
        path: 'create-account-password',
        component: __WEBPACK_IMPORTED_MODULE_4__components_create_account_password_create_account_password_component__["a" /* CreateAccountPasswordComponent */]
    },
    {
        path: 'create-account-code',
        component: __WEBPACK_IMPORTED_MODULE_6__components_create_account_code_create_account_code_component__["a" /* CreateAccountCodeComponent */]
    },
    {
        path: 'create-account-teamname',
        component: __WEBPACK_IMPORTED_MODULE_8__components_create_account_createteam_create_account_createteam_component__["a" /* CreateAccountCreateteamComponent */]
    },
    {
        path: 'company-details',
        component: __WEBPACK_IMPORTED_MODULE_19__components_company_details_company_details_component__["a" /* CompanyDetailsComponent */]
    },
    {
        path: 'company-details/service-areas',
        component: __WEBPACK_IMPORTED_MODULE_20__components_service_areas_service_areas_component__["a" /* ServiceAreasComponent */]
    },
    {
        path: 'create-account-name',
        component: __WEBPACK_IMPORTED_MODULE_5__components_create_account_name_create_account_name_component__["a" /* CreateAccountNameComponent */]
    },
    {
        path: 'create-account-jointeam',
        component: __WEBPACK_IMPORTED_MODULE_7__components_create_account_jointeam_create_account_jointeam_component__["a" /* CreateAccountJointeamComponent */]
    },
    {
        path: 'address-list',
        component: __WEBPACK_IMPORTED_MODULE_9__components_address_list_address_list_component__["a" /* AddressListComponent */]
    },
    {
        path: 'address-new',
        component: __WEBPACK_IMPORTED_MODULE_10__components_address_new_edit_address_new_edit_component__["a" /* AddressNewEditComponent */],
        data: {
            isEdit: false
        }
    },
    {
        path: 'address-edit/:addressId',
        component: __WEBPACK_IMPORTED_MODULE_10__components_address_new_edit_address_new_edit_component__["a" /* AddressNewEditComponent */],
        data: {
            isEdit: true
        }
    },
    {
        path: 'machines-list',
        component: __WEBPACK_IMPORTED_MODULE_11__components_my_machines_my_machines_component__["a" /* MyMachinesComponent */]
    },
    {
        path: 'machines-new',
        component: __WEBPACK_IMPORTED_MODULE_12__components_machines_new_edit_machines_new_edit_component__["a" /* MachinesNewEditComponent */],
        data: {
            isEdit: false
        }
    },
    {
        path: 'machines-edit/:machineId',
        component: __WEBPACK_IMPORTED_MODULE_12__components_machines_new_edit_machines_new_edit_component__["a" /* MachinesNewEditComponent */],
        data: {
            isEdit: true
        }
    },
    {
        path: 'manufacturer-list',
        component: __WEBPACK_IMPORTED_MODULE_15__components_manufacturer_list_manufacturer_list_component__["a" /* ManufacturerListComponent */]
    },
    {
        path: 'create-account-nameaddress',
        component: __WEBPACK_IMPORTED_MODULE_17__components_create_account_nameaddress_create_account_nameaddress_component__["a" /* CreateAccountNameaddressComponent */]
    },
    {
        path: 'manufacturer-new',
        component: __WEBPACK_IMPORTED_MODULE_16__components_manufacturer_new_edit_manufacturer_new_edit_component__["a" /* ManufacturerNewEditComponent */],
        data: {
            isEdit: false
        }
    },
    {
        path: 'manufacturer-edit/:manufactureId',
        component: __WEBPACK_IMPORTED_MODULE_16__components_manufacturer_new_edit_manufacturer_new_edit_component__["a" /* ManufacturerNewEditComponent */],
        data: {
            isEdit: true
        }
    },
    {
        path: 'technology-list',
        component: __WEBPACK_IMPORTED_MODULE_13__components_technology_list_technology_list_component__["a" /* TechnologyListComponent */]
    },
    {
        path: 'technology-new',
        component: __WEBPACK_IMPORTED_MODULE_14__components_technology_new_edit_technology_new_edit_component__["a" /* TechnologyNewEditComponent */],
        data: {
            isEdit: false
        }
    },
    {
        path: 'technology-edit/:technologyId',
        component: __WEBPACK_IMPORTED_MODULE_14__components_technology_new_edit_technology_new_edit_component__["a" /* TechnologyNewEditComponent */],
        data: {
            isEdit: true
        }
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
var Routings = {
    paths: routings,
    deps: [
        __WEBPACK_IMPORTED_MODULE_0__components_style_guide_style_guide_component__["a" /* StyleGuideComponent */],
        __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */],
        __WEBPACK_IMPORTED_MODULE_2__components_create_account_type_create_account_type_component__["a" /* CreateAccountTypeComponent */],
        __WEBPACK_IMPORTED_MODULE_3__components_create_account_authority_create_account_authority_component__["a" /* CreateAccountAuthorityComponent */],
        __WEBPACK_IMPORTED_MODULE_4__components_create_account_password_create_account_password_component__["a" /* CreateAccountPasswordComponent */],
        __WEBPACK_IMPORTED_MODULE_5__components_create_account_name_create_account_name_component__["a" /* CreateAccountNameComponent */],
        __WEBPACK_IMPORTED_MODULE_6__components_create_account_code_create_account_code_component__["a" /* CreateAccountCodeComponent */],
        __WEBPACK_IMPORTED_MODULE_7__components_create_account_jointeam_create_account_jointeam_component__["a" /* CreateAccountJointeamComponent */],
        __WEBPACK_IMPORTED_MODULE_8__components_create_account_createteam_create_account_createteam_component__["a" /* CreateAccountCreateteamComponent */],
        __WEBPACK_IMPORTED_MODULE_9__components_address_list_address_list_component__["a" /* AddressListComponent */],
        __WEBPACK_IMPORTED_MODULE_10__components_address_new_edit_address_new_edit_component__["a" /* AddressNewEditComponent */],
        __WEBPACK_IMPORTED_MODULE_11__components_my_machines_my_machines_component__["a" /* MyMachinesComponent */],
        __WEBPACK_IMPORTED_MODULE_12__components_machines_new_edit_machines_new_edit_component__["a" /* MachinesNewEditComponent */],
        __WEBPACK_IMPORTED_MODULE_13__components_technology_list_technology_list_component__["a" /* TechnologyListComponent */],
        __WEBPACK_IMPORTED_MODULE_14__components_technology_new_edit_technology_new_edit_component__["a" /* TechnologyNewEditComponent */],
        __WEBPACK_IMPORTED_MODULE_15__components_manufacturer_list_manufacturer_list_component__["a" /* ManufacturerListComponent */],
        __WEBPACK_IMPORTED_MODULE_16__components_manufacturer_new_edit_manufacturer_new_edit_component__["a" /* ManufacturerNewEditComponent */],
        __WEBPACK_IMPORTED_MODULE_18__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
    ]
};
//# sourceMappingURL=routing.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* unused harmony export Opts */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_utils_utils_service__ = __webpack_require__("../../../../../src/app/services/utils/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(utils) {
        this.utils = utils;
    }
    ApiService.prototype.makeRequest = function (opts) {
        var _this = this;
        var headers = this.getHeaders(opts);
        if (this.Authorization || (opts.headers && opts.headers.Authorization)) {
            headers['Authorization'] = (opts.headers && opts.headers.Authorization ? opts.headers.Authorization : this.Authorization);
        }
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + (opts.url.indexOf('/') === 0 ? opts.url : '/' + opts.url);
        if (opts.isFullUrl) {
            url = opts.url;
        }
        var promise = new Promise(function (res, rej) {
            __WEBPACK_IMPORTED_MODULE_1_jquery__["ajax"]({
                method: opts.method,
                url: url,
                contentType: 'application/json',
                headers: headers,
                data: JSON.stringify(opts.data),
                crossDomain: true,
                success: function (data, textStatus, response) {
                    if (response.getResponseHeader('authorization') && opts.setAuthorization) {
                        _this.Authorization = response.getResponseHeader('authorization');
                        _this.utils.setCookie('authorization', _this.Authorization);
                    }
                    res({ resp: data, fullResponse: response });
                }, error: function (err) {
                    res({ err: err.responseJSON });
                }
            });
        });
        return promise;
    };
    ApiService.prototype.getHeaders = function (opts) {
        var headers = { 'Accept': 'application/json' };
        if (opts.headers) {
            Object.assign(headers, opts.headers);
        }
        return headers;
    };
    ApiService.prototype.get = function (opts) {
        opts.method = 'GET';
        return this.makeRequest(opts);
    };
    ApiService.prototype.post = function (opts) {
        opts.method = 'POST';
        return this.makeRequest(opts);
    };
    ApiService.prototype.patch = function (opts) {
        opts.method = 'PATCH';
        return this.makeRequest(opts);
    };
    ApiService.prototype.delete = function (opts) {
        opts.method = 'DELETE';
        return this.makeRequest(opts);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_utils_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_utils_utils_service__["a" /* UtilsService */]) === "function" && _a || Object])
], ApiService);

var Opts = (function () {
    function Opts() {
    }
    return Opts;
}());

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_utils_service__ = __webpack_require__("../../../../../src/app/services/utils/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(api, utils) {
        this.api = api;
        this.utils = utils;
    }
    AuthService.prototype.changePassword = function (opts) {
        var data = {
            "email": opts.email,
            "newPassword": opts.password,
            "confirmNewPassword": opts.confirmpassword
        };
        if (opts.authToken) {
            data.authToken = opts.authToken;
        }
        else {
            data.currentPassword = opts.currentPassword;
        }
        return this.api.post({
            url: '/auth/password',
            data: data,
            headers: opts.headers
        });
    };
    AuthService.prototype.resetPassword = function (opts) {
        return this.api.post({
            url: '/auth/reset',
            data: {
                email: opts.email
            },
            headers: opts.headers
        });
    };
    AuthService.prototype.login = function (login) {
        var opts = {
            url: '/auth/login',
            data: {
                email: login.email,
                password: login.password
            },
            setAuthorization: true
        };
        return this.api.post(opts);
    };
    AuthService.prototype.getAdminAuthorization = function (opts) {
        var _this = this;
        return new Promise(function (r, j) {
            if (_this._adminAuthorization) {
                r({ authorization: _this._adminAuthorization });
            }
            else {
                _this.api.post({
                    url: '/auth/login',
                    data: {
                        email: 'mtottimpudi@evoketechnologies.com',
                        password: 'password'
                    }
                }).then(function (_a) {
                    var err = _a.err, fullResponse = _a.fullResponse;
                    if (!err) {
                        _this._adminAuthorization = fullResponse.getResponseHeader('authorization');
                        r({ authorization: _this._adminAuthorization });
                    }
                    else {
                        r({ err: err });
                    }
                });
            }
        });
    };
    AuthService.prototype.authenticate = function () {
        var _this = this;
        var authorization = this.utils.getCookie('authorization');
        if (authorization) {
            if (!this._authorizationPromise) {
                this._authorizationPromise = new Promise(function (r, j) {
                    _this.api.get({
                        url: 'auth/me',
                        setAuthorization: true,
                        headers: {
                            Authorization: authorization
                        }
                    }).then(function (_a) {
                        var err = _a.err, resp = _a.resp;
                        r({ err: err, resp: resp });
                    });
                });
            }
            return this._authorizationPromise;
        }
        else {
            return new Promise(function (res, rej) {
                res({
                    err: {
                        code: 403,
                        msg: 'No Cookie found'
                    }
                });
            });
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__utils_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_utils_service__["a" /* UtilsService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auxilary.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuxilaryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_session_service__ = __webpack_require__("../../../../../src/app/services/data/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_customer_service__ = __webpack_require__("../../../../../src/app/services/user/customer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_provider_service__ = __webpack_require__("../../../../../src/app/services/user/provider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__region_region_service__ = __webpack_require__("../../../../../src/app/services/region/region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__machine_machine_service__ = __webpack_require__("../../../../../src/app/services/machine/machine.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuxilaryService = (function () {
    function AuxilaryService(auth, session, user, customer, provider, region, machine) {
        this.auth = auth;
        this.session = session;
        this.user = user;
        this.customer = customer;
        this.provider = provider;
        this.region = region;
        this.machine = machine;
        this.environment = __WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */];
        this.API_KEY = 'k2dRFbvCb2gfTdKwsG4oYqcHr8nvENG9';
    }
    AuxilaryService.prototype.changePassword = function (opts) {
        var headers = {};
        if (opts.authToken) {
            opts.headers = opts.headers || {};
            opts.headers['X-API-Key'] = this.API_KEY;
        }
        return this.auth.changePassword(opts);
    };
    AuxilaryService.prototype.resetPassword = function (opts) {
        return this.auth.resetPassword({
            email: opts.email,
            headers: {
                'X-API-Key': this.API_KEY
            }
        });
    };
    AuxilaryService.prototype.updateUserManufacturers = function (opts) {
        return this.user.updateUserManufacturers(opts);
    };
    AuxilaryService.prototype.updateUserTechnologyTypes = function (opts) {
        return this.user.updateUserTechnologyTypes(opts);
    };
    AuxilaryService.prototype.getProviderTypes = function () {
        return this.provider.getProviderTypes();
    };
    AuxilaryService.prototype.setUserToCustomer = function (opts) {
        return this.customer.setUserToCustomer(opts);
    };
    AuxilaryService.prototype.setUserToProvider = function (opts) {
        return this.provider.setUserToProvider(opts);
    };
    AuxilaryService.prototype.getTechnologies = function () {
        return this.machine.getActiveTechnologyTypes();
    };
    AuxilaryService.prototype.getManufacturers = function () {
        return this.machine.getActiveManufacturers();
    };
    AuxilaryService.prototype.getDistricts = function (opts) {
        return this.region.getServicePlacesByStateAndContry(opts);
    };
    AuxilaryService.prototype.getStates = function () {
        return this.region.getAllStates();
    };
    AuxilaryService.prototype.getAllServiceAreas = function () {
        return this.region.getAllServiceAreas();
    };
    AuxilaryService.prototype.updateMachine = function (opts) {
        return this.customer.updateMachine(opts);
    };
    AuxilaryService.prototype.addMachine = function (opts) {
        return this.customer.addMachine(opts);
    };
    AuxilaryService.prototype.getMachinesByCustomer = function (opts) {
        return this.customer.getMachinesByCustomer(opts);
    };
    AuxilaryService.prototype.updateCustomer = function (opts) {
        return this.customer.updateCustomer(opts);
    };
    AuxilaryService.prototype.getCustomersByOwnerEmail = function (opts) {
        return this.customer.getCustomersByOwnerEmail(opts);
    };
    AuxilaryService.prototype.getProviderByOwnerEmail = function (opts) {
        return this.provider.getProviderByOwnerEmail(opts);
    };
    AuxilaryService.prototype.login = function (opts) {
        opts.setAuthorization = true;
        return this.auth.login(opts);
    };
    AuxilaryService.prototype.authenticate = function () {
        var _this = this;
        return this.auth.authenticate().then(function (_a) {
            var err = _a.err, resp = _a.resp;
            if (!err) {
                _this.session.set('user', resp);
            }
            return { err: err, resp: resp };
        });
    };
    AuxilaryService.prototype.getLoggedUser = function () {
        var _this = this;
        return new Promise(function (r, j) {
            if (_this.session.get('user')) {
                r({ user: _this.session.get('user') });
            }
            else {
                _this.authenticate().then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    if (!err) {
                        _this.session.set('user', resp);
                    }
                    r({ err: err, user: resp });
                });
            }
        });
    };
    AuxilaryService.prototype.createUser = function (opts) {
        var _this = this;
        return new Promise(function (r, j) {
            _this.auth.getAdminAuthorization(opts).then(function (res) {
                if (!res.err && res.authorization) {
                    opts.headers = {
                        'Authorization': res.authorization
                    };
                    _this.user.createUser(opts).then(function (_a) {
                        var err = _a.err, resp = _a.resp;
                        r({ err: err, resp: resp });
                    });
                }
                else {
                    r({ err: res.err });
                }
            });
        });
    };
    AuxilaryService.prototype.resendVerifyCode = function (opts) {
        return this.user.resendVerificationCode(opts);
    };
    AuxilaryService.prototype.verifyAuthCode = function (opts) {
        return this.user.verifyUser(opts);
    };
    AuxilaryService.prototype.updateUser = function (opts) {
        return this.user.updateUser(opts);
    };
    AuxilaryService.prototype.updateProvider = function (opts) {
        return this.provider.updateProvider(opts);
    };
    AuxilaryService.prototype.addProvider = function (opts) {
        return this.provider.addProvider(opts);
    };
    AuxilaryService.prototype.createCustomer = function (opts) {
        var _this = this;
        return new Promise(function (r, j) {
            var updateUserPromse, createCustomerPromise;
            if (opts.id) {
                _this.user.updateUser(opts).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    updateUserPromse = { err: err, resp: resp };
                    if (updateUserPromse && createCustomerPromise) {
                        r({ err: updateUserPromse.err || createCustomerPromise.err });
                    }
                });
                var teamName = opts.teamName;
                _this.customer.addCustomer({ name: teamName || opts.name }).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    createCustomerPromise = { err: err, resp: resp };
                    if (updateUserPromse && createCustomerPromise) {
                        r({ err: updateUserPromse.err || createCustomerPromise.err });
                    }
                });
            }
            else {
                var teamName = opts.teamName;
                _this.customer.addCustomer({ name: teamName || opts.name }).then(function (_a) {
                    var err = _a.err, resp = _a.resp;
                    r({ err: err, resp: resp });
                });
            }
        });
    };
    return AuxilaryService;
}());
AuxilaryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_customer_service__["a" /* CustomerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_customer_service__["a" /* CustomerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__user_provider_service__["a" /* ProviderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_provider_service__["a" /* ProviderService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__region_region_service__["a" /* RegionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__region_region_service__["a" /* RegionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__machine_machine_service__["a" /* MachineService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__machine_machine_service__["a" /* MachineService */]) === "function" && _g || Object])
], AuxilaryService);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=auxilary.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
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

var SessionService = (function () {
    function SessionService() {
        this.SessionHash = {};
    }
    SessionService.prototype.get = function (key) {
        return this.SessionHash[key];
    };
    SessionService.prototype.set = function (key, val) {
        this.SessionHash[key] = val;
    };
    return SessionService;
}());
SessionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SessionService);

//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/machine/machine.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MachineService = (function () {
    function MachineService(api) {
        this.api = api;
    }
    MachineService.prototype.getActiveManufacturers = function () {
        return this.api.get({
            url: '/manufacturers'
        });
    };
    MachineService.prototype.getActiveTechnologyTypes = function () {
        return this.api.get({
            url: '/technologyTypes'
        });
    };
    return MachineService;
}());
MachineService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], MachineService);

var _a;
//# sourceMappingURL=machine.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/region/region.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegionService = (function () {
    function RegionService(api) {
        this.api = api;
    }
    RegionService.prototype.getAllStates = function () {
        return this.api.get({
            url: '/regions'
        });
    };
    RegionService.prototype.getServicePlacesByStateAndContry = function (opts) {
        return this.api.get({
            url: '/serviceAreas/search/findAllByCountryAndRegion?country=' + opts.country + '&region=' + opts.region
        });
    };
    RegionService.prototype.getAllServiceAreas = function () {
        return this.api.get({
            url: '/serviceAreas'
        });
    };
    return RegionService;
}());
RegionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], RegionService);

var _a;
//# sourceMappingURL=region.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user/customer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerService = (function () {
    function CustomerService(api) {
        this.api = api;
    }
    CustomerService.prototype.addNewAddress = function (opts) {
        if (opts.customerid) {
        }
        else {
            return new Promise(function (r, e) {
                r({
                    err: {
                        code: 400,
                        msg: 'user id is required'
                    }
                });
            });
        }
    };
    CustomerService.prototype.getCustomersByOwnerEmail = function (opts) {
        return this.api.get({
            url: '/customers/search/findByOwner?email=' + encodeURIComponent(opts.owneremail)
        });
    };
    // Join Team API
    CustomerService.prototype.setUserToCustomer = function (opts) {
        return this.api.post({
            url: '/users/' + opts.userid + '/customer',
            data: {
                id: opts.customerid
            }
        });
    };
    CustomerService.prototype.getCustomersByUser = function (opts) {
        return this.api.get({
            url: '/users/' + opts.userid + '/customer'
        });
    };
    CustomerService.prototype.getUsersByCustomer = function (opts) {
        return this.api.get({
            url: '/customers/' + opts.customerid + '/users'
        });
    };
    CustomerService.prototype.getCustomer = function (opts) {
        return this.api.get({
            url: '/customers/' + opts.id
        });
    };
    CustomerService.prototype.addCustomer = function (opts) {
        return this.api.post({
            url: '/customers',
            data: {
                name: opts.name || ''
            }
        });
    };
    CustomerService.prototype.getMachinesByCustomer = function (opts) {
        return this.api.get({
            url: '/customers/' + opts.customerid + '/machines'
        });
    };
    CustomerService.prototype.updateCustomer = function (opts) {
        var updateData = {};
        if (opts.address) {
            updateData.addresses = [];
            updateData.addresses.push(opts.address);
        }
        return this.api.patch({
            url: 'customers/' + opts.customerid,
            data: updateData
        });
    };
    CustomerService.prototype.updateMachine = function (opts) {
        if (opts.newMachine.id) {
            if (opts.newMachine.manufacturer) {
                opts.newMachine.manufacturer.id = parseInt(opts.newMachine.manufacturer.id, 10);
            }
            if (opts.newMachine.technologyType) {
                opts.newMachine.technologyType.id = parseInt(opts.newMachine.technologyType.id, 10);
            }
            return this.api.patch({
                url: 'customers/' + opts.customerid + '/machines/' + opts.newMachine.id,
                data: opts.newMachine
            });
        }
        else {
            return new Promise(function (r, j) {
                r({
                    err: {
                        code: 400,
                        msg: 'machine id is required'
                    }
                });
            });
        }
    };
    CustomerService.prototype.addMachine = function (opts) {
        if (opts.newMachine.manufacturer) {
            opts.newMachine.manufacturer.id = parseInt(opts.newMachine.manufacturer.id, 10);
        }
        if (opts.newMachine.technologyType) {
            opts.newMachine.technologyType.id = parseInt(opts.newMachine.technologyType.id, 10);
        }
        return this.api.post({
            url: 'customers/' + opts.customerid + '/machines',
            data: opts.newMachine
        });
    };
    CustomerService.prototype.getManufacturers = function () {
        return this.api.get({
            url: '/manufacturers'
        });
    };
    CustomerService.prototype.getTechnologyTypes = function () {
        return this.api.get({
            url: '/technologyTypes'
        });
    };
    return CustomerService;
}());
CustomerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], CustomerService);

var _a;
//# sourceMappingURL=customer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user/provider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProviderService = (function () {
    function ProviderService(api) {
        this.api = api;
    }
    ProviderService.prototype.getProviderTypes = function () {
        return this.api.get({
            url: '/providerTypes'
        });
    };
    ProviderService.prototype.getProviderByOwnerEmail = function (opts) {
        return this.api.get({
            url: '/providers/search/findByOwner?email=' + encodeURIComponent(opts.owneremail)
        });
    };
    ProviderService.prototype.addProvider = function (opts) {
        return this.api.post({
            url: '/providers',
            data: {
                name: opts.name || '',
                address: opts.address
            }
        });
    };
    ProviderService.prototype.setUserToProvider = function (opts) {
        return this.api.post({
            url: '/users/' + opts.userid + '/provider',
            data: {
                id: opts.providerid
            }
        });
    };
    ProviderService.prototype.updateProvider = function (opts) {
        var providerData = {};
        if (opts.id) {
            if (opts.type && opts.type.id) {
                providerData['type'] = opts.type;
            }
            if (opts.insured != null) {
                providerData['insured'] = opts.insured;
            }
            if (opts.hasWorkersComp != null) {
                providerData['hasWorkersComp'] = opts.hasWorkersComp;
            }
            if (opts.serviceAreas && opts.serviceAreas.length > 0) {
                providerData['serviceAreas'] = opts.serviceAreas;
            }
            return this.api.patch({
                url: '/providers/' + opts.id,
                data: providerData
            });
        }
        else {
            return new Promise(function (r, j) {
                r({
                    err: {
                        code: 'provider id is required'
                    }
                });
            });
        }
    };
    return ProviderService;
}());
ProviderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ProviderService);

var _a;
//# sourceMappingURL=provider.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(api) {
        this.api = api;
    }
    UserService.prototype.createUser = function (opts) {
        var headers = {};
        if (opts.headers) {
            headers = opts.headers;
        }
        var formData = {
            email: opts.email,
            password: opts.password,
            roles: opts.roles
        };
        if (opts.firstName) {
            formData['firstName'] = opts.firstName;
        }
        if (opts.firstName) {
            formData['lastName'] = opts.lastName;
        }
        if (opts.firstName) {
            formData['phone'] = opts.phone;
        }
        if (opts.safetyTrained) {
            formData['safetyTrained'] = opts.safetyTrained;
        }
        return this.api.post({
            url: '/users',
            data: formData,
            headers: headers
        });
    };
    UserService.prototype.getUsers = function () {
        var _this = this;
        return this.api.post({
            url: '/auth/login',
            data: {
                email: 'mtottimpudi@evoketechnologies.com',
                password: 'password'
            }
        }).then(function (_a) {
            var err = _a.err, fullResponse = _a.fullResponse;
            var Authorization = fullResponse.getResponseHeader('authorization');
            return _this.api.get({
                url: '/users',
                headers: {
                    Authorization: Authorization
                }
            });
        });
    };
    UserService.prototype.resendVerificationCode = function (opts) {
        var headers = {};
        if (opts.headers) {
            headers = opts.headers;
        }
        return this.api.post({
            url: '/users/' + opts.id + '/actions/reactivate',
            headers: headers
        });
    };
    UserService.prototype.verifyUser = function (opts) {
        var headers = {};
        if (opts.headers) {
            headers = opts.headers;
        }
        return this.api.post({
            url: '/auth/activate',
            data: {
                email: opts.email,
                authToken: opts.authToken
            },
            headers: headers
        });
    };
    UserService.prototype.updateUser = function (opts) {
        if (opts.id) {
            var updatingUser = {};
            updatingUser.id = opts.id;
            if (opts.firstName) {
                updatingUser.firstName = opts.firstName;
            }
            if (opts.lastName) {
                updatingUser.lastName = opts.lastName;
            }
            if (opts.phone) {
                updatingUser.phone = opts.phone;
            }
            if (opts.roles) {
                updatingUser.roles = opts.roles;
            }
            if (opts.safetyTrained != null) {
                updatingUser.safetyTrained = opts.safetyTrained;
            }
            return this.api.patch({
                url: '/users/' + opts.id,
                data: updatingUser
            });
        }
        else {
            return new Promise(function (r, e) {
                r({
                    err: {
                        code: 400,
                        msg: 'user id is required'
                    }
                });
            });
        }
    };
    UserService.prototype.updateUserManufacturers = function (opts) {
        if (opts.id) {
            return this.api.post({
                url: '/users/' + opts.id + '/manufacturers',
                data: { manufacturers: opts.manufacturers }
            });
        }
        else {
            return new Promise(function (r, e) {
                r({
                    err: {
                        code: 400,
                        msg: 'user id is required'
                    }
                });
            });
        }
    };
    UserService.prototype.updateUserTechnologyTypes = function (opts) {
        if (opts.id) {
            return this.api.post({
                url: '/users/' + opts.id + '/technologyTypes',
                data: { technologyTypes: opts.technologyTypes }
            });
        }
        else {
            return new Promise(function (r, e) {
                r({
                    err: {
                        code: 400,
                        msg: 'user id is required'
                    }
                });
            });
        }
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utils/pub-sub.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubSubService; });
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

var PubSubService = (function () {
    function PubSubService() {
        this.EventHash = {};
    }
    PubSubService.prototype.subscribe = function (eventName, subscribeFn) {
        if (!this.EventHash[eventName]) {
            this.EventHash[eventName] = [];
        }
        this.EventHash[eventName].push(subscribeFn);
    };
    PubSubService.prototype.publish = function (eventName) {
        if (this.EventHash[eventName]) {
            this.EventHash[eventName].forEach(function (fn) {
                setTimeout(fn, 0);
            });
        }
    };
    return PubSubService;
}());
PubSubService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PubSubService);

//# sourceMappingURL=pub-sub.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utils/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_cookies__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.setCookie = function (key, val) {
        __WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].set(key, val);
    };
    UtilsService.prototype.getCookie = function (key) {
        return __WEBPACK_IMPORTED_MODULE_1_ng2_cookies__["Cookie"].get(key);
    };
    return UtilsService;
}());
UtilsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UtilsService);

//# sourceMappingURL=utils.service.js.map

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
    production: false,
    apiUrl: 'https://svd-up-rest-dev.azurewebsites.net/api/v1',
    preLoad: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
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