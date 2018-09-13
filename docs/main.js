(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->\r\n<router-outlet></router-outlet>"

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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/listado-de-resultados/listado-de-resultados.component */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicios/mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./servicios/paises.service */ "./src/app/servicios/paises.service.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ruteando/ruteando.module */ "./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./componentes/input-jugadores/input-jugadores.component */ "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var _componentes_batalla_naval_batalla_naval_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./componentes/batalla-naval/batalla-naval.component */ "./src/app/componentes/batalla-naval/batalla-naval.component.ts");
/* harmony import */ var _componentes_counter_counter_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./componentes/counter/counter.component */ "./src/app/componentes/counter/counter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';













// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_4__["AdivinaElNumeroComponent"],
                _componentes_listado_de_resultados_listado_de_resultados_component__WEBPACK_IMPORTED_MODULE_5__["ListadoDeResultadosComponent"],
                _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"],
                _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_13__["PrincipalComponent"],
                _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_14__["AgilidadAritmeticaComponent"],
                _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_16__["AdivinaMasListadoComponent"],
                _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AgilidadMasListadoComponent"],
                _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_19__["ListadoComponent"],
                _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_22__["ListadosComponent"],
                _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_23__["JuegosComponent"],
                _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__["RegistroComponent"],
                _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_25__["MenuCardComponent"],
                _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_26__["CabeceraComponent"],
                _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_27__["QuienSoyComponent"],
                _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_28__["AnagramaComponent"],
                _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_29__["ListadoDePaisesComponent"],
                _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_30__["MapaDeGoogleComponent"],
                _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_20__["JugadoresListadoComponent"],
                _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_32__["InputJugadoresComponent"],
                _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_33__["SexoPipe"],
                _componentes_batalla_naval_batalla_naval_component__WEBPACK_IMPORTED_MODULE_34__["BatallaNavalComponent"],
                _componentes_counter_counter_component__WEBPACK_IMPORTED_MODULE_35__["CounterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_18__["RuteandoModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
                })
                // NgbModule.forRoot(MiRuteo),
                // importo el ruteo
                // RouterModule.forRoot(MiRuteo)
            ],
            providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_21__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_8__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_9__["PaisesService"], _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_10__["JugadoresService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var JuegoAdivina = /** @class */ (function (_super) {
    __extends(JuegoAdivina, _super);
    function JuegoAdivina(nombre, gano, jugador) {
        var _this = _super.call(this, "Adivina el número", gano, jugador) || this;
        _this.numeroSecreto = 0;
        _this.numeroIngresado = 0;
        return _this;
    }
    JuegoAdivina.prototype.verificar = function () {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    };
    JuegoAdivina.prototype.generarnumero = function () {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    };
    JuegoAdivina.prototype.retornarAyuda = function () {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasate";
    };
    return JuegoAdivina;
}(_clases_juego__WEBPACK_IMPORTED_MODULE_0__["Juego"]));



/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
var JuegoAgilidad = /** @class */ (function () {
    function JuegoAgilidad() {
    }
    return JuegoAgilidad;
}());



/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
var Juego = /** @class */ (function () {
    function Juego(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    Juego.prototype.retornarAyuda = function () {
        return "NO hay Ayuda definida";
    };
    return Juego;
}());



/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    /*background-color: #4CAF50;*/\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{nuevoJuego.nombre}}!\r\n  </h1>\r\n </div>\r\n<h2></h2>\r\n<form name=\"juego\">\r\n\r\n   <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\r\n \r\n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n \r\n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n \r\n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n\r\n\r\n</form>\r\n<div id=\"snackbar\">{{Mensajes}}</div>"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdivinaElNumeroComponent = /** @class */ (function () {
    function AdivinaElNumeroComponent() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    AdivinaElNumeroComponent.prototype.generarnumero = function () {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    };
    AdivinaElNumeroComponent.prototype.verificar = function () {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("numero Secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            var mensaje = void 0;
            switch (this.contador) {
                case 1:
                    mensaje = "No, intento fallido, animo";
                    break;
                case 2:
                    mensaje = "No,Te estaras Acercando???";
                    break;
                case 3:
                    mensaje = "No es, Yo crei que la tercera era la vencida.";
                    break;
                case 4:
                    mensaje = "No era el  " + this.nuevoJuego.numeroIngresado;
                    break;
                case 5:
                    mensaje = " intentos y nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + " ayuda :" + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto:", this.nuevoJuego.gano);
    };
    AdivinaElNumeroComponent.prototype.MostarMensaje = function (mensaje, ganador) {
        if (mensaje === void 0) { mensaje = "este es el mensaje"; }
        if (ganador === void 0) { ganador = false; }
        this.Mensajes = mensaje;
        var x = document.getElementById("snackbar");
        if (ganador) {
            x.className = "show Ganador";
        }
        else {
            x.className = "show Perdedor";
        }
        var modelo = this;
        setTimeout(function () {
            x.className = x.className.replace("show", "");
            modelo.ocultarVerificar = false;
        }, 3000);
        console.info("objeto", x);
    };
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
    AdivinaElNumeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adivina-el-numero',
            template: __webpack_require__(/*! ./adivina-el-numero.component.html */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
            styles: [__webpack_require__(/*! ./adivina-el-numero.component.css */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdivinaElNumeroComponent);
    return AdivinaElNumeroComponent;
}());



/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-adivina-el-numero (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-adivina-el-numero> \r\n<h1> listado </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdivinaMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaMasListadoComponent", function() { return AdivinaMasListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdivinaMasListadoComponent = /** @class */ (function () {
    function AdivinaMasListadoComponent() {
        this.listadoParaCompartir = new Array();
    }
    AdivinaMasListadoComponent.prototype.ngOnInit = function () {
    };
    AdivinaMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        // console.info("en app",this.listadoParaCompartir);
    };
    AdivinaMasListadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adivina-mas-listado',
            template: __webpack_require__(/*! ./adivina-mas-listado.component.html */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.html"),
            styles: [__webpack_require__(/*! ./adivina-mas-listado.component.css */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdivinaMasListadoComponent);
    return AdivinaMasListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--app-menu></app-menu-->\r\n<!-- index.html -->\r\n\r\n\r\n<form name=\"juego\">\r\n<ul>\r\n   <li>\r\n   Primer número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n  \r\n  </li>\r\n  <li>\r\n   Operador: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n    \r\n  </li>\r\n  <li>\r\n   Segundo número: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\" readonly/>\r\n    \r\n  </li>\r\n  <li>\r\n    Respuesta: <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n     \r\n   </li>\r\n  <li>\r\n    <h2 [hidden]=\"ocultarVerificar\" ><button (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar {{Tiempo}} </button></h2>\r\n  </li>\r\n  <li>\r\n    <h2 [hidden]=\"!ocultarVerificar\"><button  (click)=\"NuevoJuego()\"  class=\"btn btn-info btn-lg\">Nuevo</button></h2>\r\n  </li>\r\n  <li>\r\n    <h2><p><i class=\"fa fa-spinner fa-spin\"></i>Esperando numero...</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n  </li>\r\n</ul>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AgilidadAritmeticaComponent = /** @class */ (function () {
    function AgilidadAritmeticaComponent() {
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_1__["JuegoAgilidad"]();
        console.info("Inicio agilidad");
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
    };
    AgilidadAritmeticaComponent.prototype.NuevoJuego = function () {
        var _this = this;
        this.ocultarVerificar = false;
        this.repetidor = setInterval(function () {
            _this.Tiempo--;
            console.log("llego", _this.Tiempo);
            if (_this.Tiempo == 0) {
                clearInterval(_this.repetidor);
                _this.verificar();
                _this.ocultarVerificar = true;
                _this.Tiempo = 5;
            }
        }, 900);
    };
    AgilidadAritmeticaComponent.prototype.verificar = function () {
        this.ocultarVerificar = false;
        clearInterval(this.repetidor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AgilidadAritmeticaComponent.prototype, "enviarJuego", void 0);
    AgilidadAritmeticaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agilidad-aritmetica',
            template: __webpack_require__(/*! ./agilidad-aritmetica.component.html */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
            styles: [__webpack_require__(/*! ./agilidad-aritmetica.component.css */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgilidadAritmeticaComponent);
    return AgilidadAritmeticaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-agilidad-aritmetica (enviarJuego)=\"tomarJuegoTerminado($event)\">   </app-agilidad-aritmetica> \r\n<h1> Listado de Resultados </h1>\r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\" [prueba]=\"prueba\"> </app-listado-de-resultados>"

/***/ }),

/***/ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgilidadMasListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadMasListadoComponent", function() { return AgilidadMasListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AgilidadMasListadoComponent = /** @class */ (function () {
    function AgilidadMasListadoComponent() {
        this.prueba = "LA WEA FOME";
        this.listadoParaCompartir = new Array();
    }
    AgilidadMasListadoComponent.prototype.ngOnInit = function () {
    };
    AgilidadMasListadoComponent.prototype.tomarJuegoTerminado = function (juego) {
        this.listadoParaCompartir.push(juego);
        console.info("en app", this.listadoParaCompartir);
    };
    AgilidadMasListadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-agilidad-mas-listado',
            template: __webpack_require__(/*! ./agilidad-mas-listado.component.html */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.html"),
            styles: [__webpack_require__(/*! ./agilidad-mas-listado.component.css */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgilidadMasListadoComponent);
    return AgilidadMasListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  anagrama works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.ts ***!
  \************************************************************/
/*! exports provided: AnagramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagramaComponent", function() { return AnagramaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnagramaComponent = /** @class */ (function () {
    function AnagramaComponent() {
    }
    AnagramaComponent.prototype.ngOnInit = function () {
    };
    AnagramaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-anagrama',
            template: __webpack_require__(/*! ./anagrama.component.html */ "./src/app/componentes/anagrama/anagrama.component.html"),
            styles: [__webpack_require__(/*! ./anagrama.component.css */ "./src/app/componentes/anagrama/anagrama.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnagramaComponent);
    return AnagramaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/batalla-naval/batalla-naval.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/batalla-naval/batalla-naval.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/batalla-naval/batalla-naval.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componentes/batalla-naval/batalla-naval.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div>\r\n  <app-counter [counter]=\"counter\"></app-counter>\r\n </div>\r\n<table class=\"table-bordered\" style=\"margin-left:30%\">\r\n  <tbody>\r\n    <tr *ngFor=\"let row of rows\">\r\n      <td style=\"width:30px\">\r\n        {{row.name}}\r\n      </td>\r\n      <td (click)=\"Misilazo(row,0)\" style=\"width:60px; height:60px;text-align: center\">\r\n        {{row.columns[0]}}</td>\r\n      <td (click)=\"Misilazo(row,1)\" style=\"width:60px; height:60px;text-align: center\">\r\n        {{row.columns[1]}}</td>\r\n      <td (click)=\"Misilazo(row,2)\" style=\"width:60px; height:60px;text-align: center\">\r\n        {{row.columns[2]}}</td>\r\n      <td (click)=\"Misilazo(row,3)\" style=\"width:60px; height:60px;text-align: center\">\r\n        {{row.columns[3]}}</td>\r\n      <td (click)=\"Misilazo(row,4)\" style=\"width:60px; height:60px;text-align: center\">\r\n        {{row.columns[4]}}</td>\r\n      <td (click)=\"Misilazo(row,5)\" style=\"width:60px; height:60px;text-align: center\">\r\n        {{row.columns[5]}}</td>\r\n    </tr>\r\n    <tr>\r\n      <td style=\"height:5px\"> </td>\r\n      <td> 1 </td>\r\n      <td> 2 </td>\r\n      <td> 3 </td>\r\n      <td> 4 </td>\r\n      <td> 5 </td>\r\n      <td> 6 </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/componentes/batalla-naval/batalla-naval.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/batalla-naval/batalla-naval.component.ts ***!
  \**********************************************************************/
/*! exports provided: WATER, COLUMNS, BatallaNavalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATER", function() { return WATER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS", function() { return COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatallaNavalComponent", function() { return BatallaNavalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/ship */ "./src/app/componentes/batalla-naval/models/ship.ts");
/* harmony import */ var _models_ship_part__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/ship-part */ "./src/app/componentes/batalla-naval/models/ship-part.ts");
/* harmony import */ var _models_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/row */ "./src/app/componentes/batalla-naval/models/row.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WATER = " X ";
var COLUMNS = 7;
var BatallaNavalComponent = /** @class */ (function () {
    /*****************  End Atributos  *****************/
    function BatallaNavalComponent() {
        this._ships = [];
        this._sunkenShips = 0;
        this._won = false;
        this._rowsName = ["a", "b", "c", "d", "e", "f"];
        this._rows = [
            new _models_row__WEBPACK_IMPORTED_MODULE_4__["Row"](this._rowsName[0], COLUMNS),
            new _models_row__WEBPACK_IMPORTED_MODULE_4__["Row"](this._rowsName[1], COLUMNS),
            new _models_row__WEBPACK_IMPORTED_MODULE_4__["Row"](this._rowsName[2], COLUMNS),
            new _models_row__WEBPACK_IMPORTED_MODULE_4__["Row"](this._rowsName[3], COLUMNS),
            new _models_row__WEBPACK_IMPORTED_MODULE_4__["Row"](this._rowsName[4], COLUMNS),
            new _models_row__WEBPACK_IMPORTED_MODULE_4__["Row"](this._rowsName[5], COLUMNS)
        ];
    }
    Object.defineProperty(BatallaNavalComponent.prototype, "won", {
        get: function () {
            return this._won;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatallaNavalComponent.prototype, "counter", {
        get: function () {
            return this._counter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatallaNavalComponent.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatallaNavalComponent.prototype, "sunkenShips", {
        get: function () {
            return this._sunkenShips;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BatallaNavalComponent.prototype, "ships", {
        get: function () {
            return this._ships;
        },
        enumerable: true,
        configurable: true
    });
    BatallaNavalComponent.prototype.ngOnInit = function () {
        this.putShips();
        this._counter = 15;
        this._point = 300;
    };
    BatallaNavalComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        // this.dtTrigger.unsubscribe();
    };
    /*****************  Methods  *****************/
    /**
     * Procesa el ataque apra saber si se dio en el blanco.
     * @param selectedRow
     * @param column
     */
    BatallaNavalComponent.prototype.Misilazo = function (selectedRow, column) {
        var _this = this;
        if (!this._won && selectedRow.columns[column] == _models_ship__WEBPACK_IMPORTED_MODULE_2__["NOSHOT"]) {
            console.log("Entro");
            var flagShooted = false;
            var newState_1 = WATER;
            var i = void 0;
            for (i = 0; i < this._ships.length; i++) {
                if (this._ships[i].shooted(selectedRow.name, column)) {
                    this._point += 15;
                    newState_1 = _models_ship_part__WEBPACK_IMPORTED_MODULE_3__["SHOOTED"];
                    if (this._ships[i].state == _models_ship__WEBPACK_IMPORTED_MODULE_2__["UNDID"]) {
                        this._sunkenShips++;
                        newState_1 = _models_ship__WEBPACK_IMPORTED_MODULE_2__["UNDID"];
                        this.undidShip(i);
                    }
                    break;
                }
                else {
                    this._point -= 10;
                }
            }
            if (this._ships.length == i)
                this._counter--;
            this._rows.forEach(function (row) {
                if (row.name == selectedRow.name)
                    row.columns[column] = newState_1; // La columna empieza de cero, pero para el usuario es 1
                _this.checkIfWin();
            });
        }
    };
    /**
     * Verifica si todos los barcos están undidos.
     */
    BatallaNavalComponent.prototype.checkIfWin = function () {
        if (!this._won && this._sunkenShips == this.ships.length) {
            this._won = true;
            alert("YOU WIN");
        }
    };
    BatallaNavalComponent.prototype.undidShip = function (index) {
        var _this = this;
        if (this._ships[index].sense == _models_ship__WEBPACK_IMPORTED_MODULE_2__["HORIZONTAL"]) {
            this._ships[index].parts.forEach(function (part) {
                _this._rows.forEach(function (row) {
                    if (row.name == part.rowName) {
                        row.columns[part.column] = _models_ship__WEBPACK_IMPORTED_MODULE_2__["UNDID"];
                    }
                });
            });
        }
        else {
            var rowID = 0;
            var length_1 = this._ships[index].parts.length;
            var column = this._ships[index].parts[0].column;
            for (var i = 0; i < this._rows.length; i++) {
                //Busco el Id de la primera fila desde acá voy a ir bajando
                if (this._rows[i].name == this._ships[index].parts[0].rowName) {
                    rowID = i;
                    break;
                }
            }
            while (length_1 != 0) {
                //Pariendo del Id que encontré voy a ir bajando uno a uno hasta que cambio todos.
                this.rows[rowID].columns[column] = _models_ship__WEBPACK_IMPORTED_MODULE_2__["UNDID"];
                rowID++;
                length_1--;
            }
        }
    };
    BatallaNavalComponent.prototype.putShips = function () {
        var sense = Math.floor(Math.random() * 2);
        var rowIndex = Math.floor(Math.random() * 4);
        var shipThree;
        var shipTwo;
        var shipOne;
        var shipFour = new _models_ship__WEBPACK_IMPORTED_MODULE_2__["Ship"](4, this._rowsName[rowIndex], Math.floor(Math.random() * 3), sense);
        do {
            sense = Math.floor(Math.random() * 2);
            rowIndex = Math.floor(Math.random() * 5);
            shipThree = new _models_ship__WEBPACK_IMPORTED_MODULE_2__["Ship"](3, this._rowsName[rowIndex], Math.floor(Math.random() * 4), sense);
        } while (shipFour.isTouched(shipThree));
        do {
            sense = Math.floor(Math.random() * 2);
            rowIndex = Math.floor(Math.random() * 6);
            shipTwo = new _models_ship__WEBPACK_IMPORTED_MODULE_2__["Ship"](2, this._rowsName[rowIndex], Math.floor(Math.random() * 5), sense);
        } while (shipFour.isTouched(shipTwo) || shipThree.isTouched(shipTwo));
        do {
            sense = Math.floor(Math.random() * 2);
            rowIndex = Math.floor(Math.random() * 6);
            shipOne = new _models_ship__WEBPACK_IMPORTED_MODULE_2__["Ship"](1, this._rowsName[rowIndex], Math.floor(Math.random() * 6), sense);
        } while (shipFour.isTouched(shipOne) || shipThree.isTouched(shipOne)
            || shipTwo.isTouched(shipOne));
        this._ships.push(shipFour, shipThree, shipTwo, shipOne);
        console.log(this._ships);
    };
    BatallaNavalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batalla-naval',
            template: __webpack_require__(/*! ./batalla-naval.component.html */ "./src/app/componentes/batalla-naval/batalla-naval.component.html"),
            styles: [__webpack_require__(/*! ./batalla-naval.component.css */ "./src/app/componentes/batalla-naval/batalla-naval.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BatallaNavalComponent);
    return BatallaNavalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/batalla-naval/models/row.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentes/batalla-naval/models/row.ts ***!
  \*********************************************************/
/*! exports provided: Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return Row; });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/app/componentes/batalla-naval/models/ship.ts");

var Row = /** @class */ (function () {
    /***************** End  Atributos  *****************/
    /**
     *
     * @param name nombre de la fila
     * @param columns cantidad de columnas
     */
    function Row(name, columns) {
        this._name = name;
        this._columns = [];
        for (var i = 0; i < columns; i++)
            this._columns.push(_ship__WEBPACK_IMPORTED_MODULE_0__["NOSHOT"]);
        this._isEmpty = false;
    }
    Object.defineProperty(Row.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Row.prototype, "isEmpty", {
        get: function () {
            return this._isEmpty;
        },
        set: function (isEmpty) {
            this._isEmpty = isEmpty;
        },
        enumerable: true,
        configurable: true
    });
    return Row;
}());



/***/ }),

/***/ "./src/app/componentes/batalla-naval/models/ship-part.ts":
/*!***************************************************************!*\
  !*** ./src/app/componentes/batalla-naval/models/ship-part.ts ***!
  \***************************************************************/
/*! exports provided: SAFE, SHOOTED, ShipPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAFE", function() { return SAFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOOTED", function() { return SHOOTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipPart", function() { return ShipPart; });
var SAFE = "safe";
var SHOOTED = "shooted";
var ShipPart = /** @class */ (function () {
    /***************** End Atributos  *****************/
    function ShipPart(rowName, column) {
        this._state = SAFE;
        this._rowName = rowName;
        this._column = column;
    }
    Object.defineProperty(ShipPart.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShipPart.prototype, "rowName", {
        get: function () {
            return this._rowName;
        },
        set: function (rowName) {
            this._rowName = rowName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShipPart.prototype, "column", {
        get: function () {
            return this._column;
        },
        set: function (column) {
            this._column = column;
        },
        enumerable: true,
        configurable: true
    });
    /*****************  Methods  *****************/
    /**
     * nextRow
     */
    ShipPart.nextRow = function (rowName) {
        var returnChar = "a";
        switch (rowName) {
            case "a":
                returnChar = "b";
                break;
            case "b":
                returnChar = "c";
                break;
            case "c":
                returnChar = "d";
                break;
            case "d":
                returnChar = "e";
                break;
            case "e":
                returnChar = "f";
                break;
            case "g":
                returnChar = "h";
                break;
            case "h":
                returnChar = "i";
                break;
            default:
                returnChar = "a";
                break;
        }
        return returnChar;
    };
    /*****************  Methods  *****************/
    /**
     *
     * @param rowName
     */
    ShipPart.previoustRow = function (rowName) {
        var returnChar = "a";
        switch (rowName) {
            case "i":
                returnChar = "h";
                break;
            case "g":
                returnChar = "h";
                break;
            case "f":
                returnChar = "e";
                break;
            case "e":
                returnChar = "d";
                break;
            case "d":
                returnChar = "c";
                break;
            case "c":
                returnChar = "b";
                break;
            case "b":
                returnChar = "a";
                break;
            default:
                returnChar = "a";
                break;
        }
        return returnChar;
    };
    return ShipPart;
}());



/***/ }),

/***/ "./src/app/componentes/batalla-naval/models/ship.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/batalla-naval/models/ship.ts ***!
  \**********************************************************/
/*! exports provided: CANTIDAD_COLUMNAS, VERTICAL, HORIZONTAL, UNDID, FLOATING, NOSHOT, Ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANTIDAD_COLUMNAS", function() { return CANTIDAD_COLUMNAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERTICAL", function() { return VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HORIZONTAL", function() { return HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDID", function() { return UNDID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FLOATING", function() { return FLOATING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOSHOT", function() { return NOSHOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ship", function() { return Ship; });
/* harmony import */ var _ship_part__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-part */ "./src/app/componentes/batalla-naval/models/ship-part.ts");

var CANTIDAD_COLUMNAS = 9;
var VERTICAL = 0;
var HORIZONTAL = 1;
var UNDID = "undid";
var FLOATING = "flotando";
var NOSHOT = " ";
var Ship = /** @class */ (function () {
    /***************** End  Atributos  *****************/
    /***************** Constructors  *****************/
    /**
     *
     * @param long largo del barco (cuantas partes tiene)
     * @param row Fila en la que inicia
     * @param column Columna en la que inicia
     * @param sense Sentido VERTICAL u HORIZONTAL
     */
    function Ship(long, row, column, sense) {
        this._parts = [];
        this.sense = sense;
        if (long > 0 && long <= CANTIDAD_COLUMNAS) {
            if (sense === HORIZONTAL)
                for (var i = 0; i < long; i++) {
                    this._parts.push(new _ship_part__WEBPACK_IMPORTED_MODULE_0__["ShipPart"](row, column + i)); //Cada vez se desplaza uno en columnas.
                }
            else if (sense === VERTICAL)
                for (var i = 0; i < long; i++) {
                    this._parts.push(new _ship_part__WEBPACK_IMPORTED_MODULE_0__["ShipPart"](row, column));
                    row = _ship_part__WEBPACK_IMPORTED_MODULE_0__["ShipPart"].nextRow(row); // Se mueve en sentido de las rows.
                }
            else
                this._parts.push(new _ship_part__WEBPACK_IMPORTED_MODULE_0__["ShipPart"](row, column)); // Instancio una nueva parte del barco con );   
        }
        this._state = FLOATING;
        this._shootedParts = 0;
    }
    Object.defineProperty(Ship.prototype, "quantity", {
        get: function () {
            return Ship._shipQuantity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ship.prototype, "shootedParts", {
        get: function () {
            return this._shootedParts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ship.prototype, "parts", {
        get: function () {
            return this._parts;
        },
        set: function (parts) {
            this._parts = parts;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ship.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    /***************** End Constructors  *****************/
    /*****************  Methods  *****************/
    /**
     * Primero verifica si el barco está flotando, en ese caso chequea si fue herido.
     */
    Ship.prototype.shooted = function (row, column) {
        var returnShooted = false;
        if (this._state == FLOATING)
            for (var i = 0; i < this.parts.length; i++) {
                if (this._parts[i].rowName == row && this._parts[i].column == column) {
                    this._parts[i].state = _ship_part__WEBPACK_IMPORTED_MODULE_0__["SHOOTED"];
                    this._shootedParts++;
                    returnShooted = true;
                    break;
                }
            }
        if (this._shootedParts == this._parts.length)
            this.undid();
        return returnShooted;
    };
    Ship.prototype.undid = function () {
        this.parts.forEach(function (part) { return part.state = UNDID; });
        this._state = UNDID;
    };
    /**
     * Chequea si el ambos barcos comparten algún casillero.
     * @param ship barco a comparar
     */
    Ship.prototype.isTouched = function (ship) {
        var touched = false;
        if (this.sense == ship.sense) {
            if ((HORIZONTAL == this.sense && this._parts[0].rowName == ship.parts[0].rowName)
                || (VERTICAL == this.sense && this._parts[0].column == ship.parts[0].column)) {
                touched = true;
            }
        }
        else
            for (var i = 0; i > this._parts.length; i++) {
                for (var j = 0; j < ship.parts.length; j++) {
                    if (ship.parts[j].column == this._parts[i].column &&
                        ship.parts[j].rowName == this._parts[i].rowName)
                        touched = true;
                    break;
                }
                if (touched)
                    break;
            }
        return touched;
    };
    /*****************  Atributos  *****************/
    Ship._shipQuantity = 4;
    return Ship;
}());



/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel\r\n{\r\n    height: 200px;\r\n    background-image: url('cabecera.png');/*//\"/TP_LAV4_2017/assets/imagenes/cabecera.png\"); */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n\r\n\r\n.hero-text {\r\ntext-align: center;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\ncolor: #3E06B0;\r\n}\r\n\r\n\r\n.hero-text a {\r\nborder: none;\r\noutline: 0;\r\ndisplay: inline-block;\r\npadding: 10px 25px;\r\ncolor: black;\r\nbackground-color: #ddd;\r\ntext-align: center;\r\ncursor: pointer;\r\n}\r\n\r\n\r\n.hero-text a:hover {\r\nbackground-color: #555;\r\ncolor: white;\r\n}"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top  \">\r\n  <a class=\"navbar-brand\" href=\"#\">Sala de Juegos</a>\r\n  <ul class=\"navbar-nav  mr-md-auto\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Link</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" href=\"#\">Link</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav mr-md-3\">\r\n    <li><a routerLink=\"/Registro\"><span class=\"glyphicon glyphicon-user mr-md-3\"></span> Sign Up</a></li>\r\n    <li><a routerLink=\"/Login\"><span class=\"glyphicon glyphicon-log-in mr-md-2\"></span> Login</a></li>\r\n  </ul>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CabeceraComponent = /** @class */ (function () {
    function CabeceraComponent() {
    }
    CabeceraComponent.prototype.ngOnInit = function () {
    };
    CabeceraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cabecera',
            template: __webpack_require__(/*! ./cabecera.component.html */ "./src/app/componentes/cabecera/cabecera.component.html"),
            styles: [__webpack_require__(/*! ./cabecera.component.css */ "./src/app/componentes/cabecera/cabecera.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CabeceraComponent);
    return CabeceraComponent;
}());



/***/ }),

/***/ "./src/app/componentes/counter/counter.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/counter/counter.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/counter/counter.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/counter/counter.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Punto: {{counter}}</h3>\n</div>"

/***/ }),

/***/ "./src/app/componentes/counter/counter.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/counter/counter.component.ts ***!
  \**********************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
    }
    CounterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CounterComponent.prototype, "counter", void 0);
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/componentes/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.css */ "./src/app/componentes/counter/counter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/app/componentes/error/error.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/error/error.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/error/error.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/error/error.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"hero-text\">\r\n        <h1 style=\"font-size:50px\">Sala de Juegos</h1>\r\n        <p>Octavio villegas</p>\r\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n          </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/error/error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/error/error.component.ts ***!
  \******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/componentes/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/componentes/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  input-jugadores works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/componentes/input-jugadores/input-jugadores.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/input-jugadores/input-jugadores.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputJugadoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputJugadoresComponent", function() { return InputJugadoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputJugadoresComponent = /** @class */ (function () {
    function InputJugadoresComponent() {
    }
    InputJugadoresComponent.prototype.ngOnInit = function () {
    };
    InputJugadoresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-jugadores',
            template: __webpack_require__(/*! ./input-jugadores.component.html */ "./src/app/componentes/input-jugadores/input-jugadores.component.html"),
            styles: [__webpack_require__(/*! ./input-jugadores.component.css */ "./src/app/componentes/input-jugadores/input-jugadores.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputJugadoresComponent);
    return InputJugadoresComponent;
}());



/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-menu></app-menu>\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n   Sala de Juegos\r\n  </h1>\r\n </div>\r\n <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/componentes/juegos/juegos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/juegos/juegos.component.ts ***!
  \********************************************************/
/*! exports provided: JuegosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegosComponent", function() { return JuegosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JuegosComponent = /** @class */ (function () {
    function JuegosComponent() {
    }
    JuegosComponent.prototype.ngOnInit = function () {
    };
    JuegosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-juegos',
            template: __webpack_require__(/*! ./juegos.component.html */ "./src/app/componentes/juegos/juegos.component.html"),
            styles: [__webpack_require__(/*! ./juegos.component.css */ "./src/app/componentes/juegos/juegos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JuegosComponent);
    return JuegosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-justified\">\r\n  <li class=\"active\"><a routerLink=\"/Principal\">Ir a inicio</a></li>\r\n  <li><a (click)=\"TraerTodos()\">Todos los jugadores</a></li>\r\n  <li><a (click)=\"TraerGanadores()\">Los ganadores</a></li>\r\n  <li><a (click)=\"TraerPerdedores()\">Los perdedores</a></li>\r\n</ul>\r\n\r\n\r\n\r\n<table class=\"table table-condensed\">\r\n  <thead>\r\n    <tr>\r\n      <th>usuario</th>\r\n      <th>cuit</th>\r\n      <th>sexo</th>\r\n      <th>gano</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let jugador of listado\" >\r\n      <td>{{jugador.usuario}} </td>\r\n      <td>{{jugador.cuit}} </td> \r\n      <td>{{jugador.sexo | sexo| uppercase}} </td> \r\n      <td>{{jugador.gano}} </td> \r\n      \r\n    </tr>\r\n   \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/jugadores-listado/jugadores-listado.component.ts ***!
  \******************************************************************************/
/*! exports provided: JugadoresListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresListadoComponent", function() { return JugadoresListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresListadoComponent = /** @class */ (function () {
    function JugadoresListadoComponent(serviceJugadores) {
        this.miJugadoresServicio = serviceJugadores;
    }
    JugadoresListadoComponent.prototype.ngOnInit = function () {
    };
    JugadoresListadoComponent.prototype.TraerTodos = function () {
        var _this = this;
        //alert("totos");
        this.miJugadoresServicio.traertodos('jugadores/', 'todos').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerGanadores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'ganadores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent.prototype.TraerPerdedores = function () {
        var _this = this;
        this.miJugadoresServicio.traertodos('jugadores/', 'perdedores').then(function (data) {
            //console.info("jugadores listado",(data));
            _this.listado = data;
        });
    };
    JugadoresListadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jugadores-listado',
            template: __webpack_require__(/*! ./jugadores-listado.component.html */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.html"),
            styles: [__webpack_require__(/*! ./jugadores-listado.component.css */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["JugadoresService"]])
    ], JugadoresListadoComponent);
    return JugadoresListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\r\n Listado de paises\r\n</h1>\r\n<table class=\"table table-condensed\">\r\n  <thead>\r\n    <tr>\r\n      <th>Pais</th>\r\n      <th>Región</th>\r\n      <th>Nombre local</th>\r\n      <th>Sub Región</th>\r\n      <th>Población</th>\r\n      <th>Bandera</th>\r\n      <th>Capital</th>\r\n      <th>GPS</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let pais of listadoDePaises\">\r\n      <td>{{pais.name}} </td>\r\n      <td>{{pais.region}} </td> \r\n      <td>{{pais.nativeName}} </td> \r\n      <td>{{pais.subregion}} </td>       \r\n      <td>{{pais.population}} </td> \r\n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \r\n      <td>{{pais.capital}} </td> \r\n      <td>{{pais.borders}} </td> \r\n      <td>{{pais.latlng}} </td> \r\n    </tr>\r\n   \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/listado-de-paises/listado-de-paises.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListadoDePaisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDePaisesComponent", function() { return ListadoDePaisesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_paises_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/paises.service */ "./src/app/servicios/paises.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoDePaisesComponent = /** @class */ (function () {
    function ListadoDePaisesComponent(servicioPaises) {
        this.miServicioDePaises = servicioPaises;
    }
    ListadoDePaisesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.miServicioDePaises.listar()
            .then(function (datos) {
            console.info("listado de paises", datos);
            _this.listadoDePaises = datos;
        });
    };
    ListadoDePaisesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listado-de-paises',
            template: __webpack_require__(/*! ./listado-de-paises.component.html */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.html"),
            styles: [__webpack_require__(/*! ./listado-de-paises.component.css */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_paises_service__WEBPACK_IMPORTED_MODULE_1__["PaisesService"]])
    ], ListadoDePaisesComponent);
    return ListadoDePaisesComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div *ngFor=\"let juego of listado\">\r\n\r\n<p> {{juego.nombre}} </p>\r\n<p> {{juego.jugador}} </p>\r\n\r\n</div-->\r\n<h3>{{prueba}}</h3>\r\n<table class=\"table table-condensed\">\r\n    <thead>\r\n      <tr>\r\n        <th>Juego</th>\r\n        <th>Jugador</th>\r\n        <th>Resultado</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let juego of listado\">\r\n        <td>{{juego.nombre}} </td>\r\n        <td>{{juego.jugador}} </td> \r\n        <td *ngIf=\"juego.gano\">Gano </td>   \r\n        <td *ngIf=\"!juego.gano\">Perdio</td>     \r\n      </tr>\r\n     \r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/listado-de-resultados/listado-de-resultados.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoDeResultadosComponent", function() { return ListadoDeResultadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadoDeResultadosComponent = /** @class */ (function () {
    function ListadoDeResultadosComponent() {
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
        console.info(this.listado);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ListadoDeResultadosComponent.prototype, "listado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ListadoDeResultadosComponent.prototype, "prueba", void 0);
    ListadoDeResultadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listado-de-resultados',
            template: __webpack_require__(/*! ./listado-de-resultados.component.html */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.html"),
            styles: [__webpack_require__(/*! ./listado-de-resultados.component.css */ "./src/app/componentes/listado-de-resultados/listado-de-resultados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListadoDeResultadosComponent);
    return ListadoDeResultadosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listado/listado.component.css":
/*!***********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style all font awesome icons */\r\n.fa {\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    width: 50px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    border-radius: 50%;\r\n}\r\n/* Add a hover effect if you want */\r\n.fa:hover {\r\n    opacity: 0.7;\r\n}\r\n/* Set a specific color for each brand */\r\n/* Facebook */\r\n.fa-facebook {\r\n    background: #3B5998;\r\n    color: white;\r\n}\r\n/* Twitter */\r\n.fa-twitter {\r\n    background: #55ACEE;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.html":
/*!************************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--input type=\"button\" (click)=\"llamaService()\" class=\"btn btn-info\" value=\"Pulsame\" > \r\n<input type=\"button\" (click)=\"llamaServicePromesa()\" class=\"btn btn-info\" value=\"Pulsame Promesa\" --> \r\n\r\n<!-- Centered Pills -->\r\n<ul class=\"nav nav-pills nav-justified\">\r\n    <li class=\"active\"><a routerLink=\"/Principal\">Sala de Juegos</a></li>\r\n    <li><a (click)=\"llamaService()\">Servicio</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv Promesa</a></li>\r\n    <li><a (click)=\"llamaServicePromesa()\">Serv observable</a></li>\r\n  </ul>\r\n  \r\n<app-listado-de-resultados [listado]=\"listadoParaCompartir\"> </app-listado-de-resultados>\r\n\r\n"

/***/ }),

/***/ "./src/app/componentes/listado/listado.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/componentes/listado/listado.component.ts ***!
  \**********************************************************/
/*! exports provided: ListadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoComponent", function() { return ListadoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListadoComponent = /** @class */ (function () {
    function ListadoComponent(servicioJuego) {
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        console.log("llamaService");
        this.listadoParaCompartir = this.miServicioJuego.listar();
    };
    ListadoComponent.prototype.llamaServicePromesa = function () {
        var _this = this;
        console.log("llamaServicePromesa");
        this.miServicioJuego.listarPromesa().then(function (listado) {
            _this.listadoParaCompartir = listado;
        });
    };
    ListadoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listado',
            template: __webpack_require__(/*! ./listado.component.html */ "./src/app/componentes/listado/listado.component.html"),
            styles: [__webpack_require__(/*! ./listado.component.css */ "./src/app/componentes/listado/listado.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_1__["JuegoServiceService"]])
    ], ListadoComponent);
    return ListadoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/listados/listados.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  listados works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/componentes/listados/listados.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/listados/listados.component.ts ***!
  \************************************************************/
/*! exports provided: ListadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadosComponent", function() { return ListadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListadosComponent = /** @class */ (function () {
    function ListadosComponent() {
    }
    ListadosComponent.prototype.ngOnInit = function () {
    };
    ListadosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listados',
            template: __webpack_require__(/*! ./listados.component.html */ "./src/app/componentes/listados/listados.component.html"),
            styles: [__webpack_require__(/*! ./listados.component.css */ "./src/app/componentes/listados/listados.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListadosComponent);
    return ListadosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/componentes/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div style=\"margin: 20% auto; width: 30%;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      Usuario\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <input type=\"text\"  [(ngModel)]=\"usuario\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 5px\">\r\n    <div class=\"col-lg-6\">\r\n      Clave\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <input type=\"password\" [(ngModel)]=\"clave\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" style=\"text-align: center; margin-top: 10px\">\r\n    <div class=\"col-lg-12\">\r\n      <button (click)=\"Entrar()\" class=\"btn btn-info btn-lg\" >Entrar</button>\r\n    </div>\r\n  </div>\r\n</div-->\r\n<div class=\"container\">\r\n  <div class=\"jumbotron\" style=\"padding:50px;\">\r\n    <form action=\"return true;\">\r\n      <div class=\"imgcontainer\">\r\n        <img src=\"./assets/imagenes/login.png\" alt=\"Avatar\" class=\"avatar\" max-width=\"104\">\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <label><b>Usuario</b></label>\r\n        <input type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"usuario\" name=\"uname\" required>\r\n\r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Clave\" [(ngModel)]=\"clave\" name=\"psw\" required>\r\n\r\n        <button *ngIf=\"logeando\" (click)=\"MoverBarraDeProgreso()\">Ingresar</button>\r\n\r\n        <div *ngIf=\"!logeando\" class=\"progress\">\r\n          <div class=\"progress-bar progress-bar-info progress-bar-striped active\" [class]=\"clase\" role=\"progressbar\" aria-valuenow=\"10\"\r\n            aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"ProgresoDeAncho\">\r\n            {{progresoMensaje}} - {{progreso}}%\r\n          </div>\r\n        </div>\r\n\r\n        <input type=\"checkbox\" checked=\"checked\"> Recordar mis datos\r\n      </div>\r\n\r\n      <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n        <button type=\"button\" class=\"cancelbtn\">Cancelar</button>\r\n        <button type=\"button\" class=\"aceptbtn\" routerLink=\"/Registro\">Registrarse</button>\r\n        <span class=\"psw\">Te olvidaste <a href=\"#\">la clave?</a></span>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/TimerObservable */ "./node_modules/rxjs-compat/_esm5/observable/TimerObservable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router) {
        this.route = route;
        this.router = router;
        this.usuario = '';
        this.clave = '';
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Entrar = function () {
        if (this.usuario === 'admin' && this.clave === 'admin') {
            this.router.navigate(['/Principal']);
        }
    };
    LoginComponent.prototype.MoverBarraDeProgreso = function () {
        var _this = this;
        this.logeando = false;
        this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
        this.progresoMensaje = "NSA spy...";
        var timer = rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_2__["TimerObservable"].create(200, 50);
        this.subscription = timer.subscribe(function (t) {
            console.log("inicio");
            _this.progreso = _this.progreso + 1;
            _this.ProgresoDeAncho = _this.progreso + 20 + "%";
            switch (_this.progreso) {
                case 15:
                    _this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
                    _this.progresoMensaje = "Verificando ADN...";
                    break;
                case 30:
                    _this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
                    _this.progresoMensaje = "Adjustando encriptación..";
                    break;
                case 60:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando Info del dispositivo..";
                    break;
                case 75:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
                    break;
                case 85:
                    _this.clase = "progress-bar progress-bar-success progress-bar-striped active";
                    _this.progresoMensaje = "Instalando KeyLogger..";
                    break;
                case 100:
                    console.log("final");
                    _this.subscription.unsubscribe();
                    _this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/componentes/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n  }"

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\r\n\r\n<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\">\r\n   \r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n<input type =\"text\" [(ngModel)]=\"lat\" />\r\n<input type=\"text\" [(ngModel)]=\"lng\"/> "

/***/ }),

/***/ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/mapa-de-google/mapa-de-google.component.ts ***!
  \************************************************************************/
/*! exports provided: MapaDeGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaDeGoogleComponent", function() { return MapaDeGoogleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapaDeGoogleComponent = /** @class */ (function () {
    function MapaDeGoogleComponent() {
        this.title = 'El Primer mapa';
        this.lat = 33.678418;
        this.lng = 5.809007;
        // google maps zoom level
        this.zoom = 8;
    }
    MapaDeGoogleComponent.prototype.ngOnInit = function () {
    };
    MapaDeGoogleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mapa-de-google',
            template: __webpack_require__(/*! ./mapa-de-google.component.html */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.html"),
            styles: [__webpack_require__(/*! ./mapa-de-google.component.css */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapaDeGoogleComponent);
    return MapaDeGoogleComponent;
}());



/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    border-radius: 5px; /* 5px rounded corners */\r\n    max-width: 300px;\r\n   height: 100%;\r\n    margin: 10px;\r\n    padding-bottom: 10px;\r\n    float: left;\r\n  background-color: #DEF3A6;\r\n    text-align: center;\r\n}\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\n\r\nimg {\r\n    border-radius: 5px 5px 0 0;\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n/* Add some padding inside the card container */\r\n\r\n.container {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.button{\r\n    margin-left: 1px;\r\n    display: inline-block;\r\n    width: 90%;\r\n    padding: 5px 15px;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: #fff;\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    border-radius: 15px;\r\n    box-shadow: 0 9px #999;\r\n\r\n    border: none;\r\n    outline: 0;\r\n \r\n    padding: 8px;\r\n    color: white;\r\n   /* background-color: #000;*/\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n\r\n.button:hover {background-color: #3e8e41}\r\n\r\n.button:active {\r\n    background-color: #3e8e41;\r\n    box-shadow: 0 5px #666;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n  }"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"card\">\r\n    <img class=\"img-thumbnail\" src=\"./assets/imagenes/cerebro.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n    <h1>Velocidad y agilidad aritmética </h1>\r\n    <p class=\"title\">Juego de agilidad mental</p>\r\n    <p>UTN FRA </p>\r\n\r\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n    <p> <button class=\"button\" (click)=\"Juego('Agilidad')\">Jugar</button></p>\r\n\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <img class=\"img-thumbnail\" src=\"./assets/imagenes/ppt.jpg\" alt=\"Avatar\" style=\"width:100%\">\r\n    <h1>Piedra Papel o Tijera</h1><br><br>\r\n    <p class=\"title\">Juega contra la máquina</p>\r\n    <p>UTN FRA </p>\r\n\r\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n    <p> <button class=\"button\" (click)=\"Juego('PPT')\">Jugar</button></p>\r\n  </div>\r\n  <div class=\"card\">\r\n    <img class=\"img-thumbnail\" src=\"./assets/imagenes/adivina.png\" alt=\"Avatar\" style=\"width:100%\">\r\n    <h1>Adivina el número secreto</h1><br><br>\r\n    <p class=\"title\">Juego de estrategia</p>\r\n    <p>UTN FRA </p>\r\n\r\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n    <p> <button class=\"button\" (click)=\"Juego('Adivina')\">Jugar</button></p>\r\n  </div>\r\n\r\n  <div class=\"card\">\r\n    <img class=\"img-thumbnail\" src=\"./assets/imagenes/naval.png\" alt=\"Avatar\" style=\"width:100%\">\r\n    <h1>Batalla naval</h1><br><br>\r\n    <p class=\"title\">Capacidad deduciva</p>\r\n    <p>Demian</p>\r\n\r\n    <a href=\"#\"><i class=\"fa fa-dribbble\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n    <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n    <p> <button class=\"button\" (click)=\"Juego('Batalla-Naval')\">Jugar</button></p>\r\n  </div>"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuCardComponent = /** @class */ (function () {
    function MenuCardComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
    };
    MenuCardComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'Batalla-Naval':
                this.router.navigate(['/Juegos/Batalla-Naval']);
                break;
        }
    };
    MenuCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-card',
            template: __webpack_require__(/*! ./menu-card.component.html */ "./src/app/componentes/menu-card/menu-card.component.html"),
            styles: [__webpack_require__(/*! ./menu-card.component.css */ "./src/app/componentes/menu-card/menu-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuCardComponent);
    return MenuCardComponent;
}());



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.css":
/*!*****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.html":
/*!******************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div>\r\n    <button routerLink=\"/Principal\">Principal</button>\r\n    <button (click)=\"Juego('Adivina')\">Adivina</button>\r\n    <button (click)=\"Juego('Agilidad')\">Agilidad</button>\r\n    <button (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</button>\r\n    <button (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</button>  \r\n    <button routerLink=\"/error\">Error</button>\r\n  \r\n</div-->\r\n\r\n<!--nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n      </div>\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a routerLink=\"/Juegos\">Juegos</a></li>\r\n        <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n        <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n        <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\r\n        <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n          <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n        </ul>\r\n    </div>\r\n  </nav-->\r\n<!-- <nav class=\"navbar navbar-inverse\">\r\n      <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n          <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n            <span class=\"icon-bar\"></span>\r\n                                  \r\n          </button>\r\n          <a class=\"navbar-brand\" routerLink=\"/Principal\">Inicio</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"active\"><a routerLink=\"/Juegos\">Menú de Juegos</a></li>\r\n                <li><a data-toggle=\"tooltip\" title=\"Hooray!\" (click)=\"Juego('Adivina')\">Adivina</a></li>\r\n                <li><a  (click)=\"Juego('Agilidad')\">Agilidad</a></li>\r\n                <li><a  (click)=\"Juego('AdivinaMasListado')\">Adivina+listado</a></li>\r\n                <li><a  (click)=\"Juego('AgilidadaMasListado')\">Agilidad+listado</a></li>\r\n              </ul>\r\n              <ul class=\"nav navbar-nav navbar-right\">\r\n                  <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Mis Datos</a></li>\r\n                  <li><a href=\"/Login\"><span class=\"glyphicon glyphicon-log-out\"></span> Salir</a></li>\r\n                </ul>\r\n        </div>\r\n      </div>\r\n    </nav> -->\r\n     \r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav\">\r\n      <li class=\"active\"><a href=\"#\">Home</a></li>\r\n      <li><a href=\"#\">Page 1</a></li>\r\n      <li><a href=\"#\">Page 2</a></li>\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\r\n      <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.Juego = function (tipo) {
        switch (tipo) {
            case 'Adivina':
                this.router.navigate(['/Juegos/Adivina']);
                break;
            case 'Agilidad':
                this.router.navigate(['/Juegos/Agilidad']);
                break;
            case 'AdivinaMasListado':
                this.router.navigate(['/Juegos/AdivinaMasListado']);
                break;
            case 'AgilidadaMasListado':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
            case 'Naval':
                this.router.navigate(['/Juegos/AgilidadaMasListado']);
                break;
        }
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/componentes/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/componentes/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagenDeMenu{\r\nwidth: 80px;\r\nheight: 70px;\r\n}\r\n\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: #100000;\r\n    }"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin:70px 0 0 -10px\">\r\n  <app-cabecera> </app-cabecera>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xs-6 col-sm-8 col-lg-2\">\r\n      <div style=\"margin:50px 5px 10px 40px\">\r\n        <div class=\"row\" style=\"margin-top:20px\">\r\n          <div class=\"list-group\" style=\"width:100%\">\r\n            <a href=\"https://github.com/octaviovillegas\" class=\"list-group-item list-group-item-action list-group-item\"style=\"border-radius:40px\">\r\n              <i class=\"fa fa-github\">\r\n              </i>\r\n                Github\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top:20px\">\r\n          <div class=\"list-group\" style=\"width:100%\">\r\n            <a routerLink=\"/QuienSoy\" class=\"list-group-item list-group-item-action list-group-item\" style=\"border-radius:40px\">\r\n              <i class=\"fa fa-user-circle-o\">\r\n              </i>\r\n                  Quien Soy?\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top:20px\">\r\n          <div class=\"list-group\" style=\"width:100%\">\r\n            <a routerLink=\"/QuienSoy\" class=\"list-group-item list-group-item-action list-group-item\" style=\"border-radius:40px\">\r\n              <i class=\"fa fa-cogs\">\r\n                </i>\r\n                 Settings\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-6 col-sm-8 col-lg-10\">\r\n      <h6 style=\"font-size:30px\" class=\"text-center\">\r\n        Boullon Demian\r\n      </h6>\r\n      <ul class=\"list-group\" style=\"margin-top:10px 0 0 0\">\r\n        <li class=\"list-group-item\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n              <div class=\"media-left\">\r\n                <img src=\"./assets/imagenes/Videogames.gif\" class=\"media-object imagenDeMenu\">\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Juegos</h4>\r\n                <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en los\r\n                  estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se\r\n                  apropien de los temas impartidos por los docentes utilizando el juego.</p>\r\n              </div>\r\n\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <a routerLink=\"/Listado\">\r\n            <div class=\"media\">\r\n              <div class=\"media-left\">\r\n                <img src=\"./assets/imagenes/listado.jpg\" class=\"media-object imagenDeMenu\">\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Listados de resultados</h4>\r\n                <p>Los listados de los resultados con ordenamiento y busqueda</p>\r\n              </div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <a routerLink=\"/Juegos\">\r\n            <div class=\"media\">\r\n              <div class=\"media-left\">\r\n                <img src=\"./assets/imagenes/Configuracion.png\" class=\"media-object imagenDeMenu\">\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Configuraci&oacute;n</h4>\r\n                <p>Ajustes de la aplicacion y los métodos de autentificación</p>\r\n              </div>\r\n            </div>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-group-item\">\r\n          <a routerLink=\"/Jugadores\">\r\n            <div class=\"media\">\r\n              <div class=\"media-left\">\r\n                <img src=\"./assets/imagenes/jugadores.png\" class=\"media-object imagenDeMenu\">\r\n              </div>\r\n              <div class=\"media-body\">\r\n                <h4 class=\"media-heading\">Jugadores</h4>\r\n                <p>Listado de jugadores</p>\r\n              </div>\r\n\r\n            </div>\r\n          </a>\r\n        </li>\r\n\r\n\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent() {
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/componentes/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagenDeQuienSoy{\r\n    width: 100%;\r\n   \r\n    }\r\nbody {\r\n    font: 20px Montserrat, sans-serif;\r\n    line-height: 1.8;\r\n    color: #f5f6f7;\r\n}\r\np {font-size: 16px;}\r\n.margin {margin-bottom: 45px;}\r\n.bg-1 { \r\n    background-color: #1abc9c; /* Green */\r\n    color: #ffffff;\r\n}\r\n.bg-2 { \r\n    background-color: #474e5d; /* Dark Blue */\r\n    color: #ffffff;\r\n}\r\n.bg-3 { \r\n    background-color: #ffffff; /* White */\r\n    color: #555555;\r\n}\r\n.bg-4 { \r\n    background-color: #2f2f2f; /* Black Gray */\r\n    color: #fff;\r\n}\r\n.container-fluid {\r\n    padding-top: 70px;\r\n    padding-bottom: 70px;\r\n}\r\n.navbar {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border: 0;\r\n    border-radius: 0;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    letter-spacing: 5px;\r\n}\r\n.navbar-nav  li a:hover {\r\n    color: #1abc9c !important;\r\n}"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"./\">Sala De Juegos</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"./QuienSoy#quien\">Quien</a></li>\r\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#que\">Ques es</a></li>\r\n          <li><a href=\"./QuienSoy#donde\">Donde</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  \r\n  <!-- First Container -->\r\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\r\n    <h3 class=\"margin\">Quién Soy?</h3>\r\n    <img src=\"./assets/imagenes/quiensoy.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\r\n    <h3>Soy Un alumno de la UTN FRA</h3>\r\n  </div>\r\n  \r\n  <!-- Second Container -->\r\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\r\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\r\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\r\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\r\n    <a href=\"#\" class=\"btn btn-default btn-lg\">\r\n      <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\r\n    </a>\r\n  </div>\r\n  \r\n  <!-- Third Container (Grid) -->\r\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \r\n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\r\n        <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\r\n        <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\r\n        <img src=\"./assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- Footer -->\r\n  <footer class=\"container-fluid bg-4 text-center\">\r\n    <p>Modificado por <a href=\"https://www.octavio.com.ar\">www.octavio.com.ar</a></p> \r\n  </footer>"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienSoyComponent = /** @class */ (function () {
    function QuienSoyComponent() {
    }
    QuienSoyComponent.prototype.ngOnInit = function () {
    };
    QuienSoyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quien-soy',
            template: __webpack_require__(/*! ./quien-soy.component.html */ "./src/app/componentes/quien-soy/quien-soy.component.html"),
            styles: [__webpack_require__(/*! ./quien-soy.component.css */ "./src/app/componentes/quien-soy/quien-soy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuienSoyComponent);
    return QuienSoyComponent;
}());



/***/ }),

/***/ "./src/app/componentes/registro/registro.component.css":
/*!*************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.cancelbtn,.signupbtn {float:left;width:50%}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 98%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button (x) */\r\n\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"jumbotron\">\r\n    <h2 id=\"terminos\">Terminos y condiciones</h2>\r\n    <p>El Gobierno de la República Argentina (en adelante el “Gobierno Nacional”) no es responsable por los daños y perjuicios que puedan surgir, incluyendo, sin límite, daños, pérdidas o gastos directos, indirectos, que surjan en relación con el uso de los Activos Digitales o la imposibilidad de uso, en relación con cualquier falla en el vencimiento, error, omisión, interrupción, defecto, demora en la operación o transmisión, virus de computadora o falla del sistema de línea, aún en el caso de que el Gobierno Nacional o sus representantes fueran informados sobre la posibilidad de dichos daños, pérdidas o gastos.</p>\r\n    <p>El Gobierno Nacional no controla ni garantiza la ausencia de virus ni de otros elementos en los contenidos que puedan producir alteraciones en su sistema informático (software y hardware) o en los documentos electrónicos y ficheros almacenados en su sistema informático.</p>\r\n    <p>El Gobierno Nacional no puede garantizar que la transmisión de información por parte de los Usuarios sea completamente segura. El Usuario asume este riesgo.</p>\r\n   \r\n  </div>\r\n  <strong><p>No leer lo anterior, es solo un ejemplo sacado de https://www.argentina.gob.ar/terminos-y-condiciones </p></strong>\r\n  <button onclick=\"document.getElementById('id01').style.display='block'\" style=\"width:auto;\">Acepto</button>\r\n  <button  class=\"cancelbtn\"  routerLink=\"/Principal\" style=\"width:auto;\">No acepto</button>\r\n  <div id=\"id01\" class=\"modal\">\r\n    <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\r\n    <form class=\"modal-content animate\" >\r\n      <div class=\"container\">\r\n        <label><b>Email</b></label>\r\n        <input type=\"text\" placeholder=\"Ingresa tu correo\" name=\"email\" required>\r\n  \r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca la clave\" name=\"psw\" required>\r\n  \r\n        <label><b>Repita la clave</b></label>\r\n        <input type=\"password\" placeholder=\"Aca repeti la misa clave  de arriba\" name=\"psw-repeat\" required>\r\n        <input type=\"checkbox\" checked=\"checked\">Recordar mis datos\r\n        <p>creando la cuenta aceptando los<a  onclick=\"document.getElementById('id01').style.display='none'\"  >Terminos y condiciones</a>.</p>\r\n  \r\n        <div class=\"clearfix\">\r\n          <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Me arrepenti</button>\r\n          <button type=\"submit\" class=\"signupbtn\">Registrarme</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  \r\n  <script>\r\n  // Get the modal\r\n  var modal = document.getElementById('id01');\r\n  \r\n  // When the user clicks anywhere outside of the modal, close it\r\n  window.onclick = function(event) {\r\n      if (event.target == modal) {\r\n          modal.style.display = \"none\";\r\n      }\r\n  }\r\n  </script>\r\n  \r\n  </body>"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
var RegistroComponent = /** @class */ (function () {
    /* constructor( private miConstructor:FormBuilder) { }
     email=new FormControl('',[Validators.email]);
     formRegistro:FormGroup=this.miConstructor.group({
       usuario:this.email
     });*/
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/componentes/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/componentes/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/pipes/sexo.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sexo.pipe.ts ***!
  \************************************/
/*! exports provided: SexoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SexoPipe", function() { return SexoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SexoPipe = /** @class */ (function () {
    function SexoPipe() {
    }
    SexoPipe.prototype.transform = function (value, args) {
        if (value = 'M') {
            return "machito";
        }
        else {
            return "señorita";
        }
    };
    SexoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sexo'
        })
    ], SexoPipe);
    return SexoPipe;
}());



/***/ }),

/***/ "./src/app/ruteando/ruteando.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ruteando/ruteando.module.ts ***!
  \*********************************************/
/*! exports provided: RuteandoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuteandoModule", function() { return RuteandoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _componentes_batalla_naval_batalla_naval_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../componentes/batalla-naval/batalla-naval.component */ "./src/app/componentes/batalla-naval/batalla-naval.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// importo del module principal

















// declaro donde quiero que se dirija
var MiRuteo = [
    { path: 'Jugadores', component: _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_16__["JugadoresListadoComponent"] },
    { path: '', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"] },
    { path: 'Login', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'Mapa', component: _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_15__["MapaDeGoogleComponent"] },
    { path: 'QuienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_13__["QuienSoyComponent"] },
    { path: 'Registro', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_11__["RegistroComponent"] },
    { path: 'Principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"] },
    { path: 'Listado', component: _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_9__["ListadoComponent"] },
    { path: 'Paises', component: _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_14__["ListadoDePaisesComponent"] },
    {
        path: 'Juegos',
        component: _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_10__["JuegosComponent"],
        children: [{ path: '', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_12__["MenuCardComponent"] },
            { path: 'Adivina', component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_2__["AdivinaElNumeroComponent"] },
            { path: 'AdivinaMasListado', component: _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_7__["AdivinaMasListadoComponent"] },
            { path: 'AgilidadaMasListado', component: _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_8__["AgilidadMasListadoComponent"] },
            { path: 'Agilidad', component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_6__["AgilidadAritmeticaComponent"] },
            { path: 'Batalla-Naval', component: _componentes_batalla_naval_batalla_naval_component__WEBPACK_IMPORTED_MODULE_17__["BatallaNavalComponent"] }
        ]
    },
    { path: '**', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] },
    { path: 'error', component: _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] }
];
var RuteandoModule = /** @class */ (function () {
    function RuteandoModule() {
    }
    RuteandoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(MiRuteo)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], RuteandoModule);
    return RuteandoModule;
}());



/***/ }),

/***/ "./src/app/servicios/archivos-jugadores.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicios/archivos-jugadores.service.ts ***!
  \*********************************************************/
/*! exports provided: ArchivosJugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchivosJugadoresService", function() { return ArchivosJugadoresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArchivosJugadoresService = /** @class */ (function () {
    function ArchivosJugadoresService(miHttp) {
        this.miHttp = miHttp;
        this.api = "http://localhost:8080/jugadoresarchivo/apirestjugadores/";
    }
    ArchivosJugadoresService.prototype.traerJugadores = function (ruta) {
        return this.miHttp.httpGetO(this.api + ruta)
            .toPromise()
            .then(function (data) {
            console.log("Archivo jugadores");
            // console.log( data );
            return data;
        }, function (err) {
            console.log(err);
        });
    };
    ArchivosJugadoresService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"]])
    ], ArchivosJugadoresService);
    return ArchivosJugadoresService;
}());



/***/ }),

/***/ "./src/app/servicios/juego-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/servicios/juego-service.service.ts ***!
  \****************************************************/
/*! exports provided: JuegoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoServiceService", function() { return JuegoServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JuegoServiceService = /** @class */ (function () {
    function JuegoServiceService(miHttp) {
        this.miHttp = miHttp;
        this.peticion = this.miHttp.httpGetO("http://localhost:3003");
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JuegoServiceService.prototype.listar = function () {
        this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
        this.peticion
            .subscribe(function (data) {
            console.log("En listar");
            console.log(data);
        }, function (err) {
            console.info("error: ", err);
        });
        var miArray = new Array();
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 1", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Pepe", true));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 3", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 4", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 5", false));
        miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("Juego 6", false));
        return miArray;
    };
    JuegoServiceService.prototype.listarPromesa = function () {
        this.peticion
            .subscribe(function (data) {
            console.log("En listarPromesa");
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        var promesa = new Promise(function (resolve, reject) {
            var miArray = new Array();
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 1", false, "promesa"));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("PepePromesa", true));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 3", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 4", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 5", false));
            miArray.push(new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]("JuegoPromesa 6", false));
            resolve(miArray);
        });
        return promesa;
    };
    JuegoServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_2__["MiHttpService"]])
    ], JuegoServiceService);
    return JuegoServiceService;
}());



/***/ }),

/***/ "./src/app/servicios/jugadores.service.ts":
/*!************************************************!*\
  !*** ./src/app/servicios/jugadores.service.ts ***!
  \************************************************/
/*! exports provided: JugadoresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JugadoresService", function() { return JugadoresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JugadoresService = /** @class */ (function () {
    //peticion:any;
    function JugadoresService(miHttp) {
        this.miHttp = miHttp;
        // this.peticion = this.miHttp.traerJugadores();
        //    this.peticion = this.miHttp.httpGetO("https://restcountries.eu/rest/v2/all");
    }
    JugadoresService.prototype.traertodos = function (ruta, filtro) {
        var _this = this;
        return this.miHttp.traerJugadores(ruta).then(function (data) {
            console.info("jugadores service", data);
            _this.filtrado = data;
            var ganador;
            if (filtro == "ganadores") {
                ganador = true;
            }
            else {
                ganador = false;
            }
            _this.filtrado = _this.filtrado.filter(function (data) { return data.gano === ganador || filtro == "todos"; });
            return _this.filtrado;
        })
            .catch(function (errror) {
            console.log("error");
            return _this.filtrado;
        });
    };
    JugadoresService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_1__["ArchivosJugadoresService"]])
    ], JugadoresService);
    return JugadoresService;
}());



/***/ }),

/***/ "./src/app/servicios/mi-http/mi-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/servicios/mi-http/mi-http.service.ts ***!
  \******************************************************/
/*! exports provided: MiHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiHttpService", function() { return MiHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MiHttpService = /** @class */ (function () {
    function MiHttpService(http) {
        this.http = http;
    }
    MiHttpService.prototype.httpGetP = function (url) {
        return this.http
            .get(url)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    MiHttpService.prototype.httpPostP = function (url, objeto) {
        return this.http
            .get(url)
            .subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    MiHttpService.prototype.httpGetO = function (url) {
        return this.http.get(url)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.json().error || 'Server error'); });
    };
    MiHttpService.prototype.extractData = function (res) {
        return res.json() || {};
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    MiHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MiHttpService);
    return MiHttpService;
}());



/***/ }),

/***/ "./src/app/servicios/paises.service.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/paises.service.ts ***!
  \*********************************************/
/*! exports provided: PaisesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaisesService", function() { return PaisesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mi-http/mi-http.service */ "./src/app/servicios/mi-http/mi-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaisesService = /** @class */ (function () {
    function PaisesService(miHttp) {
        this.miHttp = miHttp;
    }
    PaisesService.prototype.listar = function () {
        return this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
            .then(function (data) {
            console.log(data);
            return data;
        })
            .catch(function (err) {
            console.log(err);
            return null;
        });
        //return null;
    };
    PaisesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"]])
    ], PaisesService);
    return PaisesService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\source\TP_LABO\version2\20180908 - copia\TP_LAV4_2017\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map