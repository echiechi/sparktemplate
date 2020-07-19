import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from '../login/model/user';
import {InscriptionService} from './services/inscription.service';
import {LoginService} from '../login/services/login.service';

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
    @Output() connected: boolean;
    @Input() nom: string;
    @Input() prenom: string;
    @Input() email: string;
    @Input() password: string;
    @Input() confirmPassword: string;
    @Input() avatar: File | null;
    userLoged: User;

    constructor(private inscriptionService: InscriptionService) {
    }

    ngOnInit(): void {
        if (localStorage.getItem('currentUser') != null) {
            this.connected = true;
        } else {
            this.connected = false;
        }
    }

    inscription() {
        console.log(this.avatar);
        console.log(this.email);
        this.inscriptionService.inscription(this.email, this.password, this.nom, this.prenom, this.avatar).subscribe(
            (data: User) => {
                console.log(this.userLoged = data)
                localStorage.setItem('currentUser', JSON.stringify(this.userLoged))
                window.location.reload()
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


}
