import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from './../shared/pokemon';
import { PokemonEntityService } from './../services/pokemon-entity.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'PokéApp';
  isCollapsed = true;
  isOpen = false;
  pokemons$: Observable<Pokemon[]>;

  constructor(private pokemonService: PokemonEntityService) {}

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.entities$.pipe(
      map((pokemons) => pokemons.filter((pokemon) => pokemon.isFavorite))
    );
  }
}
