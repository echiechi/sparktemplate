import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'artisanat',
    loadChildren: () => import('./artisanat/artisanat.module').then(rm => rm.ArtisanatModule)
  },
  /*{ path: 'admin', component: AdminLayoutComponent },
  { path: '**', redirectTo: 'admin' }*/

  {
    path: 'hosting',
    loadChildren: () => import('./hosting/hosting.module').then(rm => rm.HostingModule)
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
