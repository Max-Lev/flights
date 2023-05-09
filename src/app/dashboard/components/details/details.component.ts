import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IFlightCol, IIFlight } from '../models/flights.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent {

  @Input() flightDetails: IIFlight;

  @Input() columns: IFlightCol[] = [];


}
