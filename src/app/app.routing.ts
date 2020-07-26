import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {SpearfishComponent} from './spearfish/spearfish.component';
import {ArtisanatModule} from './artisanat/artisanat.module';
import {GalleryComponent} from './gallery/gallery.component';
import {SpadminComponent} from './spadmin/spadmin.component';

import {CulturalAndHistoricSitesComponent} from './cultural-and-historic-sites/cultural-and-historic-sites.component';
import {LoginComponent} from './user-profile/login/login.component';
import {InscriptionComponent} from './user-profile/inscription/inscription.component';
import {DashboardComponent} from './user-profile/dashboard/dashboard.component';
import {AddUserComponent} from './user-profile/dashboard/add-user/add-user.component';
import {UpdateComponent} from './user-profile/inscription/update/update.component';
import {AddEventComponent} from './cultural-and-historic-sites/add-event/add-event.component';
import {dashCaseToCamelCase} from '@angular/compiler/src/util';
import {DashComponent} from './cultural-and-historic-sites/dash/dash.component';

const routes: Routes = [
    {
        path: 'hosting',
        loadChildren: () => import('./hosting/hosting.module').then(rm => rm.HostingModule)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
        }]
    },
    {
        path: 'fishmap',
        component: SpearfishComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'spadmin',
        component: SpadminComponent
    },
    {
        path: 'artisanat',
        component: ArtisanatModule
        // loadChildren: () => import('./artisanat/artisanat.module').then(rm => rm.ArtisanatModule)
    },
    /*{ path: 'admin', component: AdminLayoutComponent },
    { path: '**', redirectTo: 'admin' }*/

    {
        path: 'artisanat',
        loadChildren: () => import('./artisanat/artisanat.module').then(rm => rm.ArtisanatModule)
    },
    {path: 'cultural-and-historic-sites', component: CulturalAndHistoricSitesComponent},
    {path: 'cultural-and-historic-sites/add', component: AddEventComponent},
    {path: 'cultural-and-historic-sites/dash', component: DashComponent},
    {path: 'login', component: LoginComponent},
    {path: 'inscription', component: InscriptionComponent},
    {path: 'Dashboard', component: DashboardComponent},
    {path: 'Dashboard/add-user', component: AddUserComponent},
    {path: 'Update-profile', component: UpdateComponent},


    /*{ path: 'admin', component: AdminLayoutComponent },
    { path: '**', redirectTo: 'admin' }*/
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
