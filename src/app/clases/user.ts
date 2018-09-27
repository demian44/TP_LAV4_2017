import { Injectable } from '@angular/core';

@Injectable()
export class User {
    private _email: string;
    private _password: string;
    private _passwordControl: string;
    private _points: number;
    private _pointsActualGame: number;
    private _actualGame: string;
    private _won: boolean;
    private _lose: boolean
    private _naval: number;
    private _tateti: number;
    private _agilidad: number;
    private _piedra: number;
    private _numero: number;
    private _anagrama: number;

    public get email(): string {
        return this._email;
    }
    public get password(): string {
        return this._password;
    }
    public get passwordControl(): string {
        return this._passwordControl;
    }
    public get actualGame(): string {
        return this._actualGame;
    }
    public get naval(): number {
        return this._naval;
    }
    public get tateti(): number {
        return this._tateti;
    }
    public get agilidad(): number {
        return this._agilidad;
    }
    public get piedra(): number {
        return this._piedra;
    }
    public get numero(): number {
        return this._numero;
    }
    public get anagrama(): number {
        return this._anagrama;
    }
    public get points(): number {
        return this._points;
    }
    public get pointsActualGame(): number {
        return this._pointsActualGame;
    }
    public get won(): boolean {
        return this._won;
    }
    public get lose(): boolean {
        return this._lose;
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
    public set actualGame(value: string) {
        this._actualGame = value;
    }
    public set pointsActualGame(value: number) {
        this._pointsActualGame = value;
    }
    public set naval(value: number) {
        this._naval = value;
    }
    public set tateti(value: number) {
        this._tateti = value;
    }
    public set anagrama(value: number) {
        this._anagrama = value;
    }
    public set piedra(value: number) {
        this._piedra = value;
    }
    public set agilidad(value: number) {
        this._agilidad = value;
    }
    public set numero(value: number) {
        this._numero = value;
    }
    public set points(value: number) {
        this._points = value;
    }
    public set won(value: boolean) {
        this._won = value;
    }
    public set lose(value: boolean) {
        this._lose = value;
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
        if (this.password.length > 3)
            succesReturn = true;
        return succesReturn;
    }
    validatePasswordWithConfirm(): boolean {
        let succesReturn: boolean = false;
        if (this.password.length > 3 && this.password === this.passwordControl)
            succesReturn = true;
        return succesReturn;
    }
    public setPoint(pointsValue?: number, pointsKey?: string[]): boolean {
        for (let i = 0; i < pointsKey.length; i++) {
            this._points[pointsKey[i]] = pointsValue[i];
        }
        return true;
    }

    public constructor() {
        this.email = "";
        this.password = "";
    }


}
