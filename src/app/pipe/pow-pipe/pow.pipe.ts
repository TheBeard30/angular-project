import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(value: number, digits?: number): unknown {
    return Math.pow(value,isNaN(digits) ? 1 : digits);
  }

}
