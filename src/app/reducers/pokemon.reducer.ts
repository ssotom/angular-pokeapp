import { DetailedPokemon } from './../shared/pokemon';
import { createReducer, on } from '@ngrx/store';
import { loadSuccess } from './../actions/pokemon.actions';

export const initialState = new Map<number, DetailedPokemon>();

const _pokemonReducer = createReducer(
    initialState,
    on(
        loadSuccess,
        (state, { pokemon }) => new Map(state.set(pokemon.id, pokemon))
    )
);

export function pokemonReducer(state, action) {
    return _pokemonReducer(state, action);
}
