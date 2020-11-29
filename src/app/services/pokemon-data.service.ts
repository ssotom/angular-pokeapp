import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DefaultDataService,
  EntityActionOptions,
  HttpUrlGenerator,
  QueryParams
} from '@ngrx/data';
import { Pokemon } from '../shared/pokemon';
import { NamedAPIResourceList } from '../shared/resource';
import { map, catchError } from 'rxjs/operators';
import { ErrorResponseService } from './error-response.service';
import { environment } from './../../environments/environment';

@Injectable()
export class PokemonDataServices extends DefaultDataService<Pokemon> {
  private limit = environment.amountToLoad;
  private baseUrl = environment.baseUrl + 'pokemon';

  constructor(
    httpUrlGenerator: HttpUrlGenerator,
    http: HttpClient,
    private errorResponseService: ErrorResponseService
  ) {
    super('Pokemon', http, httpUrlGenerator);
  }

  getWithQuery(
    queryParams: QueryParams,
    options?: EntityActionOptions
  ): Observable<Pokemon[]> {
    if (queryParams.offset) {
      return this.getAllByOffset(+queryParams.offset);
    }
    return EMPTY;
  }

  getAllByOffset(offset: number): Observable<Pokemon[]> {
    return this.http
      .get<NamedAPIResourceList>(
        `${this.baseUrl}?offset=${offset}&limit=${this.limit}`
      )
      .pipe(
        map((response) =>
          response.results.map(
            (resource, index) => new Pokemon(offset + index + 1, resource.name)
          )
        ),
        catchError(this.errorResponseService.handleError)
      );
  }
}
