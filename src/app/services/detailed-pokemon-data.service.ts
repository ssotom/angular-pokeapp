import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { DetailedPokemon } from '../shared/pokemon';
import { map, catchError } from 'rxjs/operators';
import { ErrorResponseService } from './error-response.service';
import { environment } from '../../environments/environment';

@Injectable()
export class DetailedPokemonDataServices extends DefaultDataService<DetailedPokemon> {
  private baseUrl = environment.baseUrl + 'pokemon';

  constructor(
    httpUrlGenerator: HttpUrlGenerator,
    http: HttpClient,
    private errorResponseService: ErrorResponseService
  ) {
    super('DetailedPokemon', http, httpUrlGenerator);
  }

  getById(key: string | number): Observable<DetailedPokemon> {
    return this.http.get(`${this.baseUrl}/${key}`).pipe(
      map((response) => new DetailedPokemon(response)),
      catchError(this.errorResponseService.handleError)
    );
  }
}
