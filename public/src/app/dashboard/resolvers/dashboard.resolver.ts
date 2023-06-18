import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { WorkersService } from '../providers/workers.service';

@Injectable()
export class DashboardResolver implements Resolve<any> {

  constructor(private workersService: WorkersService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.workersService.getWorkerFlights();
  }
}
