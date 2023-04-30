/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { Vehiculo } from '../vehiculo';
import { AppComponent } from 'src/app/app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from '../vehiculo.service';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [ ListarVehiculoComponent ],
      providers: [VehiculoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const vehiculo = new Vehiculo(
        faker.random.numeric(),
        faker.random.word(),
        faker.random.word(),
        faker.random.word(),
        faker.datatype.number(10),
        faker.datatype.number(100),
        faker.color.rgb(),
        faker.image.animals()
      );
      component.vehiculos.push(vehiculo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should have 1 header of 4 columns', () => {
    expect(debug.queryAll(By.css('th'))).toHaveSize(4);
  });

  it('should have 12 elements', () => {
    expect(debug.queryAll(By.css('td'))).toHaveSize(12);
  });

});
