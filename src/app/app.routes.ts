import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { ListaEmpleados } from './lista-empleados/lista-empleados';
import { RegistrarEmpleado } from './registrar-empleado/registrar-empleado';
import { ActualizarEmpleado } from './actualizar-empleado/actualizar-empleado';
import { EmpleadoDetalles } from './empleado-detalles/empleado-detalles';

export const routes: Routes = [
    {path:'',redirectTo:'inicio',pathMatch:'full'},
    {path : 'inicio', component:Inicio},
    {path : 'empleados',component:ListaEmpleados},
    {path : 'registrar-empleado',component : RegistrarEmpleado},
    {path : 'actualizar-empleado/:id',component : ActualizarEmpleado},
    {path : 'empleado-detalles/:id',component : EmpleadoDetalles}
  ];
