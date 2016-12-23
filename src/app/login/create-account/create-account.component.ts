import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ADD_USER} from '../../reducers/user_reducer';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  providers: [MainService]
})
export class CreateAccountComponent implements OnInit {

  constructor(private store: Store<any>, private mainService: MainService) { }

  ngOnInit() {
  }

  addUser(userObject) {
    this.store.dispatch({
      type: ADD_USER,
      payload: userObject
    });
    this.mainService.createUser(userObject);
  }

}
