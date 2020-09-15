import { Component, OnInit } from '@angular/core';
import { Pokemon, DetailedPokemon } from './../../shared/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  isLoading = false;
  searchText: string;
  selectedPokemon: DetailedPokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    this.isLoading = true;
    this.pokemonService.getAll(this.pokemons.length)
      .subscribe(pokemons => this.pokemons = this.pokemons.concat(pokemons));
    this.isLoading = false;
  }

  loadPokemon(id: number): void {
    this.pokemonService.getById(id)
      .subscribe(pokemon => this.selectedPokemon = pokemon);
  }

  openModal(modal: ModalDirective, selectedPokemonId?: number): any {
    this.loadPokemon(selectedPokemonId);
    modal.show();
  }

}
