import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorContainerComponent } from './calculator-container/calculator-container.component';
import { SliderModule } from 'primeng/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CityComponent } from './components/city/city.component';
@NgModule({
  declarations: [
    CalculatorContainerComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ]
})
export class CalculatorModule { }
