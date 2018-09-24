import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { IncrementService } from '../../clases/IncrementService';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {
  velocidadTitle: string;
  piedraTitle: string;
  adivinaTitle: string;
  navalTitle: string;
  constructor(private incrementService: IncrementService,
    private router: Router) { }


  ngOnInit() {
    
    this.velocidadTitle = " Juego de agilidad mental! ";
    this.piedraTitle = " Juega contra la máquina! ";
    this.adivinaTitle = " Juego de estrategia! ";
    this.navalTitle = " Unde los barcos de la maquina! "
  }
  ngOnChanges(): void {
    if (!this.incrementService.contador) {
      this.router.navigate(['/Login']);
    }
  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
        this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
        this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
        this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
        this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'Batalla-Naval':
        this.router.navigate(['/Juegos/Batalla-Naval']);
        break;
      case 'ppt':
        this.router.navigate(['/Juegos/piedra-tijera']);
        break;
      case 'anagrama':
        this.router.navigate(['/Juegos/anagrama']);
        break;
      case 'tateti':
        this.router.navigate(['/Juegos/tateti']);
        break;
    }
  }
}
