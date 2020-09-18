import { createAction, props } from '@ngrx/store';
import { DetailedPokemon } from './../shared/pokemon';

export const load = createAction('[Pokemon] Load Pokemon', props<{ id: number }>());
export const loadReady = createAction('[Pokemon] Pokemon Already Loaded');
export const loadSuccess = createAction('[Pokemon] Pokemon Loaded Success', props<{ pokemon: DetailedPokemon }>());
