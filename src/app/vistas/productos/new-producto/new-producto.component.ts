import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent {

  @Input() categoriaSeleccionada!:string;
  @Output() newProductEvent = new EventEmitter();

  constructor(private api:ApiService){}

  productoForm =  new FormGroup({
    nombre : new FormControl('', Validators.required),
    descripcion : new FormControl('', Validators.required),
    precio : new FormControl('', Validators.required),
    tareas : new FormControl('', Validators.required),
    tiempo_ejecucion : new FormControl('', Validators.required)
  });


  crearProducto(form:any){
    this.api.crearProducto(form,this.categoriaSeleccionada).subscribe(data => {
      this.newProductEvent.emit();
    });
  }

}
