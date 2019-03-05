import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AAA user-profile-angular';

  hideComments = false;

  public handleCommentsStateChanged(showComments: boolean): void {
    this.hideComments = !showComments;
  }
}
