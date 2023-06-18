import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard-container.component';
import { DashboardResolver } from './resolvers/dashboard.resolver';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanLoadGuard } from './guards/can-load.guard';
import { CalculatorContainerComponent } from '../calculator/calculator-container/calculator-container.component';
import { CanMatchGuard } from './guards/can-match.guard';

const routes: Routes = [
  {
    path: '', component: DashboardContainerComponent,
    resolve:
    {
      dashboardResolver: DashboardResolver
    },
    children: [
      {
        path: 'calc', component: CalculatorContainerComponent,
        canMatch: [CanMatchGuard]
        // canLoad: [CanLoadGuard]
        // canActivate:[CanActivateGuard],
        // canMatch: [[() => inject(CanMatchGuard).canMatch()]]
      }
    ]
    // canActivate:[CanActivateGuard],
    // canMatch:[CanLoadGuard]
    // [() => inject(myGuard).canActivate()].
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
