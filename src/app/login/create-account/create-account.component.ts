import { MainService } from './../../services/main.service';
import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ADD_USER} from '../../reducers/user_reducer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  providers: [MainService]
})
export class CreateAccountComponent implements OnInit {

  constructor(private store: Store<any>, private mainService: MainService, private router: Router) { }

  ngOnInit() {
  }

  addUser(userObject) {
    console.log("from adduser in createaccountts", userObject)
    this.mainService.getUserInfo(userObject.username)
      .subscribe(res => {
        console.log(res);
        if (res.length === 0){
          this.store.dispatch({
            type: ADD_USER,
            payload: userObject
          });
          this.mainService.createUser(userObject)
            .subscribe(res => {
              console.log("from createuser subscribe", res);
              this.router.navigate(['/']);
            });
        } else {
          alert("username is already taken")
        }
      })
    // this.store.dispatch({
    //   type: ADD_USER,
    //   payload: userObject
    // });
    // this.mainService.createUser(userObject)
    //   .subscribe(res => {
    //     console.log("from createuser subscribe", res);
    //     this.router.navigate(['/']);
    //   });
  }

  

}
