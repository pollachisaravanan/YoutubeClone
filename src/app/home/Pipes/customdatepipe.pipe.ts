import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdatepipe'
})
export class CustomdatepipePipe implements PipeTransform {

  transform(data:any): any {
    data = data/1000.0;
    return  parseInt(data);

  }

}
