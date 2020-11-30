import { PokemonEntityService } from './../../services/pokemon-entity.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon, DetailedPokemon } from './../../shared/pokemon';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.css']
})
export class ListPokemonsComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;
  offset = 0;
  loading$: Observable<boolean>;
  isLoading = false;
  searchText: string;
  error: string;

  comparePokemon: boolean;
  selectedPokemon: Pokemon;
  selectedPokemon2: Pokemon;

  @ViewChild('lgModal') modal: ModalDirective;

  constructor(private pokemonService: PokemonEntityService) {}

  ngOnInit(): void {
    this.loading$ = this.pokemonService.loading$;
    this.pokemonService.loading$
      .pipe(tap((isLoading) => (this.isLoading = isLoading)))
      .subscribe();

    this.pokemonService.entities$
      .pipe(tap((pokemons) => (this.offset = pokemons.length)))
      .subscribe();

    this.pokemons$ = this.pokemonService.entities$.pipe(
      tap(() => {
        if (this.offset == 0) {
          this.loadMore();
        }
      })
    );
  }

  loadMore(): void {
    this.pokemonService.getWithQuery({
      offset: this.offset.toString()
    });
  }

  openModal(pokemon: Pokemon): void {
    if (this.comparePokemon) {
      this.selectedPokemon2 = pokemon;
    } else {
      this.selectedPokemon = pokemon;
    }
    this.modal.show();
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
