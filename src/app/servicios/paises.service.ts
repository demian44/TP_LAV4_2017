import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { User } from '../clases/user';
@Injectable()
export class PaisesService {

  constructor(public miHttp: MiHttpService) { }
  public listar(): any {
    let succesReturn: boolean = false;
    this.miHttp.httpPostP("users/", { email: "user", password:"password" }).subscribe(
        succes => {
            if (succes.status == 200) {
                succesReturn = true;
                console.log(succes["_body"]);
            }
            else {
                console.log(succes);
            }
        }
    );
    return succesReturn;
}

  public register(user: User): boolean {
    let succesReturn:boolean = false;
    this.miHttp.httpPostP("users/", { email: user.email, password: user.password }).subscribe(
      succes => {
        if (succes.status == 200) {
          succesReturn = true;
          console.log(succes["_body"]);
        }
        else {
          console.log(succes);
        }
      }
    );
    return succesReturn;
  }

  public signUp()/*:Promise<Array<any>> */ {
    //  return   this.miHttp.httpPostP("https://restcountries.eu/rest/v2/all",{email:"caca",password:"pis"})
    //     .then( data => {
    //    //   console.log( data );
    //       return data;
    //     })
    //     .catch( err => {
    //      // console.log( err );
    //       return null;
    //     });
    //return null;
  }
}
