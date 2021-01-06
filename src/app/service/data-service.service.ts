import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  _url='/vuelo'
  
  constructor(private http:HttpClient ) {
    console.log('data seervcie');
  }

  getVuelos(){
    let header = new HttpHeaders()
    .set('type-content', 'aplication/json')

    return this.http.get(this._url, {
      headers: header
    
    });


  }


}
