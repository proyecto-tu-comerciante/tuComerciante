import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import {EquipoService} from '../../services/equipo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {

  equipo:any=[];
  constructor(
    private router:ActivatedRoute,
    private _equipo:EquipoService
  ) {
    this.router.params.subscribe(params =>{
      console.log( this.equipo = this._equipo.getOneTeem(params['id']))
     })
  }

  ngOnInit(): void {
  }

}
