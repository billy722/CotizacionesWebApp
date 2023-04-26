import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProblematicaInterface } from 'src/app/modelos/problematica.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-problematica',
  templateUrl: './card-problematica.component.html',
  styleUrls: ['./card-problematica.component.css']
})
export class CardProblematicaComponent{

  constructor(private api:ApiService){}

  @Input() problematicas:ProblematicaInterface [] = [];
  @Output() eventoEliminarProblematica = new EventEmitter();


  eliminarProblematica(id_problematica:string){
    this.api.eliminarProblematicas(id_problematica).subscribe(data => {
      if(data.status == "ok"){
        // alert("eliminado");
          this.eventoEliminarProblematica.emit(id_problematica);
      }else{
          console.log("error al eliminar problematica: "+data.result.error_msg);
      }
    });
  }

}
