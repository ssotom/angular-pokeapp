import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { PokemonService } from 'src/app/services/pokemon.service';
import { AppState } from './../app.state';
import { load, loadSuccess, loadReady } from './../actions/pokemon.actions';

@Injectable()
export class PokemonEffects {

  constructor(
    private actions: Actions,
    private store: Store<AppState>,
    private pokemonService: PokemonService
  ) { }

  loadPokemon = createEffect(
    () => this.loadPokemonEffects(),
    { dispatch: false }
  );

  private loadPokemonEffects(): Observable<never> {
    return this.actions.pipe(
      ofType(load),
      withLatestFrom(this.store),
      switchMap(
        ([{ id }, { pokemons }]) => {
          if (!pokemons.has(id)) {
            this.pokemonService.getById(id).subscribe(
              pokemon => this.store.dispatch(loadSuccess({ pokemon }))
            );
          } else {
            this.store.dispatch(loadReady());
          }
          return EMPTY;
        }
      )
    );
  }

}
