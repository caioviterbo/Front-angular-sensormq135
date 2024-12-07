import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosSensorRoutingModule } from './dados-sensor-routing.module';
import { DadosSensorComponent } from './dados-sensor.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    DadosSensorComponent
  ],
  imports: [
    CommonModule,
    DadosSensorRoutingModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class DadosSensorModule { }
