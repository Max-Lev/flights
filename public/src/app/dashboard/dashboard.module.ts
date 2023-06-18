import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardContainerComponent } from './dashboard-container.component';
import { WorkersComponent } from './components/workers/workers.component';
import { FlightsComponent } from './components/flights/flights.component';
import { DetailsComponent } from './components/details/details.component';
import { ListboxModule } from 'primeng/listbox';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';
import { DurationPipe } from './pipes/duration.pipe';
import {Permissions, UserToken} from './guards/can-match.guard'
@NgModule({
  declarations: [
    DashboardContainerComponent,
    WorkersComponent,
    FlightsComponent,
    DetailsComponent,
    DurationPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ListboxModule,
    TableModule,
    DividerModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Permissions,
    UserToken
  ]
})
export class DashboardModule {
  constructor(){
    console.log('Dashboard !')
  }
}
