webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/addtopic/addtopic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/addtopic/addtopic.component.html":
/***/ (function(module, exports) {

module.exports = "\n    \n    <form #formTopic = 'ngForm' (submit)='create(formTopic)'>\n      <label for=\"question\">Question:</label>\n      <input type=\"text\" name=\"question\" id = \"question\" value=\"\" \n      required\n      minlength = 8\n      [(ngModel)] = 'newtopic.question' \n      #question = 'ngModel'>\n       <div *ngIf='question.errors && (question.touched || formTopic.submitted)'>\n          <small id = \"red\" *ngIf = \"question.errors?.required\">* Question is required</small><br>\n          <small id = \"red\" *ngIf = \"question.errors?.minlength\">* Question must be at least 8 characters long</small>\n      </div><br>\n\n       <label for=\"option1\">Option 1:</label>\n      <input type=\"text\" name=\"option1\" id = \"option1\" value=\"\" \n      required\n      minlength = 3\n      [(ngModel)] = 'newtopic.option1' \n      #option1 = 'ngModel'>\n       <div *ngIf='option1.errors && (option1.touched || formTopic.submitted)'>\n          <small id = \"red\" *ngIf = \"option1.errors?.required\">* Option 1 is required</small><br>\n          <small id = \"red\" *ngIf = \"option1.errors?.minlength\">* Option 1 must be at least 3 characters long</small>\n      </div><br>\n\n        <label for=\"option2\">Option 2:</label>\n      <input type=\"text\" name=\"option2\" id = \"option2\" value=\"\" \n      required\n      minlength = 3\n      [(ngModel)] = 'newtopic.option2' \n      #option2 = 'ngModel'>\n       <div *ngIf='option2.errors && (option2.touched || formTopic.submitted)'>\n          <small id = \"red\" *ngIf = \"option2.errors?.required\">* Option 2 is required</small><br>\n          <small id = \"red\" *ngIf = \"option2.errors?.minlength\">* Option 2 must be at least 3 characters long</small>\n      </div><br>\n\n      <label for=\"option3\">Option 3:</label>\n      <input type=\"text\" name=\"option3\" id = \"option3\" value=\"\" \n      required\n      minlength = 3\n      [(ngModel)] = 'newtopic.option3' \n      #option3 = 'ngModel'>\n       <div *ngIf='option3.errors && (option3.touched || formTopic.submitted)'>\n          <small id = \"red\" *ngIf = \"option3.errors?.required\">* Option 3 is required</small><br>\n          <small id = \"red\" *ngIf = \"option3.errors?.minlength\">* Option 3 must be at least 3 characters long</small>\n      </div><br>\n\n      <label for=\"option4\">Option 4:</label>\n      <input type=\"text\" name=\"option4\" id = \"option4\" value=\"\" \n      required\n      minlength = 3\n      [(ngModel)] = 'newtopic.option4' \n      #option4 = 'ngModel'>\n       <div *ngIf='option4.errors && (option4.touched || formTopic.submitted)'>\n          <small id = \"red\" *ngIf = \"option4.errors?.required\">* Option 4 is required</small><br>\n          <small id = \"red\" *ngIf = \"option4.errors?.minlength\">* Option 4 must be at least 3 characters long</small>\n      </div><br>\n      \n         <button class = \"col s2 offset-s10\" type=\"submit\" [disabled] = \"!formTopic.form.valid\" name=\"submit\" value=\"Add Topic\" class = \"waves-effect waves-light btn green\">Add Topic </button>\n      \n    </form>\n\n    \n  \n "

/***/ }),

/***/ "../../../../../src/app/addtopic/addtopic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtopicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddtopicComponent = (function () {
    function AddtopicComponent(_cookieService, _httpService, _route) {
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this._route = _route;
        this.createtopic = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.newtopic = {
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: ''
        };
    }
    AddtopicComponent.prototype.ngOnInit = function () {
        this.curruser = this._cookieService.get("key");
    };
    AddtopicComponent.prototype.create = function (form) {
        var _this = this;
        this._httpService.createTopic(this.newtopic, this.curruser)
            .then(function (data) { console.log(data); _this.createtopic.emit(); })
            .catch(function (err) { console.log(err); });
        form.resetForm();
    };
    return AddtopicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddtopicComponent.prototype, "createtopic", void 0);
AddtopicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addtopic',
        template: __webpack_require__("../../../../../src/app/addtopic/addtopic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/addtopic/addtopic.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], AddtopicComponent);

var _a, _b, _c;
//# sourceMappingURL=addtopic.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topicdetail_topicdetail_component__ = __webpack_require__("../../../../../src/app/topicdetail/topicdetail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { CreateComponent } from './create/create.component';

//import { AddtopicComponent } from './addtopic/addtopic.component';
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', redirectTo: 'login' },
    { path: 'poll/:id', component: __WEBPACK_IMPORTED_MODULE_4__topicdetail_topicdetail_component__["a" /* TopicdetailComponent */] },
    //{ path: 'create', component: CreateComponent },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(_cookieService) {
        this._cookieService = _cookieService;
        this.title = 'app';
        this.key = this._cookieService.get("key");
        if (this.key === undefined) {
            this.headerfalse = false;
        }
    }
    AppComponent.prototype.logout = function () {
        console.log("The key is:", (this._cookieService.get("key")));
        this._cookieService.removeAll();
        console.log("The key is empty:", (this._cookieService.get("key")));
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addtopic_addtopic_component__ = __webpack_require__("../../../../../src/app/addtopic/addtopic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__topicdetail_topicdetail_component__ = __webpack_require__("../../../../../src/app/topicdetail/topicdetail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { CreateComponent } from './create/create.component';


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            //CreateComponent,
            __WEBPACK_IMPORTED_MODULE_10__addtopic_addtopic_component__["a" /* AddtopicComponent */],
            __WEBPACK_IMPORTED_MODULE_11__topicdetail_topicdetail_component__["a" /* TopicdetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_9_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n<a [routerLink] = \"['/logout']\" (click)=\"logout()\"> Logout </a>\n</p>\n<h2>Welcome, {{key}}!</h2>\n<h3>Current Poll</h3>\n\n<form>\n<input type=\"text\" name= \"search\" value=\"\" placeholder=\"search\"><br>  \n</form>\n<br>\n\n<div>\n  <table  [ngStyle]=\"{\n  'border': '1px solid black'\n}\">\n  <thead>\n   \n    <th>User Name:</th>\n    <th>Survey Question:</th>\n    <th>Date Posted:</th>\n    <th>Action:Delete</th>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let topic of topics\">\n      <td>{{topic._user.username}}</td>\n      <td><a [routerLink]=\"['/poll',topic._id]\">{{topic.question}}</a></td>\n      <td>{{topic.createdAt | date:'longDate'}}</td>\n      <td *ngIf = 'key === topic._user.username'><button (click)=\"destroy(topic._id, topic.description)\">Delete </button> </td>\n    </tr>\n  </tbody>\n</table>\n<br>\n<h3>Question Form:</h3>\n<app-addtopic (createtopic) = \"updatetopics()\"></app-addtopic>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    function DashboardComponent(_cookieService, _httpService, router) {
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.router = router;
        this.topics = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.key = this._cookieService.get("key");
        if (this.key === undefined) {
            this.router.navigate(['/login']);
        }
        this._httpService.retrieveTopics()
            .then(function (data) { console.log("topics in dasboard", data); _this.topics = data; })
            .catch(function (err) { console.log("error in topics retrieval", err); });
    };
    DashboardComponent.prototype.updatetopics = function () {
        var _this = this;
        this._httpService.retrieveTopics()
            .then(function (data) { console.log("topics in dasboard", data); _this.topics = data; })
            .catch(function (err) { console.log(err); });
    };
    DashboardComponent.prototype.logout = function () {
        console.log("The key is:", (this._cookieService.get("key")));
        this._cookieService.removeAll();
        console.log("The key is empty:", (this._cookieService.get("key")));
        this.router.navigate(['/login']);
    };
    DashboardComponent.prototype.destroy = function (topicid, topic) {
        var _this = this;
        console.log("destroying topic");
        this._httpService.destroyOneTopic(topicid, topic)
            .then(function (data) {
            console.log("topics in dasboard", data);
            _this._httpService.retrieveTopics()
                .then(function (data) { console.log("topics in dasboard", data); _this.topics = data; })
                .catch(function (err) { console.log("error in topics retrieval", err); });
        })
            .catch(function (err) { console.log(err); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    //User CRUD
    HttpService.prototype.createUser = function (user) {
        console.log("in services", user);
        return this._http.post('/user_new', user)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    //Topic CRUD's
    HttpService.prototype.retrieveOneTopic = function (id) {
        return this._http.get("/topic/" + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.retrieveTopics = function () {
        return this._http.get("/topic")
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.createTopic = function (topic, name) {
        return this._http.post("/topic/" + name, topic)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.updateTopic = function (topic, id) {
        return this._http.put("/update/topic/" + id, topic)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.destroyOneTopic = function (id, topic) {
        return this._http.put("/destroy/topic/" + id, topic)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.upvote1 = function (post) {
        return this._http.post("/upvote1", post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.upvote2 = function (post) {
        return this._http.post("/upvote2", post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.upvote3 = function (post) {
        return this._http.post("/upvote3", post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    HttpService.prototype.upvote4 = function (post) {
        return this._http.post("/upvote4", post)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Please enter your name to join!\n</p>\n\n<form #loginForm = 'ngForm' (submit)='login()'>\n<label for=\"username\">Username:</label>\n<input type=\"text\" name=\"username\" id = 'username' required minlength = '4' #username = 'ngModel' [(ngModel)]=\"user.username\"><br>\n<input type=\"submit\" [disabled] = '!loginForm.valid'>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(_cookieService, _httpService, router) {
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.router = router;
        this.user = {
            username: ''
        };
        this.headerfalse = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        console.log("in the login function");
        this._httpService.createUser(this.user)
            .then(function (data) { console.log(data); })
            .catch(function (err) { console.log(err); });
        this._cookieService.put("key", this.user.username);
        console.log(this._cookieService.get("key"));
        this.router.navigate(['/dashboard']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/topicdetail/topicdetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/topicdetail/topicdetail.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p>\n<a [routerLink] = \"['/dashboard']\"> Go to Polls </a> \n</p>\n\n\n<h3> {{currtopic[0]?.question | json}} </h3>\n<p>Click the Vote button to choose one</p>\n\n<div>\n  <table [ngStyle]=\"{\n  'border': '1px solid black'\n}\">\n  <thead>\n   \n    <th>Option:</th>\n    <th>Current Count of Votes:</th>\n    <th>Action:Vote</th>\n  </thead>\n  <tbody>\n    <tr>\n      <td>{{currtopic[0]?.option1 | json}}</td>\n      <td>{{currtopic[0]?.vote1 | json}}</td>\n      <td><button (click)='vote1(currtopic[0]._id)'>Vote</button></td>\n    </tr>\n    <tr>\n      <td>{{currtopic[0]?.option2 | json}}</td>\n      <td>{{currtopic[0]?.vote2 | json}}</td>\n      <td><button (click)='vote2(currtopic[0]._id)'>Vote</button></td>\n    </tr>\n    <tr>\n      <td>{{currtopic[0]?.option3 | json}}</td>\n      <td>{{currtopic[0]?.vote3 | json}}</td>\n      <td><button (click)='vote3(currtopic[0]._id)'>Vote</button></td>\n    </tr>\n    <tr>\n      <td>{{currtopic[0]?.option4 | json}}</td>\n      <td>{{currtopic[0]?.vote4 | json}}</td>\n      <td><button (click)='vote4(currtopic[0]._id)'>Vote</button></td>\n    </tr>\n  </tbody>\n</table>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/topicdetail/topicdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service__ = __webpack_require__("../../../../../src/app/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicdetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopicdetailComponent = (function () {
    function TopicdetailComponent(_route, _cookieService, _httpService, router) {
        var _this = this;
        this._route = _route;
        this._cookieService = _cookieService;
        this._httpService = _httpService;
        this.router = router;
        this.currtopic = {};
        this._route.params.subscribe(function (param) {
            console.log("Params topic id", param.id);
            _this.topicid = param.id;
            _this._httpService.retrieveOneTopic(param.id)
                .then(function (data) {
                _this.currtopic = data;
                console.log("Topic:", _this.currtopic);
            })
                .catch(function (err) { console.log("err in retrieving one topic", err); });
        });
    }
    TopicdetailComponent.prototype.vote1 = function (id) {
        var _this = this;
        this.votepost = {
            topicid: id,
            user: this._cookieService.get("key")
        };
        console.log("im in vote1 update", this.votepost);
        this._httpService.upvote1(this.votepost)
            .then(function (data) {
            console.log("the new post:", data);
            _this._httpService.retrieveOneTopic(_this.topicid)
                .then(function (data) {
                _this.currtopic = data;
                console.log("Topic:", _this.currtopic);
            })
                .catch(function (err) { console.log("err in retrieving one topic", err); });
        })
            .catch(function (err) { console.log("Failed to add:", err); });
    };
    TopicdetailComponent.prototype.vote2 = function (id) {
        var _this = this;
        this.votepost = {
            topicid: id,
            user: this._cookieService.get("key")
        };
        console.log("im in vote1 update", this.votepost);
        this._httpService.upvote2(this.votepost)
            .then(function (data) {
            console.log("the new post:", data);
            _this._httpService.retrieveOneTopic(_this.topicid)
                .then(function (data) {
                _this.currtopic = data;
                console.log("Topic:", _this.currtopic);
            })
                .catch(function (err) { console.log("err in retrieving one topic", err); });
        })
            .catch(function (err) { console.log("Failed to add:", err); });
    };
    TopicdetailComponent.prototype.vote3 = function (id) {
        var _this = this;
        this.votepost = {
            topicid: id,
            user: this._cookieService.get("key")
        };
        console.log("im in vote1 update", this.votepost);
        this._httpService.upvote3(this.votepost)
            .then(function (data) {
            console.log("the new post:", data);
            _this._httpService.retrieveOneTopic(_this.topicid)
                .then(function (data) {
                _this.currtopic = data;
                console.log("Topic:", _this.currtopic);
            })
                .catch(function (err) { console.log("err in retrieving one topic", err); });
        })
            .catch(function (err) { console.log("Failed to add:", err); });
    };
    TopicdetailComponent.prototype.vote4 = function (id) {
        var _this = this;
        this.votepost = {
            topicid: id,
            user: this._cookieService.get("key")
        };
        console.log("im in vote1 update", this.votepost);
        this._httpService.upvote4(this.votepost)
            .then(function (data) {
            console.log("the new post:", data);
            _this._httpService.retrieveOneTopic(_this.topicid)
                .then(function (data) {
                _this.currtopic = data;
                console.log("Topic:", _this.currtopic);
            })
                .catch(function (err) { console.log("err in retrieving one topic", err); });
        })
            .catch(function (err) { console.log("Failed to add:", err); });
    };
    TopicdetailComponent.prototype.ngOnInit = function () {
    };
    return TopicdetailComponent;
}());
TopicdetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-topicdetail',
        template: __webpack_require__("../../../../../src/app/topicdetail/topicdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/topicdetail/topicdetail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__http_service__["a" /* HttpService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], TopicdetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=topicdetail.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map