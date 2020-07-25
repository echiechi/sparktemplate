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
    userLoged: User;
    userInscri: User;
    form: FormGroup;

    constructor(public fb: FormBuilder, private inscriptionService: InscriptionService) {
        this.form = this.fb.group({
            nom: [''],
            prenom: [''],
            email: [''],
            password: [''],
            confirmPassword: [''],
            avatar: [null],
        })

    }

    ngOnInit(): void {
        this.userInscri = new User();
        if (localStorage.getItem('currentUser') != null) {
            this.connected = true;
        } else {
            this.connected = false;
        }
    }

    inscription() {
        console.log(this.form.value);
        const formData: any = new FormData();
        formData.append('nom', this.form.get('nom').value);
        formData.append('prenom', this.form.get('prenom').value);
        formData.append('email', this.form.get('email').value);
        formData.append('password', this.form.get('password').value);
        // formData.append('confirmPassword', this.form.get('confirmPassword').value);
        formData.append('avatar', this.form.get('avatar').value);
        this.inscriptionService.inscription(formData).subscribe(
            (data) => {
                console.log(data)
                localStorage.setItem('currentUser', JSON.stringify(this.userLoged))
            },
            error => {
                // if (error.status === 401) {
                //     console.log(this.error = {
                //         error: error.error.error
                //     })
                //     localStorage.removeItem('currentUser')
                //     window.location.reload()
                // }
            }
        );
    }

    uploadFile(event) {
        const form = new FormData();

        const file = (event.target as HTMLInputElement).files[0];
        this.form.patchValue({
            fishImage: file
        });
        this.form.get('avatar').updateValueAndValidity()
    }


}
