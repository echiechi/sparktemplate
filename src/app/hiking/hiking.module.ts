import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HikingRoutingModule } from './hiking-routing.module';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ParticipantComponent } from './participant/participant.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import {FormsModule} from "@angular/forms";
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [HomeComponent,
    EventComponent,
    ParticipantComponent,
    UpdateEventComponent,
    UpdateParticipantComponent,
    ListParticipantComponent

  ],
  imports : [
      CommonModule,
    HikingRoutingModule,
    FormsModule,
    HttpClientModule
  ],
})
export class HikingModule { }

