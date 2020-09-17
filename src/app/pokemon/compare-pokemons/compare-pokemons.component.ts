import { DetailedPokemon } from './../../shared/pokemon';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-compare-pokemons',
  templateUrl: './compare-pokemons.component.html',
  styleUrls: ['./compare-pokemons.component.css']
})
export class ComparePokemonsComponent implements OnChanges {
  @Input() pokemon1: DetailedPokemon;
  @Input() pokemon2: DetailedPokemon;
  data = [];

  // options
  showXAxis = true;
  showYAxis = true;
  animations = false;
  showLegend = true;
  legendTitle = 'Stats';
  legendPosition = 'below';
  colorScheme = 'forest';

  ngOnChanges(): void {
    if (this.pokemon1.stats && this.pokemon2.stats) {
      const data1 = { name: this.pokemon1.name, series: this.pokemon1.stats };
      const data2 = { name: this.pokemon2.name, series: this.pokemon2.stats };
      this.data = [data1, data2];
    }
  }

}
