import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import {FingerprintComponent} from './pages/fingerprint/fingerprint.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { LoginComponent } from './pages/users/login/login.component';


const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: 'fingerprint', component: FingerprintComponent },
    { path: 'mapa', component: MapaComponent },
    { path: 'login', component: LoginComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home'
 }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






