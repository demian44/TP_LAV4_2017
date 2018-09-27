import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../../clases/user';
import { UserService } from '../../servicios/user.service';
import { IncrementService } from '../../clases/IncrementService';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  user: User;
  emailHelp: string;

  userService: UserService;
  claveHelp: string;

  constructor(_userService: UserService, private router: Router, private incrementService: IncrementService) {
    this.userService = _userService;
  }
  ngOnInit() {
    this.user = new User();
  }
  ngOnChanges() {
    console.log(this.user.email);
  }
  saveUser() {
    if (this.user.validateEmail() && this.user.validatePassword()) {
      console.log("utiliza register");
      this.userService.register(this.user).subscribe(
        succes => {
          if (succes.status == 200) {
            let bodyResponse = JSON.parse(succes["_body"]);
            if (bodyResponse.code === 0) {
              console.log(bodyResponse.response);//Guardo el token
              this.incrementService.contador = true;
              this.incrementService.email = this.user.email;
              UserService.token = bodyResponse.response;//Guardo el token
              this.router.navigate(["/Principal"]);
            }
          }
          else {
            alert("Error");
          }
        }
      );

    } else {
      if (!this.user.validateEmail())
        this.emailHelp = "Ingrese un email válido."
      if (!this.user.validatePasswordWithConfirm())
        this.claveHelp = "Clave con mas de 4 caracteres"
    }

  }

  returnLogin() {
    this.router.navigate(["/Login"]);
  }

}
