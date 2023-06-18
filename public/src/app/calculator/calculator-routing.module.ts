import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorContainerComponent } from './calculator-container/calculator-container.component';

const routes: Routes = [
  {
    path: '', component: CalculatorContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
