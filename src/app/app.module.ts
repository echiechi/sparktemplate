import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { HttpModule } from '@angular/http';
>>>>>>> 66dedcd879e3ae746ed8efe7924fc84ef3989d69
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
<<<<<<< HEAD
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    NgbModule
=======
      apiKey: 'AIzaSyDQvX7Zv9GqP4abRRHmqiClQP-0TzMCedk'
    })
>>>>>>> 66dedcd879e3ae746ed8efe7924fc84ef3989d69
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
