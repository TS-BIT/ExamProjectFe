import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(str: string, ...args: string[]): string {
    let strToReturn: string | undefined = str;
    if (strToReturn === undefined) return '';
    for (let i = 0; i < args.length; i++) {
      strToReturn = strToReturn.replace(args[i], ' TIME: ');
    }
    return strToReturn.slice(0,22);
  }

}
