import { Component, OnChanges, OnInit } from '@angular/core';
import { LoginComponent } from './componentes/login/login.component';
import { IncrementService } from './clases/IncrementService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private userEmail: string = "usuario";
  private appLoged: boolean = true;
  eventPopUp() {

  }

  constructor() {

  }
  ngOnInit() {
  }
  

  public checkLog() {
    //alert("EL EVENTO");
    return true;
  }


}
