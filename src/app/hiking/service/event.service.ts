import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import {Event} from '../model/event'
import {Participant} from '../model/participant';


@Injectable({
    providedIn: 'root'
})
export class EventService {

    constructor(private http: HttpClient) {
    }

    getAllEvent() {
        return this.http.get('http://127.0.0.1:8000/show2');
    }

    addEvent(event) {
        return this.http.post('http://127.0.0.1:8000/addevent', event);
    }

    addParticipant(participant) {

        return this.http.post('http://127.0.0.1:8000/addparticipant', participant);
    }

    getAllParticipant(id) {
        return this.http.get('http://127.0.0.1:8000/show3/'+id);
    }

    deleteParticipant(id){
        return this.http.post('http://127.0.0.1:8000/deleteparticipant/'+id, null);
    }

    getPartById(id){
        return this.http.get('http://127.0.0.1:8000/participant/'+id);
    }

    getEventById(id){
        return this.http.get('http://127.0.0.1:8000/event/'+id);
    }

    /*



     updateEvent(event: Event){
           return this.http.put('http://127.0.0.1:8000/updateevent');
       }





    deleteParticipant(participant: Participant) {

    }
    */
    updateParticipant(participant: Participant) {
        return this.http.post('http://127.0.0.1:8000/updateparticipant/' + participant.id, participant);

    }


    deleteEvent(id) {
        return this.http.post('http://127.0.0.1:8000/deleteevent/'+id, null);
    }

    updateEvent(event: Event) {
        return this.http.post('http://127.0.0.1:8000/updateevent/' + event.id, event);

    }

}


