import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service';
import { User } from '../clases/user';
import { ResponseApi } from './response';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    constructor(public miHttp: MiHttpService) { }
    private static _token: string = null;
    public static set token(v: string) {
        UserService._token = v;
    }


    public register(user: User): any {
        return this.miHttp.httpPostP("users/", { email: user.email, password: user.password });

    }

    public getFullUsers(): any {
        let succesReturn: boolean = false;
        return this.miHttp.httpGetP("users/");
    }

    public sendResults(user: User): boolean {
        let succesReturn: boolean = false;
        this.miHttp.httpPostP("users/saveResult",
            { email: user.email, game: user.actualGame, point: user.pointsActualGame }).subscribe(succes => {
                if (succes.status == 200) {
                    console.log(succes["_body"]);
                    succesReturn = true;
                    let bodyResponse = JSON.parse(succes["_body"]);
                    if (bodyResponse.code === 0) {
                        console.log(bodyResponse.response);//Guardo el token
                        UserService.token = bodyResponse.response;//Guardo el token
                    }
                }
                else {
                    console.log(succes);
                }
            }
            );
        return succesReturn;
    }

    public login(user: User): any {
        return this.miHttp.httpPostP("login/", { email: user.email, password: user.password });
    }

}
