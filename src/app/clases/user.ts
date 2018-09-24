export class User {
    private _email: string;
    private _password: string;
    private _passwordControl: string;
    private _points: number[];

    public get email(): string {
        return this._email;
    }
    public get password(): string {
        return this._password;
    }
    public get passwordControl(): string {
        return this._passwordControl;
    }
    public get points(): number[] {
        return this._points;
    }

    public set email(value: string) {
        this._email = value;
    }
    public set password(value: string) {
        this._password = value;
    }
    public set passwordControl(value: string) {
        this._passwordControl = value;
    }
    public set points(value: number[]) {
        this._points = value;
    }

    validateEmail(): boolean {
        let succesReturn: boolean = false;
        let emailRegex: any = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(this.email)) {
            succesReturn = true;
            console.log("valido");
        }
        else
            console.log("invalido");
        return succesReturn;
    }

    validatePassword(): boolean {
        let succesReturn: boolean = false;
        if (this.password.length > 3 && this.password === this.passwordControl)
            succesReturn = true;
        return succesReturn;
    }
    public setPoint(pointsValue?: number[], pointsKey?: string[]): boolean {
        for (let i = 0; i < pointsKey.length; i++) {
            this._points[pointsKey[i]] = pointsValue[i];
        }
        return true;
    }


}
