import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokerService {
  constructor(private http: HttpClient) { }

  private getHeaders(){
    let headers = new HttpHeaders()
    headers=headers.append('content-type','application/json');
    headers=headers.append('Access-Control-Allow-Origin', '*');
    return headers
  }

  public deal(): Observable<any>{
    return this.http.get(environment.apiUrl + "dealcard", {headers: this.getHeaders()});
  }
}
