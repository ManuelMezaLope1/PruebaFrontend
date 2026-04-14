import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoServicio {
  private baseURL="http://localhost:8080/api/v1/empleados";

  constructor(private HttpClient: HttpClient){}

  obtenerListaDeEmpleados(): Observable<Empleado[]>{
    return this.HttpClient.get<Empleado[]>(`${this.baseURL}`);
  }

  registrarEmpleado(empleado: Empleado): Observable<Object> {
    return this.HttpClient.post(`${this.baseURL}`, empleado);
  }

  actualizarEmpleado(id: number, empleado: Empleado): Observable<Object> {
    return this.HttpClient.put(`${this.baseURL}/${id}`, empleado);
  }

  obtenerEmpleadoPorId(id: number): Observable<Empleado> {
    return this.HttpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  eliminarEmpleado(id: number): Observable<Object> {
    return this.HttpClient.delete(`${this.baseURL}/${id}`);
  }
}
