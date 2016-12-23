import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

  constructor(private http: Http) {
    console.log("mainService initialized...")
  }

  createUser(userObject){
    console.log("from createuser in service", userObject)
    return this.http.post('http://localhost:3000/api/users',userObject);
    // return this.http.get('https://api.spotify.com/v1/search?q=michael&type=track').map(res => res.json())
  }

}