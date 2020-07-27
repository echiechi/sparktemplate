import {Component, OnInit} from '@angular/core';
import {Event} from '../model/event'
import {ActivatedRoute, Router} from "@angular/router";
import {EventService} from '../../hiking/service/event.service';
import {Participant} from "../model/participant";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    listevent: Event[];
    image;

    constructor(private eventService: EventService, private router: Router) {

    }

    ngOnInit() {
        this.eventService.getAllEvent().subscribe((data: any) => {
            this.listevent = data;
            console.log("hello" + this.eventService)
        });
    }

    /*
        setFile(changeEvent: any) {
            this.image = changeEvent.target.files[0];
        }
    */

    deleteEvent(id: number) {

        /* this.eventService.deleteEvent(id).subscribe((res=> console.log(res)); */

        this.eventService.deleteEvent(id).subscribe((res: Event[]) => this.listevent = res);
        alert('Event deleted ')
    }

    /*this.eventService.updateParticipant(this.participant).subscribe(res=>console.log(res));*/

}

