import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, concat, from, interval, map, mergeMap, of, repeat, retry, switchMap, take, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FlightsService } from './flights.service';
import { IWorker } from '../components/models/worker.model';
import { IFlight } from '../components/models/flights.model';
@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private httpClient: HttpClient, private flightsService: FlightsService) {

    const nums$ = of(1, 2, 3, 4, 5, 6)
    const letters$ = of('10', '20', '30');


    // interval(1000)
    // .pipe(repeat(2))
    // .pipe(
    //   switchMap(() => {
    //     return nums$
    //   })
    // )
    //   .pipe(map(n => {
    //     if (n === 3) {
    //       throw ('E number')
    //     }
    //     return n;
    //   }), catchError((err) => { throw 'err' }))
    //   .subscribe(
    //     {
    //       next: (v) => console.log('v', v),
    //       error: (e) => {
    //         console.log('e', e);
    //         repeat(3)
    //       }
    //     }
    //   );
    // concat(interval(1000), letters$, 
    
    // from(nums$)
    //   // .pipe(repeat(2))
    //   .pipe(
    //     map(n => {
    //       if (n === 3) {
    //         throw ('E number')
    //       }
    //       return n;
    //     }),
    //     repeat(2),
    //     catchError((err) => { throw 'err' })
    //   )
    //   .subscribe(
    //     {
    //       next: (v) => console.log('v', v),
    //       error: (e) => console.log('e', e),
    //       complete:()=>console.log('complete')
    //     }
    //   );

    // .pipe(
    //   catchError((err) => {
    //     console.log(err);
    //     // return throwError(() => new Error(err));
    //     // return throwError(() => from([]));
    //     return of();
    //   })
    // )


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

