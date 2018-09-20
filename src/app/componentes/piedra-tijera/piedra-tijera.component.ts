import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piedra-tijera',
  templateUrl: './piedra-tijera.component.html',
  styleUrls: ['./piedra-tijera.component.css']
})
export class PiedraTijeraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  machinePlay(): string {

    let numero: number = Math.floor((Math.random() * 3) + 1);
    let machine: string;
    if (numero == 1) {
      machine = "Piedra";
    } else if (numero == 2) {
      machine = "Papel";
    } else {
      machine = "Tijera";
    }
    return machine;
  }

  play(user: string) {
    let machine: string = this.machinePlay();
    
    if (user == machine) {
      alert("Empate, los dos eligieron " + user);
    } else {
      if (user == "Piedra" && machine == "Papel") {
        alert("" + user + " vs " + machine + ", gana el ordenador.");
      }
      else if (user == "Piedra" && machine == "Tijera") {
        alert("" + user + " vs " + machine + ", gana el usuario");
      }
      else if (user == "Papel" && machine == "Tijera") {
        alert("" + user + " vs " + machine + ", gana el ordenador.");
      }
      else if (user == "Papel" && machine == "Piedra") {
        alert("" + user + " vs " + machine + ", gana el usuario");
      }
      else if (user == "Tijera" && machine == "Piedra") {
        alert("" + user + " vs " + machine + ", gana el ordenador.");
      }
      else if (user == "Tijera" && machine == "Papel") {
        alert("" + user + " vs " + machine + ", gana el usuario");
      }
      else{
        
        alert("algo anda mal");
      }

    }
  }
}
