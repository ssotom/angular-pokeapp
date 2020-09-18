import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from 'src/app/services/pokemon.service';
import { load, loadSuccess, loadReady } from './../actions/pokemon.actions';
import { AppState } from './../app.state';

@Injectable()
export class PokemonEffects {

    constructor(
        private actions: Actions, private store: Store<AppState>, private pokemonService: PokemonService) { }

    loadPokemon$ =
        createEffect(
            () => this.actions
                .pipe(
                    ofType(load),
                    withLatestFrom(this.store),
                    switchMap(
                        ([{ id }, { pokemons }]) => {
                            if (!pokemons.has(id)) {
                                this.pokemonService.getById(id).
                                    subscribe(
                                        pokemon => this.store.dispatch(loadSuccess({ pokemon }))
                                    );
                            }
                            return of(loadReady());
                        }
                    )
                ),
            { dispatch: false }
        );

}
