import {Component, OnInit} from '@angular/core';
import {ServiceService} from './service/service.service';
import {ArrayType} from '@angular/compiler';
import {User} from '../login/model/user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    users: Array<User>;

    constructor(private service: ServiceService) {
        this.service.getAllUsers().subscribe(users => this.users = users);
    }


    ngOnInit(): void {
    }

}
