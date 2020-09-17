
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { ErrorResponseService } from './error-response.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NamedAPIResourceList } from './../shared/resource';
import { Pokemon, DetailedPokemon } from './../shared/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private limit = environment.amountToLoad;
  private baseUrl = environment.baseUrl + 'pokemon';

  constructor(private http: HttpClient, private errorResponseService: ErrorResponseService) { }

  getAll(offset: number): Observable<Pokemon[]> {
    return this.http.get<NamedAPIResourceList>(`${this.baseUrl}?offset=${offset}&limit=${this.limit}`)
      .pipe(
        map(response => {
          return response.results
            .map((resource, index) => new Pokemon(offset + index + 1, resource.name));
        }),
        catchError(this.errorResponseService.handleError)
      );
  }

  getById(id: number): Observable<DetailedPokemon> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .pipe(
        map(response => new DetailedPokemon(response)),
        catchError(this.errorResponseService.handleError)
      );
  }

}
