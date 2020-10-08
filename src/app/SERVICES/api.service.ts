import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonURL ='assets/DATA/products.json';

  constructor(private http: HttpClient) {
    console.log('api', this._jsonURL)
   }
   getJson(): Observable<any>{
     return this.http.get(this._jsonURL)
   }
}
