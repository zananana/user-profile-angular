import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommentsService, IComment } from '../../services/comments/comments.service';

@Component({
  selector: 'app-profile-comments',
  templateUrl: './profile-comments.component.html',
  styleUrls: ['./profile-comments.component.scss']
})

export class ProfileCommentsComponent implements OnInit {

  constructor(
    private service: CommentsService
  ) { }

  public comments: IComment[] = [];
  public showComments = true;
  public error: string;
  public comment = {
    value: ''
  };
  public addingComment = false;

  @ViewChild('divToScroll')
  public divToScroll: ElementRef;

  @Output()
  public commentsStateChanged: EventEmitter<boolean> = new EventEmitter();

  showHideComments(): void {
    this.showComments = !this.showComments;
    this.commentsStateChanged.emit(this.showComments);
  }

  dateConverter = (timestamp) => {
    let now: any = new Date();
    now = now.getTime();

    let diff = now - timestamp;
    diff = diff / 86400000;
    let displayDays: string = (Math.floor(diff)).toString();

    if (displayDays === '0') {
        displayDays = 'today';
    } else {
        displayDays += 'd';
    }

    return displayDays;
  }

  addComment = (event: any): string => {
    if (event.which === 13 && event.currentTarget.value.trim().length) {
      this.addingComment = true;

      const randomId: number = Math.random();
        let date: any = new Date();
        date = date.getTime();

        const newComment: IComment = {
            id: randomId,
            firstName: 'Agnieszka',
            lastName: 'Ziaja',
            comment: this.comment.value,
            authorId: 4,
            datePosed: date,
            authorAvatarUrl: '/avatar.png'
        };

      this.comment.value = '';
      this.error = '';
      this.service.addComments(newComment).subscribe(data => {
        this.service.getComments().subscribe(comments => {
          this.comments = comments;
          this.addingComment = false;
          this.scroll(this.divToScroll.nativeElement);
        });
      });
    } else if (event.which === 13 && !event.currentTarget.value.trim().length) {
        this.error = 'The comment cannot be an empty string.';
    }

    return 'aaa';
  }

  scroll(el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  ngOnInit() {
    this.service.getComments().subscribe(data => {
      this.comments = data;
      this.scroll(this.divToScroll.nativeElement);
    });
  }

}
