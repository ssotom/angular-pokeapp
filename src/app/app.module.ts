import { EntityStoreModule } from './entity-store.module';
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
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';

import { reducers } from './app.state';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListPokemonsComponent } from './pokemon/list-pokemons/list-pokemons.component';
import { ShowPokemonComponent } from './pokemon/show-pokemon/show-pokemon.component';
import { ComparePokemonsComponent } from './pokemon/compare-pokemons/compare-pokemons.component';
import { RotatoryBannerPokemonsComponent } from './pokemon/rotatory-banner-pokemons/rotatory-banner-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    NavbarComponent,
    ListPokemonsComponent,
    ShowPokemonComponent,
    ComparePokemonsComponent,
    RotatoryBannerPokemonsComponent
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
    CarouselModule.forRoot(),
    PopoverModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    EntityStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
