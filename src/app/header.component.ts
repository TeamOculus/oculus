import { Observable } from 'rxjs/Observable';
import { user } from './reducers/user_reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  clickedMenu: boolean = false;
  clickedRift: boolean = false;
  clickedExperiences: boolean = false;
  profileDropdownClick: boolean = false;
  // isloggedin: boolean = false;

  user$: Observable<any>;
  // firstname: Observable<String>;
  constructor(private store: Store<any>) {

    this.user$ = store.select('user');
    // this.firstname = store.select(state => state.user.firstname)

    // this.store.select('user')
    //   .subscribe(user => {
    //     console.log("from store.select", user)
    //     this.user = user;
    //     this.isloggedin = true;
    //   });
  }

  ngOnInit() {
  }
  onClickMenu() {
    this.clickedMenu = !this.clickedMenu;
  }
  onClickRift() {
    this.clickedRift = !this.clickedRift;
  }
  onClickExperiences() {
    this.clickedExperiences = !this.clickedExperiences;
  }
  onProfileClick() {
    this.profileDropdownClick = !this.profileDropdownClick;
  }

}
