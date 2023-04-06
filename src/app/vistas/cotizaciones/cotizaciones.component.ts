import { Component, Input, OnInit } from '@angular/core';
import { CotizacionInterface } from 'src/app/modelos/cotizacion.interface';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit{

constructor(private api:ApiService, private router:Router){}


cliente_seleccionado!:string;
nombre_cliente:string = "";
cotizaciones:CotizacionInterface [] = [];

formularioCotizacion = new FormGroup({
  descripcion : new FormControl('',Validators.required),
  fecha_vencimiento : new FormControl('',Validators.required),
  cliente: new FormControl('',Validators.required)
});


ngOnInit(): void {

    if(localStorage.getItem("cliente_seleccionado")){
      this.cliente_seleccionado = <string>localStorage.getItem("cliente_seleccionado");
      this.nombre_cliente = <string>localStorage.getItem("nombre_cliente_seleccionado");
      // alert(this.cliente_seleccionado);
      this.obtenerCotizacionesCliente();
    }else{
      this.obtenerCotizaciones();
    }
    
}

obtenerCotizacionesCliente(){
  this.api.obtenerCotizacionesCliente(this.cliente_seleccionado).subscribe(data => {
    if(data.status == "ok"){
      this.cotizaciones =  data.result.data;
    }{
      console.log("cliente sin cotizaciones");
    }

  });
}

obtenerCotizaciones(){
  this.api.obtenerCotizaciones().subscribe(data => {
    if(data.status == "ok"){
      this.cotizaciones =  data.result.data;
    }{
      console.log("NO HAY COTIZACIONES");
    }

  });
}

guardarCotizacion(form:any){
  console.log(form);
  this.api.crearCotizacion(form,this.cliente_seleccionado).subscribe(data => {
    if(data.status == "ok"){
      this.obtenerCotizacionesCliente();
    }else{
      console.log("error al crear cotizacion");
    }
  });
}

eliminarCotizacion(id_cotizacion:string){
  this.api.eliminarCotizacion(id_cotizacion).subscribe(data => {
    if(data.status=="ok"){
        // this.obtenerCotizacionesCliente();
        this.cotizaciones = this.cotizaciones.filter(c => c.id_cotizacion != id_cotizacion);
    }else{
      alert("Error al eliminar cotizacion");
    }
  });
}

verDetalleCotizacion(cotizacion_seleccionada:string){
  
  localStorage.setItem("cotizacion_seleccionada",cotizacion_seleccionada);
  this.router.navigate(['/detalle_cotizacion']);
}

onSelectCliente(cliente_seleccionado:string){
  this.cliente_seleccionado = cliente_seleccionado;
}

}
