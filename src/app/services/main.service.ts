import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  constructor(private http: Http) {
    console.log("mainService initialized...")
  }

  createUser(userObject) {
    console.log("from createUser in service", userObject)
    return this.http.post('http://localhost:3000/api/users',userObject);
  }

  checkUser(userObject) {
    console.log("from checkUser in service", userObject)
    return this.http.post('http://localhost:3000/api/users/login',userObject)
            .map(x => {
              return x;
            });
  }
  
  getUserInfo(username) {
    console.log("from getuserinfo in service", username);
    return this.http.get(`http://localhost:3000/api/users/${username}`).map(res => res.json());

  }

  addItemToCart(item, username) {
    console.log("from addItemToCart in service", item)
    return this.http.put(`http://localhost:3000/api/users/${username}/addtocart`, item)
  }

}
