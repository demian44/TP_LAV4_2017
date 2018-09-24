import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit, OnChanges {

  constructor(private router:Router) { }

  ngOnInit() {
    let time: number = Number(localStorage.getItem("time").trim());
    if((((new Date()).getTime() - time) / 60000)>30){
      localStorage.setItem("loged","false");
      this.router.navigate(['/Login']);
    }
  }

  ngOnChanges(): void {
    
  }

}


