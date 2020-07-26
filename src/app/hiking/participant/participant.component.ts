import {Component, OnInit} from '@angular/core';
import {Participant} from '../model/participant';
import {EventService} from "../service/event.service";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";

import {Event} from '../model/event'


@Component({
    selector: 'app-participant',
    templateUrl: './participant.component.html',
    styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

    participant: Participant = new Participant();
    // listparticipant: any;
    listparticipant: Participant[];

    constructor(private eventService: EventService, private router: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.router.params.subscribe(param=>{
            this.participant.nameEvent = param.id;
            this.eventService.getAllParticipant(param.id).subscribe((data: any) => {
                this.listparticipant = data;
                console.log("hello" + this.eventService)
            });
        })

    }

    sendParticipant() {
        this.eventService.addParticipant(this.participant).subscribe((res: Participant[]) => {
            this.listparticipant = res;
            this.participant.phone =null;
            this.participant.age =null;
            this.participant.firstName =null;
            this.participant.lastName =null;
            this.participant.id =null;
        })}


      deleteParticipant(id: number){
        this.eventService.deleteParticipant(id).subscribe((res: Participant[]) => this.listparticipant = res);
      }

}
