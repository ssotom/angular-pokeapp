import { Component, Input } from '@angular/core';
import { DetailedPokemon } from './../../shared/pokemon';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.css']
})
export class ShowPokemonComponent {
  @Input() pokemon: DetailedPokemon;
}
