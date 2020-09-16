import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailedPokemon } from './../../shared/pokemon';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.css']
})
export class ShowPokemonComponent {
  @Input() pokemon: DetailedPokemon;
  @Output() comparePokemon = new EventEmitter();

  // options
  showXAxis = true;
  showYAxis = true;
  animations = false;

  colorScheme = {
    domain: ['#5AA454']
  };

  compareTo(): void {
    this.comparePokemon.emit();
  }

}
