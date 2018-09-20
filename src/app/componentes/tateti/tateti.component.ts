import { Component, OnInit } from '@angular/core';
import { Cell, PLAYER_MATCHED } from './cell';
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
  userMatched: number[];
  machineMatched: number[];
  unmatchedCells: number[];
  matchedCells: number[];
  playerWon: number;

  constructor() { }

  ngOnInit() {
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
      else{
        alert("PERDISTE");
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
      if (this.playerWon ==TatetiComponent.NOBODY_WON) {
        this.removeUnmatch(matchedIndex);
        this.machinePLays();
      }else{
        alert("Ganaste");
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
}


