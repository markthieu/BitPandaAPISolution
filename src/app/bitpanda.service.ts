import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BitpandaService {

  constructor(private httpClient: HttpClient) { }


  getData():Observable<any>{
    return this.httpClient.get('https://api.bitpanda.com/v1/masterdata');
  }
}
