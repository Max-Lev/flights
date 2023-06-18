import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component,
  OnDestroy, OnInit, ViewChild
} from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import {
  Observable, Subject, exhaustMap, interval,
  mergeMap,
  of, repeat, switchMap, take, takeUntil, tap
} from 'rxjs';
import { FlightsService } from './providers/flights.service';
import { IWorker } from './components/models/worker.model';
import { WorkersComponent } from './components/workers/workers.component';
import { IFlight, IFlightCol, FLIGHT_COLUMNS, DETAILS_COLUMNS } from './components/models/flights.model';

@Component({
  selector: 'app-flights',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardContainerComponent implements OnInit, AfterViewInit, OnDestroy {

  workers$: Observable<IWorker[]>;

  flights$: Observable<IFlight[]>;

  flightDetails: IFlight;

  flightColumns: IFlightCol[] = FLIGHT_COLUMNS;

  detailsColumns: IFlightCol[] = DETAILS_COLUMNS;

  @ViewChild(WorkersComponent, { static: true }) workersCmp: WorkersComponent;

  _stop = new Subject<void>();

  _start = new Subject<void>();

  sub$: Subject<boolean> = new Subject<boolean>();

  constructor(private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef, private flightsService: FlightsService) {

  }

  ngOnInit(): void {
    this.workers$ = of(this.activatedRoute.snapshot.data['dashboardResolver'].workers);
    this.flights$ = of(this.activatedRoute.snapshot.data['dashboardResolver'].flights);
  }

  ngAfterViewInit(): void {
    this._start.next();
    this.pullFlights$();
  }

  ngOnDestroy(): void {
    this.sub$.next(true);
    this.sub$.unsubscribe();
  }

  selectedFlightEmitterHandler(flight: IFlight) {
    this.flightDetails = { ...flight };
  }

  selectedWorkerEventHandler(worker: IWorker) {
    
    console.log('selectedWorkerEventHandler ', new Date().getMinutes() + ':', new Date().getSeconds());
    
    this._stop.next();

    this.flightsService.getFlightByWorkerId(worker.id).pipe(take(1)).pipe(takeUntil(this.sub$)).subscribe((flights: IFlight[]) => {

      this.flights$ = of(flights);

      this._start.next();

      this.pullFlights$();
      /** 
       * @description improve UX: display flights before next CD cycle
       */
      this.changeDetectorRef.detectChanges();

    });

  }

  pullFlights$() {

    // const duration = (1 * 60 * 1000);
    const duration = (5000);

    interval(duration)
      .pipe(
        switchMap(() => of(this.selectedWorkerEventHandler(this.workersCmp.selectedWorker))),
        takeUntil(this._stop),
        repeat({ delay: () => this._start })
      )
      .pipe(takeUntil(this.sub$))
      .pipe(tap(() => console.log('pullFlights ', new Date().getMinutes() + ':', new Date().getSeconds())))
      .subscribe();

  }

}


