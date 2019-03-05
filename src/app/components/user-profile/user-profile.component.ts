import { Component, OnInit } from '@angular/core';
import { UserService, Iuser } from 'src/app/services/user/user.service';

import { faHeart, faWindowClose, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fasHeart, faWindowClose as fasWindowClose, faShareSquare as fasShareSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private service: UserService
  ) { }

  public user: Iuser = {
    id: null,
    firstName: '',
    lastName: '',
    likesNum: 0,
    following: 0,
    followers: 0,
    city: '',
    country: '',
    avatarUrl: '/avatar.png',
    profileUser: ''
  };

  public faHeart = faHeart;
  public fasHeart = fasHeart;

  public faWindowClose = faWindowClose;
  public fasWindowClose = fasWindowClose;

  public faShareSquare = faShareSquare;
  public fasShareSquare = fasShareSquare;



  public isLiked = false;
  public isFollowed = false;
  public isShown = false;

  toggleLike() {
    this.isLiked ? this.user.likesNum++ : this.user.likesNum--;
    this.updateUser(this.user);
  }

  toggleFollow() {
    this.isFollowed ? this.user.followers++ : this.user.followers--;
    this.updateUser(this.user);
  }

  updateUser(user: Iuser) {
    this.service.updateUser(user).subscribe((res) => {
      this.user = res;
    });
  }

  ngOnInit() {
    this.service.getUser().subscribe((res) => {
      this.user = res;
    });
  }

}
