import {Component, Input, OnInit, Output} from '@angular/core';
import {LoginService} from './services/login.service';
import {User} from './model/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    @Input() email: string;
    @Input() pwd: string;
    @Output() connected: boolean;
    userLoged: User;
    error: any;

    constructor(private loginService: LoginService) {
    }

    ngOnInit(): void {
        if (localStorage.getItem('currentUser') != null) {
            this.connected = true;
        } else {
            this.connected = false;
        }
    }

    login() {
        this.loginService.login(this.email, this.pwd).subscribe(
            (data: User) => {
                console.log(this.userLoged = data)
                localStorage.setItem('currentUser', JSON.stringify(this.userLoged))
                this.loginService.loginNotif.next(true)
            },
            error => {
                if (error.status === 401) {
                    console.log(this.error = {
                        error: error.error.error
                    })
                    localStorage.removeItem('currentUser')
                    this.loginService.loginNotif.next(false)

                }
            }
        );
    }

}
