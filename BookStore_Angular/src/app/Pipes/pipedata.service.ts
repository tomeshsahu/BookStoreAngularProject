import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipedataService {

  transform(value: any, args?: any): any {
    console.log("this is from pipe", value, args);
    if (!args) {
      return value;
    } else {
      args = args.toLocaleLowerCase();
    }

    return value.filter((note: any) => {
      return note.title.toLocaleLowerCase().includes(args) | note.description.toLocaleLowerCase().includes(args);

    })
  }

}