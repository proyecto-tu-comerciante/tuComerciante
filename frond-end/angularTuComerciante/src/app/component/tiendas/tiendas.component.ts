import { Component, OnInit } from '@angular/core';
import {MostrarComponent} from '../mostrar/mostrar.component';
import { Router,ParamMap,ActivatedRoute,Params }from '@angular/router'
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']

})
export class TiendasComponent implements OnInit {
  stores=[];
  search:string
  constructor(
    private _store:MostrarComponent,
    private _router: Router,
    private _route: ActivatedRoute,
    private _apihttp: ApiService,
  ) {
    this.stores =_store.obtenerStore();


  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=> {this.search = params.search
    this.buscador(this.search)

    })

  }

  buscador(buscar){
    this._apihttp.getAdress(buscar).subscribe((res:any[])=>
    {console.log(res)
    this.stores = res,
    err => console.log(err),
    ()=> console.log('peticion finalizada')
    })
  }




}
