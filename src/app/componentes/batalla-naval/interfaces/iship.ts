export interface IShip {
    shooted(row: string, column: number): boolean; 
    isTouched(ship:IShip): boolean; 
}
