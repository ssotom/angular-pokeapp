import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges
} from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DetailedPokemon } from './../../shared/pokemon';
import { DetailedPokemonEntityService } from './../../services/detailed-pokemon-entity.service';

@Component({
  selector: 'app-show-pokemon',
  templateUrl: './show-pokemon.component.html',
  styleUrls: ['./show-pokemon.component.css']
})
export class ShowPokemonComponent implements OnChanges {
  @Input() id: number | string;
  pokemon$: Observable<DetailedPokemon>;
  @Output() comparePokemon = new EventEmitter();

  // options
  showXAxis = true;
  showYAxis = true;
  animations = false;

  colorScheme = {
    domain: ['#5AA454']
  };

  constructor(private detailedPokemonService: DetailedPokemonEntityService) {}

  ngOnChanges(): void {
    this.pokemon$ = this.detailedPokemonService.entities$.pipe(
      map((pokemons) => pokemons.find((pokemon) => pokemon.id == this.id)),
      tap((pokemon) => pokemon || this.detailedPokemonService.getByKey(this.id))
    );
  }

  compareTo(): void {
    this.comparePokemon.emit();
  }
}
