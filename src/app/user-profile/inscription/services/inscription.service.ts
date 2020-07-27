import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../login/model/user';
import {RequestOptions} from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class InscriptionService {
    //formData;
    constructor(private http: HttpClient) {
    }

    private _getHeaders(): Headers {
        let header = new Headers({
            'Content-Type': 'application/json'
        });

        return header;
    }


    inscription(f, avatar) {
        // let formData = new FormData();
        console.log(f);
        let jsonform = JSON.stringify(f);

        return this.http.post('http://127.0.0.1:8000/user/add', {
                jsonform,
                avatar
            }
        );
    }
}
