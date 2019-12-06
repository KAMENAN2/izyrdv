import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listRdv'
})
export class ListRdvPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
