import { Component, OnInit } from '@angular/core';
import { Cell, PLAYER_MATCHED } from './cell';
import { UserService } from '../../servicios/user.service';
import { User } from '../../clases/user';
@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  static NOBODY_WON: number = 0;
  static USER_WON: number = 1;
  static MACHINE_WON: number = 1;
  turn: boolean;
  cells: Cell[];
  messege: string;
  showPopUp: boolean;
  userMatched: number[];
  machineMatched: number[];
  unmatchedCells: number[];
  matchedCells: number[];
  playerWon: number;
  time: number;
  title:string = "Tateti";
  constructor(private user: User, private userService: UserService) { }

  ngOnInit() {
    this.user.lose = false;
    this.user.won = false;
    this.time = 60;
    this.user.pointsActualGame = 0;
    this.user.tateti = Number(localStorage.getItem("tateti"));
    this.user.actualGame = "tateti";

    this.playerWon = TatetiComponent.NOBODY_WON;
    this.unmatchedCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.matchedCells = [];
    this.userMatched = [];
    this.machineMatched = [];
    this.cells = [];
    this.turn = true;
    for (let i = 0; i < 9; i++) {
      this.cells.push(new Cell());
    }


  }


  checkIfWin(cellsMatched: number[], player: number): void {
    if (cellsMatched.length > 2) {
      cellsMatched.sort((numOne: number, numTwo: number) => {
        let sortReturn: number = 0;
        if (numOne > numTwo) {
          sortReturn = 1;
        }
        else if (numOne < numTwo)
          sortReturn = -1;
        return sortReturn;
      });
      if (cellsMatched[0] == 0) {
        if ((cellsMatched[1] == 1 && cellsMatched[2] == 2) ||
          cellsMatched.find(cell => cell == 3) && cellsMatched.find(cell => cell == 6) ||
          cellsMatched.find(cell => cell == 4) && cellsMatched.find(cell => cell == 6)) {
          this.playerWon = player;
        }
      }
      else if (cellsMatched.find(cell => cell == 2) && cellsMatched.find(cell => cell == 4) && cellsMatched.find(cell => cell == 6))
        this.playerWon = player;
      else if (cellsMatched.find(cell => cell == 2) && cellsMatched.find(cell => cell == 5) && cellsMatched.find(cell => cell == 8))
        this.playerWon = player;
      else if (cellsMatched.find(cell => cell == 3) && cellsMatched.find(cell => cell == 4) && cellsMatched.find(cell => cell == 5))
        this.playerWon = player;
      else if (cellsMatched.find(cell => cell == 6) && cellsMatched.find(cell => cell == 7) && cellsMatched.find(cell => cell == 8))
        this.playerWon = player;
      else if (cellsMatched.find(cell => cell == 3) && cellsMatched.find(cell => cell == 4) && cellsMatched.find(cell => cell == 5))
        this.playerWon = player;
      else if (cellsMatched.find(cell => cell == 0) && cellsMatched.find(cell => cell == 3) && cellsMatched.find(cell => cell == 6))
        this.playerWon = player;
      else if (cellsMatched.find(cell => cell == 1) && cellsMatched.find(cell => cell == 4) && cellsMatched.find(cell => cell == 7))
        this.playerWon = player;
    }
  }
  machinePLays() {
    if (this.unmatchedCells.length > 0) {
      let index: number;
      let cell: Cell;
      index = Math.floor(Math.random() * this.unmatchedCells.length);
      this.cells[this.unmatchedCells[index]].matched = true;
      this.cells[this.unmatchedCells[index]].player = "X";
      this.machineMatched.push(index);
      this.checkIfWin(this.machineMatched, TatetiComponent.MACHINE_WON);
      if (this.playerWon == TatetiComponent.NOBODY_WON) {
        this.turn = true;
        this.removeUnmatch(this.unmatchedCells[index]);
      }
      else {
        this.user.lose = true;
        this.messege = "Perdiste";
        this.showPopUp = true;
      }
    }
  }

  userPlays(matchedIndex: number): void {
    if (this.turn && !this.cells[matchedIndex].matched) {
      this.turn = false;
      this.cells[matchedIndex].matched = true;
      this.cells[matchedIndex].player = "O";
      this.userMatched.push(matchedIndex);
      this.checkIfWin(this.userMatched, TatetiComponent.USER_WON);
      if (this.playerWon == TatetiComponent.NOBODY_WON) {
        this.removeUnmatch(matchedIndex);
        this.machinePLays();
      } else {
        this.user.won = true;
        this.messege = "Ganaste!";
        this.showPopUp = true;
      }
    }
  }

  removeUnmatch(index) {
    for (let i = 0; i < this.unmatchedCells.length; i++) {
      if (this.unmatchedCells[i] == index) {
        this.unmatchedCells.splice(i, 1);
        break;
      }
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
    //alert("Sending");
    this.user.tateti += this.user.pointsActualGame;
    this.user.pointsActualGame = this.user.tateti;
    this.user.actualGame = "tateti";
    this.user.email = localStorage.getItem("email");
    localStorage.setItem("tateti", this.user.tateti.toString());
    this.userService.sendResults(this.user);
  }
}


