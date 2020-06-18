import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  center = {lat:4.570868, lng:-74.2973328};
  zoom = 15;
  display?: google.maps.LatLngLiteral;
  constructor() { }

  ngOnInit(): void {
  }

}
