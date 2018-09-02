import { Component, OnDestroy, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import { Ship, UNDID, VERTICAL, HORIZONTAL } from './models/ship';
import { ShipPart, SHOOTED, SAFE } from './models/ship-part';
import { Row } from './models/row';
import { AppComponent } from './../../app.component';
import { IBatallaNavalComponent } from './interfaces/ibatalla-naval-component';

export const NOSHOT: string = " ";
export const WATER: string = " X ";

@Component({
  selector: 'app-batalla-naval',
  templateUrl: './batalla-naval.component.html',
  styleUrls: ['./batalla-naval.component.css']
})
export class BatallaNavalComponent implements OnInit, IBatallaNavalComponent {
  /*****************  Atributos  *****************/
  private _won: boolean;
  public get won(): boolean {
    return this._won;
  }
  private _rows: Row[];
  public get rows(): Row[] {
    return this._rows;
  }
  private _sunkenShips: number;
  public get sunkenShips(): number {
    return this._sunkenShips;
  }
  private _ships: Ship[];
  public get ships(): Ship[] {
    return this._ships;
  }
  private _rowsName: string[];
  /*****************  End Atributos  *****************/

  constructor() {
    this._ships = [];
    this._sunkenShips = 0;
    this._won = false;
    this._rowsName = ["a", "b", "c", "d", "e", "f", "g"]
    this._rows = [
      new Row(this._rowsName[0], [NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT]),
      new Row(this._rowsName[1], [NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT]),
      new Row(this._rowsName[2], [NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT]),
      new Row(this._rowsName[3], [NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT]),
      new Row(this._rowsName[4], [NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT]),
      new Row(this._rowsName[5], [NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT]),
      new Row(this._rowsName[6], [NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT, NOSHOT]),
    ];
  }

  ngOnInit(): void {
    let shipFour: Ship = new Ship(4, this._rowsName[1], 1, HORIZONTAL);
    let shipThree: Ship = new Ship(3, this._rowsName[3], 2, VERTICAL);
    let shipThree_: Ship = new Ship(3, this._rowsName[3], 4, HORIZONTAL);
    let shipTwo: Ship = new Ship(2, this._rowsName[5], 4, HORIZONTAL);
    let shipOne: Ship = new Ship(1, this._rowsName[6], 7, HORIZONTAL);
    this._ships.push(shipFour, shipThree, shipThree_, shipTwo, shipOne);
    console.log(shipFour);

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
    if (!this._won && selectedRow.columns[column] == NOSHOT) {
      console.log("Entro");
      let flagShooted: boolean = false;
      let newState: string = WATER;

      for (let i = 0; i < this._ships.length; i++) {
        if (this._ships[i].shooted(selectedRow.name, column)) {
          newState = SHOOTED;

          if (this._ships[i].state == UNDID) {
            this._sunkenShips++;
            newState = UNDID;
            this.undidShip(i);
          }
          break;
        }
      }

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
    if (!this._won && this._sunkenShips == this.ships.length) {
      this._won = true;
      alert("YOU WIN");
    }
  }

  public undidShip(index: number) {
    if (this._ships[index].sense == HORIZONTAL) {
      this._ships[index].parts.forEach((part: ShipPart) => {
        this._rows.forEach((row: Row) => {
          if (row._name == part.rowName) {
            row._columns[part.column] = UNDID;
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
        this.rows[rowID]._columns[column] = UNDID;
        rowID++;
        length--;
      }
    }
  }
  /***************** End Methods  *****************/
}



