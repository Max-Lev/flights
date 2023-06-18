import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {

    const hours = Math.floor(value / 60);

    const calcMinutes = Math.floor(value % 60);

    let minutes = '';

    if (calcMinutes === 0) {
      minutes = '00';
    } else if (calcMinutes < 10) {
      minutes = `0${Math.floor(value % 60)}`;
    } else {
      minutes = `${calcMinutes}`;
    }

    const formateTime = `${hours}h ${minutes}m`;

    return formateTime;
  }

}
