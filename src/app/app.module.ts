
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {SpearfishComponent} from './spearfish/spearfish.component';
import {AppComponent} from './app.component';
import {WsocketService} from './service/wsocket.service';

import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';

import {
    AgmCoreModule
} from '@agm/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {WebsocketforspeventService} from './service/websocketforspevent.service';
import { GalleryComponent } from './gallery/gallery.component';
import {MatInputModule} from '@angular/material/input';
import { SpadminComponent } from './spadmin/spadmin.component';
import {SpeventService} from './service/spevent.service';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import {CulturalAndHistoricSitesComponent} from './cultural-and-historic-sites/cultural-and-historic-sites.component';
import {LoginComponent} from './user-profile/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InscriptionComponent } from './user-profile/inscription/inscription.component';
import {MatButtonModule} from '@angular/material/button';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CarteComponent } from './user-profile/dashboard/carte/carte.component';
import { AddUserComponent } from './user-profile/dashboard/add-user/add-user.component';
import { UpdateComponent } from './user-profile/inscription/update/update.component';
import { UpdateUserDashComponent } from './user-profile/dashboard/update-user-dash/update-user-dash.component';
import { AddEventComponent } from './cultural-and-historic-sites/add-event/add-event.component';
import { DashComponent } from './cultural-and-historic-sites/dash/dash.component';
import { DashboardComponent} from './user-profile/dashboard/dashboard.component';


@NgModule({
    imports: [
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MatInputModule,
      MatFormFieldModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      ComponentsModule,
      RouterModule,
      HttpClientModule,
      MatButtonModule,
      MatOptionModule,
      MatSelectModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDQvX7Zv9GqP4abRRHmqiClQP-0TzMCedk'
      }),
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        SpearfishComponent,
        GalleryComponent,
        SpadminComponent,
      AppComponent,
      AdminLayoutComponent,
      CulturalAndHistoricSitesComponent,
      InscriptionComponent,
      DashboardComponent,
      CarteComponent,
      AddUserComponent,
      UpdateComponent,
      UpdateUserDashComponent,
      AddEventComponent,
      DashComponent,
    ],
    providers: [WsocketService, WebsocketforspeventService, SpeventService],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
