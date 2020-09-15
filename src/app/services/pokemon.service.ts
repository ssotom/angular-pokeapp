
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NamedAPIResourceList } from './../shared/resource';
import { Pokemon, DetailedPokemon } from './../shared/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = environment.baseUrl + 'pokemon';
  private limit = environment.amountToLoad;

  constructor(private http: HttpClient) { }

  getAll(offset: number): Observable<Pokemon[]> {
    return this.http.get<NamedAPIResourceList>(`${this.baseUrl}?offset=${offset}&limit=${this.limit}`)
      .pipe(
        map(response => {
          return response.results
            .map((resource, index) => new Pokemon(offset + index + 1, resource.name));
        })
      );
  }

  getById(id: number): Observable<DetailedPokemon> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .pipe(map(response => new DetailedPokemon(response)));
  }

}
