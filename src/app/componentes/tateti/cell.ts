export const PLAYER_MATCHED = { USER: "O", MACHINE: "X" };


export class Cell {
  
    private _matched: boolean;
    private _player: string;

 
    public get matched(): boolean {
        return this._matched;
    }
    public get player(): string {
        return this._player;
    }

    public set matched(matched: boolean) {
        this._matched = matched;
    }
   
    public set player(player : string) {
        this._player = player;
    }
    
    constructor(){
        this._player = "";
        this._matched = false;
    }
}
