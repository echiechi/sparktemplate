import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
   /* this.http.get('http://127.0.0.1:8000/product').subscribe(res => console.log(res));
    this.http.post('http://127.0.0.1:8000/product/new', {
      "name": "test2",
      "description": "test3"
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(res => console.log(res));*/
  }
}
