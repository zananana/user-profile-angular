import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileCommentsComponent } from './components/profile-comments/profile-comments.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortCommentsPipe } from './pipes/sort-comments.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ProfileCommentsComponent,
    SortCommentsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
