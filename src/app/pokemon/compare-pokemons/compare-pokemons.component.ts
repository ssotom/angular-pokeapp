import { DetailedPokemon } from './../../shared/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-pokemons',
  templateUrl: './compare-pokemons.component.html',
  styleUrls: ['./compare-pokemons.component.css']
})
export class ComparePokemonsComponent implements OnInit {
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

  ngOnInit(): void {
    const data = { name: this.pokemon1.name, series: this.pokemon1.stats };
    const data2 = { name: this.pokemon2.name, series: this.pokemon2.stats };
    this.data.push(data, data2);
    console.log(this.data);

  }

}
