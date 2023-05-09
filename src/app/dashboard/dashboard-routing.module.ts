import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container.component';
import { DashboardResolver } from './resolvers/dashboard.resolver';

const routes: Routes = [
  {
    path: '', component: DashboardContainerComponent,
    resolve:
    {
      dashboardResolver: DashboardResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    DashboardResolver
  ]
})
export class DashboardRoutingModule { }
