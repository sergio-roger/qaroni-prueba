import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortWord',
})
export class ShortWordPipe implements PipeTransform {
  transform(word: string, limit: number): string {
    if (word.length == 0) return word;

    if (limit > word.length) {
      return word;
    }

    return word.substring(0, limit);
  }
}
