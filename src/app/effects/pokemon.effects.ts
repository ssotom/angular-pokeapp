import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { load, loadSuccess } from './../actions/pokemon.actions';

@Injectable()
export class MovieEffects {

    constructor(
        private actions$: Actions, private store$: Store<AppState>, private pokemonService: PokemonService) { }

    loadPokemon$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(load),
                withLatestFrom(this.store$),
                switchMap(
                    ([{ id }, { pokemons }]) => {
                        if (!pokemons.pokemons.has(id)) {
                            return this.pokemonService.getById(id)
                                .pipe(map(pokemon => loadSuccess({ pokemon })));
                        }
                        return of(loadSuccess({ pokemon: pokemons.pokemons.get(id) }));
                    }
                )
            )
    );

}
