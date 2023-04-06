import { Component, OnInit } from '@angular/core';
import { ColaboradorInterface } from 'src/app/modelos/colaborador.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css'],
})
export class ColaboradoresComponent implements OnInit{

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.obtenerColaboradores();
  }
  formularioColaboradores =  new FormGroup({
    nombre : new FormControl("",Validators.required),
    telefono : new FormControl("",Validators.required),
    correo : new FormControl("",Validators.required),
    funciones : new FormControl("",Validators.required),
  });

  colaboradores:ColaboradorInterface [] = [];


  obtenerColaboradores(){
   
    this.api.obtenerColaboradores().subscribe(data => {
      if(data.status == "ok"){
        this.colaboradores = data.result.data;
      }else{
          if(data.result.error_id=="204"){
            this.colaboradores = [];
          }else{
            alert("error al recibir datos de colaboradores");
            console.log("Error: "+data.resulta.error_id+" mensaje: "+data.resulta.error_msg);
          }
      }

    });

  }


  guardarColaborador(form:any){

    this.api.crearColaborador(form).subscribe(data => {

        if(data.status == "ok"){
            this.obtenerColaboradores();
        }else{
          console.log("error al crear colaboradores: "+data.status+" result: "+data.result.error_msg);
        }
    });

  }

  eliminarColaborador(id_colaborador:string){
    this.api.eliminarColaborador(id_colaborador).subscribe(data => {
       if(data.status == "ok"){
          this.colaboradores = this.colaboradores.filter(c => c.id_colaborador != id_colaborador);   
       }else{
          if(data.status == "error"){
              alert("Error al eliminar colaborador");
              console.group("Error: "+data.reuslt.error_id+" msg: "+data.result.error_msg);
          }
       }
    });
  }

}
