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

  obtenerCliente(id_cliente:string){
    let direccion = this.url+"/cliente?id_cliente="+id_cliente;
    return this.http.get<any>(direccion);
  }

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

  //FUNCIONES COTIZACIONES

  obtenerCotizacionesCliente(id_cliente:any){
    let direccion = this.url+"/cotizaciones_cliente?id_cliente="+id_cliente;
    return this.http.get<any>(direccion);
  }

  obtenerCotizaciones(){
    let direccion = this.url+"/cotizaciones";
    return this.http.get<any>(direccion);
  }
  
  crearCotizacion(form:any,cliente_seleccionado:string){
    let direccion = this.url+"/cotizaciones?descripcion="+form.descripcion+"&fecha_vencimiento="+form.fecha_vencimiento+"&id_cliente="+cliente_seleccionado;
    return this.http.post<any>(direccion,"");
  }
  
  eliminarCotizacion(id_cotizacion:string){
    let direccion = this.url+"/cotizaciones?id_cotizacion="+id_cotizacion;
    return this.http.delete<any>(direccion);
  }
  
  obtenerDatosCotizacion(id_cotizacion:string){
    let direccion = this.url+"/cotizacion?id_cotizacion="+id_cotizacion;
    return this.http.get<any>(direccion);
  }
  
  obtenerProductosCotizacion(id_cotizacion:string){
    let direccion = this.url+"/cotizacion_detalle?id_cotizacion="+id_cotizacion;
    return this.http.get<any>(direccion);
  }

}

