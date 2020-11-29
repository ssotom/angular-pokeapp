import { environment } from './../../environments/environment';
import { NamedAPIResource } from './resource';

export class Pokemon {
  constructor(public id: number, public name: string, public sprite?: string) {
    if (!this.sprite) {
      this.sprite = environment.baseSpriteUrl + this.id + '.png';
    }
  }
}

export class PokemonType {
  slot: number;
  type: NamedAPIResource;
}

export class PokemonAbility {
  slot: number;
  ability: NamedAPIResource;
}

export class PokemonStat {
  constructor(public name: string, public value: number) {}
}

export class DetailedPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite: string;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];

  constructor(response?: any) {
    if (response) {
      this.id = response.id;
      this.name = response.name;
      this.height = response.height;
      this.weight = response.weight;
      this.types = response.types;
      this.abilities = response.abilities;
      this.sprite = environment.baseSpriteUrl + this.id + '.png';
      this.stats = response.stats.map(
        (stat) => new PokemonStat(stat.stat.name, stat.base_stat)
      );
    }
  }
}
