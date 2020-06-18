import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AdminLayoutModule} from '../layouts/admin-layout/admin-layout.module';
import {AppModule} from '../app.module';
import {LoginComponent} from '../user-profile/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        AdminLayoutModule,
        MatFormFieldModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
    ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
      LoginComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
