import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFlight } from '../components/models/flights.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private httpClient: HttpClient) {

  };

  getFlightByWorkerId(workerId: number): Observable<IFlight[]> {
    return this.httpClient.get<IFlight[]>(`${environment.flights}/${workerId}`);
  }



}
