import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  juegosAgilidad: JuegoAgilidad[];
  classButton : string;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;
  succes:boolean;

  subTitle:string;

  private subscription: Subscription;
  ngOnInit() {
    this.subTitle = "Agilidad Aritmetica";
    this.juegosAgilidad = [];
    this.succes = false;
    for(let i=0;i<4;i++){
      this.juegosAgilidad.push(new JuegoAgilidad());
    }

    this.Tiempo = 5;
    
  }
  constructor() { }
  NuevoJuego() {
    this.ocultarVerificar = false;
    this.repetidor = setInterval(() => {
     
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if (this.Tiempo == 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 5;
      }
    }, 900);

  }
  verificar(): void {
    this.ocultarVerificar = false;
    clearInterval(this.repetidor);
  }

  check(index:number){
    console.log(this.juegosAgilidad[index].userResponse + "  " + index);
    console.log(this.juegosAgilidad[index].respuesta);
    if(this.juegosAgilidad[index].respuesta === this.juegosAgilidad[index].userResponse) {      
      this.juegosAgilidad[index].classButton ="btn btn-outline-success pull-right";
      this.juegosAgilidad[index].succes = true;
      let totalSucces:number = 0;
      this.juegosAgilidad.forEach(juego =>{if(juego.succes)totalSucces++});
      if(totalSucces==this.juegosAgilidad.length){
        this.succes = true;
        alert("GANASTE");
      }
    }
  }

}
