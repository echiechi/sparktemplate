import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Participantspevent} from '../model/Participantspevent';

@Injectable({
  providedIn: 'root'
})
export class ParticipantspeventService {

  constructor(private http: HttpClient) { }

  getSpeventByUserId(userId) {
    return this.http.get<Participantspevent[]>('http://127.0.0.1:8000/gespeus/' + userId);
  }

}
