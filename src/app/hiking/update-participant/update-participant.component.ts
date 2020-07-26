import {Component, OnInit} from '@angular/core';
import {Participant} from '../model/participant';
import {EventService} from "../service/event.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'app-update-participant',
    templateUrl: './update-participant.component.html',
    styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {
    // listparticipant: any;
    listparticipant: Participant[];

    //  participant: any;
    participant: Participant = new Participant();

    constructor(private eventService: EventService, private router: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.router.params.subscribe(res => this.eventService.getPartById(res.id).subscribe((p: any) => {
           this.participant = p;
        }));
    }

/*
updateParticipant() {
      this.eventService.updateParticipant(this.participant).subscribe(res=>console.log(res));
    }
 */
    updateParticipant() {
      this.eventService.updateParticipant(this.participant).subscribe(res=>console.log(res));
    }
}
