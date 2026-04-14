import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoServicio } from '../empleado-servicio';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-detalles',
  imports: [],
  templateUrl: './empleado-detalles.html',
  styleUrl: './empleado-detalles.css',
})
export class EmpleadoDetalles {
  id: number;
  empleado: Empleado;
  constructor(private route: ActivatedRoute, private empleadoServicio: EmpleadoServicio) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.empleadoServicio.obtenerEmpleadoPorId(this.id).subscribe(dato => {
      this.empleado = dato;
      Swal.fire(`Detalles del empleado ${this.empleado.nombre}`);
    });
  }
}
