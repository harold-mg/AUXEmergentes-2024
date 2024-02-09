import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
  info : InfoPagina = {};
  cargada = false;

  autos: any[] = [];

  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarAutos();
  }
  private cargarInfo() {
    //console.log('informacion de servicio');
    this.http.get('assets/data/data-pagina.json')
      .subscribe ( (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        //console.log(resp)
        console.log( resp.email );
      })
  }
  private cargarAutos() {
    this.http.get<any[]>('https://examen-emergentes-2024-default-rtdb.firebaseio.com/autos.json')
    .subscribe ( resp => {
      this.autos = resp;
    });
  }

}
