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
          // let username = JSON.parse(res._body).username;
          // let firstname = JSON.parse(res._body).firstname;
          // let lastname = JSON.parse(res._body).lastname;
          // let email = JSON.parse(res._body).email;
          // let password = JSON.parse(res._body).password;
          // const user = {username: username, firstname: firstname, lastname: lastname, email: email, password: password};
          if(res._body === ""){
            alert("Wrong username or password");
          } else {
            const user = JSON.parse(res._body);
            this.store.dispatch({
              type: ADD_USER,
              payload: user
            });
            this.router.navigate(["/my/profile"])
          }
        
      })
  }

}