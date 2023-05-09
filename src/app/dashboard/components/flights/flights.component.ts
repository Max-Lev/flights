import {
  ChangeDetectionStrategy, Component,
  EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges
} from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { IFlight, IFlightCol } from '../models/flights.model';


@Component({
  selector: 'app-flights-list',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightsComponent implements OnInit, OnChanges, OnDestroy {

  @Input() flights$: Observable<IFlight[]>;

  selectedFlight: IFlight;

  @Input() columns: IFlightCol[] = [];

  @Output() selectedFlightEmitter: EventEmitter<IFlight> = new EventEmitter();

  sub$: Subject<boolean> = new Subject<boolean>();

  ngOnInit(): void {
    this.getDefaultFlight();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getDefaultFlight();
  }

  ngOnDestroy(): void {
    this.sub$.next(true);
    this.sub$.unsubscribe();
  }

  getDefaultFlight() {
    this.flights$.pipe(map((flight: IFlight[]) => flight[0])).pipe(takeUntil(this.sub$))
      .subscribe((flight: IFlight) => {
        this.selectedFlight = flight;
        this.selectedFlightEmitter.emit(flight);
      });
  }

  onRowSelect(flight: IFlight) {
    this.selectedFlightEmitter.emit(flight);
  }



}
