import { createSelector } from '@ngrx/store';
import { DetailedPokemon } from './shared/pokemon';

export interface AppState {
    pokemons: Map<number, DetailedPokemon>;
}

export const selectPokemon = () =>
    createSelector(
        (state: AppState) => state.pokemons,
        (pokemons, props) => pokemons.get(props.id)
    );
