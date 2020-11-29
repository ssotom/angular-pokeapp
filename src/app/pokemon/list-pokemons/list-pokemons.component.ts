import { PokemonEntityService } from './../../services/pokemon-entity.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon, DetailedPokemon } from './../../shared/pokemon';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { tap, map, first } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

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
  selectedPokemon: DetailedPokemon;
  selectedPokemon2: DetailedPokemon;

  @ViewChild('lgModal') modal: ModalDirective;

  constructor(
    private pokemonService: PokemonEntityService,
    private store: Store<AppState>
  ) {}

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

  loadPokemon(id: number): void {
    // this.store.dispatch(load({ id }));
    // this.store.pipe(select(selectPokemon(), { id })).subscribe((pokemon) => {
    //   if (this.comparePokemon) {
    //     this.selectedPokemon2 = pokemon;
    //   } else {
    //     this.selectedPokemon = pokemon;
    //   }
    // });
  }

  openModal(selectedPokemonId?: number): any {
    this.loadPokemon(selectedPokemonId);
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
