import { Component, OnInit } from '@angular/core';
import {EquipoService} from '../../services/equipo.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-teem',
  templateUrl: './teem.component.html',
  styleUrls: ['./teem.component.css']
})
export class TeemComponent implements OnInit {
  teem:any[]=[]

  constructor(
    private _teem: EquipoService
  ) {
    this.teem = _teem.obtenerEquipo();
  }

  ngOnInit(): void {
    console.log(this.teem);

  }

}
