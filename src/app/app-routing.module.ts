import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Componente Home
import { SuggestionsComponent } from './pages/suggestions/suggestions.component'; // Componente Sugestões
import { SobreComponent } from './pages/sobre/sobre.component'; // Componente Sobre
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'sugestoes', component: SuggestionsComponent }, // Página de Sugestões
  { path: 'pesquisa', component: PesquisaComponent }, // Adicionando a rota para a pesquisa
  { path: 'sobre', component: SobreComponent }, // Página Sobre
  { path: 'favoritos', component: FavoritosComponent },
  { path: '**', redirectTo: '' }, // Redireciona rotas não encontradas para a página principal
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
