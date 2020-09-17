import { DetailedPokemon } from './../shared/pokemon';
import { createAction, props } from '@ngrx/store';

export const load = createAction('[Movies Page] Load Movies', props<{ id: number }>());
export const loadSuccess = createAction('[Movies API] Movies Loaded Success', props<{ pokemon: DetailedPokemon }>());
