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
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

export class DetailedPokemon {
  id: number;
  name: string;
  sprite: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: PokemonAbility[];

  constructor(response: any) {
    this.id = response.id;
    this.name = response.name;
    this.sprite = environment.baseSpriteUrl + this.id + '.png';
    this.base_experience = response.base_experience;
    this.height = response.height;
    this.weight = response.weight;
    this.abilities = response.abilities;
  }
}
