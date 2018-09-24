import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material';
import { IncrementService } from "../../clases/IncrementService";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit, OnChanges {

  static mierdita: boolean;
  private email: string;
  public loged: boolean;
  constructor(private incrementService: IncrementService, private router: Router) {
  }
  salir() {
    alert("salio");
    localStorage.setItem("loged","false");
    this.router.navigate(['/Login']);
    this.incrementService.singInOut();
  }
  public menuPrincipal(){
    localStorage.setItem("loged","false");
    this.router.navigate(['/Principal']);    
  }

  ngOnInit() {
    if (localStorage.getItem("loged") == "true") {
      this.incrementService.contador = true;
      this.incrementService.email = localStorage.getItem("email");
    }
  }

  ngOnChanges(): void {
    if (!this.incrementService.contador) {
      this.router.navigate(['/Login']);
    }
  }

}
