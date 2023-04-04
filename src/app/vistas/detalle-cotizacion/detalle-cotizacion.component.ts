import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from 'src/app/modelos/cliente.interface';
import { CotizacionInterface } from 'src/app/modelos/cotizacion.interface';
import { ProductoCotizacionInterface } from 'src/app/modelos/producto_cotizacion.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle-cotizacion',
  templateUrl: './detalle-cotizacion.component.html',
  styleUrls: ['./detalle-cotizacion.component.css']
})
export class DetalleCotizacionComponent implements OnInit{

  constructor(private api:ApiService){}

  cotizacion_seleccionada:string = "";
  cliente_seleccionado:string = "";

  datos_cliente!:ClienteInterface;
  datos_cotizacion!:CotizacionInterface;

  productos_cotizacion:ProductoCotizacionInterface [] = [];


  ngOnInit(): void {
      this.cotizacion_seleccionada =  <string>localStorage.getItem("cotizacion_seleccionada");
      this.cliente_seleccionado =  <string>localStorage.getItem("cliente_seleccionado");
      
      this.obtenerClienteCotizacion();
      this.obtenerDatosCotizacion();
      this.obtenerProductosCotizacion();
  }

  obtenerClienteCotizacion(){

    this.api.obtenerCliente(this.cliente_seleccionado).subscribe(data => {
      console.log(data);

       if(data.status=="ok"){
          this.datos_cliente = data.result.data[0];
       }else{
        alert("error al recibir datos del cliente");
       }
    });

  }

  obtenerDatosCotizacion(){
    
    this.api.obtenerDatosCotizacion(this.cotizacion_seleccionada).subscribe(data => {
      console.log(data);

       if(data.status=="ok"){
          this.datos_cotizacion = data.result.data[0];
       }else{
        alert("error al recibir datos de cotizacion");
       }
    });

  }
  obtenerProductosCotizacion(){
    
    this.api.obtenerProductosCotizacion(this.cotizacion_seleccionada).subscribe(data => {
      console.log(data);

       if(data.status=="ok"){
          this.productos_cotizacion = data.result.data;
       }else{
        alert("error al recibir datos de cotizacion");
       }
    });

  }


}
