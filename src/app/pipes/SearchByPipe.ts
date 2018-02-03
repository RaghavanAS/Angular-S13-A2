import { Pipe, PipeTransform } from '@angular/core';
/*
 * Searches the passed string in the customerList array
 * Takes a string as a value.
 * transform method returns the array elements
*/
@Pipe({
  name: 'searchBy',
   pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (value.length !== 0) {
      return value.filter((item) => item.name.startsWith(args));
    } else {
      return [];
    }
  }
}
