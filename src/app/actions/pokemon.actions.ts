import { DetailedPokemon } from './../shared/pokemon';
import { createAction, props } from '@ngrx/store';

export const load = createAction('[Pokemon] Load Pokemon', props<{ id: number }>());
export const loadSuccess = createAction('[Pokemon] Pokemon Loaded Success', props<{ pokemon: DetailedPokemon }>());
export const loadReady = createAction('[Pokemon] Pokemon Already Loaded');
