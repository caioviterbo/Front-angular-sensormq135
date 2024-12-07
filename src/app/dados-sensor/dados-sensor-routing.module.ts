import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosSensorComponent } from './dados-sensor.component';

const routes: Routes = [
  {
    path: '',
    component: DadosSensorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosSensorRoutingModule { }
