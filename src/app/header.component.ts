import { Router } from '@angular/router';
import { MainService } from './services/main.service';
import { Observable } from 'rxjs/Observable';
// import { user, LOG_OUT } from './reducers/user_reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import {LOG_OUT} from './reducers/user_reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MainService]
})
export class HeaderComponent implements OnInit {
  clickedMenu: boolean = false;
  clickedRift: boolean = false;
  clickedExperiences: boolean = false;
  clickedUserDropdown: boolean = false;
  profileDropdownClick: boolean = false;

  // user$: Observable<any>;
  // constructor(private store: Store<any>) {
  //   this.user$ = store.select('user');
  // }
  currentUser;
  cartProps;
  cost;

  constructor(private store: Store<any>, private mainService: MainService, private router: Router) {
    store.select('user')
      .subscribe( res => {
        // console.log("from currentuser subscribe", res);
        this.currentUser = res;
      });
    store.select('cart')
      .subscribe( res => {
        // console.log("from cart subscribe", res);
        this.cartProps = {
          cart: res.cart,
          available: res.available,
          totalprice: res.totalprice
        }
        this.cost = this.cartProps.totalprice + 30;
      });
  }

  ngOnInit() {
    console.log("from header oninit", this.currentUser)
  }
  onClickMenu() {
    this.clickedMenu = !this.clickedMenu;
  }
  onClickUser() {
    this.clickedUserDropdown = !this.clickedUserDropdown;
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

  logOut() {
    this.store.dispatch({
      type: LOG_OUT
    });
    this.profileDropdownClick = !this.profileDropdownClick;
    this.router.navigate(['/']);
  }

}
