import {Injectable} from '@angular/core';
import {User} from '../../login/model/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ServiceService {

    constructor(private http: HttpClient) {
    }

    getAllUsers() {
        return this.http.get<Array<User>>('http://127.0.0.1:8000/Dashborad/user/getAll');
    }

    delete(id) {
        return this.http.post<any>('http://127.0.0.1:8000/Dashborad/user/delete/' + id,
            {});
    }
}
