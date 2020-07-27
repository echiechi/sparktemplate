import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Spevent} from '../model/Spevent';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {error} from '@angular/compiler/src/util';


@Injectable()
    //{
 //   providedIn: 'root'
//})
export class SpeventService {
    constructor(private http: HttpClient) {
    }


    addSpevent(spevent: Spevent) {
        return this.http.post<Spevent>('http://localhost/addspe', spevent);
    }
    getSpeventFromDate() {
        return this.http.get<Spevent[]>('http://127.0.0.1:8000/gespefrdte');
    }
    getNbrSpevent() {
        return this.http.get<[1]>('http://127.0.0.1:8000/gespenbr');
    }

}
