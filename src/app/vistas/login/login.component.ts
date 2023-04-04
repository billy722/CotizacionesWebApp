import { ResponseInterface } from './../../modelos/response.interface';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { LoginInterface } from 'src/app/modelos/login.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm =  new FormGroup({
    correo : new FormControl('', Validators.required),
    clave : new FormControl('', Validators.required)
  });

  errorStatus:boolean = false;
  errorMsj:any = "";

  constructor(private api:ApiService, private router:Router){}

  
  ngOnInit(): void{
    this.consultarToken();
  }

  consultarToken(){
    if(localStorage.getItem('token')){
      this.router.navigate(['/principal']);
    }
  }

  onLogin(form:LoginInterface){

    this.api.login(form).subscribe(data => {
      let dataResponse:ResponseInterface = data;
      console.log(data);

      if(dataResponse.status == "ok"){

          localStorage.setItem("token", dataResponse.result.data.token);
          localStorage.setItem("usuario", dataResponse.result.data.usuario);
          this.router.navigate(["./principal"]);

      }else{
        console.log("NO PASA NAAAAA");
        this.errorStatus = true;
        this.errorMsj = dataResponse.result.error_msg; 
      }


    });

  }

}
