import {
  AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, Output, ViewChild
} from '@angular/core';
import { Listbox } from 'primeng/listbox';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { IWorker } from '../models/worker.model';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkersComponent implements AfterViewInit, OnDestroy {

  @Input() workers$: Observable<IWorker[]>;

  selectedWorker: IWorker;

  @ViewChild('listbox') listbox: Listbox;

  @Output() selectedWorkerEventEmitter: EventEmitter<IWorker> = new EventEmitter();

  sub$: Subject<boolean> = new Subject<boolean>();

  ngAfterViewInit(): void {
    this.setDefaultWorker();
  }

  ngOnDestroy(): void {
    this.sub$.next(true);
    this.sub$.unsubscribe();
  }

  onClick(selectedWorker: any) {
    this.selectedWorkerEventEmitter.emit(selectedWorker);
  }

  setDefaultWorker(): void {
    this.workers$.pipe(map((worker: IWorker[]) => worker[0]))
      .pipe(takeUntil(this.sub$)).subscribe(worker => {
        this.listbox.value = worker;
        this.selectedWorker = worker;
      });
  }

}
