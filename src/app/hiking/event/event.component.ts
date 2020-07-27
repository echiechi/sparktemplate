import {Component, OnInit} from '@angular/core';
import {Event} from '../model/event'
import {EventService} from "../service/event.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
    event: Event = new Event();
    image;

    constructor(private eventService: EventService , private http:HttpClient) {
    }

    ngOnInit(): void {
    }

    sendEvent() {
        this.eventService.addEvent(this.event).subscribe(res => console.log(res));
        alert('Event added')
    }
    setFile(changeEvent: any) {
        this.image = changeEvent.target.files[0];
        let formData: FormData = new FormData();
        formData.append('file', this.image);
       this.http.post("http://127.0.0.1:8000/uploadimg",formData).subscribe((res : any)=>
       {
           this.event.image = res.img;
           console.log(this.event.image)
       });

    }


}
