import { DetailedPokemon } from './../shared/pokemon';
import { createReducer, on } from '@ngrx/store';
import { load, loadSuccess } from './../actions/pokemon.actions';

export const initialState = {
    lastPokemon: new DetailedPokemon(),
    pokemons: new Map<number, DetailedPokemon>()
};

const _pokemonReducer = createReducer(
    initialState,
    on(load, (state) => {
        return state;
    }),
    on(loadSuccess, (state, { pokemon }) => {
        return {
            lastPokemon: pokemon, pokemons: state.pokemons.set(pokemon.id, pokemon)
        };
    })
);

export function pokemonReducer(state, action) {
    return _pokemonReducer(state, action);
}
