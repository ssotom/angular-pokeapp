import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { DetailedPokemon } from './../../shared/pokemon';
import { DetailedPokemonEntityService } from './../../services/detailed-pokemon-entity.service';

@Component({
  selector: 'app-compare-pokemons',
  templateUrl: './compare-pokemons.component.html',
  styleUrls: ['./compare-pokemons.component.css']
})
export class ComparePokemonsComponent implements OnChanges {
  @Input() id1: number | string;
  @Input() id2: number | string;
  pokemon1$: Observable<DetailedPokemon>;
  pokemon2$: Observable<DetailedPokemon>;
  data = [];

  // options
  showXAxis = true;
  showYAxis = true;
  animations = false;
  showLegend = true;
  legendTitle = 'Stats';
  legendPosition = 'below';
  colorScheme = 'forest';

  constructor(private detailedPokemonService: DetailedPokemonEntityService) {}

  ngOnChanges(): void {
    this.pokemon1$ = this.getPokemon(this.id1);
    this.pokemon2$ = this.getPokemon(this.id2);

    this.pokemon2$ = this.pokemon2$.pipe(
      withLatestFrom(this.pokemon1$),
      tap(([pokemon2, pokemon1]) => this.setData(pokemon1, pokemon2)),
      map(([pokemon2, pokemon1]) => pokemon2)
    );
  }

  private getPokemon(id: number | string) {
    return this.detailedPokemonService.entities$.pipe(
      map((pokemons) => pokemons.find((pokemon) => pokemon.id == id)),
      tap((pokemon) => pokemon || this.detailedPokemonService.getByKey(id))
    );
  }

  private setData(pokemon1: DetailedPokemon, pokemon2: DetailedPokemon) {
    if (pokemon1.stats && pokemon1.stats && pokemon2 && pokemon2.stats) {
      const data1 = {
        name: pokemon1.name,
        series: pokemon1.stats
      };
      const data2 = {
        name: pokemon2.name,
        series: pokemon2.stats
      };
      this.data = [data1, data2];
    }
  }
}
