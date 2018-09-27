import { Component, OnInit } from '@angular/core';
import { JuegoServiceService } from '../../servicios/juego-service.service';
import { UserService } from '../../servicios/user.service';
import { User } from '../../clases/user';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  miServicioJuego: JuegoServiceService;
  private users: User[];

  constructor(
    private servicioJuego: JuegoServiceService,
    private userService: UserService,
    private user: User
  ) {
    this.miServicioJuego = servicioJuego;
  }

  ngOnInit() {
    
  }


  llamaService() {
    // console.log("llamaService");
    // this.listadoParaCompartir = this.miServicioJuego.listar();
  }

  llamaServicePromesa() {
    console.log("llamaServicePromesa");
    this.miServicioJuego.listarPromesa().then((listado) => {
      this.listadoParaCompartir = listado;
    });
  }
}
