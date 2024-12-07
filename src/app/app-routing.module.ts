import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dados', pathMatch: 'full' },
  { path: 'dados', loadChildren: () => import('./dados-sensor/dados-sensor.module').then(m => m.DadosSensorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
