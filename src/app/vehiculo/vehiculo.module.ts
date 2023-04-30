import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListarVehiculoComponent],
  declarations: [ListarVehiculoComponent]
})
export class VehiculoModule { }
