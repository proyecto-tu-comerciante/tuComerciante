import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  // { path: 'contacto', component: ContactosComponent },
  { path: 'googleMaps', component: MapsComponent },
  // { path: 'equipo/:id', component: EquipoComponent },
  // { path: 'nosotros', component: NosotrosComponent },
  // { path: '', component: InicioComponent, pathMatch:'full' },
  // { path: '**', redirectTo: '/', pathMatch: 'full' },
  ];

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
