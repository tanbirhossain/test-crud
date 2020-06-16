import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { baseUrl } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class AccountService {



  constructor(private http: HttpClient) { }

  signInAccount(user: User) {
    // var requestHeader = new HttpHeaders({'No-Auth': 'True'});
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True'}) };
    return this.http.post<User>(baseUrl + '/sign-in', user, httpOptions);
  }
  signoutAccount() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<"">(baseUrl + '/tokens/cancel', httpOptions);
  }
}
