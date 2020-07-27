import { Injectable } from '@angular/core';
import {User} from '../user-profile/login/model/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(id) {
    return this.http.get<User>('http://127.0.0.1:8000/user/findBy/' + id)
  }

  getAllUsers() {
    return this.http.get<User[]>('http://127.0.0.1:8000/user/findAll')
  }
}
