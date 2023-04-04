import { ProductosInterface } from '../../../modelos/productos.interface';
import { ResponseInterface } from '../../../modelos/response.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {

  @Input() categoriaSeleccionada:string = "1";
  @Input() producto!:ProductosInterface;
  @Output() eventoProductoEliminardo = new EventEmitter();
  

  constructor(private api:ApiService){}

  deleteProduct(id_producto:string){
    this.api.eliminarProducto(id_producto).subscribe( data => {
        this.eventoProductoEliminardo.emit();
    });
  }




}
