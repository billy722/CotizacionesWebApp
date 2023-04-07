import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosInterface } from 'src/app/modelos/productos.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

id_producto!:string;
datosProducto!:ProductosInterface;

constructor(private api:ApiService, private activadedRoute:ActivatedRoute){
  this.activadedRoute.params.subscribe(params => {
    if(params['id_producto']){
        this.id_producto = params['id_producto'];
        console.log("id recibido: "+this.id_producto);
    }
  });

  this.recibirDatosProducto();
  
}



recibirDatosProducto(){
    this.api.obtenerProducto(this.id_producto).subscribe(data=>{
        if(data.status == "ok"){
            this.datosProducto = data.result.data[0];
        }else{
          if(data.result.status == "error"){
              if(data.result.error_id=="204"){
                console.log("No hay registros de este producto");
              }else{
                console.log("Error "+data.result.error_id+" "+data.result.error_msg);
              }
          }
        }
    });
}

}
