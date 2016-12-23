import { Observable } from 'rxjs/Observable';
import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ADD_USER } from '../reducers/user_reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./login.component.animations.scss'],
  providers: [MainService]
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<any>, private mainService: MainService, private router: Router) { }

  ngOnInit() {
  }

  checkUser(userObject) {

    this.mainService.checkUser(userObject)
      .subscribe(res => {
        console.log("from checkUser subscribe", res);
        if (res){
          let username = JSON.parse(res._body).username;
          const user = {username: username, firstname: "test", lastname: "test", email: "test", password:"test"}
          this.store.dispatch({
            type: ADD_USER,
            payload: user
          });
          this.router.navigate(["/my/profile"])
        }
      })
  }

}