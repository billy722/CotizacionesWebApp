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

  datos_cliente:ClienteInterface = {"nombre":"...","rut_cliente":"...","id_cliente":"...","telefono":"...","correo":"..."};
  datos_cotizacion:CotizacionInterface = {"descripcion":"...","fecha_creacion":"...","fecha_vencimiento":"...","estado":"...","id_cliente":"...","id_cotizacion":"...","nombre_cliente":"...","rut_cliente":"..."};
  total_cotizacion:number = 0;

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
          this.total_cotizacion = this.productos_cotizacion.reduce((
            acc,
            obj,
          ) => acc + (obj.cantidad * obj.valor),0);

       }else{
          if(data.result.error_id=="204"){
            this.productos_cotizacion = [];
          }else{
            alert("error al recibir datos de cotizacion");
            console.log("Error: "+data.resulta.error_id+" mensaje: "+data.resulta.error_msg);
          }
       }
    });

  }

  eliminarProductoCotizacion(id_producto:string){
    
    console.log(id_producto,this.cotizacion_seleccionada);
      
    this.api.eliminarProductoCotizacion(id_producto,this.cotizacion_seleccionada).subscribe( data => {
        
      // this.obtenerProductosCotizacion();
      this.productos_cotizacion =  this.productos_cotizacion.filter(c => c.id_cotizacion!=this.cotizacion_seleccionada || c.id_producto!=id_producto);

      });
    
  }

}
