import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { Ship, UNDID, VERTICAL, HORIZONTAL, NOSHOT } from './models/ship';
import { ShipPart, SHOOTED, SAFE, WATER } from './models/ship-part';

import { Row } from './models/row';
import { AppComponent } from './../../app.component';
import { IBatallaNavalComponent } from './interfaces/ibatalla-naval-component';
import { User } from '../../clases/user';
import { UserService } from '../../servicios/user.service';



export const COLUMNS: number = 7;

@Component({
  selector: 'app-batalla-naval',
  templateUrl: './batalla-naval.component.html',
  styleUrls: ['./batalla-naval.component.css']
})
export class BatallaNavalComponent implements OnInit, IBatallaNavalComponent {
  /*****************  Atributos  *****************/
  showPopUp: boolean = false;
  success: boolean = false;
  messege: string;
  time: number = 30;
  points: number;
  title:string = "Batalla Naval";
  
  private _counter: number;
  private _point: number;
  private _rows: Row[];
  private _sunkenShips: number;
  private _ships: Ship[];
  private _rowsName: string[];


  public get counter(): number {
    return this._counter;
  }
  public get rows(): Row[] {
    return this._rows;
  }
  public get sunkenShips(): number {
    return this._sunkenShips;
  }
  public get ships(): Ship[] {
    return this._ships;
  }


  /*****************  End Atributos  *****************/

  constructor(private user: User, private userService: UserService) {
    this._ships = [];
    this._sunkenShips = 0;
    this.user.won = false;
    this._rowsName = ["a", "b", "c", "d", "e", "f"]
    this._rows = [
      new Row(this._rowsName[0], COLUMNS),
      new Row(this._rowsName[1], COLUMNS),
      new Row(this._rowsName[2], COLUMNS),
      new Row(this._rowsName[3], COLUMNS),
      new Row(this._rowsName[4], COLUMNS),
      new Row(this._rowsName[5], COLUMNS)
    ];
  }
  @Output() eventPopUp: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
    this.messege = "GANASTE";
    this.putShips();
    this.user.won = false;
    this.user.lose = false;
    this._counter = 15;
    this.user.pointsActualGame = 0;
    this.user.actualGame = "naval";
    this.user.naval = Number(localStorage.getItem("naval"));
    console.log(this.user.pointsActualGame)
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.dtTrigger.unsubscribe();
  }

  /*****************  Methods  *****************/
  /**
   * Procesa el ataque apra saber si se dio en el blanco.
   * @param selectedRow 
   * @param column 
   */
  Misilazo(selectedRow: Row, column: number): void {
    if (!this.user.won && !this.user.lose && selectedRow.columns[column] == NOSHOT) {
      console.log("Entro");
      let flagShooted: boolean = false;
      let newState: string = WATER;
      let i: number;
      let point = -3;
      for (i = 0; i < this._ships.length; i++) {
        if (this._ships[i].shooted(selectedRow.name, column)) {
          newState = SHOOTED;
          point = 10;
          if (this._ships[i].state == UNDID) {
            this._sunkenShips++;
            newState = UNDID;
            this.undidShip(i);
          }
          break;
        }

      }
      if (this._ships.length == i) this._counter--;
      this.user.pointsActualGame += point;
      this._rows.forEach(row => {
        if (row.name == selectedRow.name)
          row.columns[column] = newState;// La columna empieza de cero, pero para el usuario es 1
        this.checkIfWin();
      });
    }

  }
  /**
   * Verifica si todos los barcos están undidos.
   */
  public checkIfWin() {
    if (!this.user.won && this._sunkenShips == this.ships.length) {
      this.user.won = true;
      this.messege = "Ganaste!!";
      this.showPopUp = true;
      this.user.email = localStorage.getItem("email");
     

    }
  }

  public undidShip(index: number) {
    if (this._ships[index].sense == HORIZONTAL) {
      this._ships[index].parts.forEach((part: ShipPart) => {
        this._rows.forEach((row: Row) => {
          if (row.name == part.rowName) {
            row.columns[part.column] = UNDID;
          }
        })
      })
    }
    else {
      let rowID: number = 0;
      let length: number = this._ships[index].parts.length;
      let column: number = this._ships[index].parts[0].column;
      for (let i = 0; i < this._rows.length; i++) {
        //Busco el Id de la primera fila desde acá voy a ir bajando
        if (this._rows[i].name == this._ships[index].parts[0].rowName) {
          rowID = i;
          break;
        }
      }
      while (length != 0) {
        //Pariendo del Id que encontré voy a ir bajando uno a uno hasta que cambio todos.
        this.rows[rowID].columns[column] = UNDID;
        rowID++;
        length--;
      }
    }
  }
  
  sendData(){
    this.user.naval += this.user.pointsActualGame;
    this.user.pointsActualGame = this.user.naval;
    this.user.actualGame = "naval";
    this.user.email = localStorage.getItem("email");
    localStorage.setItem("naval", this.user.naval.toString());
    this.userService.sendResults(this.user);
    console.log("actual",this.user.pointsActualGame);
  }


  private putShips(): void {
    let sense: number = Math.floor(Math.random() * 2);
    let rowIndex: number = Math.floor(Math.random() * 3);
    let shipThree: Ship;
    let shipTwo: Ship;
    let shipOne: Ship;

    let shipFour: Ship = new Ship(4, this._rowsName[rowIndex], Math.floor(Math.random() * 3), sense);

    do {
      sense = Math.floor(Math.random() * 2);
      rowIndex = Math.floor(Math.random() * 4);
      shipThree = new Ship(3, this._rowsName[rowIndex], Math.floor(Math.random() * 4), sense);
    } while (shipFour.isTouched(shipThree));

    do {
      sense = Math.floor(Math.random() * 2);
      rowIndex = Math.floor(Math.random() * 5);
      shipTwo = new Ship(2, this._rowsName[rowIndex], Math.floor(Math.random() * 5), sense);
    } while (shipFour.isTouched(shipTwo) || shipThree.isTouched(shipTwo));

    do {
      sense = Math.floor(Math.random() * 2);
      rowIndex = Math.floor(Math.random() * 5);
      shipOne = new Ship(1, this._rowsName[rowIndex], Math.floor(Math.random() * 6), sense);
    } while (shipFour.isTouched(shipOne) || shipThree.isTouched(shipOne)
      || shipTwo.isTouched(shipOne));

    this._ships.push(shipFour);//, shipThree, shipTwo, shipOne);
    console.log(this._ships);
  }

  timeOut(timeOut): void {
    if (timeOut) {
      console.log("timeOut " + timeOut);
      this.messege = "Se acabó el tiempo";
      this.showPopUp = true;
    }
  }
  /***************** End Methods  *****************/
}



