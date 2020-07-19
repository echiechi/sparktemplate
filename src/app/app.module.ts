import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {SpearfishComponent} from './spearfish/spearfish.component';
import {AppComponent} from './app.component';
import {WsocketService} from './service/wsocket.service';

import {
    AgmCoreModule
} from '@agm/core';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {WebsocketforspeventService} from './service/websocketforspevent.service';
import { GalleryComponent } from './gallery/gallery.component';
import {MatInputModule} from '@angular/material/input';
import { SpadminComponent } from './spadmin/spadmin.component';
import {SpeventService} from './service/spevent.service';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        }),
        MatInputModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        SpearfishComponent,
        GalleryComponent,
        SpadminComponent,
    ],
    providers: [WsocketService, WebsocketforspeventService, SpeventService],
    bootstrap: [AppComponent],
})
export class AppModule {
}
