import {Component, OnInit} from '@angular/core';
import {User} from '../../login/model/user';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    userInscri: User;
    form: FormGroup;
    image;
    nom;
    prenom;
    email;
    password;
    connected;
    userConnected: User;
    confirmPassword;

    constructor() {
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
        formData.append('confirmPassword', f.confirmPassword);

        let response = await fetch('http://127.0.0.1:8000/user/update/' + this.userConnected.id, {
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


    uploadFile(changeEvent: any) {
        this.image = changeEvent.target.files[0];
        console.log(this.image);
    }
}
