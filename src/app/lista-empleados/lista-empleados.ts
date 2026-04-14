import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EmpleadoServicio } from '../empleado-servicio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleados.html',
  styleUrl: './lista-empleados.css',
})
export class ListaEmpleados implements OnInit{
  empleados:Empleado[]=[];

  constructor(private empleadoServicio:EmpleadoServicio, private router: Router){

  }

  ngOnInit(): void{
    this.obtenerEmpleados();
  }

  actualizarEmpleado(id: number) {
    this.router.navigate(['actualizar-empleado', id]);
  }

  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaDeEmpleados().subscribe(dato=>{
      console.log('DATA:', dato);
      this.empleados=dato;
    });
  }

  eliminarEmpleado(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar al empleado",
      icon: 'warning', // Cambiado 'type' a 'icon'
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEmpleados();
          Swal.fire(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    });
  }

  verDetallesDelEmpleado(id: number) {
    this.router.navigate(['empleado-detalles', id]);
  }
}
