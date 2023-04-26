import { Injectable } from '@angular/core';
import { LoginInterface } from '../modelos/login.interface';
import { ResponseInterface } from './../modelos/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ProductosInterface } from '../modelos/productos.interface';
import { catchError, retry } from 'rxjs/operators';
import { ClienteInterface } from '../modelos/cliente.interface';
import { ColaboradorInterface } from '../modelos/colaborador.interface';

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
      let direccion = this.url + "productos?nombre="+form.nombre+"&descripcion="+form.descripcion+"&tareas="+form.tareas+"&precio="+form.precio+"&categoria="+categoria+"&tiempo_ejecucion="+form.tiempo_ejecucion;
      console.log("api recibe form: "+direccion);
      return this.http.post<ProductosInterface>(direccion,"");
  }

  obtenerProducto(id_producto:any){
      let direccion = this.url + "producto?id_producto="+id_producto;
      console.log(direccion);
      return this.http.get<any>(direccion);
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
    let direccion = this.url+"cliente?id_cliente="+id_cliente;
    return this.http.get<any>(direccion);
  }

  obtenerListadoClientes(){
    let direccion = this.url+"clientes";
    return this.http.get<any>(direccion);
  }

  eliminarCliente(id:string){
    let direccion =  this.url+"clientes?id="+id;
    return this.http.delete<any>(direccion);
  }

  crearCliente(form:any){
    let direccion = this.url+"clientes?rut="+form.rut+"&nombre="+form.nombre+"&telefono="+form.telefono+"&correo="+form.correo;
    return this.http.post<any>(direccion,"");
  }

  //FUNCIONES COTIZACIONES

  obtenerCotizacionesCliente(id_cliente:any){
    let direccion = this.url+"cotizaciones_cliente?id_cliente="+id_cliente;
    return this.http.get<any>(direccion);
  }

  obtenerCotizaciones(){
    let direccion = this.url+"cotizaciones";
    return this.http.get<any>(direccion);
  }
  
  crearCotizacion(form:any,cliente_seleccionado:string){
    let direccion = this.url+"cotizaciones?descripcion="+form.descripcion+"&fecha_vencimiento="+form.fecha_vencimiento+"&id_cliente="+cliente_seleccionado;
    return this.http.post<any>(direccion,"");
  }
  
  eliminarCotizacion(id_cotizacion:string){
    let direccion = this.url+"cotizaciones?id_cotizacion="+id_cotizacion;
    return this.http.delete<any>(direccion);
  }
  
  obtenerDatosCotizacion(id_cotizacion:string){
    let direccion = this.url+"cotizacion?id_cotizacion="+id_cotizacion;
    return this.http.get<any>(direccion);
  }
  
  obtenerProductosCotizacion(id_cotizacion:string){
    let direccion = this.url+"cotizacion_detalle?id_cotizacion="+id_cotizacion;
    return this.http.get<any>(direccion);
  }
  
  agregarProductoCotizacion(id_producto:string,id_cotizacion:string,valor:string){
    let direccion = this.url+"producto_cotizacion?id_producto="+id_producto+"&id_cotizacion="+id_cotizacion+"&valor="+valor;
    return this.http.post<any>(direccion,"");
  }

  eliminarProductoCotizacion(id_producto:string,id_cotizacion:string){
    let direccion = this.url+"producto_cotizacion?id_producto="+id_producto+"&id_cotizacion="+id_cotizacion
    return this.http.delete<any>(direccion);
  }


  //FUNCIONES COLABORADORES

  obtenerColaboradores(){
    let direccion = this.url+"colaboradores";
    return this.http.get<any>(direccion);
  }

  crearColaborador(form:any){
    let direccion = this.url+"colaboradores?nombre="+form.nombre+"&telefono="+form.telefono+"&correo="+form.correo+"&funciones="+form.funciones;
    return this.http.post<any>(direccion,"");
  }

  eliminarColaborador(id_colaborador:string){
    let direccion = this.url+"colaboradores?id_colaborador="+id_colaborador;
    return this.http.delete<any>(direccion);
  }

  // SECCION PREGUNTAS
  obtenerPreguntas(){
    let direccion = this.url+"preguntas";
    return this.http.get<any>(direccion);
  }

  crearPregunta(form:any){
    let direccion = this.url+"preguntas?pregunta="+form.pregunta;
    return this.http.post<any>(direccion,"");
  }

  eliminarPregunta(id_pregunta:any){
    let direccion = this.url+"preguntas?id_pregunta="+id_pregunta;
    return this.http.delete<any>(direccion);
  }


  //FUNCIONES ALTERNATIVAS

  obtenerAlternativas(id_pregunta:string){
    let direccion = this.url+"alternativas?id_pregunta="+id_pregunta;
    console.log(direccion);
    return this.http.post<any>(direccion,"");
  }

  //FUNCIONES PROBLEMATICAS

  obtenerProblematicas(){
    let direccion = this.url+"problematicas";
    return this.http.get<any>(direccion);
  }
  crearProblematicas(form:any){
    let direccion = this.url+"problematicas?descripcion="+form.descripcion;
    return this.http.post<any>(direccion,"");
  }
  eliminarProblematicas(id_problematica:string){
    let direccion = this.url+"problematicas?id_problematica="+id_problematica;
    return this.http.delete<any>(direccion);
  }

}

