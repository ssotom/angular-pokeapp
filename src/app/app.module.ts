import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './app.state';
import { PokemonEffects } from './effects/pokemon.effects';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListPokemonsComponent } from './pokemon/list-pokemons/list-pokemons.component';
import { ShowPokemonComponent } from './pokemon/show-pokemon/show-pokemon.component';
import { ComparePokemonsComponent } from './pokemon/compare-pokemons/compare-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPokemonsComponent,
    ShowPokemonComponent,
    ComparePokemonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgxChartsModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([PokemonEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
