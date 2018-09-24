import { Injectable } from '@angular/core';
@Injectable()
export class IncrementService {
    contador: boolean = false;
    email: string = "desconocido";
    constructor() { }
    public singInOut() {
        console.log('Contador aumentando');
        this.contador = !this.contador;
    }

}