import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpadminService {

  constructor(private http: HttpClient) { }

  submitForm(formData: FormData) {
    this.http.post('http://127.0.0.1:8001/addffrm', formData).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    )
  }
}
