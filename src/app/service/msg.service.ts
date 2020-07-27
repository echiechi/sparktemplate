import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Msg} from '../model/Msg';
import {User} from '../user-profile/login/model/user';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(private http: HttpClient) {
  }
  getAllMsg() {
    return this.http.get<Msg[]>('http://127.0.0.1:8000/getallmsg')
  }

}
