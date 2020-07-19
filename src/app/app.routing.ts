import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {CulturalAndHistoricSitesComponent} from './cultural-and-historic-sites/cultural-and-historic-sites.component';
import {LoginComponent} from './user-profile/login/login.component';
import {InscriptionComponent} from './user-profile/inscription/inscription.component';

const routes: Routes = [
    {
        path: 'artisanat',
        loadChildren: () => import('./artisanat/artisanat.module').then(rm => rm.ArtisanatModule)
    },
    {path: 'cultural-and-historic-sites', component: CulturalAndHistoricSitesComponent},
    {path: 'login', component: LoginComponent},
    {path: 'inscription', component: InscriptionComponent},
    /*{ path: 'admin', component: AdminLayoutComponent },
    { path: '**', redirectTo: 'admin' }*/
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
