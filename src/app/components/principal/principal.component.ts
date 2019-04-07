import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',

})
export class PrincipalComponent  {

constructor (public productosService : ProductosService){}

}
