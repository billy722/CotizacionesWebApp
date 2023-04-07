import { Component, Input, OnInit } from '@angular/core';
import { AlternativaInterface } from 'src/app/modelos/alternativa.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-alternativas',
  templateUrl: './alternativas.component.html',
  styleUrls: ['./alternativas.component.css']
})
export class AlternativasComponent implements OnInit{

@Input() id_pregunta!:string;
alternativas:AlternativaInterface [] = [];

  constructor(private api:ApiService){
  }
  
  ngOnInit(): void {
    this.obtenerAlternativas();
  }

  obtenerAlternativas(){
    this.api.obtenerAlternativas(this.id_pregunta).subscribe(data => {
      if(data.status == "ok"){
        this.alternativas = data.result.data;
      }else{
        if(data.result.error_id == "204"){
            console.log(data.result.error_msg);
        }else{
          console.log("error_id: "+data.result.error_id+", msg: "+data.result.error_msg);
        }
      }
    }); 
  }


}
