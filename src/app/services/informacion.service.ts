import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {InfoPagina} from "../interfaces/info-pagina.interface";
@Injectable({
  providedIn: 'root'
})

export class InformacionService {
  info: InfoPagina = {};
  cargada = false;

  Equipo: any[] = [];
/*  Equipo: InfoEquipo =[];
info: InfoPagina = {};
cargada:boolean= false;
cargada_sobre_nosotros:boolean= false;
//Equipo: InfoEquipo = {};
*/

  constructor(private http: HttpClient) {

/*
    this.cargainfo();
    this.carga_sobre_nosotros();

  }*/


  this.cargarInfo();
  this.cargarEquipo();

  }



  private cargarInfo (){
    this.http.get("assets/data/info.pagina.json")
             /* .subscribe( data =>{
             console.log(data );
             this.cargada=true;
             this.info=data;
             })*/
             //leer archivo json
             .subscribe((resp: InfoPagina) =>{
                this.cargada=true;
                this.info=resp;

             })
  }

public cargarEquipo(){
  this.http.get("https://angular-d6e6b.firebaseio.com/Equipo.json")
  .subscribe( (resp: any[]) => {

    this.Equipo = resp;
    //console.log(resp);
  });


}




}
