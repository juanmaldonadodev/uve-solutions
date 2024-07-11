import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: any, property: string): string {
    if (!value || !property) {
      return '';
    }

    const name = value[property];
    if (!name) {
      return '';
    }

    const nameParts = name.split(' ');
    const initials = nameParts.map((part: string) => part.charAt(0)).join('');

    return initials.toUpperCase();
  }

}
