import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  standalone: false,
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase(); // Converte o texto para caixa alta
  }
}
