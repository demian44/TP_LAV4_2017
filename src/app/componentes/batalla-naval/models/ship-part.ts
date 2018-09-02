export const SAFE: string = "safe";
export const SHOOTED: string = "shooted";

export class ShipPart {
    /*****************  Atributos  *****************/
    private _state: string;
    public get state(): string {
        return this._state;
    }
    public set state(state: string) {
        this._state = state;
    }
    private _rowName: string;
    public get rowName(): string {
        return this._rowName
    }
    public set rowName(rowName: string) {
        this._rowName = rowName;
    }
    private _column: number;
    public get column(): number {
        return this._column;
    }
    public set column(column: number) {
        this._column = column;
    }
    /***************** End Atributos  *****************/
    constructor(rowName: string, column: number) {
        this._state = SAFE;
        this._rowName = rowName;
        this._column = column;
    }

    /*****************  Methods  *****************/
    /**
     * nextRow
     */
    public static nextRow(rowName: string): string {
        let returnChar: string = "a";
        switch (rowName) {
            case "a":
                returnChar = "b";
                break;
            case "b":
                returnChar = "c";
                break;
            case "c":
                returnChar = "d";
                break;
            case "d":
                returnChar = "e";
                break;
            case "e":
                returnChar = "f";
                break;
            case "g":
                returnChar = "h";
                break;
            case "h":
                returnChar = "i";
                break;
            default:
                returnChar = "a";
                break;
        }
        return returnChar;
    }
    /*****************  Methods  *****************/
    /**
     * 
     * @param rowName 
     */
    public static previoustRow(rowName: string): string {
        let returnChar: string = "a";
        switch (rowName) {
            case "i":
                returnChar = "h";
                break;
            case "g":
                returnChar = "h";
                break;
            case "f":
                returnChar = "e";
                break;
            case "e":
                returnChar = "d";
                break;
            case "d":
                returnChar = "c";
                break;
            case "c":
                returnChar = "b";
                break;
            case "b":
                returnChar = "a";
                break;
            default:
                returnChar = "a";
                break;
        }
        return returnChar;
    }
    /***************** End Methods  *****************/
}