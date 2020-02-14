import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<any>{
    return this.http.get("https://pokeapi.co/api/v2/pokedex/2");
  }

  public getInfo(url : string) : Observable<any>{
    return this.http.get(url);
  }
}
