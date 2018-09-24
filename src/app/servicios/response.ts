export class ResponseApi {
    private _code: number;
    private _response: any;


    public set code(v: number) {
        this._code = v;
    }
    public set response(v: any) {
        this._response = v;
    }


    public get code(): number {
        return this._code;
    }


    public get response(): any {
        return this._response;
    }



}
