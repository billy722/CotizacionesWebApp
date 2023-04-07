import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ProblematicaInterface } from 'src/app/modelos/problematica.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-problematicas',
  templateUrl: './problematicas.component.html',
  styleUrls: ['./problematicas.component.css']
})
export class ProblematicasComponent implements OnInit{

  @Output() eventoNuevaProblematica = new EventEmitter();
  problematicas:ProblematicaInterface [] = [];

  constructor(private api:ApiService){

  }

  ngOnInit(): void {
    this.obtenerProblematicas();
  }

  formularioProblematica = new FormGroup({
    descripcion:new FormControl('',Validators.required)
  });

  guardarProblematicas(form:any){
    this.api.crearProblematicas(form).subscribe(data =>{
      if(data.status == "ok"){
          console.log("emite el evento");
          this.obtenerProblematicas();
      }else{
          console.log("error: "+data.result.error_id+" msg: "+data.result.error_msg);
      }
    });
  }
  
  obtenerProblematicas(){
    this.api.obtenerProblematicas().subscribe(data => {
      if(data.status == "ok"){
          this.problematicas = data.result.data;
      }else{
          console.log("error: "+data.result.error_id+" msg: "+data.result.error_msg);
      }
    });
  }


}
