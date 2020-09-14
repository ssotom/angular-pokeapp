import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {
  items = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    this.pokemonService.getAll().subscribe(
      items => this.items = items.results
    );
  }

}
