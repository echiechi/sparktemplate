import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent} from '@angular/common/http';
import {User} from '../model/user';
import {catchError} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    public loginNotif = new BehaviorSubject(false);

    constructor(private http: HttpClient) {
    }


    login(email: string, password: string) {

        return this.http.post<User>('http://127.0.0.1:8000/login',
            {
                'username': email,
                'password': password
            }
        )
    }

}
