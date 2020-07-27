import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SpadminService} from '../service/spadmin.service';
import {Fish} from '../model/Fish';

@Component({
  selector: 'app-spadmin',
  templateUrl: './spadmin.component.html',
  styleUrls: ['./spadmin.component.css']
})
export class SpadminComponent implements OnInit {
  form: FormGroup;
  fish: Fish;
  constructor(public fb: FormBuilder, private spadminService: SpadminService) {
    this.form = this.fb.group({
      idFish: [''],
      season: [''],
      minDepth: [''],
      size: [''],
      fishDescription: [''],
      fishImage: [null],
    })
  }

  ngOnInit(): void {
    this.fish = new Fish();

  }
  submitForm() {
    console.log(this.form.value)
    const formData: any = new FormData();
    formData.append('idFish', this.form.get('idFish').value);
    formData.append('season', this.form.get('season').value);
    formData.append('minDepth', this.form.get('minDepth').value);
    formData.append('size', this.form.get('size').value);
    formData.append('fishDescription', this.form.get('fishDescription').value);
    formData.append('fishImage', this.form.get('fishImage').value);
    this.spadminService.submitForm(formData);
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      fishImage: file
    });
    this.form.get('fishImage').updateValueAndValidity()
  }

}
