
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { NamedAPIResourceList } from './../shared/resource';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = environment.baseUrl + 'pokemon';

  constructor(private http: HttpClient) { }

  getAll(): Observable<NamedAPIResourceList> {
    return this.http.get<NamedAPIResourceList>(this.baseUrl);
  }
}
