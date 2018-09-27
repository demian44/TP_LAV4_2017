
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { UserService } from '../../servicios/user.service';
import { User } from '../../clases/user';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  @Input()
  listado: Array<any>;

  @Input()
  users: Array<any>;

  @Input()
  prueba: string;


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.users = [];
    this.userService.getFullUsers().subscribe(
      succes => {
        if (succes.status == 200) {
          if(JSON.parse(succes["_body"]).code==0){
          let response: any[] = JSON.parse(succes["_body"]).response;
          console.log("Respuesta: "+ succes["_body"]);
          for (let i = 0; i < response.length; i++) {
            let user = new User();
            user.email = response[i].user;
            user.agilidad = response[i].agilidad;
            user.anagrama = response[i].anagrama;
            user.numero = response[i].numero;
            user.tateti = response[i].tateti;
            user.piedra = response[i].piedra;
            user.naval = response[i].naval;
            this.users.push(user);
          }
        }
        else{
          alert("Error de token");
        }

          //   console.clear();
          // console.log("usuarios:");
          // console.log(this.users);
          // console.log("usuarios:");
          // console.log("usuarios:");

          // succesReturn = true;
          // let bodyResponse = JSON.parse(succes["_body"]);
          // if (bodyResponse.code === 0) {
          //   console.log(bodyResponse.response);//Guardo el token
          //   UserService.token = bodyResponse.response;//Guardo el token
          // }
        }
        else {
          console.log(succes);
        }
      }
    );
  }

  ngOnchanges() {
    console.log(" ");
    console.log("chng users:users: " + this.users);
  }
  ver() {

  }

}
