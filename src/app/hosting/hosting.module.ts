import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { HostingRoutingModule } from './hosting-routing.module';
import { RecherchepostComponent } from './recherchepost/recherchepost.component';
import { PostsComponent } from './posts/posts.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddPostComponent } from './add-post/add-post.component';
import { ProfileComponent } from './profile/profile.component';
import { PostCardComponent } from './posts/post-card/post-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ReservationsComponent } from './reservations/reservations.component';


@NgModule({
  declarations: [RecherchepostComponent, PostsComponent, AddPostComponent, ProfileComponent,PostCardComponent, MyPostsComponent, EditPostComponent, MyBookingsComponent, ReservationsComponent],
  imports: [
    CommonModule,
    HostingRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule
    
  ]
})
export class HostingModule { }
