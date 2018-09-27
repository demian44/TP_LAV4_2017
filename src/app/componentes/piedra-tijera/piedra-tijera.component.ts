import { Component, OnInit } from '@angular/core';
import { User } from '../../clases/user';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-piedra-tijera',
  templateUrl: './piedra-tijera.component.html',
  styleUrls: ['./piedra-tijera.component.css']
})
export class PiedraTijeraComponent implements OnInit {
  messege: string;
  showPopUp: boolean;
  time: number;
  title:string = "Piedra Papel Tijera"
  constructor(private user: User, private userService: UserService) { }

  ngOnInit() {
    this.user.lose = false;
    this.user.won = false;
    this.time = 10;
    this.user.pointsActualGame = 0;
    this.user.piedra = Number(localStorage.getItem("piedra"));
    this.user.actualGame = "piedra";
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
    if (!this.user.won && !this.user.lose) {
      let machine: string = this.machinePlay();
      if (user == machine) {
        this.user.won = true;
        this.user.pointsActualGame += 5;
        this.messege = ("Empate, los dos eligieron " + user);
      } else {
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
  }

  timeOut(timeOut): void {
    if (timeOut) {
      console.log("timeOut " + timeOut);
      this.messege = "Se acabó el tiempo";
      this.showPopUp = true;
    }
  }

  sendData() {
    this.user.piedra += this.user.pointsActualGame;
    this.user.pointsActualGame = this.user.piedra;
    this.user.actualGame = "piedra";
    this.user.email = localStorage.getItem("email");
    localStorage.setItem("piedra", this.user.piedra.toString());
    this.userService.sendResults(this.user);
  }
}
