import { DetailedPokemon, Pokemon } from './shared/pokemon';

export interface AppState {
    readonly pokemons: {
        lastPokemon: DetailedPokemon
        pokemons: Map<number, DetailedPokemon>;
    };
}
