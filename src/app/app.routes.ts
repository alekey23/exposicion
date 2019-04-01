 import { RouterModule, Routes } from '@angular/router';

import {
AboutComponent,
  PrincipalComponent,
  ItemComponent
} from "./components/index.paginas";


 const app_routes: Routes = [
   { path: '', component: PrincipalComponent },
   { path: 'about', component: AboutComponent },
   { path: 'producto', component: ItemComponent },
   { path: '**', pathMatch: 'full', redirectTo: ''}
 ];

 export const app_routing = RouterModule.forRoot(app_routes, {useHash:true });
