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

module.exports = "<!--Donde se encuentre este tag, se instancian los componentes dependientes del ruteo-->`\r\n<app-cabecera> </app-cabecera>\r\n<router-outlet class=\"imagenPrincipal\"></router-outlet>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.userEmail = "usuario";
        this.appLoged = true;
    }
    AppComponent.prototype.eventPopUp = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.checkLog = function () {
        //alert("EL EVENTO");
        return true;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicios/user.service */ "./src/app/servicios/user.service.ts");
/* harmony import */ var _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./servicios/jugadores.service */ "./src/app/servicios/jugadores.service.ts");
/* harmony import */ var _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./servicios/archivos-jugadores.service */ "./src/app/servicios/archivos-jugadores.service.ts");
/* harmony import */ var _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/error/error.component */ "./src/app/componentes/error/error.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./componentes/adivina-mas-listado/adivina-mas-listado.component */ "./src/app/componentes/adivina-mas-listado/adivina-mas-listado.component.ts");
/* harmony import */ var _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/agilidad-mas-listado/agilidad-mas-listado.component */ "./src/app/componentes/agilidad-mas-listado/agilidad-mas-listado.component.ts");
/* harmony import */ var _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ruteando/ruteando.module */ "./src/app/ruteando/ruteando.module.ts");
/* harmony import */ var _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/listado/listado.component */ "./src/app/componentes/listado/listado.component.ts");
/* harmony import */ var _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/jugadores-listado/jugadores-listado.component */ "./src/app/componentes/jugadores-listado/jugadores-listado.component.ts");
/* harmony import */ var _servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./servicios/juego-service.service */ "./src/app/servicios/juego-service.service.ts");
/* harmony import */ var _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/listados/listados.component */ "./src/app/componentes/listados/listados.component.ts");
/* harmony import */ var _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/juegos/juegos.component */ "./src/app/componentes/juegos/juegos.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./componentes/listado-de-paises/listado-de-paises.component */ "./src/app/componentes/listado-de-paises/listado-de-paises.component.ts");
/* harmony import */ var _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./componentes/mapa-de-google/mapa-de-google.component */ "./src/app/componentes/mapa-de-google/mapa-de-google.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./componentes/input-jugadores/input-jugadores.component */ "./src/app/componentes/input-jugadores/input-jugadores.component.ts");
/* harmony import */ var _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pipes/sexo.pipe */ "./src/app/pipes/sexo.pipe.ts");
/* harmony import */ var _componentes_batalla_naval_batalla_naval_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./componentes/batalla-naval/batalla-naval.component */ "./src/app/componentes/batalla-naval/batalla-naval.component.ts");
/* harmony import */ var _componentes_counter_counter_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./componentes/counter/counter.component */ "./src/app/componentes/counter/counter.component.ts");
/* harmony import */ var _componentes_piedra_tijera_piedra_tijera_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./componentes/piedra-tijera/piedra-tijera.component */ "./src/app/componentes/piedra-tijera/piedra-tijera.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");
/* harmony import */ var _componentes_sub_title_sub_title_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./componentes/sub-title/sub-title.component */ "./src/app/componentes/sub-title/sub-title.component.ts");
/* harmony import */ var _componentes_lateral_panel_lateral_panel_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./componentes/lateral-panel/lateral-panel.component */ "./src/app/componentes/lateral-panel/lateral-panel.component.ts");
/* harmony import */ var _componentes_timer_timer_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./componentes/timer/timer.component */ "./src/app/componentes/timer/timer.component.ts");
/* harmony import */ var _componentes_point_meter_point_meter_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./componentes/point-meter/point-meter.component */ "./src/app/componentes/point-meter/point-meter.component.ts");
/* harmony import */ var _componentes_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./componentes/pop-up/pop-up.component */ "./src/app/componentes/pop-up/pop-up.component.ts");
/* harmony import */ var _clases_IncrementService__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./clases/IncrementService */ "./src/app/clases/IncrementService.ts");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./clases/user */ "./src/app/clases/user.ts");
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
                _componentes_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_14__["PrincipalComponent"],
                _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_15__["AgilidadAritmeticaComponent"],
                _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                _componentes_adivina_mas_listado_adivina_mas_listado_component__WEBPACK_IMPORTED_MODULE_17__["AdivinaMasListadoComponent"],
                _componentes_agilidad_mas_listado_agilidad_mas_listado_component__WEBPACK_IMPORTED_MODULE_18__["AgilidadMasListadoComponent"],
                _componentes_listado_listado_component__WEBPACK_IMPORTED_MODULE_20__["ListadoComponent"],
                _componentes_listados_listados_component__WEBPACK_IMPORTED_MODULE_23__["ListadosComponent"],
                _componentes_juegos_juegos_component__WEBPACK_IMPORTED_MODULE_24__["JuegosComponent"],
                _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_25__["RegistroComponent"],
                _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_26__["MenuCardComponent"],
                _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__["CabeceraComponent"],
                _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_28__["QuienSoyComponent"],
                _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_29__["AnagramaComponent"],
                _componentes_listado_de_paises_listado_de_paises_component__WEBPACK_IMPORTED_MODULE_30__["ListadoDePaisesComponent"],
                _componentes_mapa_de_google_mapa_de_google_component__WEBPACK_IMPORTED_MODULE_31__["MapaDeGoogleComponent"],
                _componentes_jugadores_listado_jugadores_listado_component__WEBPACK_IMPORTED_MODULE_21__["JugadoresListadoComponent"],
                _componentes_input_jugadores_input_jugadores_component__WEBPACK_IMPORTED_MODULE_33__["InputJugadoresComponent"],
                _pipes_sexo_pipe__WEBPACK_IMPORTED_MODULE_34__["SexoPipe"],
                _componentes_batalla_naval_batalla_naval_component__WEBPACK_IMPORTED_MODULE_35__["BatallaNavalComponent"],
                _componentes_counter_counter_component__WEBPACK_IMPORTED_MODULE_36__["CounterComponent"],
                _componentes_piedra_tijera_piedra_tijera_component__WEBPACK_IMPORTED_MODULE_37__["PiedraTijeraComponent"],
                _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_38__["TatetiComponent"],
                _componentes_sub_title_sub_title_component__WEBPACK_IMPORTED_MODULE_39__["SubTitleComponent"],
                _componentes_lateral_panel_lateral_panel_component__WEBPACK_IMPORTED_MODULE_40__["LateralPanelComponent"],
                _componentes_timer_timer_component__WEBPACK_IMPORTED_MODULE_41__["TimerComponent"],
                _componentes_point_meter_point_meter_component__WEBPACK_IMPORTED_MODULE_42__["PointMeterComponent"],
                _componentes_pop_up_pop_up_component__WEBPACK_IMPORTED_MODULE_43__["PopUpComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ruteando_ruteando_module__WEBPACK_IMPORTED_MODULE_19__["RuteandoModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_32__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
                })
                // NgbModule.forRoot(MiRuteo),
                // importo el ruteo
                // RouterModule.forRoot(MiRuteo)
            ],
            providers: [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_22__["JuegoServiceService"], _servicios_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_8__["MiHttpService"], _servicios_paises_service__WEBPACK_IMPORTED_MODULE_9__["PaisesService"], _servicios_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _servicios_archivos_jugadores_service__WEBPACK_IMPORTED_MODULE_12__["ArchivosJugadoresService"], _servicios_jugadores_service__WEBPACK_IMPORTED_MODULE_11__["JugadoresService"], _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_27__["CabeceraComponent"], _clases_IncrementService__WEBPACK_IMPORTED_MODULE_44__["IncrementService"], _clases_user__WEBPACK_IMPORTED_MODULE_45__["User"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clases/IncrementService.ts":
/*!********************************************!*\
  !*** ./src/app/clases/IncrementService.ts ***!
  \********************************************/
/*! exports provided: IncrementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementService", function() { return IncrementService; });
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

var IncrementService = /** @class */ (function () {
    function IncrementService() {
        this.contador = false;
        this.email = "desconocido";
    }
    IncrementService.prototype.singInOut = function () {
        console.log('Contador aumentando');
        this.contador = !this.contador;
    };
    IncrementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], IncrementService);
    return IncrementService;
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
/*! exports provided: OPERATORS, JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATORS", function() { return OPERATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
var OPERATORS = ["X", "/", "+", "-"];
var JuegoAgilidad = /** @class */ (function () {
    function JuegoAgilidad() {
        this._succes = false;
        this._classButton = "btn btn-outline-agilidad";
        var index = Math.floor(Math.random() * 4);
        this._operator = OPERATORS[index];
        switch (OPERATORS[index]) {
            case "X":
                this._numOne = Math.floor(Math.random() * 10) + 1;
                this._numTwo = Math.floor(Math.random() * 10) + 1;
                this._respuesta = this._numOne * this._numTwo;
                break;
            case "/":
                this._numOne = Math.floor(Math.random() * 10) + 1;
                this._numTwo = Math.floor(Math.random() * 3) + 1;
                this._respuesta = Number((this._numOne / this._numTwo).toFixed(1));
                break;
            case "+":
                this._numOne = Math.floor(Math.random() * 10) + 1;
                this._numTwo = Math.floor(Math.random() * 10) + 1;
                this._respuesta = this._numOne + this._numTwo;
                break;
            default:
                this._numOne = Math.floor(Math.random() * 21) + 1;
                this._numTwo = Math.floor(Math.random() * 21) + 1;
                this._respuesta = this._numOne - this._numTwo;
                break;
        }
        console.log(this);
    }
    Object.defineProperty(JuegoAgilidad.prototype, "numOne", {
        get: function () {
            return this._numOne;
        },
        set: function (numOne) {
            this._numOne = numOne;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "numTwo", {
        get: function () {
            return this._numTwo;
        },
        set: function (numTwo) {
            this._numTwo = numTwo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "respuesta", {
        get: function () {
            return this._respuesta;
        },
        set: function (respuesta) {
            this._respuesta = respuesta;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "userResponse", {
        get: function () {
            return this._userResponse;
        },
        set: function (userResponse) {
            this._userResponse = userResponse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "operator", {
        get: function () {
            return this._operator;
        },
        set: function (operator) {
            this._operator = operator;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "classButton", {
        get: function () {
            return this._classButton;
        },
        set: function (classButton) {
            this._classButton = classButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JuegoAgilidad.prototype, "succes", {
        get: function () {
            return this._succes;
        },
        set: function (succes) {
            this._succes = succes;
        },
        enumerable: true,
        configurable: true
    });
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

/***/ "./src/app/clases/user.ts":
/*!********************************!*\
  !*** ./src/app/clases/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
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

var User = /** @class */ (function () {
    function User() {
        this.email = "";
        this.password = "";
    }
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "passwordControl", {
        get: function () {
            return this._passwordControl;
        },
        set: function (value) {
            this._passwordControl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "actualGame", {
        get: function () {
            return this._actualGame;
        },
        set: function (value) {
            this._actualGame = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "naval", {
        get: function () {
            return this._naval;
        },
        set: function (value) {
            this._naval = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "tateti", {
        get: function () {
            return this._tateti;
        },
        set: function (value) {
            this._tateti = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "agilidad", {
        get: function () {
            return this._agilidad;
        },
        set: function (value) {
            this._agilidad = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "piedra", {
        get: function () {
            return this._piedra;
        },
        set: function (value) {
            this._piedra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "anagrama", {
        get: function () {
            return this._anagrama;
        },
        set: function (value) {
            this._anagrama = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "points", {
        get: function () {
            return this._points;
        },
        set: function (value) {
            this._points = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "pointsActualGame", {
        get: function () {
            return this._pointsActualGame;
        },
        set: function (value) {
            this._pointsActualGame = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "won", {
        get: function () {
            return this._won;
        },
        set: function (value) {
            this._won = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lose", {
        get: function () {
            return this._lose;
        },
        set: function (value) {
            this._lose = value;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.validateEmail = function () {
        var succesReturn = false;
        var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email)) {
            succesReturn = true;
            console.log("valido");
        }
        else
            console.log("invalido");
        return succesReturn;
    };
    User.prototype.validatePassword = function () {
        var succesReturn = false;
        if (this.password.length > 3)
            succesReturn = true;
        return succesReturn;
    };
    User.prototype.validatePasswordWithConfirm = function () {
        var succesReturn = false;
        if (this.password.length > 3 && this.password === this.passwordControl)
            succesReturn = true;
        return succesReturn;
    };
    User.prototype.setPoint = function (pointsValue, pointsKey) {
        for (var i = 0; i < pointsKey.length; i++) {
            this._points[pointsKey[i]] = pointsValue[i];
        }
        return true;
    };
    User = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());



/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn {\r\n    width: 100%;\r\n    padding: 10px 18px;\r\n    background-color: rgb(240, 48, 0);\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n#snackbar {\r\n    visibility: hidden;\r\n    min-width: 250px;\r\n    margin-left: -125px;\r\n   \r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 2px;\r\n    padding: 16px;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 50%;\r\n    bottom: 30px;\r\n    font-size: 17px;\r\n}\r\n\r\n#snackbar.Ganador {\r\n    background-color: #059F2F;\r\n}\r\n\r\n#snackbar.Perdedor {\r\n    background-color: #FF0000;\r\n}\r\n\r\n#snackbar.show {\r\n    visibility: visible;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n}\r\n\r\n@-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n}\r\n\r\n@keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n}"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pop-up [(showPopUp)]='showPopUp' [(messege)]='messege'  [(success)]='success'></app-pop-up>\r\n<div class=\"row\" style=\"height:400px;margin-top:60px\">\r\n  <div class=\"col-sm-12 col-md-4 col-lg-3\">\r\n    <app-lateral-panel (timeOut)='timeOut($event)' (pointCalculed)='sendData()' [(title)]='title' [(time)]='time'></app-lateral-panel>\r\n    <!-- <app-counter [counter]=\"counter\"></app-counter> -->\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-8 col-lg-9\" style=\"border-radius: 25px;margin-top:35px;\">\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n    <div class=\"gameBox\" style=\"width:95%;margin:5px;border-radius:5px;height:100%;text-align: center;font:bold;font-size:20px\">\r\n      <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"number\"\r\n        class=\"form-control\"/>\r\n      <div class=\"input-group input-group-sm mb-3\" style=\"width:100%;height:40px;margin:2% 5% 0 0;align-content:center\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" style=\"background-color:rgb(37, 38, 44);color:orange;font-size: 20px;width:100%;padding:1px 8px 4px 15px\"\r\n            id=\"inputGroup-sizing-xl\">Numero ingresado</span>\r\n        </div>\r\n        <input [(ngModel)]='nuevoJuego.numeroIngresado' class=\"form-control\" aria-label=\"Small\" style=\"text-align:center;font:bold;font-size:20px;\"\r\n          disabled #ctrl=\"ngModel\" aria-describedby=\"inputGroup-sizing-sm\">\r\n      </div>\r\n      <h2 [hidden]=\"ocultarVerificar\"></h2>\r\n        <button *ngIf=\"nuevoJuego.numeroSecreto!=0\" style=\"width:100%;margin-top:2%\" (click)=\"verificar()\" class=\"btn btn-outline-success\">\r\n          Verificar\r\n        </button>\r\n        <button *ngIf=\"nuevoJuego.numeroSecreto==0\" style=\"width:100%;margin-top:2%;background-color:rgba(228, 110, 0, 0.089)\" (click)=\"generarnumero()\" class=\"btn btn-outline-warning\">\r\n          Nuevo número secreto\r\n        </button>        \r\n        <label class=\"anagramsWord\" style=\"font-size:50px;margin-top:12%\" *ngIf=\"nuevoJuego.numeroSecreto!=0\">\r\n          <i class=\"fa fa-spinner fa-spin\">\r\n          </i>Esperando que ingrese un número\r\n        </label>\r\n        <div class=\"anagramsWord\" id=\"snackbar\">{{Mensajes}}</div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n\r\n    </div>\r\n  </div>"

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
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
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
    function AdivinaElNumeroComponent(user, userService) {
        this.user = user;
        this.userService = userService;
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "Adivina el número";
        this.ocultarVerificar = false;
    }
    AdivinaElNumeroComponent.prototype.ngOnInit = function () {
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_1__["JuegoAdivina"]();
        console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
        this.time = 50;
        this.user.won = false;
        this.user.lose = false;
        this.user.pointsActualGame = 0;
        this.user.numero = Number(localStorage.getItem("numero"));
        this.user.actualGame = "numero";
        this.messege = "Ganaste!!";
        this.showPopUp = false;
    };
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
            this.user.won = true;
            this.showPopUp = true;
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
    AdivinaElNumeroComponent.prototype.timeOut = function (timeOut) {
        if (timeOut) {
            console.log("timeOut " + timeOut);
            this.messege = "Se acabó el tiempo";
            this.showPopUp = true;
        }
    };
    AdivinaElNumeroComponent.prototype.sendData = function () {
        //alert("Sending");
        this.user.numero += this.user.pointsActualGame;
        this.user.pointsActualGame = this.user.numero;
        this.user.actualGame = "numero";
        this.user.email = localStorage.getItem("email");
        localStorage.setItem("numero", this.user.numero.toString());
        this.userService.sendResults(this.user);
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
        __metadata("design:paramtypes", [_clases_user__WEBPACK_IMPORTED_MODULE_3__["User"], _servicios_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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

module.exports = ".aritmeticaBox{\r\n    width: 400px;\r\n    padding: 15px;\r\n    font-family: 'Roboto',sans-serif;\r\n    box-shadow: 10px 13px 50px -15px rgba(0, 0, 0, 0.904);\r\n    margin:25px;\r\n    background:rgba(139, 139, 139, 0.8);  \r\n    color:black;\r\n}\r\n\r\n\r\n.operaor{\r\n    font-size: 24px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.btn-outline-agilidad{color:#ff8b07;background-color:transparent;background-image:none;border-color:#ff8b07}\r\n\r\n\r\n.btn-outline-agilidad:hover{color:#212529;background-color:#ff8b07;border-color:#ff8b07}\r\n\r\n\r\n.btn-outline-agilidad.focus,.btn-outline-agilidad:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}\r\n\r\n\r\n.btn-outline-agilidad.disabled,.btn-outline-agilidad:disabled{color:#ff8b07;background-color:transparent}\r\n\r\n\r\n.btn-outline-agilidad:not(:disabled):not(.disabled).active,\r\n.btn-outline-agilidad:not(:disabled):not(.disabled):active,\r\n.show>.btn-outline-agilidad\r\n.dropdown-toggle{color:#212529;background-color:#ff8b07;border-color:#ff8b07}\r\n\r\n\r\n.btn-outline-agilidad:not(:disabled):not(.disabled).active:focus,.btn-outline-agilidad:not(:disabled):not(.disabled):active:focus,\r\n.show>.btn-outline-agilidad.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}"

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pop-up [(showPopUp)]='showPopUp' [(messege)]='messege' [(success)]='success'></app-pop-up>\r\n<div class=\"row\" style=\"height:400px;margin-top:60px\">\r\n  <div class=\"col-3\">\r\n    <app-lateral-panel (timeOut)='timeOut($event)' [(title)]='title' (pointCalculed)='sendData()' [(time)]='time'></app-lateral-panel>\r\n    <!-- <app-counter [counter]=\"counter\"></app-counter> -->\r\n  </div>\r\n  <div class=\"col-9\" style=\"border-radius: 25px;margin-top:30px;\">\r\n    <div class=\"row gameBox\" style=\"Margin:0% 5% 0 1%;width: 90%;border-radius: 5px;\">\r\n      <div class=\"col-4\" style=\"font-size:34px;text-align:center;cursor:pointer;outline:none;color:#fff;\">\r\n        <h2>{{juegosAgilidad[0].numOne}}{{juegosAgilidad[0].operator}}{{juegosAgilidad[0].numTwo}}</h2>\r\n      </div>\r\n      <div class=\"col-4 input\">\r\n        <input [(ngModel)]=\"juegosAgilidad[0].userResponse\" [disabled]=\"juegosAgilidad[0].succes\" class=\"form-control\" style=\"width:100%;text-align:center;border-color:black;border-radius::3px\"\r\n          #ctrl=\"ngModel\" type=\"number\">\r\n      </div>\r\n      <div class=\"col-4 input\" style=\"text-align:right\" >\r\n        <button [ngClass]=\"juegosAgilidad[0].classButton\" [disabled]=\"juegosAgilidad[0].succes\" (click)=\"check(0)\">\r\n          Probar suerte\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row gameBox\" style=\"Margin:3% 5% 0 1%;width: 90%;border-radius: 5px;\">\r\n      <div class=\"col-4\" style=\"font-size:34px;text-align:center;cursor:pointer;outline:none;color:#fff;\">\r\n        <h2>{{juegosAgilidad[1].numOne}}{{juegosAgilidad[1].operator}}{{juegosAgilidad[1].numTwo}}</h2>\r\n      </div>\r\n      <div class=\"col-4 input\">\r\n        <input [(ngModel)]=\"juegosAgilidad[1].userResponse\" [disabled]=\"juegosAgilidad[1].succes\" class=\"form-control\" style=\"width:100%;text-align:center;border-color:black;border-radius::3px\"\r\n          #ctrl=\"ngModel\" type=\"number\">\r\n      </div>\r\n\r\n      <div class=\"col-4 input\" style=\"text-align:right\">\r\n        <button [ngClass]=\"juegosAgilidad[1].classButton\" (click)=\"check(1)\" [disabled]=\"juegosAgilidad[1].succes\" >\r\n          Probar suerte\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row gameBox\" style=\"Margin:3% 5% 0 1%;width: 90%;border-radius: 5px;\">\r\n      <div class=\"col-4\" style=\"font-size:34px;text-align:center;cursor:pointer;outline:none;color:#fff;\">\r\n        <h2>{{juegosAgilidad[2].numOne}}{{juegosAgilidad[2].operator}}{{juegosAgilidad[2].numTwo}}</h2>\r\n      </div>\r\n      <div class=\"col-4 input\">\r\n        <input [(ngModel)]=\"juegosAgilidad[2].userResponse\"[disabled]=\"juegosAgilidad[2].succes\" class=\"form-control\" style=\"width:100%;text-align:center;border-color:black;border-radius::3px\"\r\n          #ctrl=\"ngModel\" type=\"number\">\r\n      </div>\r\n\r\n      <div class=\"col-4 input\" style=\"text-align:right\">\r\n        <button [ngClass]=\"juegosAgilidad[2].classButton\" (click)=\"check(2)\" [disabled]=\"juegosAgilidad[2].succes\" >\r\n          Probar suerte\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row gameBox\" style=\"Margin:3% 5% 0 1%;width: 90%;border-radius: 5px;\">\r\n      <div class=\"col-4\" style=\"font-size:34px;text-align:center;cursor:pointer;outline:none;color:#fff;\">\r\n        <h2>{{juegosAgilidad[3].numOne}}{{juegosAgilidad[3].operator}}{{juegosAgilidad[3].numTwo}}</h2>\r\n      </div>\r\n      <div class=\"col-4 input\">\r\n        <input [(ngModel)]=\"juegosAgilidad[3].userResponse\"[disabled]=\"juegosAgilidad[3].succes\" class=\"form-control\" style=\"width:100%;text-align:center;border-color:black;border-radius::3px\"\r\n          #ctrl=\"ngModel\" type=\"number\">\r\n      </div>\r\n      <div class=\"col-4 input\" style=\"text-align:right\">\r\n        <button [ngClass]=\"juegosAgilidad[3].classButton\" (click)=\"check(3)\" [disabled]=\"juegosAgilidad[3].succes\" >\r\n          Probar suerte\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-3\">\r\n\r\n  </div>\r\n</div>"

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
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
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
    function AgilidadAritmeticaComponent(user, userService) {
        this.user = user;
        this.userService = userService;
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.title = "Agilidad Aritmética";
    }
    AgilidadAritmeticaComponent.prototype.ngOnInit = function () {
        this.user.won = false;
        this.user.pointsActualGame = 0;
        this.user.lose = false;
        this.user.agilidad = 0;
        this.user.agilidad = Number(localStorage.getItem("agilidad"));
        this.messege = "Ganaste!!";
        this.showPopUp = false;
        this.time = 50;
        this.subTitle = "Agilidad Aritmetica";
        this.juegosAgilidad = [];
        this.succes = false;
        for (var i = 0; i < 4; i++) {
            this.juegosAgilidad.push(new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_1__["JuegoAgilidad"]());
        }
        this.Tiempo = 5;
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
    AgilidadAritmeticaComponent.prototype.check = function (index) {
        console.log(this.juegosAgilidad[index].userResponse + "  " + index);
        console.log(this.juegosAgilidad[index].respuesta);
        if (this.juegosAgilidad[index].respuesta === this.juegosAgilidad[index].userResponse) {
            this.juegosAgilidad[index].classButton = "btn btn-outline-success pull-right";
            this.juegosAgilidad[index].succes = true;
            var totalSucces_1 = 0;
            this.user.pointsActualGame += 10;
            this.juegosAgilidad.forEach(function (juego) { if (juego.succes)
                totalSucces_1++; });
            if (totalSucces_1 == this.juegosAgilidad.length) {
                this.succes = true;
                this.user.won = true;
                this.showPopUp = true;
            }
        }
        else {
            this.user.pointsActualGame -= 8;
        }
    };
    AgilidadAritmeticaComponent.prototype.sendData = function () {
        this.user.agilidad += this.user.pointsActualGame;
        this.user.pointsActualGame = this.user.agilidad;
        this.user.actualGame = "agilidad";
        this.user.email = localStorage.getItem("email");
        localStorage.setItem("agilidad", this.user.agilidad.toString());
        this.userService.sendResults(this.user);
    };
    AgilidadAritmeticaComponent.prototype.timeOut = function (timeOut) {
        if (timeOut) {
            console.log("timeOut " + timeOut);
            this.messege = "Se acabó el tiempo";
            this.showPopUp = true;
        }
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
        __metadata("design:paramtypes", [_clases_user__WEBPACK_IMPORTED_MODULE_2__["User"], _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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

module.exports = "\r\n<app-agilidad-aritmetica></app-agilidad-aritmetica> \r\n<!-- <h1> Listado de Resultados </h1> -->\r\n<!-- <app-listado-de-resultados [listado]=\"listadoParaCompartir\" [prueba]=\"prueba\"> </app-listado-de-resultados> -->"

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

module.exports = "\r\n\r\n/* .btn-outline-anagrama {\r\n    color: #ff8b07;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    border-color: #ff8b07;\r\n} */\r\n\r\n\r\n.btn-outline-anagrama{color:#ff8b07;background-color:transparent;background-image:none;border-color:#ff8b07}\r\n\r\n\r\n.btn-outline-anagrama:hover{color:#212529;background-color:#ff8b07;border-color:#ff8b07}\r\n\r\n\r\n.btn-outline-anagrama.focus,.btn-outline-anagrama:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}\r\n\r\n\r\n.btn-outline-anagrama.disabled,.btn-outline-anagrama:disabled{color:#ff8b07;background-color:transparent}\r\n\r\n\r\n.btn-outline-anagrama:not(:disabled):not(.disabled).active,\r\n.btn-outline-anagrama:not(:disabled):not(.disabled):active,\r\n.show>.btn-outline-anagrama\r\n.dropdown-toggle{color:#212529;background-color:#ff8b07;border-color:#ff8b07}\r\n\r\n\r\n.btn-outline-anagrama:not(:disabled):not(.disabled).active:focus,.btn-outline-anagrama:not(:disabled):not(.disabled):active:focus,\r\n.show>.btn-outline-anagrama.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}"

/***/ }),

/***/ "./src/app/componentes/anagrama/anagrama.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/anagrama/anagrama.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pop-up [showPopUp]='showPopUp' [messege]='messege' [success]='success'></app-pop-up>\r\n<div class=\"row\" style=\"height:400px;margin-top:60px\">\r\n  <div class=\"col-3\">\r\n    <app-lateral-panel (timeOut)='timeOut($event)' (pointCalculed)='sendData()' [(time)]='time'></app-lateral-panel>\r\n    <!-- <app-counter [counter]=\"counter\"></app-counter> -->\r\n  </div>\r\n  <div class=\"col-9\" style=\"border-radius: 25px;margin-top:30px\">\r\n    <div class=\"row gameBox\" style=\"Margin:-1% 5% 0 1%;width: 90%;border-radius: 5px;\">\r\n      <div class=\"col-2 anagramsWord\">\r\n        <h4>{{anagramsWord[0]}}</h4>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <input [(ngModel)]=\"userWords[0]\" [disabled]=\"words[0].succes\" #ctrl=\"ngModel\" required>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <button [ngClass]='buttonSuccesClass[0]' [disabled]=\"words[0].succes\" (click)=\"checkWord(0)\">\r\n          Probar suerte\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row gameBox\" style=\"Margin:3% 5% 0 1%;width: 90%;border-radius: 5px;\">\r\n      <div class=\"col-2 anagramsWord\">\r\n        <h4>{{anagramsWord[1]}}</h4>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <input [(ngModel)]=\"userWords[1]\" [disabled]=\"words[1].succes\" #ctrl=\"ngModel\" required>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <button [ngClass]='buttonSuccesClass[1]' [disabled]=\"words[1].succes\" (click)=\"checkWord(1)\">\r\n          Probar suerte\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row gameBox\" style=\"Margin:3% 5% 0 1%;width: 90%;border-radius: 5px;\">\r\n      <div class=\"col-2 anagramsWord\">\r\n        <h4>{{anagramsWord[2]}}</h4>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <input [(ngModel)]=\"userWords[2]\" [disabled]=\"words[2].succes\" #ctrl=\"ngModel\" required>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <button [ngClass]='buttonSuccesClass[2]' [disabled]=\"words[2].succes\" (click)=\"checkWord(2)\">\r\n          Probar suerte\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row gameBox\" style=\"Margin:3% 5% 0 1%;width: 90%;border-radius: 5px;\">\r\n      <div class=\"col-2 anagramsWord\">\r\n        <h4>{{anagramsWord[3]}}</h4>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <input [(ngModel)]=\"userWords[3]\" [disabled]=\"words[3].succes\" #ctrl=\"ngModel\" required>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <button [ngClass]='buttonSuccesClass[3]' [disabled]=\"words[3].succes\" (click)=\"checkWord(3)\">\r\n          Probar suerte\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row gameBox\" style=\"Margin:3% 5% 0 1%;width: 90%;border-radius: 5px;\">\r\n      <div class=\"col-2 anagramsWord\">\r\n        <h4>{{anagramsWord[4]}}</h4>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <input [(ngModel)]=\"userWords[4]\" [disabled]=\"words[4].succes\" #ctrl=\"ngModel\" required>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <button [ngClass]='buttonSuccesClass[4]' [disabled]=\"words[4].succes\" (click)=\"checkWord(4)\">\r\n          Probar suerte\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./word */ "./src/app/componentes/anagrama/word.ts");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WORDSLENGHT = 5;
var AnagramaComponent = /** @class */ (function () {
    function AnagramaComponent(user, userService) {
        this.user = user;
        this.userService = userService;
        this.dataWords = ["jupiter", "urano", "saturno", "neptuno", "mercurio", "tierra",
            "arroz", "lapiz", "manzana", "lombriz", "violeta", "rojo", "amarillo", "marte",
            "azul", "reparar", "animal", "perro", "macri", "gato", "zapato", "europa",];
        this.showPopUp = false;
        this.success = false;
    }
    AnagramaComponent.prototype.ngOnInit = function () {
        this.user.won = false;
        this.user.pointsActualGame = 0;
        this.user.lose = false;
        this.user.anagrama = Number(localStorage.getItem("anagrama"));
        this.succedWorks = 0;
        this.messege = "Ganaste!!";
        this.showPopUp = true;
        this.time = 60;
        this.buttonSuccesClass = [];
        for (var i = 0; i < WORDSLENGHT; i++)
            this.buttonSuccesClass.push("btn btn-outline-anagrama pull-right");
        this.userWords = [];
        this.generateAnagramsWord();
    };
    AnagramaComponent.prototype.generateAnagramsWord = function () {
        var _this = this;
        this.words = [];
        this.anagramsWord = [];
        for (var i = 0; i < WORDSLENGHT; i++) {
            this.words.push(new _word__WEBPACK_IMPORTED_MODULE_1__["Word"](this.dataWords.splice(Math.floor(Math.random() * this.dataWords.length), 1)[0]));
        }
        this.words.forEach(function (word) {
            _this.anagramsWord.push(word.generateAnagram());
        });
        console.log("");
        console.log(this.dataWords);
        console.log(this.words);
        console.log(this.anagramsWord);
    };
    AnagramaComponent.prototype.checkWord = function (index) {
        if (this.words[index].check(this.userWords[index])) {
            this.user.pointsActualGame += 30;
            this.succedWorks++;
            this.buttonSuccesClass[index] = "btn btn-outline-success pull-right";
            if (this.succedWorks == this.words.length) {
                this.messege = "Sos un mostroooo!!!";
                this.user.won = true;
                this.showPopUp = true;
            }
        }
        else {
            this.user.pointsActualGame -= 10;
        }
    };
    AnagramaComponent.prototype.sendData = function () {
        this.user.anagrama += this.user.pointsActualGame;
        this.user.pointsActualGame = this.user.anagrama;
        this.user.actualGame = "anagrama";
        this.user.email = localStorage.getItem("email");
        localStorage.setItem("anagrama", this.user.anagrama.toString());
        this.userService.sendResults(this.user);
    };
    AnagramaComponent.prototype.timeOut = function (timeOut) {
        if (timeOut) {
            console.log("timeOut " + timeOut);
            this.messege = "Se acabó el tiempo";
            this.showPopUp = true;
        }
    };
    AnagramaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-anagrama',
            template: __webpack_require__(/*! ./anagrama.component.html */ "./src/app/componentes/anagrama/anagrama.component.html"),
            styles: [__webpack_require__(/*! ./anagrama.component.css */ "./src/app/componentes/anagrama/anagrama.component.css")]
        }),
        __metadata("design:paramtypes", [_clases_user__WEBPACK_IMPORTED_MODULE_2__["User"], _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AnagramaComponent);
    return AnagramaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/anagrama/word.ts":
/*!**********************************************!*\
  !*** ./src/app/componentes/anagrama/word.ts ***!
  \**********************************************/
/*! exports provided: Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return Word; });
var Word = /** @class */ (function () {
    function Word(word) {
        this.word = word;
        this._succes = false;
    }
    Object.defineProperty(Word.prototype, "word", {
        get: function () {
            return this._word;
        },
        set: function (word) {
            this._word = (word !== null && word != undefined) ? word : "Error";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Word.prototype, "succes", {
        get: function () {
            return this._succes;
        },
        set: function (succes) {
            this._succes = succes;
        },
        enumerable: true,
        configurable: true
    });
    Word.prototype.generateAnagram = function () {
        var length = this.word.length;
        var anagramWord;
        var anagramWordAux = this.word.split("");
        var auxChar;
        do {
            for (var i = 0; i < 50; i++) {
                var randomIndexA = Math.floor(Math.random() * length);
                var randomIndexB = Math.floor(Math.random() * length);
                auxChar = anagramWordAux[randomIndexA];
                anagramWordAux[randomIndexA] = anagramWordAux[randomIndexB];
                anagramWordAux[randomIndexB] = auxChar;
            }
        } while (this.word === anagramWord);
        anagramWord = anagramWordAux.join("");
        console.log(anagramWord);
        return anagramWord;
    };
    Word.prototype.check = function (word) {
        console.log(word);
        console.log(this.word);
        if (this.word.toLowerCase().trim() === word.toLowerCase().trim())
            this.succes = true;
        return this.succes;
    };
    return Word;
}());



/***/ }),

/***/ "./src/app/componentes/batalla-naval/batalla-naval.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/batalla-naval/batalla-naval.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".shooted{\r\n    margin:2px;\r\n    border-radius:1px;\r\n    background-image:url('explosion.jpg');\r\n    padding: 0 0  0 0;    \r\n    height:35px;-webkit-margin-after:0px;margin-block-end:0px;margin: -10px 0 0 0;\r\n\r\n}\r\n\r\n.water{\r\n    margin:2px;\r\n    border-radius:1px;\r\n    background-image:url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/4QM8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPg0KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+DQoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc4OEEyQTI1RDAyNTExRTdBMEFFQzg3OUI2MkJBQjFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc4OEEyQTI2RDAyNTExRTdBMEFFQzg3OUI2MkJBQjFEIj4NCgkJCTx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4OEEyQTIzRDAyNTExRTdBMEFFQzg3OUI2MkJBQjFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4OEEyQTI0RDAyNTExRTdBMEFFQzg3OUI2MkJBQjFEIi8+DQoJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCTwvcmRmOlJERj4NCjwveDp4bXBtZXRhPg0KPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIADwAPAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP3IYb3b7zbo8f3t27/vrOcf7W7H/LXHyGDL/ebfHj+9u3f99Zzj/a3Y/wCWuPkkYeYzdW3DH97Of++s5x/tbsf8tMfKFfNIHLbuOfmzn/vrOcf7W7H/AC0x8oBl+KfE+n+DPDd9rGrXK22l6bavc3U7/MqRgZZj97OQP9rdj/lrj5Pl7/gnX+2Tq3xk1DV/DnjeSSDWtcub7xF4bWc7mnsJ7ud2ssnduktxsIHzbonUbXEYx1/7ZU+ofFDwi2haf5g0Vpv9Jcc/b3Qhto5PyKwQk5O5tvLbTXz98avgvP4LvfD8mjzSafqmh28a2V5AcPbzwDKsD6EPKCO4ODmv0rh3hzB4jL50sU7Vavwv+Tl2+9uzXbzPx7i3i7McJmkK2CjehR+Nf8/HJ2aX+FL3fPyP0Dx5n95t0eP727d/31nOP9rdj/lrj5DBl/vNvjx/e3bv++s5x/tbsf8ALXHyeT/snftP237RnhaaC+SOx8YaSgXVbEcCUMcCeIEHdG5ADDBKthWDgpXrgTzPVtwx/e3Z/wC+s5x/tbsf8tMfL8BjsFWwdeWGxCtKL1X6ryfRn6nlmZYfMMLDGYWXNCSun+j7NPRp7Mjx5n95t0eP727d/wB9Zzj/AGt2P+WuPkctyY0X98Y9w3f6/Zu9/wDXJn6/Pn++3Z2PM9W3DH97dn/vrOcf7W7H/LTHyyRXHlL/AK1l3fN/rSu73/1q5+vzZ/vGuQ7hp+cn+Ld7Zzn885/HP+1jjN1pZdXlGn28rRtOM3MwPMUbHHB/vPj1PCkkk7TWg/8AF/h/n/PrXKad4tW21DVFkbM322RZO5G1tqj8FUAewrtwVFzk5R6Hn5hiI04qMtObQt+N/A6EWqpGqW9nEEiRRjaM5/Ppn1OTXjHxm8KJewNJt+aE7hxXtHi74gJPbQ/6RbyGSLeRGfuc9G9+K8W+KnjS3itHVpY03HBJPC19dkP1jnifC8TPCulK+z/yPmXx/car8DPHOm+L/Ds32TULNjLExXekqEANG65AeNgdrKSM56qcMPvb4H/GTS/j78L9N8UaSNtvfKUnty/mPZzjHmQsSMkjgglRvRkfDBhj85/2rvi3ZReFbxI5jLDZW+wu+PlTgdume3qcZyeT13/BDT4y3/iPXfF3hySSSbTrrTV1WJT922khuBExH/XUXPPb/R16c5+14y4feJyRZnUVqlKy9Yt2s/NXTXzPznw74nWE4hllFJ81Gtd+UZpXuvVJp/Jn6Ln5/wDa3eoznP5/1z/tY4VLryh/rNu7nmTbn3++Pz5+prF8b+N7XwJo0l9dW95dpGryNFbKhlKIpeRgHdQdqgkjO49AGOBWXH8ILDxVNcX3i3T4b7VpZ3UfZ7maNIIVYrHH8jqGIUAkkZyxGSADX4vTpR5eeo7LpZXb+V0f0NVxE+f2dFKUut3ZJetnv0Vu501hqlrrFqLizure7t2JAlglWSM46/MpxxnnnjPO3v5X+0F4f1fwzf8A/CUaDp8etbgn9paTKdn2sphUeIkqBIFAUqxUOFXlWA3dhqPwmsYZvO0aaTw9dQjajWaiNFCnOCo2/KNx+UkIpbJVeN1Sa58ZeF9Pm/tCPwzr2nwxs00s1y2nyLGoyzSbo/KwF5IwgXjJTdmu3A1VQqqrTaktnF6XXbt+N7nnZlRliqLoVouL3Uo62ffv6ppqx8HaN+27p/wxj1TT/F3i66udX1DU5Z1j1XT7ixTS1cgi2XzTJtRTnBaVgBgZ7n53+OP/AAUq0fxNqbQ2+pSQWMbH/Uwme4uT0yEBChfTLgnOT6D9FPiL8Ovhj8fdKhuta8O+ItHa6hEiPLZRyMgIyABkyKfZdoPbA5Pi+qf8Exvg/f3zSN4y8VWsLfehs9OmjkPsGkdh+a+ucV+25LxFk1N+3r0Jxn/hcl8uVWP54zvhDOasVhqWJhUpr/p4oStvrzXe5+a/xa+PGvfHW1t9Jg0+bwn4RikE0rXL7r/VJOAHkOAXPZFCrGgPALM2/wDWr/gjx+xzrP7OXwh1bxH4m0240fxB4yFukOmXEey40rT7YymITA8xzSvNJI6E5VPIV9rqQJ/2fv2Yfgv+zn4qt7rwX4Lu9b8WRq0sOt6/IbmS2IwN0QVSsbfNwY40kYAncNrE/ReneDbjxdFZ6h4imu/NjlW5SwZEgS1kjfKk7XbGGAbh1IDbXKglT87xxxosZhf7OwsHTpN3bl8Ura2STdlfV3d3psfaeHvAywOJWY15RnUimoxhrGN1ZtyavKVtNFZdPLm/Euup4h+I8f8AaEV4YdKUCDTLdN1wxYq3mT9NgJVG2DL7UXKoCQ29p+mnVBL5X/CbaesL+XthuWljkO0NuV5FZ2+9glsHcrDGACews7OHTRItvDHb+Y7SSCNAm985Zm4XnJ5JxjPOzPzWI4WkX/Vs204/1ZbHt/q2x9Pl/wB0V+X1MYnGMYRskrb/ANdfV+Z+sUctlGUpzldyd9v19O1l5ELyeW7c7di5/u7dv/fOMZ/2duf+WWfnZMiSxNHIqtGYyHV1+UgdQQdowM8524z/AMss/Ot8v2M3BXP+jpMF/hz5Wzb0xj75+7jb/Dty2XXkQsjcbcn7NFNt52/6oJt+7jH3z93G3+Hbls+eescb44+Hn25bcadYaGLeMN9qhurZZMqNuNiuPKXbzuDIMfKf3ZAD5Pgn4LafourTRzeGdPs9KiiYqplaIM+R923jlMEagZ3ALGASvC559Gu4hYx3BXk26TBf4c+Vt2/dxj75+7jb/Dty2XXkQsvtG3J+zRTbf4c+UE2/dxj75+7jb/Dty2e6GYVo0+RP563+9M82plVCdX2rXnbS33NaedrHK2lnrXhixjjt7Xw/akSfvpbK2kUFAmSzRjYynzCAcFigYE7Mkm0s3iGe2aZFtdNuYVz9luSssMoX0eMo0RHfOQpbHyA5O/dx/YY7grz9nSYL/Dnytu37uMfeP3cbf4duWyt5Ctl9oC5P2aKbb/DnyghX7uMffP3cbf4duWzjLEN6uKv3t/S/rSxtHBpaKTt2v/T/AK1uc3b6C/iBZpLz+29LaFirRC9/cyhQDuCMcBQWKkEKAQ2NqFGk3tF0KLSNLjtbeGRooS2N0bSlSzFyMmF9uCxwvyBRgBEAArL8dSNpIsvJZlaC+8tWU7GxHgDlcYzvOQMDGQAAzBuqsPDMOpibe237PK0C/uYmyF6feQ4+i4X0AoqTk4p9O3YqhRgptW1Vrvuf/9k=');\r\n    padding: 0 0  0 0;    \r\n    height:35px;-webkit-margin-after:0px;margin-block-end:0px;margin: -10px 0 0 0;\r\n}\r\n\r\n.undid{\r\n    margin:2px;\r\n    border-radius:1px;\r\n    background-image:url('hundido.jpg');\r\n    padding: 0 0  0 0;    \r\n    height:35px;-webkit-margin-after:0px;margin-block-end:0px;margin: -10px 0 0 0;\r\n}"

/***/ }),

/***/ "./src/app/componentes/batalla-naval/batalla-naval.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componentes/batalla-naval/batalla-naval.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pop-up [showPopUp]='showPopUp' [messege]='messege' [success]='success'></app-pop-up>\r\n<div class=\"row\" style=\"height:100%;margin-top:60px\">\r\n  <div class=\"col-3\">\r\n    <app-lateral-panel (timeOut)='timeOut($event)'[(title)]='title' (pointCalculed)='sendData()' [(time)]='time'></app-lateral-panel>\r\n    <!-- <app-counter [counter]=\"counter\"></app-counter> -->\r\n  </div>\r\n  <div class=\"col-6\" style=\"border-radius: 25px;margin-top:40px;margin-left:60px;\">\r\n    <table class=\"table-bordered\" style=\"margin-left:5%;color:white;\">\r\n      <tbody style=\" background-image:url('../../../assets/imagenes/radar.jpg');padding: 0 0 25px 25px\">\r\n        <tr *ngFor=\"let row of rows\">\r\n          <td style=\"width:30px\"> \r\n            {{row.name}}\r\n          </td>\r\n          <td (click)=\"Misilazo(row,0)\" [ngClass]=\"row.columns[0]\" style=\"width:60px; height:60px;text-align: center\">\r\n            </td>\r\n          <td (click)=\"Misilazo(row,1)\" [ngClass]=\"row.columns[1]\" style=\"width:60px; height:60px;text-align: center\">\r\n            </td>\r\n          <td (click)=\"Misilazo(row,2)\" [ngClass]=\"row.columns[2]\" style=\"width:60px; height:60px;text-align: center\">\r\n            </td>\r\n          <td (click)=\"Misilazo(row,3)\" [ngClass]=\"row.columns[3]\" style=\"width:60px; height:60px;text-align: center\">\r\n            </td>\r\n          <td (click)=\"Misilazo(row,4)\" [ngClass]=\"row.columns[4]\" style=\"width:60px; height:60px;text-align: center\">\r\n            </td>\r\n          <td (click)=\"Misilazo(row,5)\" [ngClass]=\"row.columns[5]\" style=\"width:60px; height:60px;text-align: center\">\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n          <td style=\"height:5px\"> </td>\r\n          <td> 1 </td>\r\n          <td> 2 </td>\r\n          <td> 3 </td>\r\n          <td> 4 </td>\r\n          <td> 5 </td>\r\n          <td> 6 </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"col-3\">\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/componentes/batalla-naval/batalla-naval.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/batalla-naval/batalla-naval.component.ts ***!
  \**********************************************************************/
/*! exports provided: COLUMNS, BatallaNavalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLUMNS", function() { return COLUMNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatallaNavalComponent", function() { return BatallaNavalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _models_ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/ship */ "./src/app/componentes/batalla-naval/models/ship.ts");
/* harmony import */ var _models_ship_part__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/ship-part */ "./src/app/componentes/batalla-naval/models/ship-part.ts");
/* harmony import */ var _models_row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/row */ "./src/app/componentes/batalla-naval/models/row.ts");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var COLUMNS = 7;
var BatallaNavalComponent = /** @class */ (function () {
    /*****************  End Atributos  *****************/
    function BatallaNavalComponent(user, userService) {
        this.user = user;
        this.userService = userService;
        /*****************  Atributos  *****************/
        this.showPopUp = false;
        this.success = false;
        this.time = 30;
        this.title = "Batalla Naval";
        this.eventPopUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ships = [];
        this._sunkenShips = 0;
        this.user.won = false;
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
        this.messege = "GANASTE";
        this.putShips();
        this.user.won = false;
        this.user.lose = false;
        this._counter = 15;
        this.user.pointsActualGame = 0;
        this.user.actualGame = "naval";
        this.user.naval = Number(localStorage.getItem("naval"));
        console.log(this.user.pointsActualGame);
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
        if (!this.user.won && !this.user.lose && selectedRow.columns[column] == _models_ship__WEBPACK_IMPORTED_MODULE_2__["NOSHOT"]) {
            console.log("Entro");
            var flagShooted = false;
            var newState_1 = _models_ship_part__WEBPACK_IMPORTED_MODULE_3__["WATER"];
            var i = void 0;
            var point = -3;
            for (i = 0; i < this._ships.length; i++) {
                if (this._ships[i].shooted(selectedRow.name, column)) {
                    newState_1 = _models_ship_part__WEBPACK_IMPORTED_MODULE_3__["SHOOTED"];
                    point = 10;
                    if (this._ships[i].state == _models_ship__WEBPACK_IMPORTED_MODULE_2__["UNDID"]) {
                        this._sunkenShips++;
                        newState_1 = _models_ship__WEBPACK_IMPORTED_MODULE_2__["UNDID"];
                        this.undidShip(i);
                    }
                    break;
                }
            }
            if (this._ships.length == i)
                this._counter--;
            this.user.pointsActualGame += point;
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
        if (!this.user.won && this._sunkenShips == this.ships.length) {
            this.user.won = true;
            this.messege = "Ganaste!!";
            this.showPopUp = true;
            this.user.email = localStorage.getItem("email");
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
    BatallaNavalComponent.prototype.sendData = function () {
        this.user.naval += this.user.pointsActualGame;
        this.user.pointsActualGame = this.user.naval;
        this.user.actualGame = "naval";
        this.user.email = localStorage.getItem("email");
        localStorage.setItem("naval", this.user.naval.toString());
        this.userService.sendResults(this.user);
        console.log("actual", this.user.pointsActualGame);
    };
    BatallaNavalComponent.prototype.putShips = function () {
        var sense = Math.floor(Math.random() * 2);
        var rowIndex = Math.floor(Math.random() * 3);
        var shipThree;
        var shipTwo;
        var shipOne;
        var shipFour = new _models_ship__WEBPACK_IMPORTED_MODULE_2__["Ship"](4, this._rowsName[rowIndex], Math.floor(Math.random() * 3), sense);
        do {
            sense = Math.floor(Math.random() * 2);
            rowIndex = Math.floor(Math.random() * 4);
            shipThree = new _models_ship__WEBPACK_IMPORTED_MODULE_2__["Ship"](3, this._rowsName[rowIndex], Math.floor(Math.random() * 4), sense);
        } while (shipFour.isTouched(shipThree));
        do {
            sense = Math.floor(Math.random() * 2);
            rowIndex = Math.floor(Math.random() * 5);
            shipTwo = new _models_ship__WEBPACK_IMPORTED_MODULE_2__["Ship"](2, this._rowsName[rowIndex], Math.floor(Math.random() * 5), sense);
        } while (shipFour.isTouched(shipTwo) || shipThree.isTouched(shipTwo));
        do {
            sense = Math.floor(Math.random() * 2);
            rowIndex = Math.floor(Math.random() * 5);
            shipOne = new _models_ship__WEBPACK_IMPORTED_MODULE_2__["Ship"](1, this._rowsName[rowIndex], Math.floor(Math.random() * 6), sense);
        } while (shipFour.isTouched(shipOne) || shipThree.isTouched(shipOne)
            || shipTwo.isTouched(shipOne));
        this._ships.push(shipFour); //, shipThree, shipTwo, shipOne);
        console.log(this._ships);
    };
    BatallaNavalComponent.prototype.timeOut = function (timeOut) {
        if (timeOut) {
            console.log("timeOut " + timeOut);
            this.messege = "Se acabó el tiempo";
            this.showPopUp = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BatallaNavalComponent.prototype, "eventPopUp", void 0);
    BatallaNavalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-batalla-naval',
            template: __webpack_require__(/*! ./batalla-naval.component.html */ "./src/app/componentes/batalla-naval/batalla-naval.component.html"),
            styles: [__webpack_require__(/*! ./batalla-naval.component.css */ "./src/app/componentes/batalla-naval/batalla-naval.component.css")]
        }),
        __metadata("design:paramtypes", [_clases_user__WEBPACK_IMPORTED_MODULE_5__["User"], _servicios_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
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
/*! exports provided: SAFE, SHOOTED, WATER, ShipPart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAFE", function() { return SAFE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOOTED", function() { return SHOOTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATER", function() { return WATER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipPart", function() { return ShipPart; });
var SAFE = "safe";
var SHOOTED = "shooted";
var WATER = "water";
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
var NOSHOT = "noShooted";
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
        // if ((this._parts[0].rowName == ship.parts[0].rowName)
        //     || (this._parts[0].column == ship.parts[0].column)) {
        //     touched = true;
        // }
        for (var i = 0; i > this._parts.length; i++) {
            for (var j = 0; j < ship.parts.length; j++) {
                if (ship.parts[j].column == this._parts[i].column &&
                    ship.parts[j].rowName == this._parts[i].rowName)
                    touched = true;
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

module.exports = ".panel\r\n{\r\n    height: 200px;\r\n    background-image: url('cabecera.png');/*//\"/TP_LAV4_2017/assets/imagenes/cabecera.png\"); */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: relative;\r\n}\r\n\r\n\r\n.hero-text {\r\ntext-align: center;\r\nposition: absolute;\r\ntop: 50%;\r\nleft: 50%;\r\n-webkit-transform: translate(-50%, -50%);\r\n        transform: translate(-50%, -50%);\r\ncolor: #3E06B0;\r\n}\r\n\r\n\r\n.hero-text a {\r\nborder: none;\r\noutline: 0;\r\ndisplay: inline-block;\r\npadding: 10px 25px;\r\ncolor: black;\r\nbackground-color: #ddd;\r\ntext-align: center;\r\ncursor: pointer;\r\n}\r\n\r\n\r\n.hero-text a:hover {\r\nbackground-color: #555;\r\ncolor: white;\r\n}\r\n\r\n\r\n.tatetiValue{\r\n    color: #FFF;\r\n    text-align: center;\r\n    font:  100px arial, Serif;\r\n    text-shadow: 2px 2px 2px rgb(0, 0, 0);\r\n    content: 'O';\r\n}"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top headerShadow\" style=\"background-image:url('./assets/imagenes/cabecera.jpg');padding: 1% 0  1% 0;margin-bottom:1%\">\r\n  <div class=\"col-12\">\r\n    <a class=\"navbar-brand tatetiValue\" style=\"color:orange;font-size:30px;font-family: Tahoma, Geneva, sans-serif;\">\r\n      SALA DE JUEGOS</a>\r\n    <img src=\"./assets/imagenes/phantom4.png\" class=\"tatetiValue\" style=\"height:35px;margin-block-end:0px;margin: -10px 0 0 0 \">\r\n    <div class=\"pull-right\" *ngIf=\"incrementService.contador\">\r\n      <label style=\"margin:5px 10px 0 0 ;color:orange;text-shadow: 2px 2px 2px rgb(0, 0, 0);font-size:15px\">\r\n        {{incrementService.email}}\r\n      </label>\r\n      <div class=\"btn-group  pull-right\" role=\"group\" aria-label=\"Basic example\">\r\n        <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"menuPrincipal()\">Menu Principal</button>\r\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"salir()\">Salir</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clases_IncrementService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/IncrementService */ "./src/app/clases/IncrementService.ts");
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
    function CabeceraComponent(incrementService, router) {
        this.incrementService = incrementService;
        this.router = router;
    }
    CabeceraComponent.prototype.salir = function () {
        // alert("salio");
        localStorage.setItem("loged", "false");
        this.router.navigate(['/Login']);
        this.incrementService.singInOut();
    };
    CabeceraComponent.prototype.menuPrincipal = function () {
        localStorage.setItem("loged", "false");
        this.router.navigate(['/Principal']);
    };
    CabeceraComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("loged") == "true") {
            this.incrementService.contador = true;
            this.incrementService.email = localStorage.getItem("email");
        }
        else
            this.router.navigate(['/Login']);
    };
    CabeceraComponent.prototype.ngOnChanges = function () {
        if (!this.incrementService.contador)
            this.router.navigate(['/Login']);
    };
    CabeceraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cabecera',
            template: __webpack_require__(/*! ./cabecera.component.html */ "./src/app/componentes/cabecera/cabecera.component.html"),
            styles: [__webpack_require__(/*! ./cabecera.component.css */ "./src/app/componentes/cabecera/cabecera.component.css")]
        }),
        __metadata("design:paramtypes", [_clases_IncrementService__WEBPACK_IMPORTED_MODULE_2__["IncrementService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "\r\n\r\n<div class=\"panel panel-default\">\r\n    <div class=\"hero-text\">\r\n        <h1 style=\"font-size:80px\">Salasss de Juegos</h1>\r\n        <p>Octavio villegas</p>\r\n        <a href=\"https://github.com/octaviovillegas\"target=\"_blank\">en GitHub <i class=\"fa fa-github\"></i></a>\r\n        <a  routerLink=\"/QuienSoy\"target=\"_blank\">Quien Soy? <i class=\"fa fa-github\"></i></a>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span>Registrase</a></li>\r\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Ingresar</a></li>\r\n          </ul>\r\n</div>"

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <app-menu></app-menu> -->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n   Sala de Juegos\r\n  </h1>\r\n </div> -->\r\n <router-outlet></router-outlet>\r\n"

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


var JuegosComponent = /** @class */ (function () {
    function JuegosComponent(router) {
        this.router = router;
    }
    JuegosComponent.prototype.ngOnInit = function () {
        var time = Number(localStorage.getItem("time").trim());
        if ((((new Date()).getTime() - time) / 60000) > 30) {
            localStorage.setItem("loged", "false");
            this.router.navigate(['/Login']);
        }
    };
    JuegosComponent.prototype.ngOnChanges = function () {
    };
    JuegosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-juegos',
            template: __webpack_require__(/*! ./juegos.component.html */ "./src/app/componentes/juegos/juegos.component.html"),
            styles: [__webpack_require__(/*! ./juegos.component.css */ "./src/app/componentes/juegos/juegos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
        //alert("totos");
        // this.miJugadoresServicio.traertodos('jugadores/','todos').then(data=>{
        //   //console.info("jugadores listado",(data));
        //   this.listado= data;
        // })
    };
    JugadoresListadoComponent.prototype.TraerGanadores = function () {
        // this.miJugadoresServicio.traertodos('jugadores/','ganadores').then(data=>{
        //   //console.info("jugadores listado",(data));
        //   this.listado= data;
        // })
    };
    JugadoresListadoComponent.prototype.TraerPerdedores = function () {
        // this.miJugadoresServicio.traertodos('jugadores/','perdedores').then(data=>{
        //   //console.info("jugadores listado",(data));
        //   this.listado= data;
        // })
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

/***/ "./src/app/componentes/lateral-panel/lateral-panel.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/lateral-panel/lateral-panel.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lateral-panel{\r\n    background-image:url('gris.jpg');\r\n    opacity:0.95;\r\n    border-radius:4px;\r\n    margin:-20px 0 0 10px;\r\n    height:120%;\r\n    width: 100%;\r\n    padding:20px 20px 20px 20px; \r\n}\r\n\r\n.lateralTitle{\r\n    text-shadow: 2px 2px 2px rgb(0, 0, 0);\r\n    color:rgb(214, 214, 214);\r\n    font-size:30px;\r\n    font-family: Tahoma, Geneva, sans-serif;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/componentes/lateral-panel/lateral-panel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componentes/lateral-panel/lateral-panel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"generalShadow lateral-panel\" style=\"margin:25px 2% -55px 3%;width:96%\">\n  <h3 class=\"lateralTitle\">{{title}}</h3>\n  <div class=\"raw align-middle\">\n    <div class=\"col-12\" style=\"width:100%\">\n      <app-timer [time]='time' [gameFinished]='gameFinished' (pointCalculed)='timePointCalculed()' (timeEvent)='timeOver($event)'></app-timer>\n    </div>\n  </div>\n  <div class=\"raw\" style=\"width:100%\">\n    <div class=\"col-12\">\n      <app-point-meter></app-point-meter>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/lateral-panel/lateral-panel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/lateral-panel/lateral-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: LateralPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LateralPanelComponent", function() { return LateralPanelComponent; });
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

var LateralPanelComponent = /** @class */ (function () {
    function LateralPanelComponent() {
        this.title = "Tu juego";
        this.timeOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pointCalculed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LateralPanelComponent.prototype.ngOnInit = function () {
        this.messegeTime = "Se acabó el tiempo";
        this.time = this.time * 100; //Multiplico por milisegundos.
        this.gameFinished = false;
    };
    LateralPanelComponent.prototype.timeOver = function (timeOver) {
        this.timeOut.emit(timeOver);
    };
    LateralPanelComponent.prototype.prueba = function () {
        console.log("ENTRO");
        this.messegeTime = "PRUEBA";
    };
    LateralPanelComponent.prototype.timePointCalculed = function () {
        this.pointCalculed.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LateralPanelComponent.prototype, "time", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LateralPanelComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LateralPanelComponent.prototype, "timeOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LateralPanelComponent.prototype, "pointCalculed", void 0);
    LateralPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lateral-panel',
            template: __webpack_require__(/*! ./lateral-panel.component.html */ "./src/app/componentes/lateral-panel/lateral-panel.component.html"),
            styles: [__webpack_require__(/*! ./lateral-panel.component.css */ "./src/app/componentes/lateral-panel/lateral-panel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LateralPanelComponent);
    return LateralPanelComponent;
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

module.exports = "<h1>\r\n Listado de paises\r\n</h1>\r\n\r\n\r\n<table class=\"table table-condensed\" style=\"color:white\">\r\n  <thead>\r\n    <tr>\r\n      <th>Pais</th>\r\n      <th>Región</th>\r\n      <th>Nombre local</th>\r\n      <th>Sub Región</th>\r\n      <th>Población</th>\r\n      <th>Bandera</th>\r\n      <th>Capital</th>\r\n      <th>GPS</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let pais of listadoDePaises\">\r\n      <td>{{pais.name}} </td>\r\n      <td>{{pais.region}} </td> \r\n      <td>{{pais.nativeName}} </td> \r\n      <td>{{pais.subregion}} </td>       \r\n      <td>{{pais.population}} </td> \r\n      <td><img src='{{pais.flag}}' width=\"50px\"/> </td> \r\n      <td>{{pais.capital}} </td> \r\n      <td>{{pais.borders}} </td> \r\n      <td>{{pais.latlng}} </td> \r\n    </tr>\r\n  </tbody>\r\n</table>"

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

module.exports = "<table class=\"table table-condensed\" style=\"color:white;margin-top:40px;\">\r\n    <thead>\r\n      <tr>\r\n        <th>Jugador</th>\r\n        <th>Agilidad</th>\r\n        <th>Anagrama</th>\r\n        <th>Numero</th>\r\n        <th>Naval</th>\r\n        <th>Tateti</th>\r\n        <th>Pi Pa Ti</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n        <td>{{user.email}} </td>\r\n        <td>{{user.agilidad}} </td> \r\n        <td>{{user.anagrama}} </td> \r\n        <td>{{user.numero}} </td> \r\n        <td>{{user.naval}} </td> \r\n        <td>{{user.tateti}} </td> \r\n        <td>{{user.piedra}} </td> \r\n      </tr>\r\n    </tbody>\r\n  </table>"

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
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
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
    function ListadoDeResultadosComponent(userService) {
        this.userService = userService;
    }
    ListadoDeResultadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = [];
        this.userService.getFullUsers().subscribe(function (succes) {
            if (succes.status == 200) {
                if (JSON.parse(succes["_body"]).code == 0) {
                    var response = JSON.parse(succes["_body"]).response;
                    console.log("Respuesta: " + succes["_body"]);
                    for (var i = 0; i < response.length; i++) {
                        var user = new _clases_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
                        user.email = response[i].user;
                        user.agilidad = response[i].agilidad;
                        user.anagrama = response[i].anagrama;
                        user.numero = response[i].numero;
                        user.tateti = response[i].tateti;
                        user.piedra = response[i].piedra;
                        user.naval = response[i].naval;
                        _this.users.push(user);
                    }
                }
                else {
                    alert("Error de token");
                }
                //   console.clear();
                // console.log("usuarios:");
                // console.log(this.users);
                // console.log("usuarios:");
                // console.log("usuarios:");
                // succesReturn = true;
                // let bodyResponse = JSON.parse(succes["_body"]);
                // if (bodyResponse.code === 0) {
                //   console.log(bodyResponse.response);//Guardo el token
                //   UserService.token = bodyResponse.response;//Guardo el token
                // }
            }
            else {
                console.log(succes);
            }
        });
    };
    ListadoDeResultadosComponent.prototype.ngOnchanges = function () {
        console.log(" ");
        console.log("chng users:users: " + this.users);
    };
    ListadoDeResultadosComponent.prototype.ver = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ListadoDeResultadosComponent.prototype, "listado", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ListadoDeResultadosComponent.prototype, "users", void 0);
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
        __metadata("design:paramtypes", [_servicios_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
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

module.exports = "\r\n<app-listado-de-resultados [(listado)]=\"users\"> </app-listado-de-resultados>"

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
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
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
    function ListadoComponent(servicioJuego, userService, user) {
        this.servicioJuego = servicioJuego;
        this.userService = userService;
        this.user = user;
        this.miServicioJuego = servicioJuego;
    }
    ListadoComponent.prototype.ngOnInit = function () {
    };
    ListadoComponent.prototype.llamaService = function () {
        // console.log("llamaService");
        // this.listadoParaCompartir = this.miServicioJuego.listar();
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
        __metadata("design:paramtypes", [_servicios_juego_service_service__WEBPACK_IMPORTED_MODULE_1__["JuegoServiceService"],
            _servicios_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _clases_user__WEBPACK_IMPORTED_MODULE_3__["User"]])
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

module.exports = "\r\nform {\r\n    border: 10px solid #f1f1f1;\r\n    padding: 10px;\r\n    background:gray;\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n    background-color:rgb(24, 33, 44);\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 0.95;\r\n}\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n.aceptbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #3664F4;\r\n}\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n       display: block;\r\n       float: none;\r\n    }\r\n    .cancelbtn {\r\n       width: 100%;\r\n    }\r\n}\r\n\r\n.login{\r\n    box-shadow: 10px 13px 50px -15px rgba(31, 31, 31, 0.904);\r\n}"

/***/ }),

/***/ "./src/app/componentes/login/login.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/login/login.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\" style=\"margin-top:80px;margin-bottom: 20px;height: 100%\">\r\n  <div style=\"padding:20px;margin:15px; background-color:rgb(24, 33, 44);height:80%;border-radius:8px\" class=\"\">\r\n    <div class=\"form-group has-error has-feedback\" style=\"color:orange;font-size:15px;font-family: Tahoma, Geneva, sans-serif;\">\r\n\r\n      <label>Email</label>\r\n      <div class=\"form-group\">\r\n        <label for=\"\"></label>\r\n        <input type=\"email\" (keydown)='emailHelp=\"\"' class=\"form-control\" name=\"email\" [(ngModel)]=\"this.user.email\" aria-describedby=\"emailHelpId\"\r\n          placeholder=\"\">\r\n        <small id=\"emailHelpId\" class=\"form-text text-muted\">{{emailHelp}}</small>\r\n        <label for=\"\">Clave</label>\r\n        <input type=\"password\"(keydown)='claveHelp=\"\"' class=\"form-control\" [(ngModel)]=\"user.password  \" name=\"psw\" placeholder=\"clave\">\r\n        <small id=\"claveHelpId\" class=\"form-text text-muted\">{{claveHelp}}</small>\r\n      </div>\r\n      <!-- <input type=\"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" required> -->\r\n      <div class=\"btn-group\" style=\"width:100%;margin-top:5%\" role=\"group\" aria-label=\"Basic example\">\r\n        <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"register()\">Registrarse</button>\r\n        <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"login()\">Login</button>\r\n      </div>\r\n    </div>\r\n\r\n    <img src=\"./assets/imagenes/phantom.png\" class=\"tatetiValue fa-pull-right\" alt=\"25px\" style=\"height:55px;margin-block-end:0px;margin:40px 1% 0px 0\">\r\n    <img src=\"./assets/imagenes/phantom.png\" class=\"tatetiValue fa-pull-right\" alt=\"25px\" style=\"height:55px;margin-block-end:0px;margin:40px 2% 0px 0\">\r\n    <img src=\"./assets/imagenes/phantom.png\" class=\"tatetiValue fa-pull-right\" alt=\"25px\" style=\"height:55px;margin-block-end:0px;margin:40px 3% 0px 0\">\r\n    <img src=\"./assets/imagenes/phantom.png\" class=\"tatetiValue fa-pull-right\" alt=\"25px\" style=\"height:55px;margin-block-end:0px;margin:40px 4% 0px 0\">\r\n  </div>\r\n</div>"

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
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
/* harmony import */ var _servicios_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../servicios/response */ "./src/app/servicios/response.ts");
/* harmony import */ var _clases_IncrementService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../clases/IncrementService */ "./src/app/clases/IncrementService.ts");
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
    function LoginComponent(incrementService, userService, route, user, router) {
        this.incrementService = incrementService;
        this.userService = userService;
        this.route = route;
        this.user = user;
        this.router = router;
        this.progresoMensaje = "esperando...";
        this.logeando = true;
        this.clase = "progress-bar progress-bar-info progress-bar-striped ";
        this.logedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.progreso = 0;
        this.ProgresoDeAncho = "0%";
        this.user = new _clases_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    LoginComponent_1 = LoginComponent;
    LoginComponent.prototype.ngOnChanges = function () {
        if (!this.incrementService.contador) {
            this.router.navigate(['/Login']);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        // alert(localStorage.getItem("loged"));
        if (localStorage.getItem("loged") == "true") {
            this.router.navigate(['/Principal']);
            LoginComponent_1._loged = true;
            this.incrementService.singInOut();
            this.incrementService.email = localStorage.getItem("email");
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var responseApi = new _servicios_response__WEBPACK_IMPORTED_MODULE_5__["ResponseApi"]();
        if (this.user.validateEmail() && this.user.validatePassword()) {
            this.emailHelp = "";
            this.userService.login(this.user).subscribe(function (succes) {
                if (succes.status == 200) {
                    console.log();
                    console.log("no rompio todavia");
                    console.log();
                    var bodyResponse = JSON.parse(succes["_body"]);
                    console.log(bodyResponse);
                    if (bodyResponse.code == 0) {
                        _this.savePoints(bodyResponse);
                        console.log(bodyResponse.response); //Guardo el token
                        _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].token = bodyResponse.response; //Guardo el token
                        responseApi.code = 0;
                        //CabeceraComponent.loged = true;
                        LoginComponent_1._loged = true;
                        LoginComponent_1.email = _this.user.email;
                        var date = new Date();
                        localStorage.setItem("loged", "true");
                        localStorage.setItem("email", _this.user.email);
                        localStorage.setItem("time", date.getTime().toString());
                        _this.incrementService.singInOut();
                        _this.incrementService.email = _this.user.email;
                        _this.router.navigate(['/Principal']);
                    }
                    else if (bodyResponse.code == 4) {
                        _this.emailHelp = ("Email o password incorrecto");
                    }
                }
                else {
                    responseApi.code = Number(succes.status);
                    responseApi.response = "Error del servidor";
                }
            });
        }
        else {
            if (!this.user.validateEmail())
                this.emailHelp = "Ingrese un email válido.";
            if (!this.user.validatePassword())
                this.claveHelp = "Clave con mas de 4 caracteres";
        }
    };
    Object.defineProperty(LoginComponent, "isLoged", {
        get: function () {
            return LoginComponent_1._loged;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.savePoints = function (bodyResponse) {
        this.user.agilidad = bodyResponse.response.points.agilidad;
        this.user.anagrama = bodyResponse.response.points.anagrama;
        this.user.naval = bodyResponse.response.points.naval;
        this.user.numero = bodyResponse.response.points.numero;
        this.user.piedra = bodyResponse.response.points.piedra;
        this.user.tateti = bodyResponse.response.points.tateti;
        localStorage.setItem("agilidad", bodyResponse.response.points.agilidad);
        localStorage.setItem("anagrama", bodyResponse.response.points.anagrama);
        localStorage.setItem("naval", bodyResponse.response.points.naval);
        localStorage.setItem("numero", bodyResponse.response.points.numero);
        localStorage.setItem("piedra", bodyResponse.response.points.piedra);
        localStorage.setItem("tateti", bodyResponse.response.points.tateti);
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(["/Registro"]);
    };
    // Entrar() {
    //   if (this.ser. === 'admin' && this.clave === 'admin') {
    //     this.router.navigate(['/Principal']);
    //   }
    // }
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
                    //this.Entrar();
                    break;
            }
        });
        //this.logeando=true;
    };
    var LoginComponent_1;
    LoginComponent.email = "Desconocido";
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoginComponent.prototype, "logedEvent", void 0);
    LoginComponent = LoginComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/componentes/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/componentes/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_clases_IncrementService__WEBPACK_IMPORTED_MODULE_6__["IncrementService"],
            _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _clases_user__WEBPACK_IMPORTED_MODULE_4__["User"],
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

module.exports = "<h1>{{ title }}</h1>\r\n\r\n<!-- this creates a google map on the page with the given lat/lng from -->\r\n<!-- the component as the initial center of the map: -->\r\n<!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\"  (mapClick)=\"mapClicked($event)\"> -->\r\n   \r\n  <!-- <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n<input type =\"text\" [(ngModel)]=\"lat\" />\r\n<input type=\"text\" [(ngModel)]=\"lng\"/>  -->"

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

module.exports = ".card {\r\n    max-width: 300px;\r\n    max-height: 250px;\r\n    height: 100%;\r\n    margin: 10px;\r\n    border-radius: 50px  50px 50px 50px;\r\n    float: left;\r\n    border: solid rgba(0, 0, 0, 0.911) 1px;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    /* text-align: right; */\r\n    box-shadow: 12px -2px 49px -10px rgba(0,0,0,0.75);\r\n}\r\n\r\n/* .shadow{\r\n    \r\n    -webkit-box-shadow: 12px -2px 49px -10px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: 12px -2px 49px -10px rgba(0,0,0,0.75);\r\n    box-shadow: 12px -2px 49px -10px rgba(0,0,0,0.75);\r\n} */\r\n\r\n/* Add rounded corners to the top left and the top right corner of the image */\r\n\r\nimg {\r\n    /* border-radius: 5px 5px 0 0; */\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n\r\n/* Add some padding inside the card container */\r\n\r\n.container {\r\n    padding: 2px 16px;\r\n}\r\n\r\n.btn-card{\r\n    border-radius: 0px  0 4px 4px;\r\n    color:rgba(255, 255, 255, 0.808);font-size:55px;font-family: Tahoma;\r\n    \r\n}\r\n\r\n.button{\r\n    margin-left: 1px;\r\n    display: inline-block;\r\n    width: 90%;\r\n    padding: 5px 15px;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: rgb(255, 166, 0);\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    /* border-radius: 15px; */\r\n    box-shadow: 0 9px #999;\r\n\r\n    border: none;\r\n    outline: 0;\r\n \r\n    padding: 8px;\r\n    color: white;\r\n   /* background-color: #000;*/\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n  }\r\n\r\n.button:hover {background-color: #3e8e41}\r\n\r\n.button:active {\r\n    background-color: #3e8e41;\r\n    box-shadow: 0 5px #666;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n  }"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:67px;\">\r\n  <div class=\"card\" style=\"border-radius: 4px  4px 4px 4px\" (click)=\"Juego('Agilidad')\">\r\n    <img class=\"\" src=\"./assets/imagenes/cerebro.jpg\" alt=\"Avatar\" style=\"width:100%;border-radius: 4px  4px 0px 0px\">\r\n    <button class=\"btn btn-default btn-card\" title=\"{{velocidadTitle}}\" target=\"_blank\" style=\"background-image:url('./assets/imagenes/gris.jpg');\">\r\n      <h6> Velocidad y agilidad aritmética </h6>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"card\" style=\"border-radius: 4px  4px 4px 4px\" (click)=\"Juego('ppt')\">\r\n    <img class=\"\" src=\"./assets/imagenes/ppt.jpg\" alt=\"Avatar\" style=\"width:100%;border-radius: 4px  4px 0px 0px\">\r\n    <button class=\"btn btn-default btn-card\" title=\"{{piedraTitle}}\" target=\"_blank\" \r\n    style=\"background-image:url('./assets/imagenes/gris.jpg');\">\r\n      <h6> Piedra Papel o Tijera </h6>\r\n    </button>\r\n  </div>\r\n  <div class=\"card\" style=\"border-radius: 4px  4px 4px 4px\" (click)=\"Juego('Adivina')\">\r\n    <img class=\"\" src=\"./assets/imagenes/adivina.png\" alt=\"Avatar\" style=\"width:100%;border-radius: 4px  4px 0px 0px\">\r\n    <button class=\"btn btn-default btn-card\" title=\"{{adivinaTitle}}\" target=\"_blank\"\r\n     style=\"background-image:url('./assets/imagenes/gris.jpg');\">\r\n      <h6> Adivina el número secreto </h6>\r\n    </button>\r\n  </div>\r\n  <div class=\"card\"  title=\"{{navalTitle}}\"\r\n   style=\"border-radius: 4px  4px 4px 4px\" (click)=\"Juego('Batalla-Naval')\">\r\n    <img class=\"\" src=\"./assets/imagenes/naval.png\" alt=\"Avatar\" style=\"width:100%;border-radius: 4px  4px 0px 0px\">\r\n    <button class=\"btn btn-default btn-card\" target=\"_blank\" \r\n    style=\"background-image:url('./assets/imagenes/gris.jpg')\">\r\n      <h6> Batalla naval </h6>\r\n    </button>\r\n  </div>\r\n  <div class=\"card\" style=\"border-radius: 4px  4px 4px 4px\" (click)=\"Juego('anagrama')\">\r\n    <img class=\"\" src=\"./assets/imagenes/anagrama.jpg\" alt=\"Avatar\" style=\"width:100%;border-radius: 4px  4px 0px 0px\">\r\n    <button class=\"btn btn-default btn-card\" target=\"_blank\" style=\"background-image:url('./assets/imagenes/gris.jpg');\">\r\n      <h6> Anagrama </h6>\r\n    </button>\r\n  </div>\r\n  <div class=\"card\"  title=\"{{tatetilTitle}}\" style=\"border-radius: 4px  4px 4px 4px\" (click)=\"Juego('tateti')\">\r\n    <img class=\"\" src=\"./assets/imagenes/tateti.jpg\" alt=\"Avatar\" \r\n    style=\"width:100%;border-radius: 4px\">\r\n    <button class=\"btn btn-default btn-card\" target=\"_blank\" style=\"background-image:url('./assets/imagenes/gris.jpg');\">\r\n      <h6> Ta Te Ti </h6>\r\n    </button>\r\n  </div>"

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
/* harmony import */ var _clases_IncrementService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/IncrementService */ "./src/app/clases/IncrementService.ts");
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
    function MenuCardComponent(incrementService, router) {
        this.incrementService = incrementService;
        this.router = router;
    }
    MenuCardComponent.prototype.ngOnInit = function () {
        this.velocidadTitle = " Juego de agilidad mental! ";
        this.piedraTitle = " Juega contra la máquina! ";
        this.adivinaTitle = " Juego de estrategia! ";
        this.navalTitle = " Unde los barcos de la maquina! ";
    };
    MenuCardComponent.prototype.ngOnChanges = function () {
        if (!this.incrementService.contador) {
            this.router.navigate(['/Login']);
        }
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
            case 'ppt':
                this.router.navigate(['/Juegos/piedra-tijera']);
                break;
            case 'anagrama':
                this.router.navigate(['/Juegos/anagrama']);
                break;
            case 'tateti':
                this.router.navigate(['/Juegos/tateti']);
                break;
        }
    };
    MenuCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-card',
            template: __webpack_require__(/*! ./menu-card.component.html */ "./src/app/componentes/menu-card/menu-card.component.html"),
            styles: [__webpack_require__(/*! ./menu-card.component.css */ "./src/app/componentes/menu-card/menu-card.component.css")]
        }),
        __metadata("design:paramtypes", [_clases_IncrementService__WEBPACK_IMPORTED_MODULE_2__["IncrementService"],
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

/***/ "./src/app/componentes/piedra-tijera/piedra-tijera.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/piedra-tijera/piedra-tijera.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ppt{\r\n    width:100%;\r\n    border-radius: 25px;\r\n    box-shadow: 12px -2px 49px -10px rgba(0,0,0,0.75);\r\n}"

/***/ }),

/***/ "./src/app/componentes/piedra-tijera/piedra-tijera.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componentes/piedra-tijera/piedra-tijera.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pop-up [(showPopUp)]='showPopUp' [(messege)]='messege' [(success)]='success'></app-pop-up>\n<div class=\"row\" style=\"height:400px;margin-top:60px\">\n  <div class=\"col-sm-12 col-md-4 col-lg-3\" style=\"margin:0 0 40px 0\">\n    <app-lateral-panel (timeOut)='timeOut($event)' [(title)]='title' (pointCalculed)='sendData()' [(time)]='time'></app-lateral-panel>\n    <!-- <app-counter [counter]=\"counter\"></app-counter> -->\n  </div>\n  <div class=\"col-sm-12 col-md-8 col-lg-9\" style=\"border-radius:25px;margin-top:35px;\">\n    <div class=\"row\" style=\"padding:1% 5% 0% 5%\">\n      <div class=\"col-4\">\n        <img class=\"ppt\" (click)=\"play('Piedra')\" src=\"../../../assets/imagenes/piedra.jpg\" alt=\"Avatar\">\n      </div>\n      <div class=\"col-4\">\n        <img class=\"ppt\" (click)=\"play('Papel')\" src=\"../../../assets/imagenes/papel.jpg\" alt=\"Avatar\">\n      </div>\n      <div class=\"col-4\">\n        <img class=\"ppt\" (click)=\"play('Tijera')\" src=\"../../../assets/imagenes/tijera.jpg\" alt=\"Avatar\">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-3\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/piedra-tijera/piedra-tijera.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/piedra-tijera/piedra-tijera.component.ts ***!
  \**********************************************************************/
/*! exports provided: PiedraTijeraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedraTijeraComponent", function() { return PiedraTijeraComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PiedraTijeraComponent = /** @class */ (function () {
    function PiedraTijeraComponent(user, userService) {
        this.user = user;
        this.userService = userService;
        this.title = "Piedra Papel Tijera";
    }
    PiedraTijeraComponent.prototype.ngOnInit = function () {
        this.user.lose = false;
        this.user.won = false;
        this.time = 10;
        this.user.pointsActualGame = 0;
        this.user.piedra = Number(localStorage.getItem("piedra"));
        this.user.actualGame = "piedra";
    };
    PiedraTijeraComponent.prototype.machinePlay = function () {
        var numero = Math.floor((Math.random() * 3) + 1);
        var machine;
        if (numero == 1) {
            machine = "Piedra";
        }
        else if (numero == 2) {
            machine = "Papel";
        }
        else {
            machine = "Tijera";
        }
        return machine;
    };
    PiedraTijeraComponent.prototype.play = function (user) {
        if (!this.user.won && !this.user.lose) {
            var machine = this.machinePlay();
            if (user == machine) {
                this.user.won = true;
                this.user.pointsActualGame += 5;
                this.messege = ("Empate, los dos eligieron " + user);
            }
            else {
                if (user == "Piedra" && machine == "Papel") {
                    this.user.lose = true;
                    this.user.pointsActualGame -= 24;
                    this.messege = ("" + user + " vs " + machine + ", gana el ordenador.");
                }
                else if (user == "Piedra" && machine == "Tijera") {
                    this.user.won = true;
                    this.user.pointsActualGame += 20;
                    this.messege = ("" + user + " vs " + machine + ", gana el usuario");
                }
                else if (user == "Papel" && machine == "Tijera") {
                    this.user.lose = true;
                    this.user.pointsActualGame -= 24;
                    this.messege = ("" + user + " vs " + machine + ", gana el ordenador.");
                }
                else if (user == "Papel" && machine == "Piedra") {
                    this.user.won = true;
                    this.user.pointsActualGame += 20;
                    this.messege = ("" + user + " vs " + machine + ", gana el usuario");
                }
                else if (user == "Tijera" && machine == "Piedra") {
                    this.user.lose = true;
                    this.user.pointsActualGame -= 24;
                    this.messege = ("" + user + " vs " + machine + ", gana el ordenador.");
                }
                else if (user == "Tijera" && machine == "Papel") {
                    this.user.won = true;
                    this.user.pointsActualGame += 20;
                    this.messege = ("" + user + " vs " + machine + ", gana el usuario");
                }
                else {
                    this.messege = ("algo anda mal");
                }
            }
            this.showPopUp = true;
        }
    };
    PiedraTijeraComponent.prototype.timeOut = function (timeOut) {
        if (timeOut) {
            console.log("timeOut " + timeOut);
            this.messege = "Se acabó el tiempo";
            this.showPopUp = true;
        }
    };
    PiedraTijeraComponent.prototype.sendData = function () {
        this.user.piedra += this.user.pointsActualGame;
        this.user.pointsActualGame = this.user.piedra;
        this.user.actualGame = "piedra";
        this.user.email = localStorage.getItem("email");
        localStorage.setItem("piedra", this.user.piedra.toString());
        this.userService.sendResults(this.user);
    };
    PiedraTijeraComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-piedra-tijera',
            template: __webpack_require__(/*! ./piedra-tijera.component.html */ "./src/app/componentes/piedra-tijera/piedra-tijera.component.html"),
            styles: [__webpack_require__(/*! ./piedra-tijera.component.css */ "./src/app/componentes/piedra-tijera/piedra-tijera.component.css")]
        }),
        __metadata("design:paramtypes", [_clases_user__WEBPACK_IMPORTED_MODULE_1__["User"], _servicios_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], PiedraTijeraComponent);
    return PiedraTijeraComponent;
}());



/***/ }),

/***/ "./src/app/componentes/point-meter/point-meter.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componentes/point-meter/point-meter.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/point-meter/point-meter.component.html":
/*!********************************************************************!*\
  !*** ./src/app/componentes/point-meter/point-meter.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group input-group-sm mb-3\" style=\"width:100%;height:40px;margin:20px 5% 0 0;align-content:center\">\n  <div class=\"input-group-prepend\">\n    <span class=\"input-group-text\" style=\"background-color:rgb(37, 38, 44);color:orange;font-size: 20px;width:100%;padding:1px 8px 4px 15px\"\n      id=\"inputGroup-sizing-xl\">Puntos</span>\n  </div>\n  <input [(ngModel)]='user.pointsActualGame' class=\"form-control\" aria-label=\"Small\" style=\"width:50px\" disabled #ctrl=\"ngModel\"\n    aria-describedby=\"inputGroup-sizing-sm\">\n</div>"

/***/ }),

/***/ "./src/app/componentes/point-meter/point-meter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componentes/point-meter/point-meter.component.ts ***!
  \******************************************************************/
/*! exports provided: PointMeterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointMeterComponent", function() { return PointMeterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PointMeterComponent = /** @class */ (function () {
    function PointMeterComponent(user) {
        this.user = user;
    }
    PointMeterComponent.prototype.ngOnInit = function () {
        this.user.pointsActualGame;
    };
    PointMeterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-point-meter',
            template: __webpack_require__(/*! ./point-meter.component.html */ "./src/app/componentes/point-meter/point-meter.component.html"),
            styles: [__webpack_require__(/*! ./point-meter.component.css */ "./src/app/componentes/point-meter/point-meter.component.css")]
        }),
        __metadata("design:paramtypes", [_clases_user__WEBPACK_IMPORTED_MODULE_1__["User"]])
    ], PointMeterComponent);
    return PointMeterComponent;
}());



/***/ }),

/***/ "./src/app/componentes/pop-up/pop-up.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/pop-up/pop-up.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    .block{\r\n        display: block\r\n    }\r\n"

/***/ }),

/***/ "./src/app/componentes/pop-up/pop-up.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/pop-up/pop-up.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal -->\n<div class=\"modal fade\" [ngClass]='stilePopUp' style=\"background-color:rgb(31, 35, 53)(0, 47, 255)\"  id=\"exampleModal\" tabindex=\"1000\"\n  aria-hidden=\"true\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">{{messegeHeader}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        {{messege}}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-warning\" data-dismiss=\"modal\" (click)=\"closeGoMenu()\">Volver al menú</button>\n        <button type=\"button\" class=\"btn btn-outline-primary\" data-dismiss=\"modal\" (click)=\"reload()\">Volver a Jugar</button>\n      </div>\n    </div>\n  </div>\n</div> \n\n"

/***/ }),

/***/ "./src/app/componentes/pop-up/pop-up.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/pop-up/pop-up.component.ts ***!
  \********************************************************/
/*! exports provided: PopUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpComponent", function() { return PopUpComponent; });
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


var PopUpComponent = /** @class */ (function () {
    function PopUpComponent(router) {
        this.router = router;
        this.showPopUp = true;
    }
    PopUpComponent.prototype.ngOnInit = function () {
        console.log(this.showPopUp);
        this.stilePopUp = "modal fade";
    };
    PopUpComponent.prototype.ngOnChanges = function () {
        console.log(this.showPopUp);
        if (this.showPopUp) {
            this.stilePopUp = "modal fade show block";
        }
        if (!this.success)
            this.messegeHeader = "Jodete hermano";
    };
    PopUpComponent.prototype.reload = function () {
        this.stilePopUp = "modal fade";
        window.location.reload();
    };
    PopUpComponent.prototype.closeGoMenu = function () {
        this.stilePopUp = "modal fade";
        this.router.navigate(["/Principal"]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpComponent.prototype, "showPopUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpComponent.prototype, "success", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpComponent.prototype, "messege", void 0);
    PopUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pop-up',
            template: __webpack_require__(/*! ./pop-up.component.html */ "./src/app/componentes/pop-up/pop-up.component.html"),
            styles: [__webpack_require__(/*! ./pop-up.component.css */ "./src/app/componentes/pop-up/pop-up.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PopUpComponent);
    return PopUpComponent;
}());



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagenDeMenu{\r\n    margin: -1px -6px;\r\n    height: 139px;\r\n}\r\n\r\n.hero-text {\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    color: #100000;\r\n}\r\n\r\n.principal_button{\r\nbox-shadow: 12px -2px 49px -10px rgba(0,0,0,0.75);\r\nbackground-color: rgba(212, 174, 124, 0.849);\r\nborder:0px;\r\n}\r\n\r\n.imgBtn{\r\n    box-shadow: 12px -2px 49px -10px rgba(0, 0, 0, 0.596);\r\n\r\n    border:0px;\r\n}"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containter\" style=\"padding:5px 5px 10px 40px;width:98%\">\r\n  <div class=\"row\" style=\"margin-top:50px\">\r\n    <div class=\"col-xs-12 col-sm-12 col-lg-2 col-xl-2\">\r\n      <div>\r\n        <div class=\"row\" style=\"margin-top:20px\">\r\n          <div class=\"list-group\" style=\"width:95%\">\r\n            <a href=\"https://github.com/octaviovillegas\" class=\"list-group-item list-group-item-action list-group-item\"\r\n              style=\"border-radius:2px ;background-color:rgba(36, 38, 43, 0.945);color: orange\">\r\n              <i class=\"fa fa-github\"> </i>\r\n              Github\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top:20px\">\r\n          <div class=\"list-group\" style=\"width:95%\">\r\n            <a routerLink=\"/QuienSoy\" class=\"list-group-item list-group-item-action\" style=\"border-radius:2px ;background-color:rgba(36, 38, 43, 0.945);color: orange\">\r\n              <i class=\"fa fa-user-circle-o\"> </i>\r\n              Quien Soy?\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top:20px;animation-delay:3s\">\r\n          <div class=\"list-group\" style=\"width:95%\">\r\n            <a routerLink=\"/QuienSoy\" class=\"list-group-item list-group-item-action\" style=\"border-radius:2px ;background-color:rgba(36, 38, 43, 0.945);color: orange\">\r\n              <i class=\"fa fa-cogs\">\r\n              </i> Settings </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-10 col-sm-12 col-lg-10 col-xl-10\">\r\n      <button routerLink=\"/Juegos\" style=\"width:95%;margin-top:2%\" class=\"principal_button\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2\" >\r\n            <div class=\"media\">\r\n              <img src=\"./assets/imagenes/Videogames.gif\" class=\"media-object imagenDeMenu imgBtn\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-10\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"media-heading\">Juegos</h4>\r\n              <p>El método lúdico es un conjunto de estrategias diseñadas para crear un ambiente de armonía en\r\n                los\r\n                estudiantes que están inmersos en el proceso de aprendizaje. Este método busca que los alumnos se\r\n                apropien de los temas impartidos por los docentes utilizando el juego.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </button>\r\n      <button style=\"width:95%;margin-top:2%\" (click)=\"go('/Listado')\" class=\"principal_button imgBtn\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2\">\r\n            <div class=\"media\">\r\n              <img src=\"./assets/imagenes/listado.jpg\" class=\"media-object imagenDeMenu imgBtn\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-10\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"media-heading\">Listados de resultados</h4>\r\n              <p>Los listados de los resultados con ordenamiento y busqueda</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </button>\r\n      <button routerLink=\"/Listado\" style=\"width:95%;margin-top:2%\" class=\"principal_button\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2\">\r\n            <div class=\"media\">\r\n              <img src=\"./assets/imagenes/players.jpg\" class=\"media-object imagenDeMenu imgBtn\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-10\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"media-heading\">Jugadores</h4>\r\n              <p>Listado de jugadores</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

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


var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent(router) {
        this.router = router;
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }
    PrincipalComponent.prototype.ngOnInit = function () {
    };
    PrincipalComponent.prototype.go = function (ruta) {
        this.router.navigate([ruta]);
    };
    PrincipalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/componentes/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/componentes/principal/principal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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

module.exports = "  <nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>                        \r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"./\">Salasss De Juegos</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li><a href=\"./QuienSoy#quien\">Quien</a></li>\r\n          <li><a href=\"/TP_LAV4_2017/QuienSoy#que\">Ques es</a></li>\r\n          <li><a href=\"./QuienSoy#donde\">Donde</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  \r\n  <!-- First Container -->\r\n  <div id =\"quiwn\"class=\"container-fluid bg-1 text-center\">\r\n    <h3 class=\"margin\">Quién Soy?</h3>\r\n    <img src=\"./assets/imagenes/quiensoy.jpg\" class=\"img-responsive img-circle margin\" style=\"display:inline\" alt=\"Bird\" width=\"350\" height=\"350\">\r\n    <h3>Soy Un alumno de la UTN FRA</h3>\r\n  </div>\r\n  \r\n  <!-- Second Container -->\r\n  <div id =\"que\" class=\"container-fluid bg-2 text-center\">\r\n    <h3 class=\"margin\">Esto es un trabajo práctico</h3>\r\n    <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa el educador busca información en el alumno para lograr comprender cómo se está\r\n      produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\r\n    <a href=\"#\" class=\"btn btn-default btn-lg\">\r\n      <span class=\"glyphicon glyphicon-file\"></span> Descargar PDF\r\n    </a>\r\n  </div>\r\n  \r\n  <!-- Third Container (Grid) -->\r\n  <div id =\"donde\" class=\"container-fluid bg-3 text-center\">    \r\n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\">\r\n        <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\r\n        <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\"  alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado en el comportamiento del usuario y en la funcionalidad.</p>\r\n        <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n      <div class=\"col-sm-4\"> \r\n        <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\r\n        <img src=\"./assets/imagenes/quiensoy3.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- Footer -->\r\n  <footer class=\"container-fluid bg-4 text-center\">\r\n    <p>Modificado por <a href=\"https://www.octavio.com.ar\">www.octavio.com.ar</a></p> \r\n  </footer>"

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

module.exports = "/* Set a style for all buttons */\r\n\r\n.login{\r\n    box-shadow: 10px 13px 50px -15px rgba(0, 0, 0, 0.911);\r\n}\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n/* Modal Content/Box */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n  /* //  margin: 5% auto 15% auto; 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid rgb(230, 230, 230);\r\n    \r\n}\r\n\r\n.modal{\r\n    /* background-image:url('../../../assets/imagenes/gris.jpg'); */\r\n    box-shadow: 10px 13px 50px -15px rgba(0, 0, 0, 0.904);\r\n    background-color:rgba(17, 24, 43, 0.863);\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.html":
/*!**************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\" style=\"margin-top:80px;\">\r\n  <div style=\"padding:20px;background-color: rgba(18, 17, 29, 0.911);border-radius:8px\" class=\"\">\r\n    <div class=\"form-group has-error has-feedback\" style=\"color:orange;font-size:30px;font-family: Tahoma, Geneva, sans-serif;\">\r\n      <label>Terminos y condiciones</label>\r\n    </div>\r\n    <p style=\"color:white\">\r\n      Juro sobre el pergamino sagrado que si revelo alguno de los secretos de los Magios,\r\n      que se me hinche la barriga y se me caiga tooodoo el cabello. Asi sea.\r\n    </p>\r\n    <div class=\"btn-group\" style=\"width:100%;margin-top:5%\" role=\"group\" aria-label=\"Basic example\">\r\n      <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"returnLogin()\" style=\"width:100%\">Mejor no</button>\r\n      <button type=\"button\" class=\"btn btn-outline-warning\" style=\"width:100%\" onclick=\"document.getElementById('id01').style.display='block'\">Mandale\r\n        cumbia</button>\r\n    </div>\r\n\r\n    <div id=\"id01\" class=\"modal login\" style=\"margin-top:80px;padding-bottom: 2%;height: 400px;margin-right:20px;margin-left:20px;z-index:999;border-radius:5px;padding: 0 15px 15px 45px;color:white;border-radius:8px\">\r\n      <div class=\"row pull-right\">\r\n        <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close Modal\">×</span>\r\n      </div><br>\r\n      <div class=\"row\">\r\n        <label><b>Email</b></label>\r\n\r\n        <input type=\"email\" [ngClass]=\"inputEmail\" (keydown)='emailHelp=\"\"' placeholder=\"Ingresa tu correo\" [(ngModel)]=\"user.email\"\r\n          name=\"email\" style=\"width:100%;margin-right:4%;border-radius:5px;border:0px;padding:5px 5px 6px 8px\">\r\n        <small id=\"emailHelpId\" class=\"form-text text-muted\">{{emailHelp}}</small>\r\n      </div>\r\n      <div class=\"row\">\r\n        <label><b>Clave</b></label>\r\n        <input type=\"password\" (keydown)='claveHelp=\"\"' placeholder=\"Aca la clave\" [(ngModel)]=\"user.password\" name=\"psw\"\r\n          style=\"width:100%;margin-right:4%;border-radius:5px;border:0px;padding:5px 5px 6px 8px\">\r\n          <small id=\"claveHelpId\" class=\"form-text text-muted \">{{claveHelp}}</small>\r\n      </div>\r\n      <div class=\"row\">\r\n        <label><b>Repita la clave</b></label>\r\n        <input type=\"password\" placeholder=\"Repetir clave\" [(ngModel)]=\"user.passwordControl\" name=\"repPsw\" style=\"width:100%;margin-right:4%;border-radius:5px;border:0px;padding:5px 5px 6px 8px\">\r\n      </div>\r\n      <div class=\"row\" style=\"width:100%\">\r\n        <p>creando la cuenta aceptando los<a onclick=\"document.getElementById('id01').style.display='none'\">Terminos\r\n            y condiciones</a>.</p>\r\n        <div class=\"btn-group\" style=\"width:100%;margin:0 0 0 0\" role=\"group\" aria-label=\"Basic example\">\r\n\r\n          <button style=\"width:100%;height:55px;margin-top:2%\" class=\"btn btn-outline-warning\" (click)=\"returnLogin()\">Mejor\r\n            no :v</button>\r\n          <button style=\"width:100%;height:55px;margin-top:2%\" class=\"btn btn-outline-warning\" (click)=\"saveUser()\">Entrale</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<script>\r\n  var modal = document.getElementById('id01');\r\n  window.onclick = function (event) {\r\n    if (event.target == modal) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  }\r\n</script>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
/* harmony import */ var _clases_IncrementService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../clases/IncrementService */ "./src/app/clases/IncrementService.ts");
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
    function RegistroComponent(_userService, router, incrementService) {
        this.router = router;
        this.incrementService = incrementService;
        this.userService = _userService;
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.user = new _clases_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    };
    RegistroComponent.prototype.ngOnChanges = function () {
        console.log(this.user.email);
    };
    RegistroComponent.prototype.saveUser = function () {
        var _this = this;
        if (this.user.validateEmail() && this.user.validatePassword()) {
            console.log("utiliza register");
            this.userService.register(this.user).subscribe(function (succes) {
                if (succes.status == 200) {
                    var bodyResponse = JSON.parse(succes["_body"]);
                    if (bodyResponse.code === 0) {
                        console.log(bodyResponse.response); //Guardo el token
                        _this.incrementService.contador = true;
                        _this.incrementService.email = _this.user.email;
                        _servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].token = bodyResponse.response; //Guardo el token
                        _this.router.navigate(["/Principal"]);
                    }
                }
                else {
                    alert("Error");
                }
            });
        }
        else {
            if (!this.user.validateEmail())
                this.emailHelp = "Ingrese un email válido.";
            if (!this.user.validatePasswordWithConfirm())
                this.claveHelp = "Clave con mas de 4 caracteres";
        }
    };
    RegistroComponent.prototype.returnLogin = function () {
        this.router.navigate(["/Login"]);
    };
    RegistroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/componentes/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.css */ "./src/app/componentes/registro/registro.component.css")]
        }),
        __metadata("design:paramtypes", [_servicios_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _clases_IncrementService__WEBPACK_IMPORTED_MODULE_4__["IncrementService"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/componentes/sub-title/sub-title.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/sub-title/sub-title.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subTitle{\r\n    font:small arial ,sans-serif;\r\n    text-align: center;\r\n    font-size: 50px;\r\n    color:rgb(194, 182, 173);\r\n    text-shadow: 15px;\r\n    padding-top: 25px;\r\n}"

/***/ }),

/***/ "./src/app/componentes/sub-title/sub-title.component.html":
/*!****************************************************************!*\
  !*** ./src/app/componentes/sub-title/sub-title.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subTitle shadow\">\n  {{subTitle}}\n</div>"

/***/ }),

/***/ "./src/app/componentes/sub-title/sub-title.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/sub-title/sub-title.component.ts ***!
  \**************************************************************/
/*! exports provided: SubTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTitleComponent", function() { return SubTitleComponent; });
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

var SubTitleComponent = /** @class */ (function () {
    function SubTitleComponent() {
    }
    SubTitleComponent.prototype.ngOnInit = function () {
        console.log(this.subTitle);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SubTitleComponent.prototype, "subTitle", void 0);
    SubTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-title',
            template: __webpack_require__(/*! ./sub-title.component.html */ "./src/app/componentes/sub-title/sub-title.component.html"),
            styles: [__webpack_require__(/*! ./sub-title.component.css */ "./src/app/componentes/sub-title/sub-title.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubTitleComponent);
    return SubTitleComponent;
}());



/***/ }),

/***/ "./src/app/componentes/tateti/cell.ts":
/*!********************************************!*\
  !*** ./src/app/componentes/tateti/cell.ts ***!
  \********************************************/
/*! exports provided: PLAYER_MATCHED, Cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_MATCHED", function() { return PLAYER_MATCHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cell", function() { return Cell; });
var PLAYER_MATCHED = { USER: "O", MACHINE: "X" };
var Cell = /** @class */ (function () {
    function Cell() {
        this._player = "";
        this._matched = false;
    }
    Object.defineProperty(Cell.prototype, "matched", {
        get: function () {
            return this._matched;
        },
        set: function (matched) {
            this._matched = matched;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "player", {
        get: function () {
            return this._player;
        },
        set: function (player) {
            this._player = player;
        },
        enumerable: true,
        configurable: true
    });
    return Cell;
}());



/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.css":
/*!*********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\ndiv#tablero{width:310px;height:310px; padding:0px; border: 7px solid #999; background-color:white; margin: 20px auto; cursor:pointer;}\r\ndiv#tablero div{width:100px;height:100px;float:left; margin:0px; font-size: 90px; text-align:center;}\r\n.celda1,.celda2,.celda3,.celda4,.celda5,.celda6 {border-bottom: 5px solid black;}\r\n.celda1,.celda2,.celda4,.celda5,.celda7,.celda8 {border-right: 5px solid black;}\r\ndiv#tablero > div:hover {background-color:#ddd;}\r\ndiv#consola {width:310px;height:30px; padding:7px; border: 5px solid #999; background-color:white; margin: 10px auto; text-align:center; color:darkgreen;}\r\n.celda{\r\n    width:70px;height: 120px;\r\n}\r\n.tatetiValue{\r\n    color: #FFF;\r\n    text-align: center;\r\n    font:  100px arial, Serif;\r\n    text-shadow: 2px 2px 2px rgb(0, 0, 0);\r\n    content: 'O';\r\n}"

/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.html":
/*!**********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Tres En Raya</h1>\n<app-pop-up [showPopUp]='showPopUp' [messege]='messege' [success]='success'></app-pop-up>\n<div class=\"row\" style=\"height:100%;\">\n  <div class=\"col-3\">\n    <app-lateral-panel (timeOut)='timeOut($event)' [(title)]='title' (pointCalculed)='sendData()' [(time)]='time'></app-lateral-panel>\n    <!-- <app-counter [counter]=\"counter\"></app-counter> -->\n  </div>\n  <div class=\"col-6 generalShadow\" \n  style=\"background-color: rgba(23, 71, 71, 0.822);border-radius: 15px;margin-top:50px;\">\n    <div style=\"width:100%\" class=\"pull-center\">\n      <div class=\"row\">\n        <div class=\"col-4 celda1 tatetiValue celda\" (click)=\"userPlays(0)\">{{cells[0].player}}</div>\n        <div class=\"col-4 celda2 tatetiValue celda\" (click)=\"userPlays(1)\">{{cells[1].player}}</div>\n        <div class=\"col-4 celda3 tatetiValue celda\" (click)=\"userPlays(2)\">{{cells[2].player}}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4 celda4 tatetiValue celda\" (click)=\"userPlays(3)\">{{cells[3].player}}</div>\n        <div class=\"col-4 celda5 tatetiValue celda\" (click)=\"userPlays(4)\">{{cells[4].player}}</div>\n        <div class=\"col-4 celda6 tatetiValue celda\" (click)=\"userPlays(5)\">{{cells[5].player}}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-4 celda7 tatetiValue celda\" (click)=\"userPlays(6)\">{{cells[6].player}}</div>\n        <div class=\"col-4 celda8 tatetiValue celda\" (click)=\"userPlays(7)\">{{cells[7].player}}</div>\n        <div class=\"col-4 celda9 tatetiValue celda\" (click)=\"userPlays(8)\">{{cells[8].player}}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-3\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/tateti/tateti.component.ts":
/*!********************************************************!*\
  !*** ./src/app/componentes/tateti/tateti.component.ts ***!
  \********************************************************/
/*! exports provided: TatetiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TatetiComponent", function() { return TatetiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/app/componentes/tateti/cell.ts");
/* harmony import */ var _servicios_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../servicios/user.service */ "./src/app/servicios/user.service.ts");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TatetiComponent = /** @class */ (function () {
    function TatetiComponent(user, userService) {
        this.user = user;
        this.userService = userService;
        this.title = "Tateti";
    }
    TatetiComponent_1 = TatetiComponent;
    TatetiComponent.prototype.ngOnInit = function () {
        this.user.lose = false;
        this.user.won = false;
        this.time = 60;
        this.user.pointsActualGame = 0;
        this.user.tateti = Number(localStorage.getItem("tateti"));
        this.user.actualGame = "tateti";
        this.playerWon = TatetiComponent_1.NOBODY_WON;
        this.unmatchedCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        this.matchedCells = [];
        this.userMatched = [];
        this.machineMatched = [];
        this.cells = [];
        this.turn = true;
        for (var i = 0; i < 9; i++) {
            this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_1__["Cell"]());
        }
    };
    TatetiComponent.prototype.checkIfWin = function (cellsMatched, player) {
        if (cellsMatched.length > 2) {
            cellsMatched.sort(function (numOne, numTwo) {
                var sortReturn = 0;
                if (numOne > numTwo) {
                    sortReturn = 1;
                }
                else if (numOne < numTwo)
                    sortReturn = -1;
                return sortReturn;
            });
            if (cellsMatched[0] == 0) {
                if ((cellsMatched[1] == 1 && cellsMatched[2] == 2) ||
                    cellsMatched.find(function (cell) { return cell == 3; }) && cellsMatched.find(function (cell) { return cell == 6; }) ||
                    cellsMatched.find(function (cell) { return cell == 4; }) && cellsMatched.find(function (cell) { return cell == 6; })) {
                    this.playerWon = player;
                }
            }
            else if (cellsMatched.find(function (cell) { return cell == 2; }) && cellsMatched.find(function (cell) { return cell == 4; }) && cellsMatched.find(function (cell) { return cell == 6; }))
                this.playerWon = player;
            else if (cellsMatched.find(function (cell) { return cell == 2; }) && cellsMatched.find(function (cell) { return cell == 5; }) && cellsMatched.find(function (cell) { return cell == 8; }))
                this.playerWon = player;
            else if (cellsMatched.find(function (cell) { return cell == 3; }) && cellsMatched.find(function (cell) { return cell == 4; }) && cellsMatched.find(function (cell) { return cell == 5; }))
                this.playerWon = player;
            else if (cellsMatched.find(function (cell) { return cell == 6; }) && cellsMatched.find(function (cell) { return cell == 7; }) && cellsMatched.find(function (cell) { return cell == 8; }))
                this.playerWon = player;
            else if (cellsMatched.find(function (cell) { return cell == 3; }) && cellsMatched.find(function (cell) { return cell == 4; }) && cellsMatched.find(function (cell) { return cell == 5; }))
                this.playerWon = player;
            else if (cellsMatched.find(function (cell) { return cell == 0; }) && cellsMatched.find(function (cell) { return cell == 3; }) && cellsMatched.find(function (cell) { return cell == 6; }))
                this.playerWon = player;
            else if (cellsMatched.find(function (cell) { return cell == 1; }) && cellsMatched.find(function (cell) { return cell == 4; }) && cellsMatched.find(function (cell) { return cell == 7; }))
                this.playerWon = player;
        }
    };
    TatetiComponent.prototype.machinePLays = function () {
        if (this.unmatchedCells.length > 0) {
            var index = void 0;
            var cell = void 0;
            index = Math.floor(Math.random() * this.unmatchedCells.length);
            this.cells[this.unmatchedCells[index]].matched = true;
            this.cells[this.unmatchedCells[index]].player = "X";
            this.machineMatched.push(index);
            this.checkIfWin(this.machineMatched, TatetiComponent_1.MACHINE_WON);
            if (this.playerWon == TatetiComponent_1.NOBODY_WON) {
                this.turn = true;
                this.removeUnmatch(this.unmatchedCells[index]);
            }
            else {
                this.user.lose = true;
                this.messege = "Perdiste";
                this.showPopUp = true;
            }
        }
    };
    TatetiComponent.prototype.userPlays = function (matchedIndex) {
        if (this.turn && !this.cells[matchedIndex].matched) {
            this.turn = false;
            this.cells[matchedIndex].matched = true;
            this.cells[matchedIndex].player = "O";
            this.userMatched.push(matchedIndex);
            this.checkIfWin(this.userMatched, TatetiComponent_1.USER_WON);
            if (this.playerWon == TatetiComponent_1.NOBODY_WON) {
                this.removeUnmatch(matchedIndex);
                this.machinePLays();
            }
            else {
                this.user.won = true;
                this.messege = "Ganaste!";
                this.showPopUp = true;
            }
        }
    };
    TatetiComponent.prototype.removeUnmatch = function (index) {
        for (var i = 0; i < this.unmatchedCells.length; i++) {
            if (this.unmatchedCells[i] == index) {
                this.unmatchedCells.splice(i, 1);
                break;
            }
        }
    };
    TatetiComponent.prototype.timeOut = function (timeOut) {
        if (timeOut) {
            console.log("timeOut " + timeOut);
            this.messege = "Se acabó el tiempo";
            this.showPopUp = true;
        }
    };
    TatetiComponent.prototype.sendData = function () {
        //alert("Sending");
        this.user.tateti += this.user.pointsActualGame;
        this.user.pointsActualGame = this.user.tateti;
        this.user.actualGame = "tateti";
        this.user.email = localStorage.getItem("email");
        localStorage.setItem("tateti", this.user.tateti.toString());
        this.userService.sendResults(this.user);
    };
    var TatetiComponent_1;
    TatetiComponent.NOBODY_WON = 0;
    TatetiComponent.USER_WON = 1;
    TatetiComponent.MACHINE_WON = 1;
    TatetiComponent = TatetiComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tateti',
            template: __webpack_require__(/*! ./tateti.component.html */ "./src/app/componentes/tateti/tateti.component.html"),
            styles: [__webpack_require__(/*! ./tateti.component.css */ "./src/app/componentes/tateti/tateti.component.css")]
        }),
        __metadata("design:paramtypes", [_clases_user__WEBPACK_IMPORTED_MODULE_3__["User"], _servicios_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], TatetiComponent);
    return TatetiComponent;
}());



/***/ }),

/***/ "./src/app/componentes/timer/timer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/componentes/timer/timer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/timer/timer.component.html":
/*!********************************************************!*\
  !*** ./src/app/componentes/timer/timer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group input-group-sm mb-3\" style=\"width:100%;height:40px;margin:20px 5% 0 0;align-content:center\">\n  <div class=\"input-group-prepend\">\n    <span class=\"input-group-text\" style=\"background-color:rgb(37, 38, 44);color:orange;font-size: 20px;width:100%;padding:1px 8px 4px 15px\"\n      id=\"inputGroup-sizing-xl\">Tiempo</span>\n  </div>\n  <input [(ngModel)]='time' class=\"form-control\" aria-label=\"Small\" style=\"width:50px\" disabled #ctrl=\"ngModel\"\n    aria-describedby=\"inputGroup-sizing-sm\">\n</div>"

/***/ }),

/***/ "./src/app/componentes/timer/timer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/timer/timer.component.ts ***!
  \******************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimerComponent = /** @class */ (function () {
    function TimerComponent(user) {
        this.user = user;
        this.counterFlag = true;
        this.pointFlag = true;
        this.timeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pointCalculed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /// @Output() contador:EventEmitter<number> = new EventEmitter<number>();
    TimerComponent.prototype.ngOnInit = function () {
        this.runTime(this.time);
    };
    TimerComponent.prototype.runTime = function (time) {
        var _this = this;
        this.time = time;
        setInterval(function () {
            if (!_this.user.won && !_this.user.lose) {
                if (_this.time > 0)
                    _this.time--;
                else if (_this.counterFlag && _this.time == 0) {
                    console.log(_this.gameFinished);
                    _this.timeEvent.emit(true);
                    _this.counterFlag = false;
                    _this.user.lose = true;
                }
            }
            else if (_this.pointFlag) {
                _this.pointFlag = false;
                _this.user.pointsActualGame += _this.user.won ? (_this.time / 50) : (_this.time / (-50));
                _this.time = 0;
                _this.pointCalculed.emit();
            }
        }, 10);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "time", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TimerComponent.prototype, "gameFinished", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TimerComponent.prototype, "timeEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TimerComponent.prototype, "pointCalculed", void 0);
    TimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/componentes/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.css */ "./src/app/componentes/timer/timer.component.css")]
        }),
        __metadata("design:paramtypes", [_clases_user__WEBPACK_IMPORTED_MODULE_1__["User"]])
    ], TimerComponent);
    return TimerComponent;
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
/* harmony import */ var _componentes_piedra_tijera_piedra_tijera_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../componentes/piedra-tijera/piedra-tijera.component */ "./src/app/componentes/piedra-tijera/piedra-tijera.component.ts");
/* harmony import */ var _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../componentes/anagrama/anagrama.component */ "./src/app/componentes/anagrama/anagrama.component.ts");
/* harmony import */ var _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../componentes/tateti/tateti.component */ "./src/app/componentes/tateti/tateti.component.ts");
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
    { path: 'Principal', component: _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"] },
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
            { path: 'Batalla-Naval', component: _componentes_batalla_naval_batalla_naval_component__WEBPACK_IMPORTED_MODULE_17__["BatallaNavalComponent"] },
            { path: 'piedra-tijera', component: _componentes_piedra_tijera_piedra_tijera_component__WEBPACK_IMPORTED_MODULE_18__["PiedraTijeraComponent"] },
            { path: 'anagrama', component: _componentes_anagrama_anagrama_component__WEBPACK_IMPORTED_MODULE_19__["AnagramaComponent"] },
            { path: 'tateti', component: _componentes_tateti_tateti_component__WEBPACK_IMPORTED_MODULE_20__["TatetiComponent"] },
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
        //  this.miHttp.httpGetP("https://restcountries.eu/rest/v2/all")
        //   .then( data => {
        //     console.log( data );
        //   })
        //   .catch( err => {
        //     console.log( err );
        //   });
        //   this.peticion
        //   .subscribe( data => {
        //     console.log("En listar");
        //     console.log( data );
        //   }, err => {
        //     console.info("error: " ,err );
        //   })
        //   let miArray: Array<Juego> = new Array<Juego>();
        //   miArray.push(new JuegoAdivina("Juego 1", false));
        //   miArray.push(new JuegoAdivina("Pepe", true));
        //   miArray.push(new JuegoAdivina("Juego 3", false));
        //   miArray.push(new JuegoAdivina("Juego 4", false));
        //   miArray.push(new JuegoAdivina("Juego 5", false));
        //   miArray.push(new JuegoAdivina("Juego 6", false));
        //   return miArray;
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
        // return this.miHttp.traerJugadores(ruta).then(data=>{
        //   console.info("jugadores service",data);
        //   this.filtrado=data;
        //  let  ganador: boolean;
        //   if(filtro=="ganadores")
        //   {
        //     ganador= true;
        //   }
        //   else
        //   {
        //     ganador= false;
        //   }
        //   this.filtrado =this.filtrado.filter(
        //     data => data.gano === ganador  || filtro=="todos" ); return this.filtrado}
        //   )
        //   .catch(errror=>{console.log("error")
        // return this.filtrado;
        // });
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
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.service */ "./src/app/servicios/user.service.ts");
/* harmony import */ var _clases_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../clases/user */ "./src/app/clases/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HOST = "http://localhost/WebApi/";
var MiHttpService = /** @class */ (function () {
    function MiHttpService(http, user) {
        this.http = http;
        this.user = user;
    }
    MiHttpService.prototype.httpGetP = function (method) {
        var token = "Tokennn";
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        header.append("Content-Type", "application/json");
        header.append("token", _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"].token);
        options.headers = header;
        return this.http.get(HOST + method, options);
    };
    MiHttpService.prototype.httpPostP = function (method, objeto) {
        console.log(objeto);
        var token = "Tokennn";
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        header.append("Content-Type", "application/json");
        header.append("token", _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"].token);
        options.headers = header;
        console.log("this.http");
        console.log(this.http);
        console.log("this.http");
        return this.http.post(HOST + method, objeto, options);
    };
    MiHttpService.prototype.httpGetO = function (url) {
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]();
        header.append("Content-Type", "application/json");
        header.append("token", _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"].token);
        options.headers = header;
        return this.http.get(url, options)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.json().error || 'Server error'); });
    };
    MiHttpService.prototype.extractData = function (res) {
        console.log(res);
        console.log();
        console.log(JSON.parse(res._body).response);
        console.log();
        console.log();
        return res.json() || {};
    };
    MiHttpService.prototype.postResponse = function (res) {
        console.log();
        console.log();
        console.log(res);
        console.log();
        console.log();
        return res.json() || {};
    };
    MiHttpService.prototype.handleError = function (error) {
        return error;
    };
    MiHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _clases_user__WEBPACK_IMPORTED_MODULE_7__["User"]])
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
        var succesReturn = false;
        this.miHttp.httpPostP("users/", { email: "user", password: "password" }).subscribe(function (succes) {
            if (succes.status == 200) {
                succesReturn = true;
                console.log(succes["_body"]);
            }
            else {
                console.log(succes);
            }
        });
        return succesReturn;
    };
    PaisesService.prototype.register = function (user) {
        var succesReturn = false;
        this.miHttp.httpPostP("users/", { email: user.email, password: user.password }).subscribe(function (succes) {
            if (succes.status == 200) {
                succesReturn = true;
                console.log(succes["_body"]);
            }
            else {
                console.log(succes);
            }
        });
        return succesReturn;
    };
    PaisesService.prototype.signUp = function () {
        //  return   this.miHttp.httpPostP("https://restcountries.eu/rest/v2/all",{email:"caca",password:"pis"})
        //     .then( data => {
        //    //   console.log( data );
        //       return data;
        //     })
        //     .catch( err => {
        //      // console.log( err );
        //       return null;
        //     });
        //return null;
    };
    PaisesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"]])
    ], PaisesService);
    return PaisesService;
}());



/***/ }),

/***/ "./src/app/servicios/response.ts":
/*!***************************************!*\
  !*** ./src/app/servicios/response.ts ***!
  \***************************************/
/*! exports provided: ResponseApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseApi", function() { return ResponseApi; });
var ResponseApi = /** @class */ (function () {
    function ResponseApi() {
    }
    Object.defineProperty(ResponseApi.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (v) {
            this._code = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseApi.prototype, "response", {
        get: function () {
            return this._response;
        },
        set: function (v) {
            this._response = v;
        },
        enumerable: true,
        configurable: true
    });
    return ResponseApi;
}());



/***/ }),

/***/ "./src/app/servicios/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/servicios/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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


var UserService = /** @class */ (function () {
    function UserService(miHttp) {
        this.miHttp = miHttp;
    }
    UserService_1 = UserService;
    Object.defineProperty(UserService, "token", {
        set: function (v) {
            UserService_1._token = v;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.register = function (user) {
        return this.miHttp.httpPostP("users/", { email: user.email, password: user.password });
    };
    UserService.prototype.getFullUsers = function () {
        var succesReturn = false;
        return this.miHttp.httpGetP("users/");
    };
    UserService.prototype.sendResults = function (user) {
        var succesReturn = false;
        this.miHttp.httpPostP("users/saveResult", { email: user.email, game: user.actualGame, point: user.pointsActualGame }).subscribe(function (succes) {
            if (succes.status == 200) {
                console.log(succes["_body"]);
                succesReturn = true;
                var bodyResponse = JSON.parse(succes["_body"]);
                if (bodyResponse.code === 0) {
                    console.log(bodyResponse.response); //Guardo el token
                    UserService_1.token = bodyResponse.response; //Guardo el token
                }
            }
            else {
                console.log(succes);
            }
        });
        return succesReturn;
    };
    UserService.prototype.login = function (user) {
        return this.miHttp.httpPostP("login/", { email: user.email, password: user.password });
    };
    var UserService_1;
    UserService._token = null;
    UserService = UserService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_mi_http_mi_http_service__WEBPACK_IMPORTED_MODULE_1__["MiHttpService"]])
    ], UserService);
    return UserService;
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