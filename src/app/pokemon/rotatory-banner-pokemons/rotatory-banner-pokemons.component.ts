import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './../../shared/pokemon';

@Component({
  selector: 'app-rotatory-banner-pokemons',
  templateUrl: './rotatory-banner-pokemons.component.html',
  styleUrls: ['./rotatory-banner-pokemons.component.css']
})
export class RotatoryBannerPokemonsComponent implements OnInit {
  @Input() pokemons$: Observable<Pokemon[]>;

  constructor() {}

  ngOnInit(): void {}
}
