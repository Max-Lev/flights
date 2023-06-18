import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorContainerComponent } from './calculator/calculator-container/calculator-container.component';
import { CanLoadGuard } from './dashboard/guards/can-load.guard';

const routes: Routes = [
  {
    path: 'dashboard', loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'calculator', loadChildren: () =>
      import('./calculator/calculator.module').then(m => m.CalculatorModule),
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'calculator'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'calculator'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
