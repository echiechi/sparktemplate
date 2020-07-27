import {Component, Input, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
    selector: 'app-carte',
    templateUrl: './carte.component.html',
    styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

    @Input() nom: string;
    @Input() prenom: string;
    @Input() roles: string;
    @Input() email: string;
    @Input() avatar: string;
    @Input() id: number;

    constructor(private service: ServiceService) {
    }

    ngOnInit(): void {
    }

    delete(id) {
        const confirm = prompt('do you confirm delete this user inter yes to continue');
        if (confirm === 'yes') {
            this.service.delete(id).subscribe((response: any) => {
                alert(response.data);
                window.location.reload();
            });
        }
    }

}
