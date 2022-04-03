"use strict";
(self["webpackChunkvex"] = self["webpackChunkvex"] || []).push([["src_app_pages_pages_auth_login_login_module_ts"],{

/***/ 81793:
/*!****************************************************************!*\
  !*** ./src/app/pages/pages/auth/login/login-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 23586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule] }); })();


/***/ }),

/***/ 23586:
/*!***********************************************************!*\
  !*** ./src/app/pages/pages/auth/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility */ 98456);
/* harmony import */ var _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iconify/icons-ic/twotone-visibility-off */ 42893);
/* harmony import */ var _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@vex/animations/fade-in-up.animation */ 84309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ 74344);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 88669);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 73981);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-quicklink */ 53883);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);


















function LoginComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u8ACB\u8F38\u5165E-Mail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_icon_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 19);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", ctx_r1.icVisibility);
} }
function LoginComponent_mat_icon_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 19);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icIcon", ctx_r2.icVisibilityOff);
} }
function LoginComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u8ACB\u8F38\u5165\u516D\u4F4D\u6578\u5BC6\u78BC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/register"]; };
class LoginComponent {
    constructor(router, fb, cd, snackbar, authService) {
        this.router = router;
        this.fb = fb;
        this.cd = cd;
        this.snackbar = snackbar;
        this.authService = authService;
        this.error = null;
        this.inputType = 'password';
        this.visible = false;
        this.icVisibility = _iconify_icons_ic_twotone_visibility__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.icVisibilityOff = _iconify_icons_ic_twotone_visibility_off__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]]
        });
    }
    loginWithGoogle() {
        this.authService
            .loginWithGoogle()
            .then(() => {
            this.authService.SetUserData();
            this.router.navigate(['/apps/aio-table']);
        })
            .catch((e) => {
            this.error = e.message;
            alert(e.message);
            console.log(e);
        });
    }
    send() {
        console.log(this.form.value);
        const data = {
            email: this.form.value.email,
            password: this.form.value.password,
            name: this.form.value.name,
        };
        this.authService
            .login(data)
            .then(() => {
            this.router.navigate(["/apps/aio-table"]);
        })
            .catch((e) => {
            this.error = e.message;
            alert(e.message);
            console.log(e);
            if (e.message === "💥這個 email 沒有登記！請先注冊。💥") {
                this.router.navigate(["/register"]);
            }
        });
    }
    toggleVisibility() {
        if (this.visible) {
            this.inputType = 'password';
            this.visible = false;
            this.cd.markForCheck();
        }
        else {
            this.inputType = 'text';
            this.visible = true;
            this.cd.markForCheck();
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["vex-login"]], decls: 33, vars: 10, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "w-full", "h-full", "bg-pattern"], [1, "w-full", "max-w-xs", "overflow-hidden", "card"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "p-6", "pb-0"], [1, "text-center", "fill-current"], ["src", "assets/img/demo/logo.svg", 1, "w-16"], [1, "mt-4", "text-center"], [1, "title"], ["color", "accent", "mat-raised-button", "", "type", "button", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "16px", 1, "p-6", 3, "formGroup"], ["fxFlex", "auto", "fxLayout", "column"], ["fxFlex", "grow"], ["formControlName", "email", "matInput", ""], [4, "ngIf"], ["formControlName", "password", "matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "matTooltip", "Toggle Visibility", "type", "button", 3, "click"], [3, "icIcon", 4, "ngIf"], ["color", "primary", "mat-raised-button", "", "type", "button", 3, "disabled", "click"], [1, "text-center", "text-secondary"], [3, "routerLink"], [3, "icIcon"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u8ACB\u767B\u5165");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() { return ctx.loginWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " GOOGLE \u8CEC\u6236\u767B\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, LoginComponent_mat_error_17_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u5BC6\u78BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_22_listener() { return ctx.toggleVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, LoginComponent_mat_icon_23_Template, 1, 1, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, LoginComponent_mat_icon_24_Template, 1, 1, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u8ACB\u8F38\u5165\u516D\u4F4D\u6578\u5BC6\u78BC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, LoginComponent_mat_error_27_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_28_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " EMAIL \u767B\u5165 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u7533\u8ACB\u65B0\u8CEC\u865F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.get("password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutGapDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, ngx_quicklink__WEBPACK_IMPORTED_MODULE_14__["ɵɵLinkDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_16__.IconDirective], styles: [".title[_ngcontent-%COMP%] {\n  font-size: larger;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHsgXHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICAvLyBjb2xvcjogcmVkO1xyXG59Il19 */"], data: { animation: [
            _vex_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInUp400ms
        ] } });


/***/ }),

/***/ 75937:
/*!********************************************************!*\
  !*** ./src/app/pages/pages/auth/login/login.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 81793);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 23586);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 88001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 58359);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 58852);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 94996);
/* harmony import */ var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @visurel/iconify-angular */ 49037);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 64731);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);













class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
            _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBarModule,
        _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_9__.IconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule] }); })();


/***/ }),

/***/ 94996:
/*!***************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/snack-bar.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SNACK_BAR_DATA": () => (/* binding */ MAT_SNACK_BAR_DATA),
/* harmony export */   "MAT_SNACK_BAR_DEFAULT_OPTIONS": () => (/* binding */ MAT_SNACK_BAR_DEFAULT_OPTIONS),
/* harmony export */   "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MatSnackBar": () => (/* binding */ MatSnackBar),
/* harmony export */   "MatSnackBarConfig": () => (/* binding */ MatSnackBarConfig),
/* harmony export */   "MatSnackBarContainer": () => (/* binding */ MatSnackBarContainer),
/* harmony export */   "MatSnackBarModule": () => (/* binding */ MatSnackBarModule),
/* harmony export */   "MatSnackBarRef": () => (/* binding */ MatSnackBarRef),
/* harmony export */   "SimpleSnackBar": () => (/* binding */ SimpleSnackBar),
/* harmony export */   "matSnackBarAnimations": () => (/* binding */ matSnackBarAnimations)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ 56519);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ 38252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 34357);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 47752);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 24575);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ 573);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47529);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 76567);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 46755);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ 42706);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ 59339);


















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to access the data that was passed in to a snack bar. */

function SimpleSnackBar_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r1.action();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.action);
  }
}

function MatSnackBarContainer_ng_template_1_Template(rf, ctx) {}

const MAT_SNACK_BAR_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatSnackBarData');
/**
 * Configuration used when opening a snack-bar.
 */

class MatSnackBarConfig {
  constructor() {
    /** The politeness level for the MatAriaLiveAnnouncer announcement. */
    this.politeness = 'assertive';
    /**
     * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
     * component or template, the announcement message will default to the specified message.
     */

    this.announcementMessage = '';
    /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */

    this.duration = 0;
    /** Data being injected into the child component. */

    this.data = null;
    /** The horizontal position to place the snack bar. */

    this.horizontalPosition = 'center';
    /** The vertical position to place the snack bar. */

    this.verticalPosition = 'bottom';
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Maximum amount of milliseconds that can be passed into setTimeout. */


const MAX_TIMEOUT = Math.pow(2, 31) - 1;
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */

class MatSnackBarRef {
  constructor(containerInstance, _overlayRef) {
    this._overlayRef = _overlayRef;
    /** Subject for notifying the user that the snack bar has been dismissed. */

    this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying the user that the snack bar has opened and appeared. */

    this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying the user that the snack bar action was called. */

    this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Whether the snack bar was dismissed using the action button. */

    this._dismissedByAction = false;
    this.containerInstance = containerInstance; // Dismiss snackbar on action.

    this.onAction().subscribe(() => this.dismiss());

    containerInstance._onExit.subscribe(() => this._finishDismiss());
  }
  /** Dismisses the snack bar. */


  dismiss() {
    if (!this._afterDismissed.closed) {
      this.containerInstance.exit();
    }

    clearTimeout(this._durationTimeoutId);
  }
  /** Marks the snackbar action clicked. */


  dismissWithAction() {
    if (!this._onAction.closed) {
      this._dismissedByAction = true;

      this._onAction.next();

      this._onAction.complete();
    }

    clearTimeout(this._durationTimeoutId);
  }
  /**
   * Marks the snackbar action clicked.
   * @deprecated Use `dismissWithAction` instead.
   * @breaking-change 8.0.0
   */


  closeWithAction() {
    this.dismissWithAction();
  }
  /** Dismisses the snack bar after some duration */


  _dismissAfter(duration) {
    // Note that we need to cap the duration to the maximum value for setTimeout, because
    // it'll revert to 1 if somebody passes in something greater (e.g. `Infinity`). See #17234.
    this._durationTimeoutId = setTimeout(() => this.dismiss(), Math.min(duration, MAX_TIMEOUT));
  }
  /** Marks the snackbar as opened */


  _open() {
    if (!this._afterOpened.closed) {
      this._afterOpened.next();

      this._afterOpened.complete();
    }
  }
  /** Cleans up the DOM after closing. */


  _finishDismiss() {
    this._overlayRef.dispose();

    if (!this._onAction.closed) {
      this._onAction.complete();
    }

    this._afterDismissed.next({
      dismissedByAction: this._dismissedByAction
    });

    this._afterDismissed.complete();

    this._dismissedByAction = false;
  }
  /** Gets an observable that is notified when the snack bar is finished closing. */


  afterDismissed() {
    return this._afterDismissed;
  }
  /** Gets an observable that is notified when the snack bar has opened and appeared. */


  afterOpened() {
    return this.containerInstance._onEnter;
  }
  /** Gets an observable that is notified when the snack bar action is called. */


  onAction() {
    return this._onAction;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A component used to open as the default snack bar, matching material spec.
 * This should only be used internally by the snack bar service.
 */


class SimpleSnackBar {
  constructor(snackBarRef, data) {
    this.snackBarRef = snackBarRef;
    this.data = data;
  }
  /** Performs the action on the snack bar. */


  action() {
    this.snackBarRef.dismissWithAction();
  }
  /** If the action button should be shown. */


  get hasAction() {
    return !!this.data.action;
  }

}

SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(t) {
  return new (t || SimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SNACK_BAR_DATA));
};

SimpleSnackBar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SimpleSnackBar,
  selectors: [["simple-snack-bar"]],
  hostAttrs: [1, "mat-simple-snackbar"],
  decls: 3,
  vars: 2,
  consts: [["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]],
  template: function SimpleSnackBar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimpleSnackBar_div_2_Template, 3, 1, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasAction);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
  styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimpleSnackBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'simple-snack-bar',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-simple-snackbar'
      },
      template: "<span>{{data.message}}</span>\n<div class=\"mat-simple-snackbar-action\"  *ngIf=\"hasAction\">\n  <button mat-button (click)=\"action()\">{{data.action}}</button>\n</div>\n",
      styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"]
    }]
  }], function () {
    return [{
      type: MatSnackBarRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SNACK_BAR_DATA]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material snack bar.
 * @docs-private
 */


const matSnackBarAnimations = {
  /** Animation that shows and hides a snack bar. */
  snackBarState: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('state', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('void, hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'scale(0.8)',
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'scale(1)',
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => void, * => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('75ms cubic-bezier(0.4, 0.0, 1, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0
  })))])
};
/**
 * Internal component that wraps user-provided snack bar content.
 * @docs-private
 */

class MatSnackBarContainer extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.BasePortalOutlet {
  constructor(_ngZone, _elementRef, _changeDetectorRef, _platform,
  /** The snack bar configuration. */
  snackBarConfig) {
    super();
    this._ngZone = _ngZone;
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._platform = _platform;
    this.snackBarConfig = snackBarConfig;
    /** The number of milliseconds to wait before announcing the snack bar's content. */

    this._announceDelay = 150;
    /** Whether the component has been destroyed. */

    this._destroyed = false;
    /** Subject for notifying that the snack bar has announced to screen readers. */

    this._onAnnounce = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying that the snack bar has exited from view. */

    this._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject for notifying that the snack bar has finished entering the view. */

    this._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** The state of the snack bar animations. */

    this._animationState = 'void';
    /**
     * Attaches a DOM portal to the snack bar container.
     * @deprecated To be turned into a method.
     * @breaking-change 10.0.0
     */

    this.attachDomPortal = portal => {
      this._assertNotAttached();

      this._applySnackBarClasses();

      return this._portalOutlet.attachDomPortal(portal);
    }; // Use aria-live rather than a live role like 'alert' or 'status'
    // because NVDA and JAWS have show inconsistent behavior with live roles.


    if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
      this._live = 'assertive';
    } else if (snackBarConfig.politeness === 'off') {
      this._live = 'off';
    } else {
      this._live = 'polite';
    } // Only set role for Firefox. Set role based on aria-live because setting role="alert" implies
    // aria-live="assertive" which may cause issues if aria-live is set to "polite" above.


    if (this._platform.FIREFOX) {
      if (this._live === 'polite') {
        this._role = 'status';
      }

      if (this._live === 'assertive') {
        this._role = 'alert';
      }
    }
  }
  /** Attach a component portal as content to this snack bar container. */


  attachComponentPortal(portal) {
    this._assertNotAttached();

    this._applySnackBarClasses();

    return this._portalOutlet.attachComponentPortal(portal);
  }
  /** Attach a template portal as content to this snack bar container. */


  attachTemplatePortal(portal) {
    this._assertNotAttached();

    this._applySnackBarClasses();

    return this._portalOutlet.attachTemplatePortal(portal);
  }
  /** Handle end of animations, updating the state of the snackbar. */


  onAnimationEnd(event) {
    const {
      fromState,
      toState
    } = event;

    if (toState === 'void' && fromState !== 'void' || toState === 'hidden') {
      this._completeExit();
    }

    if (toState === 'visible') {
      // Note: we shouldn't use `this` inside the zone callback,
      // because it can cause a memory leak.
      const onEnter = this._onEnter;

      this._ngZone.run(() => {
        onEnter.next();
        onEnter.complete();
      });
    }
  }
  /** Begin animation of snack bar entrance into view. */


  enter() {
    if (!this._destroyed) {
      this._animationState = 'visible';

      this._changeDetectorRef.detectChanges();

      this._screenReaderAnnounce();
    }
  }
  /** Begin animation of the snack bar exiting from view. */


  exit() {
    // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
    // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
    // `MatSnackBar.open`).
    this._animationState = 'hidden'; // Mark this element with an 'exit' attribute to indicate that the snackbar has
    // been dismissed and will soon be removed from the DOM. This is used by the snackbar
    // test harness.

    this._elementRef.nativeElement.setAttribute('mat-exit', ''); // If the snack bar hasn't been announced by the time it exits it wouldn't have been open
    // long enough to visually read it either, so clear the timeout for announcing.


    clearTimeout(this._announceTimeoutId);
    return this._onExit;
  }
  /** Makes sure the exit callbacks have been invoked when the element is destroyed. */


  ngOnDestroy() {
    this._destroyed = true;

    this._completeExit();
  }
  /**
   * Waits for the zone to settle before removing the element. Helps prevent
   * errors where we end up removing an element which is in the middle of an animation.
   */


  _completeExit() {
    this._ngZone.onMicrotaskEmpty.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1)).subscribe(() => {
      this._onExit.next();

      this._onExit.complete();
    });
  }
  /** Applies the various positioning and user-configured CSS classes to the snack bar. */


  _applySnackBarClasses() {
    const element = this._elementRef.nativeElement;
    const panelClasses = this.snackBarConfig.panelClass;

    if (panelClasses) {
      if (Array.isArray(panelClasses)) {
        // Note that we can't use a spread here, because IE doesn't support multiple arguments.
        panelClasses.forEach(cssClass => element.classList.add(cssClass));
      } else {
        element.classList.add(panelClasses);
      }
    }

    if (this.snackBarConfig.horizontalPosition === 'center') {
      element.classList.add('mat-snack-bar-center');
    }

    if (this.snackBarConfig.verticalPosition === 'top') {
      element.classList.add('mat-snack-bar-top');
    }
  }
  /** Asserts that no content is already attached to the container. */


  _assertNotAttached() {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Attempting to attach snack bar content after content is already attached');
    }
  }
  /**
   * Starts a timeout to move the snack bar content to the live region so screen readers will
   * announce it.
   */


  _screenReaderAnnounce() {
    if (!this._announceTimeoutId) {
      this._ngZone.runOutsideAngular(() => {
        this._announceTimeoutId = setTimeout(() => {
          const inertElement = this._elementRef.nativeElement.querySelector('[aria-hidden]');

          const liveElement = this._elementRef.nativeElement.querySelector('[aria-live]');

          if (inertElement && liveElement) {
            // If an element in the snack bar content is focused before being moved
            // track it and restore focus after moving to the live region.
            let focusedElement = null;

            if (this._platform.isBrowser && document.activeElement instanceof HTMLElement && inertElement.contains(document.activeElement)) {
              focusedElement = document.activeElement;
            }

            inertElement.removeAttribute('aria-hidden');
            liveElement.appendChild(inertElement);
            focusedElement?.focus();

            this._onAnnounce.next();

            this._onAnnounce.complete();
          }
        }, this._announceDelay);
      });
    }
  }

}

MatSnackBarContainer.ɵfac = function MatSnackBarContainer_Factory(t) {
  return new (t || MatSnackBarContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSnackBarConfig));
};

MatSnackBarContainer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSnackBarContainer,
  selectors: [["snack-bar-container"]],
  viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.CdkPortalOutlet, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
    }
  },
  hostAttrs: [1, "mat-snack-bar-container"],
  hostVars: 1,
  hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) {
        return ctx.onAnimationEnd($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@state", ctx._animationState);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 2,
  consts: [["aria-hidden", "true"], ["cdkPortalOutlet", ""]],
  template: function MatSnackBarContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatSnackBarContainer_ng_template_1_Template, 0, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-live", ctx._live)("role", ctx._role);
    }
  },
  directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.CdkPortalOutlet],
  styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],
  encapsulation: 2,
  data: {
    animation: [matSnackBarAnimations.snackBarState]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'snack-bar-container',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      animations: [matSnackBarAnimations.snackBarState],
      host: {
        'class': 'mat-snack-bar-container',
        '[@state]': '_animationState',
        '(@state.done)': 'onAnimationEnd($event)'
      },
      template: "<!-- Initially holds the snack bar content, will be empty after announcing to screen readers. -->\n<div aria-hidden=\"true\">\n  <ng-template cdkPortalOutlet></ng-template>\n</div>\n\n<!-- Will receive the snack bar content from the non-live div, move will happen a short delay after opening -->\n<div [attr.aria-live]=\"_live\" [attr.role]=\"_role\"></div>\n",
      styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__.Platform
    }, {
      type: MatSnackBarConfig
    }];
  }, {
    _portalOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSnackBarModule {}

MatSnackBarModule.ɵfac = function MatSnackBarModule_Factory(t) {
  return new (t || MatSnackBarModule)();
};

MatSnackBarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSnackBarModule
});
MatSnackBarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule],
      exports: [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatCommonModule],
      declarations: [MatSnackBarContainer, SimpleSnackBar]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to specify default snack bar. */


const MAT_SNACK_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-snack-bar-default-options', {
  providedIn: 'root',
  factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
  return new MatSnackBarConfig();
}
/**
 * Service to dispatch Material Design snack bar messages.
 */


class MatSnackBar {
  constructor(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
    this._overlay = _overlay;
    this._live = _live;
    this._injector = _injector;
    this._breakpointObserver = _breakpointObserver;
    this._parentSnackBar = _parentSnackBar;
    this._defaultConfig = _defaultConfig;
    /**
     * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
     * If there is a parent snack-bar service, all operations should delegate to that parent
     * via `_openedSnackBarRef`.
     */

    this._snackBarRefAtThisLevel = null;
    /** The component that should be rendered as the snack bar's simple component. */

    this.simpleSnackBarComponent = SimpleSnackBar;
    /** The container component that attaches the provided template or component. */

    this.snackBarContainerComponent = MatSnackBarContainer;
    /** The CSS class to apply for handset mode. */

    this.handsetCssClass = 'mat-snack-bar-handset';
  }
  /** Reference to the currently opened snackbar at *any* level. */


  get _openedSnackBarRef() {
    const parent = this._parentSnackBar;
    return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
  }

  set _openedSnackBarRef(value) {
    if (this._parentSnackBar) {
      this._parentSnackBar._openedSnackBarRef = value;
    } else {
      this._snackBarRefAtThisLevel = value;
    }
  }
  /**
   * Creates and dispatches a snack bar with a custom component for the content, removing any
   * currently opened snack bars.
   *
   * @param component Component to be instantiated.
   * @param config Extra configuration for the snack bar.
   */


  openFromComponent(component, config) {
    return this._attach(component, config);
  }
  /**
   * Creates and dispatches a snack bar with a custom template for the content, removing any
   * currently opened snack bars.
   *
   * @param template Template to be instantiated.
   * @param config Extra configuration for the snack bar.
   */


  openFromTemplate(template, config) {
    return this._attach(template, config);
  }
  /**
   * Opens a snackbar with a message and an optional action.
   * @param message The message to show in the snackbar.
   * @param action The label for the snackbar action.
   * @param config Additional configuration options for the snackbar.
   */


  open(message, action = '', config) {
    const _config = { ...this._defaultConfig,
      ...config
    }; // Since the user doesn't have access to the component, we can
    // override the data to pass in our own message and action.

    _config.data = {
      message,
      action
    }; // Since the snack bar has `role="alert"`, we don't
    // want to announce the same message twice.

    if (_config.announcementMessage === message) {
      _config.announcementMessage = undefined;
    }

    return this.openFromComponent(this.simpleSnackBarComponent, _config);
  }
  /**
   * Dismisses the currently-visible snack bar.
   */


  dismiss() {
    if (this._openedSnackBarRef) {
      this._openedSnackBarRef.dismiss();
    }
  }

  ngOnDestroy() {
    // Only dismiss the snack bar at the current level on destroy.
    if (this._snackBarRefAtThisLevel) {
      this._snackBarRefAtThisLevel.dismiss();
    }
  }
  /**
   * Attaches the snack bar container component to the overlay.
   */


  _attachSnackBarContainer(overlayRef, config) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarConfig,
        useValue: config
      }]
    });
    const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.ComponentPortal(this.snackBarContainerComponent, config.viewContainerRef, injector);
    const containerRef = overlayRef.attach(containerPortal);
    containerRef.instance.snackBarConfig = config;
    return containerRef.instance;
  }
  /**
   * Places a new component or a template as the content of the snack bar container.
   */


  _attach(content, userConfig) {
    const config = { ...new MatSnackBarConfig(),
      ...this._defaultConfig,
      ...userConfig
    };

    const overlayRef = this._createOverlay(config);

    const container = this._attachSnackBarContainer(overlayRef, config);

    const snackBarRef = new MatSnackBarRef(container, overlayRef);

    if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef) {
      const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.TemplatePortal(content, null, {
        $implicit: config.data,
        snackBarRef
      });
      snackBarRef.instance = container.attachTemplatePortal(portal);
    } else {
      const injector = this._createInjector(config, snackBarRef);

      const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.ComponentPortal(content, undefined, injector);
      const contentRef = container.attachComponentPortal(portal); // We can't pass this via the injector, because the injector is created earlier.

      snackBarRef.instance = contentRef.instance;
    } // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
    // appropriate. This class is applied to the overlay element because the overlay must expand to
    // fill the width of the screen for full width snackbars.


    this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.Breakpoints.HandsetPortrait).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(overlayRef.detachments())).subscribe(state => {
      overlayRef.overlayElement.classList.toggle(this.handsetCssClass, state.matches);
    });

    if (config.announcementMessage) {
      // Wait until the snack bar contents have been announced then deliver this message.
      container._onAnnounce.subscribe(() => {
        this._live.announce(config.announcementMessage, config.politeness);
      });
    }

    this._animateSnackBar(snackBarRef, config);

    this._openedSnackBarRef = snackBarRef;
    return this._openedSnackBarRef;
  }
  /** Animates the old snack bar out and the new one in. */


  _animateSnackBar(snackBarRef, config) {
    // When the snackbar is dismissed, clear the reference to it.
    snackBarRef.afterDismissed().subscribe(() => {
      // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
      if (this._openedSnackBarRef == snackBarRef) {
        this._openedSnackBarRef = null;
      }

      if (config.announcementMessage) {
        this._live.clear();
      }
    });

    if (this._openedSnackBarRef) {
      // If a snack bar is already in view, dismiss it and enter the
      // new snack bar after exit animation is complete.
      this._openedSnackBarRef.afterDismissed().subscribe(() => {
        snackBarRef.containerInstance.enter();
      });

      this._openedSnackBarRef.dismiss();
    } else {
      // If no snack bar is in view, enter the new snack bar.
      snackBarRef.containerInstance.enter();
    } // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.


    if (config.duration && config.duration > 0) {
      snackBarRef.afterOpened().subscribe(() => snackBarRef._dismissAfter(config.duration));
    }
  }
  /**
   * Creates a new overlay and places it in the correct location.
   * @param config The user-specified snack bar config.
   */


  _createOverlay(config) {
    const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.OverlayConfig();
    overlayConfig.direction = config.direction;

    let positionStrategy = this._overlay.position().global(); // Set horizontal position.


    const isRtl = config.direction === 'rtl';
    const isLeft = config.horizontalPosition === 'left' || config.horizontalPosition === 'start' && !isRtl || config.horizontalPosition === 'end' && isRtl;
    const isRight = !isLeft && config.horizontalPosition !== 'center';

    if (isLeft) {
      positionStrategy.left('0');
    } else if (isRight) {
      positionStrategy.right('0');
    } else {
      positionStrategy.centerHorizontally();
    } // Set horizontal position.


    if (config.verticalPosition === 'top') {
      positionStrategy.top('0');
    } else {
      positionStrategy.bottom('0');
    }

    overlayConfig.positionStrategy = positionStrategy;
    return this._overlay.create(overlayConfig);
  }
  /**
   * Creates an injector to be used inside of a snack bar component.
   * @param config Config that was used to create the snack bar.
   * @param snackBarRef Reference to the snack bar.
   */


  _createInjector(config, snackBarRef) {
    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
    return _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector.create({
      parent: userInjector || this._injector,
      providers: [{
        provide: MatSnackBarRef,
        useValue: snackBarRef
      }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: config.data
      }]
    });
  }

}

MatSnackBar.ɵfac = function MatSnackBar_Factory(t) {
  return new (t || MatSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatSnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_SNACK_BAR_DEFAULT_OPTIONS));
};

MatSnackBar.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatSnackBar,
  factory: MatSnackBar.ɵfac,
  providedIn: MatSnackBarModule
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSnackBar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: MatSnackBarModule
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.LiveAnnouncer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.BreakpointObserver
    }, {
      type: MatSnackBar,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: MatSnackBarConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_auth_login_login_module_ts.js.map