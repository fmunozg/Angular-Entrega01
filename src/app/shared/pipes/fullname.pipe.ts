import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname',
  standalone: true
})
export class FullnamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " " + args;
  }

}
