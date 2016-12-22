import { user } from './reducers/user_reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import {Subscription} from 'rxjs/subscription';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  clickedMenu: boolean = false;
  clickedRift: boolean = false;
  clickedExperiences: boolean = false;

  // actionSubscription: Subscription;
  // user$: Observable<any>;
  // destroyed$: Subject<any> = new Subject<any>();

  public user;

  constructor(private store: Store<any>) {
    
    // this.user$ = this.store.select(state => state.user);
    // this.user$
    //   .subscribe(user => {
    //     console.log(user);
    //     this.user = user;
    //   })

    this.store.select('user')
      .subscribe(user => {
        console.log(user)
        this.user = user;
      });
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

}
