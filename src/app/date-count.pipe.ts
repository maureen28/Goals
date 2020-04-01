import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount',
  pure: true,
})
export class DateCountPipe implements PipeTransform {
  transform(value: any): number {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getUTCFullYear());
    const dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInDay = 86400;
    const dateDifferenceSeconds = dateDifference * 0.001;
    const dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}
