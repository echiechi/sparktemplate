import { Component, OnInit } from '@angular/core';
import {User} from '../../login/model/user';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userInscri: User;
  form: FormGroup;
  image;
  nom;
  prenom;
  email;
  password;
  roles;
  confirmPassword;
  result;
  constructor() { }

  ngOnInit(): void {
  }

  async savePost(f) {
    let formData = new FormData();
    console.log(f.roles);
    formData.append('nom', f.nom);
    formData.append('prenom', f.prenom);
    formData.append('email', f.email);
    formData.append('password', f.password);
    formData.append('roles', f.roles);

    // formData.append('confirmPassword', this.form.get('confirmPassword').value);
    formData.append('avatar', this.image);

    let response = await fetch('http://127.0.0.1:8000/Dashborad/user/add', {
      method: 'POST',
      body: formData
    });
    this.result = await response.json();
    console.log(this.result);
  }


  uploadFile(changeEvent: any) {
    this.image = changeEvent.target.files[0];
    console.log(this.image);
  }


}
