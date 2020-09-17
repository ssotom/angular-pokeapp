import { Component, OnInit } from '@angular/core';
import { Pokemon, DetailedPokemon } from './../../shared/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { select, Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { load } from 'src/app/actions/pokemon.actions';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  isLoading = false;
  error: string;
  searchText: string;
  pokemons2: Map<number, DetailedPokemon>;

  modal: ModalDirective;
  comparePokemon: boolean;
  selectedPokemon = new DetailedPokemon();
  selectedPokemon2 = new DetailedPokemon();

  constructor(private pokemonService: PokemonService, private store: Store<AppState>) {
    store.pipe(select('pokemons')).subscribe(
      pokemons => {
        console.log('1', pokemons);

        if (this.comparePokemon) {
          this.selectedPokemon2 = pokemons.lastPokemon;
        } else {
          this.selectedPokemon = pokemons.lastPokemon;
        }
      }
    );
  }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    this.isLoading = true;
    this.pokemonService.getAll(this.pokemons.length)
      .subscribe(
        pokemons => {
          this.pokemons = this.pokemons.concat(pokemons);
          this.isLoading = false;
        },
        error => this.error = error
      );
  }

  loadPokemon(id: number): void {
    this.store.dispatch(load({ id }));
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
