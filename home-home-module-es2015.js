(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");





const routes = [
    {
        path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const _c0 = function () { return ["/videos/spirit"]; };
const _c1 = function () { return ["/videos/health"]; };
const _c2 = function () { return ["/events"]; };
const _c3 = function () { return ["/books"]; };
class HomeComponent {
    constructor(firestore) {
        this.firestore = firestore;
        this.books = firestore.collection('books').get();
        this.booksCollection = [{
                id: 0,
                buy_url: "string",
                description: "book description",
                img: "default.jpg",
                title: "book",
            }
        ];
    }
    ngOnInit() {
        this.books.subscribe(querySnapshot => {
            this.booksCollection.splice(0);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                this.booksCollection.push(doc.data());
            });
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 64, vars: 13, consts: [["id", "hero"], [1, "container"], [1, "content-center"], ["fragment", "videos-spirit-title", 1, "btn", "btn-blue", 3, "routerLink"], [1, "videos"], [2, "font-weight", "650", "font-size", "42px", "text-align", "center", "color", "#4E9F54"], [1, "row"], [1, "col-md-6", "p-5"], [1, "video-espiritual"], ["src", "assets/img/mandala-azul.svg", "alt", "", 2, "max-height", "160px"], [2, "font-family", "Open Sans", "font-size", "30px", "color", "#263978", "padding-top", "30px"], [2, "color", "#000", "font-family", "Open Sans", "font-size", "16px", "font-weight", "400", "margin-bottom", "24px", "margin-top", "24px"], ["src", "assets/img/bienestar2-verde.svg", "alt", "", 2, "max-height", "160px"], [2, "font-family", "Open Sans", "font-size", "30px", "color", "#4E9F54", "padding-top", "30px"], ["fragment", "videos-health-title", 1, "btn", "btn-green", 3, "routerLink"], [1, "eventos", 2, "background-color", "rgba(38, 57, 120, 0.2)", "padding", "50px 0 50px 0"], [2, "font-weight", "600", "font-size", "42px", "text-align", "center", "color", "#263978"], [2, "font-family", "Open Sans", "font-size", "40px", "color", "#263978", "font-weight", "600", "text-align", "left"], [2, "font-size", "30px"], [2, "font-family", "Open Sans", "color", "#263978", "font-size", "30px", "font-weight", "600"], [2, "color", "#000", "font-family", "Open Sans", "font-size", "16px", "font-weight", "400", "margin-top", "30px", "margin-bottom", "30px"], ["fragment", "events-title", 1, "btn", "btn-blue", 3, "routerLink"], ["src", "assets/img/events/conferencia.jpg", "alt", "", 1, "img-fluid", 2, "padding-top", "20px"], [1, "libros", 2, "background-color", "rgba(78, 159, 84, 0.2)", "padding-top", "50px"], [2, "font-weight", "600", "font-size", "40px", "text-align", "center", "color", "#4E9F54"], [1, "col-md-6", "p-2"], ["alt", "", 1, "img-fluid", 2, "padding-left", "px", "width", "80%", 3, "src"], [2, "color", "#4e9f54", "font-family", "Open Sans", "font-size", "30px", "font-weight", "400", "margin-bottom", "35px"], [2, "padding-top", "20px", "font-family", "Open Sans", "font-size", "16px", "font-weight", "400"], ["fragment", "books-title", 1, "btn", "btn-green", 3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No eres lo que tienes sino lo que das");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Al momento de cerrar los ojos en la vida f\u00EDsica y cruzar la frontera de la vida terrestre, solo llevas contigo lo que eres.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " - VIDEOS -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Espiritualidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lo que importa es infundir amor, servir a la gente. Cuando te encuentres con una persona, d\u00E9jale algo lindo tuyo: un gesto, una sonrisa, unas palabras de agradecimiento.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Salud y Bienestar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Durante muchos a\u00F1os se ha manejado el concepto de que las grasas tienen muchas calor\u00EDas y que mientras m\u00E1s calor\u00EDas consumamos, m\u00E1s nos vamos a engordar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " - EVENTOS -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "octubre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Las Neuronas de tu intestino");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ya sabemos que el cerebro contiene neuronas, lo que es llamativo es que el intestino tambi\u00E9n: el tubo digestivo contiene m\u00E1s de 100 millones de neuronas distribuidas en un sistema nervioso propio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " - LIBROS -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ver m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.booksCollection[0].img, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.booksCollection[0].title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.booksCollection[0].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["body[_ngcontent-%COMP%]    {\r\n    font-family: Montserrat;\r\n}\r\na[_ngcontent-%COMP%] {text-decoration: none;}\r\n.nav-tabs[_ngcontent-%COMP%] {\r\n\tborder-bottom: 0;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n\tborder-radius:0;\r\n\tcolor:#fff;\r\n     padding: 40px 18px 40px 18px;\r\n         font-size: 18px;\r\n         font-family: \"Open Sans\", sans-serif;\r\n\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n\tcolor:#fff;\r\n\tbackground:#4E9F54;\r\n    border: 0px;\r\n    border-radius: 0px;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tbackground-color: #4E9F54;\r\n  border: 0px;\r\n}\r\n.nav-item[_ngcontent-%COMP%]{\r\n       padding: 0px 2px 0px 2px;\r\n           margin-top: -5px;\r\n           margin-bottom: -6px;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active {\r\n    color: #ffffff;\r\n    background-color: #4E9F54;\r\n    border-radius: 0px;\r\n    border: #4E9F54;\r\n}\r\n.formulario[_ngcontent-%COMP%]{\r\n    min-height:510px;\r\n}\r\n.activo[_ngcontent-%COMP%]{\r\n    background-color:#4E9F54;\r\n    color: #ffffff;\r\n}\r\nh1[_ngcontent-%COMP%] { font-family: 'Monserrat',sans-serif;\r\n    font-size: 66px;\r\n    font-weight: 500;\r\n    line-height: 80px;\r\n}\r\np[_ngcontent-%COMP%]{\r\n\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 15px 25px;\r\n    width: 300px;\r\n    height: 50px;\r\n    border-radius: 6px;\r\n    display: inline-block;\r\n    transition: .2s;\r\n\r\n}\r\n.btn-blue[_ngcontent-%COMP%] {\r\n    background:linear-gradient(to left,#263978,#486FC3 );\r\n    color: #ffffff;\r\n    border: 0px;\r\n}\r\n.btn-blue[_ngcontent-%COMP%]:hover {\r\n    background:linear-gradient(to left,#486FC3,#263978 );\r\n    color: #ffffff;\r\n    font-weight: 800;\r\n    border: 0px;\r\n}\r\n.btn-green[_ngcontent-%COMP%] {\r\n    background:linear-gradient(to left,#4E9F54,#9ED48F );\r\n    color: #ffffff;\r\n    border: 0px;\r\n}\r\n.btn-green[_ngcontent-%COMP%]:hover {\r\n    background:linear-gradient(to left,#9ED48F,#4E9F54 );\r\n    color: #ffffff;\r\n    font-weight: 800;\r\n    border: 0px;\r\n}\r\n.navbar[_ngcontent-%COMP%] {\r\n    background-color: #263978;\r\n    box-shadow: 0 2px 4px   rgba(0, 0, 0, .5);\r\n    min-height: 100px;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {color: #ffffff;}\r\n.nav-link[_ngcontent-%COMP%]:hover{ color: #ffffff;}\r\n.logo-brand[_ngcontent-%COMP%] {\r\n    min-width: 20px;\r\n    max-height: 100px;\r\n}\r\n.navbar-toggler[_ngcontent-%COMP%] {max-height: 40px;}\r\n.navbar-toggler[_ngcontent-%COMP%]:focus {outline: none;}\r\n#hero[_ngcontent-%COMP%] {\r\n    background-image: url('/assets/img/img-hero2.jpg');\r\n    background-position: center right;\r\n        background-repeat: no-repeat;\r\n        background-size: cover;\r\n        background-origin: content-box;\r\n    padding-top: 80px;\r\n    min-height: 700px;\r\n    color: #ffffff;\r\n}\r\n.content-center[_ngcontent-%COMP%] {\r\n    max-width: 700px;\r\n    margin: 150px auto 10px 15px;\r\n    text-align: left;\r\n}\r\n\r\n.videos[_ngcontent-%COMP%] {\r\n    background-color: rgba(78, 159, 84, 0.2);\r\n    padding: 50px 0 0 0;\r\n    text-align: center;\r\n}\r\n.video-espiritual[_ngcontent-%COMP%] {\r\n    padding: 10px 0 0 0;\r\n\r\n}\r\n.libros[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    padding: 140px 0 0 0;\r\n}\r\n.footer[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 30px 0 0 0;\r\n    color: #ffffff;\r\n}\r\n.footer[_ngcontent-%COMP%]   .list-inline[_ngcontent-%COMP%]   .list-inline-item[_ngcontent-%COMP%] {\r\n    padding: 20px 30px 0 0;\r\n    margin: 5px -7px 1px 33px;\r\n}\r\n.button_slide[_ngcontent-%COMP%] {\r\n    transition: ease-out 0.4s;\r\n}\r\n.slide_right_green[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 400px 0 0 0 #4E9F54;\r\n}\r\n.slide_right_blue[_ngcontent-%COMP%]:hover {\r\n    box-shadow: inset 400px 0 0 0 #263978;\r\n}\r\n\r\n@media (max-width: 575.98px) {\r\n\r\n\r\n    .h1[_ngcontent-%COMP%]{ font-size: 10px; line-height: normal;}\r\n\r\n    .btn[_ngcontent-%COMP%] { font-size: 15px;\r\n        padding: 15px 25px;\r\n        width: 200px;\r\n        border-radius: 6px;\r\n        display: inline-block;\r\n        transition: .2s;\r\n    }\r\n\r\n\r\n    .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        padding: 10px 10px ;\r\n    }\r\n\r\n\r\n    .video-espiritual[_ngcontent-%COMP%] {\r\n        padding: 10px 0px 0 10px;\r\n    }\r\n\r\n    .content-center[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        max-width: 700px;\r\n        margin: 80px auto 10px 15px;\r\n        text-align: left;\r\n    }\r\n\r\n    h1[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        font-size: 40px;\r\n        font-weight: 100;\r\n        line-height: 60px;\r\n        padding-bottom: 30px;\r\n    }\r\n\r\n    img[_ngcontent-%COMP%] { width: 100%;}\r\n\r\n    .libros[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n        \r\n    }\r\n\r\n    .libros[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n        padding-top: 1px;\r\n    }\r\n\r\n    .libros[_ngcontent-%COMP%]   .btn-green[_ngcontent-%COMP%] { text-align: center;}\r\n}\r\n@media (min-width: 576px) and (max-width: 767.98px) {\r\n    .content-center[_ngcontent-%COMP%] {\r\n        content: center;\r\n        text-align: center;\r\n        max-width: 700px;\r\n        margin: 100px auto 10px 15px;\r\n        text-align: left;\r\n    }\r\n\r\n    .libros[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n        padding: 80px 0 0 0;\r\n    }\r\n\r\n}\r\n@media (min-width: 768px) and (max-width: 991.98px) {\r\n    .content-center[_ngcontent-%COMP%] {\r\n        content: center;\r\n        text-align: center;\r\n        max-width: 700px;\r\n        margin: 200px auto 10px 15px;\r\n        text-align: left;\r\n    }\r\n    .libros[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {padding-top: 80px;}\r\n}\r\n@media (min-width: 992px) and (max-width: 1199.98px) {  }\r\n@media (min-width: 1200px) {  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQSxHQUFHLHFCQUFxQixDQUFDO0FBSXpCO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBR0E7Q0FDQyxlQUFlO0NBQ2YsVUFBVTtLQUNOLDRCQUE0QjtTQUN4QixlQUFlO1NBQ2Ysb0NBQW9DOztBQUU3QztBQUVBO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YseUJBQXlCO0VBQ3hCLFdBQVc7QUFDYjtBQUVBO09BQ08sd0JBQXdCO1dBQ3BCLGdCQUFnQjtXQUNoQixtQkFBbUI7QUFDOUI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7QUFJQSxLQUFLLG1DQUFtQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUVBOztBQUVBO0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlOztBQUVuQjtBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLG9EQUFvRDtJQUNwRCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0RBQW9EO0lBQ3BELGNBQWM7SUFDZCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLG9EQUFvRDtJQUNwRCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlDQUF5QztJQUN6QyxpQkFBaUI7QUFDckI7QUFFQSxXQUFXLGNBQWMsQ0FBQztBQUMxQixpQkFBaUIsY0FBYyxDQUFDO0FBRWhDO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUdBLGlCQUFpQixnQkFBZ0IsQ0FBQztBQUNsQyx1QkFBdUIsYUFBYSxDQUFDO0FBRXJDO0lBQ0ksa0RBQWtEO0lBQ2xELGlDQUFpQztRQUM3Qiw0QkFBNEI7UUFDNUIsc0JBQXNCO1FBQ3RCLDhCQUE4QjtJQUNsQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0ksd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjs7QUFFdkI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBR0E7SUFHSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHFDQUFxQztBQUN6QztBQUVBO0lBQ0kscUNBQXFDO0FBQ3pDO0FBSUEsdUJBQXVCO0FBQ3ZCOzs7SUFHSSxLQUFLLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQzs7SUFFMUMsT0FBTyxlQUFlO1FBQ2xCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25COzs7SUFHQTtRQUNJLG1CQUFtQjtJQUN2Qjs7O0lBR0E7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLDJCQUEyQjtRQUMzQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBLE1BQU0sV0FBVyxDQUFDOztJQUVsQjtRQUNJLGtCQUFrQjs7SUFFdEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUEscUJBQXFCLGtCQUFrQixDQUFDO0FBQzVDO0FBR0E7SUFDSTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLDRCQUE0QjtRQUM1QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7O0FBRUo7QUFHQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsNEJBQTRCO1FBQzVCLGdCQUFnQjtJQUNwQjtJQUNBLFlBQVksaUJBQWlCLENBQUM7QUFDbEM7QUFHQSx3REFBd0Q7QUFHeEQsOEJBQThCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5ICAgIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xyXG59XHJcbmEge3RleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcblxyXG5cclxuXHJcbi5uYXYtdGFicyB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMDtcclxufVxyXG5cclxuXHJcbi5uYXYtdGFicyA+IGxpID4gYSB7XHJcblx0Ym9yZGVyLXJhZGl1czowO1xyXG5cdGNvbG9yOiNmZmY7XHJcbiAgICAgcGFkZGluZzogNDBweCAxOHB4IDQwcHggMThweDtcclxuICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuXHJcbi5uYXYtdGFicyA+IGxpID4gYTpob3ZlciB7XHJcblx0Y29sb3I6I2ZmZjtcclxuXHRiYWNrZ3JvdW5kOiM0RTlGNTQ7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG5cclxuLm5hdi10YWJzID4gbGkgYS5hY3RpdmUge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNEU5RjU0O1xyXG4gIGJvcmRlcjogMHB4O1xyXG59XHJcblxyXG4ubmF2LWl0ZW17XHJcbiAgICAgICBwYWRkaW5nOiAwcHggMnB4IDBweCAycHg7XHJcbiAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xyXG59XHJcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtbGluayAubmF2LWxpbmsgOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RTlGNTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3JkZXI6ICM0RTlGNTQ7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlve1xyXG4gICAgbWluLWhlaWdodDo1MTBweDtcclxufVxyXG5cclxuLmFjdGl2b3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzRFOUY1NDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbmgxIHsgZm9udC1mYW1pbHk6ICdNb25zZXJyYXQnLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDY2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbnB7XHJcblxyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IC4ycztcclxuXHJcbn1cclxuXHJcbi5idG4tYmx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCMyNjM5NzgsIzQ4NkZDMyApO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLmJ0bi1ibHVlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIzQ4NkZDMywjMjYzOTc4ICk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLmJ0bi1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCM0RTlGNTQsIzlFRDQ4RiApO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLmJ0bi1ncmVlbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCM5RUQ0OEYsIzRFOUY1NCApO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2Mzk3ODtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAgIHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5uYXYtbGluayB7Y29sb3I6ICNmZmZmZmY7fVxyXG4ubmF2LWxpbms6aG92ZXJ7IGNvbG9yOiAjZmZmZmZmO31cclxuXHJcbi5sb2dvLWJyYW5kIHtcclxuICAgIG1pbi13aWR0aDogMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuLm5hdmJhci10b2dnbGVyIHttYXgtaGVpZ2h0OiA0MHB4O31cclxuLm5hdmJhci10b2dnbGVyOmZvY3VzIHtvdXRsaW5lOiBub25lO31cclxuXHJcbiNoZXJvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvaW1nLWhlcm8yLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jb250ZW50LWNlbnRlciB7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgbWFyZ2luOiAxNTBweCBhdXRvIDEwcHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIFNFQ0NJT04gVklERU9TICovXHJcbi52aWRlb3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3OCwgMTU5LCA4NCwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDUwcHggMCAwIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnZpZGVvLWVzcGlyaXR1YWwge1xyXG4gICAgcGFkZGluZzogMTBweCAwIDAgMDtcclxuXHJcbn1cclxuXHJcbi5saWJyb3MgaDR7XHJcbiAgICBwYWRkaW5nOiAxNDBweCAwIDAgMDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mb290ZXIgLmxpc3QtaW5saW5lIC5saXN0LWlubGluZS1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAwIDA7XHJcbiAgICBtYXJnaW46IDVweCAtN3B4IDFweCAzM3B4O1xyXG59IFxyXG5cclxuXHJcbi5idXR0b25fc2xpZGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLW91dCAwLjRzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBlYXNlLW91dCAwLjRzO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC40cztcclxufVxyXG4gIFxyXG4uc2xpZGVfcmlnaHRfZ3JlZW46aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgIzRFOUY1NDtcclxufVxyXG5cclxuLnNsaWRlX3JpZ2h0X2JsdWU6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgIzI2Mzk3ODtcclxufVxyXG5cclxuXHJcblxyXG4vKiBjZWx1bGFyZXMgcGVxdWVub3MgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcblxyXG5cclxuICAgIC5oMXsgZm9udC1zaXplOiAxMHB4OyBsaW5lLWhlaWdodDogbm9ybWFsO31cclxuXHJcbiAgICAuYnRuIHsgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjVweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5uYXZiYXIgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudmlkZW8tZXNwaXJpdHVhbCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHggMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gMTBweCAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcgeyB3aWR0aDogMTAwJTt9XHJcblxyXG4gICAgLmxpYnJvcyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5saWJyb3MgaDQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpYnJvcyAuYnRuLWdyZWVuIHsgdGV4dC1hbGlnbjogY2VudGVyO31cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAuY29udGVudC1jZW50ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgICAgICBtYXJnaW46IDEwMHB4IGF1dG8gMTBweCAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpYnJvcyBoNHtcclxuICAgICAgICBwYWRkaW5nOiA4MHB4IDAgMCAwO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICAuY29udGVudC1jZW50ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgICAgICBtYXJnaW46IDIwMHB4IGF1dG8gMTBweCAxNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAubGlicm9zIGg0IHtwYWRkaW5nLXRvcDogODBweDt9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHsgIH1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7ICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./../app.component.css']
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");





class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map