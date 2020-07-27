import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {EventComponent} from "./event/event.component";
import {ParticipantComponent} from "./participant/participant.component";
import {UpdateEventComponent} from "./update-event/update-event.component";
import {UpdateParticipantComponent} from "./update-participant/update-participant.component";
import {ListParticipantComponent} from "./list-participant/list-participant.component";

const routes: Routes = [{

path : 'home',
  component: HomeComponent ,
  pathMatch: 'full'
},{
  path : 'event',
    component: EventComponent ,
    pathMatch: 'full'
},{
  path : 'participant/:id',
  component: ParticipantComponent ,
  pathMatch: 'full'
},{
  path : 'updateEvent/:id',
  component: UpdateEventComponent ,
  pathMatch: 'full'
},{
  path : 'updateParticipant/:id',
  component: UpdateParticipantComponent ,
  pathMatch: 'full'
},{
  path : 'listParticipant',
    component: ListParticipantComponent ,
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HikingRoutingModule { }

