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
  modal: ModalDirective;
  comparePokemon: boolean;
  selectedPokemon: DetailedPokemon;
  selectedPokemon2: DetailedPokemon;

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
      .subscribe(pokemon => {
        if (this.comparePokemon) {
          this.selectedPokemon2 = pokemon;
        } else {
          this.selectedPokemon = pokemon;
        }
      });
  }

  openModal(modal: ModalDirective, selectedPokemonId?: number): any {
    this.loadPokemon(selectedPokemonId);
    this.modal = modal;
    modal.show();
  }

  closeModal(): void {
    this.modal.hide();
    this.comparePokemon = false;
  }

  compareTo(): void {
    this.modal.hide();
    this.comparePokemon = true;
  }

}
