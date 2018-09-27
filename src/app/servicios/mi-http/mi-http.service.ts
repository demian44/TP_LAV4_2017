import { log } from 'util';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { promise } from 'selenium-webdriver';
import { UserService } from '../user.service';
import { User } from '../../clases/user';

const HOST: string = "http://localhost/WebApi/";

@Injectable()
export class MiHttpService {
  constructor(public http: Http, private user: User) { }

  public httpGetP(method: string) {

    let token = "Tokennn";
    let header: Headers = new Headers();
    let options: RequestOptions = new RequestOptions();
    header.append("Content-Type", "application/json");
    header.append("token", UserService.token);
    options.headers = header;
    return this.http.get(HOST + method, options);
  }

  public httpPostP(method: string, objeto: any) {
    console.log(objeto);
    let token = "Tokennn";
    let header: Headers = new Headers();
    let options: RequestOptions = new RequestOptions();
    header.append("Content-Type", "application/json");
    header.append("token", UserService.token);
    options.headers = header;
    console.log("this.http");
    console.log(this.http);
    console.log("this.http");
    return this.http.post(HOST + method, objeto, options);
  }

  public httpGetO(url: string): Observable<Response> {
    let header: Headers = new Headers();
    let options: RequestOptions = new RequestOptions();
    header.append("Content-Type", "application/json");
    header.append("token", UserService.token);
    options.headers = header;
    return this.http.get(url,options)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData(res: any) {
    console.log(res);
    console.log();
    console.log(JSON.parse(res._body).response);
    console.log();
    console.log();
    return res.json() || {};
  }
  private postResponse(res: any) {
    console.log();
    console.log();
    console.log(res);
    console.log();
    console.log();
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }
}
