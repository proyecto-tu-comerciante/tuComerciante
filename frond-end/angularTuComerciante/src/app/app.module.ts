import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import {HttpClientModule} from  '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapsComponent } from './component/maps/maps.component';
import { HeaderComponent } from './component/header/header.component';
import { MostrarComponent } from './component/mostrar/mostrar.component';
import { TiendasComponent } from './component/tiendas/tiendas.component';
import { FooterComponent } from './component/footer/footer.component';
import { TeemComponent } from './component/teem/teem.component';
import { RegisterComponent } from './component/register/register.component';
import { IntegranteComponent } from './component/integrante/integrante.component';


const routes: Routes = [
   { path: '', component: MostrarComponent },
   { path: 'googleMaps', component: MapsComponent },
   { path: 'registrarse', component: RegisterComponent },
   { path: 'nosotros', component: TeemComponent },
   { path: 'tiendas/:search', component: TiendasComponent },
   { path: '', component: MostrarComponent, pathMatch:'full' },
  //  { path: '**', redirectTo: '/', pathMatch: 'full' },
   { path: 'equipo/:id', component: IntegranteComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    HeaderComponent,
    MostrarComponent,
    TiendasComponent,
    FooterComponent,
    TeemComponent,
    RegisterComponent,
    IntegranteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MostrarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
