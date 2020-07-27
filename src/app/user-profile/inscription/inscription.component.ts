import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../login/model/user';
import {InscriptionService} from './services/inscription.service';
import {LoginService} from '../login/services/login.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
    @Output() connected: boolean;
    @Input() confirmPassword: string;
    userConnected: User;
    userInscri: User;
    form: FormGroup;
    image;
    nom;
    prenom;
    email;
    password;

    constructor(private inscriptionService: InscriptionService) {

    }

    ngOnInit(): void {
        this.userInscri = new User();
        if (localStorage.getItem('currentUser') != null) {
            this.connected = true;
            const str: string = localStorage.getItem('currentUser');
            this.userConnected = JSON.parse(str);
        } else {
            this.connected = false;
        }
    }

    async savePost(f) {
        let formData = new FormData();
        console.log(f.nom);
        formData.append('nom', f.nom);
        formData.append('prenom', f.prenom);
        formData.append('email', f.email);
        formData.append('password', f.password);
        // formData.append('confirmPassword', this.form.get('confirmPassword').value);
        formData.append('avatar', this.image);
        formData.append('roles', '');

        let response = await fetch('http://127.0.0.1:8000/user/add', {
            method: 'POST',
            body: formData
        });
        let result = await response.json();
        console.log(result);
    }


    uploadFile(changeEvent: any) {
        this.image = changeEvent.target.files[0];
        console.log(this.image);
    }


}
