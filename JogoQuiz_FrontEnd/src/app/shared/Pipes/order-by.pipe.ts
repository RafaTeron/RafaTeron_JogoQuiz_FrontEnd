import { Pipe, PipeTransform } from '@angular/core';
import { Answer } from '../../model/answer';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(value: Answer[]): Answer[] {
    if (!Array.isArray(value)) {
      return value;
    }

    return value.sort((a, b) => a.answerText.localeCompare(b.answerText));
  }
}


