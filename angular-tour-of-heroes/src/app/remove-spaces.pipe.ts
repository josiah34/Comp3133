import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value == null) {
      return value;
    }
    return value.replace(/-/g, ' ');
  }

}
