import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Pokemon } from '../shared/pokemon';

@Injectable()
export class PokemonEntityService extends EntityCollectionServiceBase<Pokemon> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Pokemon', serviceElementsFactory);
  }
}
