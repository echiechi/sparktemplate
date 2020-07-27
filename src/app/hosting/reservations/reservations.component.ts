import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';
import { User } from '../../user-profile/login/model/user';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {ApiService} from '../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
posts;rows;
  constructor(private apiservice: ApiService,private route: ActivatedRoute,private router: Router ) { }
 

  ngOnInit(): void {
    if (localStorage.getItem('currentUser') != null) {
      //connected 
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        //, JSON.stringify(this.userLoged)
        console.log(currentUser);
        console.log(currentUser.id);
                    //params.id
        this.route.params.subscribe(params => {      
          this.apiservice.getOwnerReservatinos(currentUser.id).subscribe((data)=>{
            console.log(data);
          this.rows = data;
            // return  data;
          });
        });
    }else{
      //redirect to loginpage
      this.router.navigate(['/login']);
    }
  }

}
