import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, mergeMap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FlightsService } from './flights.service';
import { IWorker } from '../components/models/worker.model';
import { IFlight } from '../components/models/flights.model';
@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private httpClient: HttpClient, private flightsService: FlightsService) { }

  getAllWorkers(): Observable<IWorker[]> {
    return this.httpClient.get<any[]>(environment.workers);
  }

  getWorkerFlights(): Observable<{ workers: IWorker[], flights: IFlight[] }> {

    const workers$ = this.getAllWorkers();

    return workers$.pipe(
      mergeMap((workers: IWorker[]) => {
        const { id } = workers[0];
        return this.flightsService.getFlightByWorkerId(id)
          .pipe(map((flights: IFlight[]) => ({ workers, flights })));
      })
    );
  }


}

