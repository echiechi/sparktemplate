import { Component, OnInit } from '@angular/core';
import { Shop } from '../models/Shop';
import { ShopService } from '../services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { NotifService } from '../services/notif.service';
@Component({
  selector: 'app-new-shop',
  templateUrl: './new-shop.component.html',
  styleUrls: ['./new-shop.component.css']
})
export class NewShopComponent implements OnInit {

  shop = new Shop();
  userId: number;
  isEdit = false;
  image: File;
  
  constructor(private shopService: ShopService,
    private router: ActivatedRoute,
    private notifService: NotifService) { }

  ngOnInit(): void {
    this.shop.imageName = 'Upload image';
    this.router.params.subscribe(res => {
      if (res['shopid']) {
        this.isEdit = true;
        this.shopService.getShop(res['shopid']).subscribe((shop: Shop) => this.shop = shop);
      }
    });
  }

  onSubmit() {
    let formData: FormData = new FormData();
    formData.append('id', '' + this.shop.id);
    formData.append('file', this.image);
    formData.append('userid', '1');
    formData.append('name', this.shop.name);
    formData.append('description', this.shop.description);
    formData.append('keyWords', this.shop.keyWords);
    formData.append('city', this.shop.city);
    formData.append('country', this.shop.country);
    this.notifService.showNotification('bottom', 'right', 'success', 'Shop saved successfully')
    this.shopService.sendFile(formData).subscribe(res => {
      if (!this.isEdit) {
        this.shop = new Shop();
      }
    });
  }

  setFile(changeEvent: any) {
    this.image = changeEvent.target.files[0];
    this.shop.imageName = this.image.name;
  }

  delete() {
    this.shopService.delete(this.shop.id);
  }

}
