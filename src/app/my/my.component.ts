import { Observable } from 'rxjs/Observable';
import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_USER } from '../reducers/user_reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
  providers: [MainService]
})
export class MyComponent implements OnInit {

  user$: Observable<any>;
  // firstname: Observable<String>;

  constructor(private store: Store<any>, private mainService: MainService, private router: Router) { 
    this.user$ = store.select('user');
    // this.firstname = store.select(state => state.user.firstname)

}

  ngOnInit() {
  }

}
