import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { DetailedPokemon } from './../shared/pokemon';

@Injectable()
export class DetailedPokemonEntityService extends EntityCollectionServiceBase<DetailedPokemon> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('DetailedPokemon', serviceElementsFactory);
  }
}
