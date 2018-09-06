

import {NOSHOT } from './ship';
export class Row {
  /*****************  Atributos  *****************/
  private _name: string;
  public get name(): string {
    return this._name;
  }
  private _columns: string[];
  public get columns(): string[] {
    return this._columns;
  }
  private _isEmpty: boolean;
  public get isEmpty(): boolean {
    return this._isEmpty;
  }
  public set isEmpty(isEmpty: boolean) {
    this._isEmpty = isEmpty;
  }
  /***************** End  Atributos  *****************/
  /**
   * 
   * @param name nombre de la fila
   * @param columns cantidad de columnas
   */
  constructor(name: string, columns: number) {
    this._name = name;
    this._columns = [];
    for(let i=0;i<columns;i++)
      this._columns.push(NOSHOT);
    this._isEmpty = false;
  }
}