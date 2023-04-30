import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';
@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})

export class ListarVehiculoComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculoService) {}

  getVehicles(): void {
    this.vehiculoService.getVehicles().subscribe((vehiculos) => {this.vehiculos = vehiculos});
  }

  get uniqueBrands(): string[] {
    return Array.from(new Set(this.vehiculos.map(vehiculo => vehiculo.marca)));
  }

  countBrand(brand: string): number {
    return this.vehiculos.filter(vehiculo => vehiculo.marca === brand).length;
  }

  ngOnInit(){
    this.getVehicles();
  }
}
