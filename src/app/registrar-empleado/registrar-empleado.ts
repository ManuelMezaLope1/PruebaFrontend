import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { catchError, tap, throwError } from 'rxjs';
import { EmpleadoServicio } from '../empleado-servicio';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-empleado',
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-empleado.html',
  styleUrl: './registrar-empleado.css',
})
export class RegistrarEmpleado {
  empleado: Empleado=new Empleado();

  constructor(private empleadoServicio: EmpleadoServicio, private router: Router) { }

  ngOnInit(): void {
  }

  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).pipe(
      tap(dato => {
        console.log(dato);
        this.irALaListaDeEmpleados();
      }),
      catchError(error => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    ).subscribe();
  }

  irALaListaDeEmpleados() {
    this.router.navigate(['/empleados']);
    Swal.fire('Empleado registrado', `El empleado ${this.empleado.nombre} ha sido registrado con exito`, `success`);
  }

  onSubmit() {
    this.guardarEmpleado();
  }
}
