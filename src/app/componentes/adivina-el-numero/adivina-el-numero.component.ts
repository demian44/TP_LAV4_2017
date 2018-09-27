
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina'
import { UserService } from '../../servicios/user.service';
import { User } from '../../clases/user';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  time: number;
  nuevoJuego: JuegoAdivina;
  Mensajes: string;
  contador: number;
  ocultarVerificar: boolean;
  messege: string;
  showPopUp: boolean;
  title = "Adivina el número";
  constructor(private user: User, private userService: UserService) {
    this.ocultarVerificar = false;
  }

  ngOnInit() {
    this.nuevoJuego = new JuegoAdivina();
    console.info("numero Secreto:", this.nuevoJuego.numeroSecreto);
    this.time = 50;
    this.user.won = false;
    this.user.lose = false;
    this.user.pointsActualGame = 0;
    this.user.numero = Number(localStorage.getItem("numero"));
    this.user.actualGame = "numero";
    this.messege = "Ganaste!!";
    this.showPopUp = false;
  }


  generarnumero() {
    this.nuevoJuego.generarnumero();
    this.contador = 0;
  }
  verificar() {
    this.contador++;
    this.ocultarVerificar = true;
    console.info("numero Secreto:", this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()) {
      this.enviarJuego.emit(this.nuevoJuego);
      this.user.won = true;
      this.showPopUp = true;
      this.MostarMensaje("Sos un Genio!!!", true);
      this.nuevoJuego.numeroSecreto = 0;

    } else {

      let mensaje: string;
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
  }

  MostarMensaje(mensaje: string = "este es el mensaje", ganador: boolean = false) {
    this.Mensajes = mensaje;
    var x = document.getElementById("snackbar");
    if (ganador) {
      x.className = "show Ganador";
    } else {
      x.className = "show Perdedor";
    }
    var modelo = this;
    setTimeout(function () {
      x.className = x.className.replace("show", "");
      modelo.ocultarVerificar = false;
    }, 3000);
    console.info("objeto", x);

  }

  timeOut(timeOut): void {
    if (timeOut) {
      console.log("timeOut " + timeOut);
      this.messege = "Se acabó el tiempo";
      this.showPopUp = true;
    }
  }

  sendData() {
    //alert("Sending");
    this.user.numero += this.user.pointsActualGame;
    this.user.pointsActualGame = this.user.numero;
    this.user.actualGame = "numero";
    this.user.email = localStorage.getItem("email");
    localStorage.setItem("numero", this.user.numero.toString());
    this.userService.sendResults(this.user);
  }

}
