import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  stores:any[] = [];


  constructor(
    private _apihttp: ApiService,
    private _router:Router

  ) {

   }


   ngOnInit(): void {


   }


  buscador(){
    const buscar = (document.getElementById('direccion')as HTMLInputElement).value
    this._router.navigate(['/tiendas/' + buscar])
  }

  obtenerStore(){
    return this.stores;
  }




}
