import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../../login/model/user';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-update-user-dash',
    templateUrl: './update-user-dash.component.html',
    styleUrls: ['./update-user-dash.component.css']
})
export class UpdateUserDashComponent implements OnInit {
    userInscri: User;
    form: FormGroup;
    image;
    nom;
    prenom;
    email;
    password;
    connected;
    roles;
    userConnected: User;
    confirmPassword;
    id;

    constructor(private router: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.router.params.subscribe(param => this.id = param['id']);
    }

    async update(f) {
        let formData = new FormData();
        console.log(f.roles);
        formData.append('nom', f.nom);
        formData.append('prenom', f.prenom);
        formData.append('email', f.email);
        formData.append('avatar', f.avatar);
        formData.append('roles', f.roles);

        let response = await fetch('http://127.0.0.1:8000/Dashborad/user/update/' + this.id, {
            method: 'POST',
            body: formData
        });
        let result = await response.json();
        if (response.status === 200) {
            this.userConnected = JSON.parse(result);
            localStorage.removeItem('currentUser');
            localStorage.setItem('currentUser', result);
        }
    }

}
