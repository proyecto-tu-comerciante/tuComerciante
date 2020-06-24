import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  response:any;
  constructor(
    private _http:HttpClient
  ) { }
  post(data) {
    return this._http.post('/insert/comerciante', data )

  }
  getAdress(id): Observable<any[]> {
    return this._http.get<any[]>(`/getStore/${id}`);
  }

}
