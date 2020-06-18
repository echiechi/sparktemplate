import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {TableListComponent} from './table-list/table-list.component';
import {TypographyComponent} from './typography/typography.component';
import {IconsComponent} from './icons/icons.component';
import {MapsComponent} from './maps/maps.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {UpgradeComponent} from './upgrade/upgrade.component';
import {
    AgmCoreModule
} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AdminLayoutModule} from './layouts/admin-layout/admin-layout.module';
import { CulturalAndHistoricSitesComponent } from './cultural-and-historic-sites/cultural-and-historic-sites.component';
import { LoginComponent } from './user-profile/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AdminLayoutModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatFormFieldModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        CulturalAndHistoricSitesComponent,
    ],
    providers: [],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
