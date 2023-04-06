import { Component, OnInit } from '@angular/core';
import { ClienteInterface } from 'src/app/modelos/cliente.interface';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

constructor(private api:ApiService, private router:Router){}  

clientes:ClienteInterface [] = []
formularioCliente = new FormGroup({
  nombre : new FormControl('',Validators.required),
  rut :  new FormControl('',Validators.required),
  telefono : new FormControl('',Validators.required),
  correo: new FormControl('',Validators.required)
});

ngOnInit(): void {
    this.obtenerClientes();
}

obtenerClientes(){
  this.api.obtenerListadoClientes().subscribe(data => {
    if(data.result.data){
      console.log(data)
      this.clientes = data.result.data;
    }else{
      this.clientes = [];
    }

  });
}

eliminarCliente(id:string){
  this.api.eliminarCliente(id).subscribe(data => {
    // console.log(data)
    if(data.status=="ok"){
      // this.obtenerClientes();
      this.clientes = this.clientes.filter(c => c.id_cliente != id);
      
    }else{
      alert("Error al eliminar");
    }
    
  });
}

guardarCliente(form:any){
  this.api.crearCliente(form).subscribe(data => {
    console.log(data);

    if(data.status == "ok"){
      this.obtenerClientes();
    }else{
      alert("Error a crear cliente");
    }
    
  });
}


mostrarCotizacionesCliente(id_cliente:any,nombre_cliente:any){
  // alert("cliente: "+id_cliente);
  localStorage.setItem("cliente_seleccionado",id_cliente);
  localStorage.setItem("nombre_cliente_seleccionado",nombre_cliente);
  this.router.navigate(["./cotizaciones"]);
}

}
