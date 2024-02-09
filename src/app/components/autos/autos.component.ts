import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { InfoPagina } from '../../interfaces/info-pagina.interface';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent {

  constructor (public _infoAuto: InfoPaginaService) {

  }
}
