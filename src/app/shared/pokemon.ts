import { environment } from './../../environments/environment';
import { NamedAPIResource } from './resource';

export class Pokemon {
  constructor(public id: number, public name: string, public sprite?: string) {
    if (!this.sprite) {
      this.sprite = environment.baseSpriteUrl + this.id + '.png';
    }
  }
}

export class PokemonAbility {
  slot: number;
  ability: NamedAPIResource;
}

export class PokemonStat {
  constructor(public name: string, public value: number) { }
}

export class PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export class DetailedPokemon {
  id: number;
  name: string;
  sprite: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  stats: PokemonStat[];

  constructor(response?: any) {
    if (response) {
      this.id = response.id;
      this.name = response.name;
      this.sprite = environment.baseSpriteUrl + this.id + '.png';
      this.height = response.height;
      this.weight = response.weight;
      this.abilities = response.abilities;
      this.types = response.types;
      this.stats = response.stats.map(stat => new PokemonStat(stat.stat.name, stat.base_stat));
    }
  }
}
