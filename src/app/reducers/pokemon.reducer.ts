import { DetailedPokemon } from './../shared/pokemon';
import { createReducer, on } from '@ngrx/store';
import { loadSuccess } from './../actions/pokemon.actions';

export const initialState = new Map<number, DetailedPokemon>();

const pokemonReducerFunction = createReducer(
  initialState,
  on(
    loadSuccess,
    (state, { pokemon }) => new Map(state.set(pokemon.id, pokemon))
  )
);

export function pokemonReducer(state, action): Map<number, DetailedPokemon> {
  return pokemonReducerFunction(state, action);
}
