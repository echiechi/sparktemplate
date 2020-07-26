import { Component, OnInit } from '@angular/core';
import {Event} from "../model/event";
import {EventService} from "../service/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Participant} from "../model/participant";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {

  event: Event = new  Event() ;
    image;



  constructor(private eventService: EventService, private router: ActivatedRoute , private http:HttpClient) { }

  ngOnInit(): void  {
    this.router.params.subscribe(res => this.eventService.getEventById(res.id).subscribe((e: any) => {
    this.event = e;
}));
}


updateEvent() {
      this.eventService.updateEvent(this.event).subscribe(res=>console.log(res));
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
