import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;


  alarma:{};
  localizacion:{};
  fingerprint: {};
  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();
    this.cargarSensores();
    this.cargarSensores2();
    this.cargarSensores3();


  }

  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }


  private cargarEquipo() {

    // Leer el archivo JSON
    this.http.get('https://angular-d6e6b.firebaseio.com/equipo.json')
    .subscribe( (resp: any[]) => {

      this.equipo = resp;
      // console.log(resp);
    });


    // this.equipo = resp
  }


  private cargarSensores(){
    // Leer el archivo JSON
    this.http.get('https://angular-d6e6b.firebaseio.com/sensores.json')
    .subscribe( resp => {

      this.fingerprint = resp;
      // console.log(resp);
    });
  }


  private cargarSensores2(){
    // Leer el archivo JSON
    this.http.get('https://angular-d6e6b.firebaseio.com/alarma.json')
    .subscribe( resp => {

      this.alarma = resp;
      // console.log(resp);
    });
  }


  private cargarSensores3(){
    // Leer el archivo JSON
    this.http.get('https://angular-d6e6b.firebaseio.com/localización.json')
    .subscribe( resp => {

      this.localizacion = resp;
      // console.log(resp);
    });
  }





}



