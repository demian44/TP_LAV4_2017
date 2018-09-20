export const OPERATORS: string[] = ["X", "/", "+", "-"];
export class JuegoAgilidad {

    private _numOne: number;
    private _numTwo: number;
    private _respuesta: number;
    private _userResponse:number;
    private _operator: string;
    private _classButton:string;
    private _succes:boolean;

    public get numOne(): number {
        return this._numOne;
    }
    public get numTwo(): number {
        return this._numTwo;
    }
    public get respuesta(): number {
        return this._respuesta;
    }
    public get userResponse(): number {
        return this._userResponse;
    }
    public get operator(): string {
        return this._operator
    }
    public get classButton(): string {
        return this._classButton;
    }    
    public get succes() : boolean {
        return this._succes;
    }
    

    public set numOne(numOne: number) {
        this._numOne = numOne;
    }
    public set numTwo(numTwo: number) {
        this._numTwo = numTwo;
    }
    public set respuesta(respuesta: number) {
        this._respuesta = respuesta;
    }
    public set userResponse(userResponse: number) {
        this._userResponse = userResponse;
    }
    public set operator(operator: string) {
        this._operator = operator;
    }
    public set classButton(classButton: string) {
        this._classButton = classButton;
    }
    public set succes(succes : boolean) {
        this._succes = succes;
    }
    

    constructor() {
        this._succes = false;
        this._classButton = "btn btn-outline-agilidad";
        let index: number = Math.floor(Math.random() * 4);
        this._operator = OPERATORS[index];
        switch (OPERATORS[index]) {
            case "X":
                this._numOne = Math.floor(Math.random() * 10) + 1;
                this._numTwo = Math.floor(Math.random() * 10) + 1;
                this._respuesta = this._numOne * this._numTwo;
                break;
            case "/":
                this._numOne = Math.floor(Math.random() * 10) + 1;
                this._numTwo = Math.floor(Math.random() * 3) + 1;
                this._respuesta = Number((this._numOne / this._numTwo).toFixed(1));
                break;
            case "+":
                this._numOne = Math.floor(Math.random() * 10) + 1;
                this._numTwo = Math.floor(Math.random() * 10) + 1;
                this._respuesta = this._numOne + this._numTwo;
                break;
            default:
                this._numOne = Math.floor(Math.random() * 21) + 1;
                this._numTwo = Math.floor(Math.random() * 21) + 1;
                this._respuesta = this._numOne - this._numTwo;
                break;
        }
        console.log(this);
    }
}