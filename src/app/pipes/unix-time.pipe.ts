import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixTime'
})
export class UnixTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return new Date(value);

  }

}
