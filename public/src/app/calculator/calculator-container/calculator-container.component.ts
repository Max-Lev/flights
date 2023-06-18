import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Dropdown } from 'primeng/dropdown';
import { Observable, Observer, Subject, combineLatest, filter, forkJoin, of, startWith, tap } from 'rxjs';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-calculator-container',
  templateUrl: './calculator-container.component.html',
  styleUrls: ['./calculator-container.component.scss']
})
export class CalculatorContainerComponent implements AfterViewInit {

  formGroup: FormGroup;

  selectedCity: City;

  cities: City[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  @ViewChild('dd') dd: Dropdown;

  city = new Subject<City>();
  city$ = this.city.asObservable();

  constructor(private formBuilder: FormBuilder) {

    this.formGroup = this.formBuilder.group({
      range: new FormControl<number>(0),
      size: new FormControl<number>(0)
    })

  }

  ngAfterViewInit(): void {
    const range$ = this.formGroup.controls['range'].valueChanges.pipe(startWith(0));
    const size$ = this.formGroup.controls['size'].valueChanges.pipe(startWith(0));

    combineLatest({ range$, size$ }).subscribe((value: { range$: number, size$: number }) => {
      console.log(value)
    });

    const c = combineLatest({ city: this.city$ }).pipe(tap(v => console.log(v)))
    //  .subscribe((value) => {
    //     console.log(value)
    //   })



    console.log(this.dd);

  }

  click(city: City) {
    console.log(city)
    this.city.next(city)
  }

}
