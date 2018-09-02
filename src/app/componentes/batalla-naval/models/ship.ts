import { ShipPart, SAFE, SHOOTED } from './ship-part';
import { IShip } from '../interfaces/IShip'
export const CANTIDAD_COLUMNAS: number = 9;
export const VERTICAL: string = "vertical";
export const HORIZONTAL: string = "horizontal";
export const UNDID: string = "undid";
export const FLOATING: string = "flotando";


export class Ship implements IShip {

    /*****************  Atributos  *****************/
    private static _shipQuantity = 4;
    public get quantity(): number {
        return Ship._shipQuantity;
    }
    private _shootedParts: number;
    public get shootedParts(): number {
        return this._shootedParts;
    }
    private _parts: ShipPart[];
    public get parts(): ShipPart[] {
        return this._parts;
    }
    public set parts(parts: ShipPart[]) {
        this._parts = parts;
    }
    private _state: string;
    public get state(): string {
        return this._state;
    }
    public set state(state: string) {
        this._state = state;
    }

    public sense:string;

    /***************** End  Atributos  *****************/
    constructor(long: number, row: string, column: number, sense?: string) {
        this._parts = [];
        this.sense = sense;

        if (long > 0 && long <= CANTIDAD_COLUMNAS) {
            if (sense === HORIZONTAL)
                for (let i = 0; i < long; i++) {
                    this._parts.push(new ShipPart(row, column + i));//Cada vez se desplaza uno en columnas.
                }
            else if (sense === VERTICAL)
                for (let i = 0; i < long; i++) {
                    this._parts.push(new ShipPart(row, column));
                    row = ShipPart.nextRow(row);// Se mueve en sentido de las rows.
                }
            else
                this._parts.push(new ShipPart(row, column)); // Instancio una nueva parte del barco con );


        }


        this._state = FLOATING;
        this._shootedParts = 0;
    }

    /*****************  Methods  *****************/
    /**
     * Primero verifica si el barco está flotando, en ese caso chequea si fue herido.
     */
    public shooted(row: string, column: number): boolean {
        let returnShooted = false;
        if (this._state == FLOATING)
            for (let i = 0; i < this.parts.length; i++) {
                if (this._parts[i].rowName == row && this._parts[i].column == column) {
                    this._parts[i].state = SHOOTED;
                    this._shootedParts++;
                    returnShooted = true;
                    break;
                }
            }


        if (this._shootedParts == this._parts.length)
            this.undid();

        return returnShooted;
    }
    private undid(): void {
        this.parts.forEach(part => part.state = UNDID);
        this._state = UNDID;
    }
    /***************** End Methods  *****************/
}



