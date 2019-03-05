import { Pipe, PipeTransform } from '@angular/core';
import { IComment } from 'src/app/services/comments/comments.service';

@Pipe({
  name: 'sortComments'
})
export class SortCommentsPipe implements PipeTransform {

  transform(comments: IComment[]): IComment[] {

    comments.sort((x, y) => {
      return x.datePosed - y.datePosed;
    });
    return comments;
  }

}
