import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/Shop';
import { ShopService } from '../services/shop.service';
@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css']
})
export class NewShopComponent implements OnInit {

  shop = new Shop();
  userId: number;
  image;
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let formData: FormData = new FormData();
    formData.append('file', this.image);
    formData.append('userid', '1');
    formData.append('name', this.shop.name);
    formData.append('description', this.shop.description);
    formData.append('keyWords', this.shop.keyWords);
    formData.append('city', this.shop.city);
    formData.append('country', this.shop.country);

    this.shopService.sendFile(formData).subscribe(res => console.log(res));
  }

  setFile(changeEvent: any) {
    this.image = changeEvent.target.files[0];
  }

}
