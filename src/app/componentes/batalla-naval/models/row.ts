export class Row {
  /*****************  Atributos  *****************/
  public _name: string;
  public get name(): string {
    return this._name;
  }
  public _columns: string[];
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
  constructor(name: string, columns: string[]) {
    this._name = name;
    this._columns = columns;
    this._isEmpty = false;
  }
}