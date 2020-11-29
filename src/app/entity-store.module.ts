import { NgModule } from '@angular/core';

import {
  EntityDataService,
  EntityDefinitionService,
  EntityMetadataMap
} from '@ngrx/data';

import { PokemonEntityService } from './services/pokemon-entity.service';
import { PokemonDataServices } from './services/pokemon-data.service';
import { DetailedPokemonDataServices } from './services/detailed-pokemon-data.service';
import { DetailedPokemonEntityService } from './services/detailed-pokemon-entity.service';

const entityMetadata: EntityMetadataMap = {
  Pokemon: {},
  DetailedPokemon: {}
};

@NgModule({
  imports: [],
  providers: [
    PokemonEntityService,
    PokemonDataServices,
    DetailedPokemonEntityService,
    DetailedPokemonDataServices
  ]
})
export class EntityStoreModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private pokemonDataServices: PokemonDataServices,
    private detailedPokemonDataServices: DetailedPokemonDataServices
  ) {
    eds.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Pokemon', pokemonDataServices);
    entityDataService.registerService(
      'DetailedPokemon',
      detailedPokemonDataServices
    );
  }
}
