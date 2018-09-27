import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { UserService } from '../../servicios/user.service';
import { User } from '../../clases/user';
import { ResponseApi } from '../../servicios/response';
import { Alert } from 'selenium-webdriver';
import { CabeceraComponent } from '../cabecera/cabecera.component';
import { ResourceLoader } from '@angular/compiler';
import { IncrementService } from '../../clases/IncrementService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnChanges {


  ngOnChanges(): void {
    if (!this.incrementService.contador) {
      this.router.navigate(['/Login']);
    }
  }

  public static _loged: boolean;

  public static email: string = "Desconocido";
  private subscription: Subscription;
  progreso: number;
  progresoMensaje = "esperando...";
  logeando = true;
  ProgresoDeAncho: string;
  clase = "progress-bar progress-bar-info progress-bar-striped ";
  emailHelp: string;
  claveHelp: string;
  constructor(private incrementService: IncrementService,
    private userService: UserService,
    private route: ActivatedRoute,
    private user: User,
    private router: Router) {
    this.progreso = 0;
    this.ProgresoDeAncho = "0%";
    this.user = new User();
  }

  @Output() logedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
    // alert(localStorage.getItem("loged"));
    if (localStorage.getItem("loged") == "true") {
      this.router.navigate(['/Principal']);
      LoginComponent._loged = true;
      this.incrementService.singInOut();
      this.incrementService.email = localStorage.getItem("email");
    }
  }

  public login() {
    
    let responseApi: ResponseApi = new ResponseApi();
    if (this.user.validateEmail() && this.user.validatePassword()) {
      this.emailHelp = "";
      this.userService.login(this.user).subscribe(
        succes => {
          if (succes.status == 200) {
            console.log();
            console.log("no rompio todavia");
            console.log();
            let bodyResponse = JSON.parse(succes["_body"]);
            console.log(bodyResponse);

            if (bodyResponse.code == 0) {
              this.savePoints(bodyResponse);
              console.log(bodyResponse.response);//Guardo el token
              UserService.token = bodyResponse.response;//Guardo el token
              responseApi.code = 0;
              //CabeceraComponent.loged = true;
              LoginComponent._loged = true;
              LoginComponent.email = this.user.email;
              let date = new Date();
              localStorage.setItem("loged", "true");
              localStorage.setItem("email", this.user.email);
              localStorage.setItem("time", date.getTime().toString());
              this.incrementService.singInOut();
              this.incrementService.email = this.user.email;
              this.router.navigate(['/Principal']);
            }
            else if (bodyResponse.code == 4) {
              this.emailHelp = ("Email o password incorrecto");
            }
          }
          else {
            responseApi.code = Number(succes.status);
            responseApi.response = "Error del servidor";
          }
        }

      );

    } else {
      if (!this.user.validateEmail())
        this.emailHelp = "Ingrese un email válido."
      if (!this.user.validatePassword())
        this.claveHelp = "Clave con mas de 4 caracteres"
    }
  }

  public static get isLoged(): boolean {
    return LoginComponent._loged;
  }

  private savePoints(bodyResponse: any) {
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
  }

  register() {
    this.router.navigate(["/Registro"]);
  }




  // Entrar() {
  //   if (this.ser. === 'admin' && this.clave === 'admin') {
  //     this.router.navigate(['/Principal']);
  //   }
  // }
  MoverBarraDeProgreso() {

    this.logeando = false;
    this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje = "NSA spy...";
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso = this.progreso + 1;
      this.ProgresoDeAncho = this.progreso + 20 + "%";
      switch (this.progreso) {
        case 15:
          this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
          this.progresoMensaje = "Verificando ADN...";
          break;
        case 30:
          this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje = "Adjustando encriptación..";
          break;
        case 60:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando Info del dispositivo..";
          break;
        case 75:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
          break;
        case 85:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Instalando KeyLogger..";
          break;

        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          //this.Entrar();
          break;
      }
    });
    //this.logeando=true;
  }

}
