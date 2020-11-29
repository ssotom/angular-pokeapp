import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonsComponent } from './pokemon/list-pokemons/list-pokemons.component';

const routes: Routes = [{ path: '', component: ListPokemonsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
