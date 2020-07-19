import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../login/model/user';

@Injectable({
    providedIn: 'root'
})
export class InscriptionService {

    constructor(private http: HttpClient) {
    }

    inscription(email: string, password: string, nom: string, prenom: string, avatar: File) {

        return this.http.post<User>('http://127.0.0.1:8000/user/add',
            {
                'nom': nom,
                'prenom': prenom,
                'password': password,
                'email': email,
                'avatar': avatar,
            }
        )
    }
}
