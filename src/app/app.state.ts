import { ActionReducerMap } from '@ngrx/store';
import { pokemonReducer } from './reducers/pokemon.reducer';
import { DetailedPokemon } from './shared/pokemon';

export interface AppState {
    pokemons: Map<number, DetailedPokemon>;
}

export const reducers: ActionReducerMap<AppState> = {
    pokemons: pokemonReducer,
};

export const selectPokemon = () => ({ pokemons }: AppState, { id }) => pokemons.get(id);
