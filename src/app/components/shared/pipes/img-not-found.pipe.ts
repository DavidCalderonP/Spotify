import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgNotFound'
})
export class ImgNotFoundPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): string {
    try{
      return value[0].url || value[1].url || value[2].url;
    }catch(err){
      return "https://dinahosting.com/blog/cont/uploads/2021/03/error-404.jpg"
    }

  }

}
