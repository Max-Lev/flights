import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, concat, from, interval, map, mergeMap, of, repeat, retry, switchMap, take, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FlightsService } from './flights.service';
import { IWorker } from '../components/models/worker.model';
import { IFlight } from '../components/models/flights.model';
@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private httpClient: HttpClient, private flightsService: FlightsService) {

  

  }

  getAllWorkers(): Observable<IWorker[]> {
    return this.httpClient.get<any[]>(environment.workers);
  }

  getWorkerFlights(): Observable<{ workers: IWorker[], flights: IFlight[] }> {
    // getWorkerFlights(): Observable<any> {

    const workers$ = this.getAllWorkers();

    return workers$
      .pipe(
        mergeMap((workers: IWorker[]) => {
          const { id } = workers[0];
          return this.flightsService.getFlightByWorkerId(id)
            .pipe(map((flights: IFlight[]) => ({ workers, flights })))
        })

      )

  }


}

