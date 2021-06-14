import { Pipe, PipeTransform } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Pipe({
  name: 'userSearch',
})
export class UserSearchPipe implements PipeTransform {

  transform(value: any, search?: any): any {
    if (!value) {
      return [];
    }
    if (!search) {
      return value;
    }
    search = search.toLowerCase();
    return value.filter((val: Korisnik) => {
      return (
      val.email.toLowerCase().includes(search)
     );
    });
  }
}

