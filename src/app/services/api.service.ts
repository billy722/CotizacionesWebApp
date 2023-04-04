import { Injectable } from '@angular/core';
import { LoginInterface } from '../modelos/login.interface';
import { ResponseInterface } from './../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ProductosInterface } from '../modelos/productos.interface';
import { catchError, retry } from 'rxjs/operators';
import { ClienteInterface } from '../modelos/cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string  = "/api-comercialmente/";

  constructor(private http:HttpClient) {}


  login(form:LoginInterface):Observable<ResponseInterface>{

      let direccion = this.url + "usuario/login?correo="+form.correo+"&clave="+form.clave;
      return this.http.post<ResponseInterface>(direccion,"");
  }



  // FUNCIONES PRODUCTOS

  crearProducto(form:ProductosInterface,categoria:any){
      let direccion = this.url + "productos?nombre="+form.nombre+"&descripcion="+form.descripcion+"&precio="+form.precio+"&estado=1&categoria="+categoria;
      console.log("api recibe form: "+direccion);
      return this.http.post<ProductosInterface>(direccion,"");
  }

  obtenerProductosCategoria(categoria:any){
      let direccion = this.url + "productos_categoria?categoria="+categoria;
      console.log(direccion);
      return this.http.get<any>(direccion);
  }

  eliminarProducto(id_producto:string){
      let direccion = this.url + "productos?id="+id_producto;
      console.log(direccion);
      return this.http.delete(direccion);
  }



  // FUNCIONES CLIENTES

  obtenerListadoClientes(){
    let direccion = this.url+"/clientes";
    return this.http.get<any>(direccion);
  }

  eliminarCliente(id:string){
    let direccion =  this.url+"/clientes?id="+id;
    return this.http.delete<any>(direccion);
  }

  crearCliente(form:any){
    let direccion = this.url+"/clientes?rut="+form.rut+"&nombre="+form.nombre+"&telefono="+form.telefono+"&correo="+form.correo;
    return this.http.post<any>(direccion,"");
  }

}

