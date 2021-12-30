import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarTexto'
})
export class RecortarTextoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let texto = value.slice(0, 250)


    return `${texto} .........`;
  }

}
