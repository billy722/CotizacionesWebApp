import { Component } from '@angular/core';
import { PreguntaInterface } from 'src/app/modelos/pregunta:interface';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
alternativa_seleccionada!:string;
preguntas:PreguntaInterface [] = [];

constructor(private api:ApiService){
  this.obtenerPreguntas();
}

formularioPregunta = new FormGroup({
  pregunta : new FormControl('',Validators.required),
});

obtenerPreguntas(){
  this.api.obtenerPreguntas().subscribe(data => {
    if(data.status == "ok"){
      this.preguntas = data.result.data;
    }else{
        if(data.status == "204"){
          console.log("No hay registros");
          this.preguntas = [];
        }else{
          console.log("erro al recibir preguntas error_id: "+data.result.error_id+" msg: "+data.result.error_msg);
        }
    }

  });
}

guardarPregunta(form:any){
  this.api.crearPregunta(form).subscribe(data => {
    if(data.status = "ok"){
      this.obtenerPreguntas();
      console.log("Pregunta creada");
    }else{
      alert("Error al crear pregunta");
      console.log(data.result.error_msg);
    }

  });
}

seleccionarAlternativa($event:string){
  this.alternativa_seleccionada = $event;
}

eliminarPregunta(id_pregunta:any){
  this.api.eliminarPregunta(id_pregunta).subscribe(data => {
    
    if(data.status == "ok"){
        this.preguntas = this.preguntas.filter(c => c.id_pregunta != id_pregunta);
    }else{
        console.log("error al eliminar pregunta: error_id:"+data.result.error_id+" error_msg: "+data.result.error_msg);
    }

  });
}


}
