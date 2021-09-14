import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SearchComponent} from "./components/search/search.component";
import {ArtistaComponent} from "./components/artista/artista.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artist/:id', component: ArtistaComponent },
  { path: 'buscar', component: SearchComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
