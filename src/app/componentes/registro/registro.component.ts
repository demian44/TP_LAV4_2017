import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../clases/user';
import { UserService } from '../../servicios/user.service';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: User;

  userService: UserService;

  constructor(_userService: UserService) {
    this.userService = _userService;
  }
  ngOnInit() {
    this.user = new User();
  }
  ngOnChanges() {
    console.log(this.user.email);
  }
  saveUser() {
    if (this.user.validateEmail() && this.user.validatePassword())
      console.log("utiliza register");
    this.userService.register(this.user);
  }

  save() {

  }

}
