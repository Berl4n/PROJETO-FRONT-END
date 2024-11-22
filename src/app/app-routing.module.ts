import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PesquisaComponent } from './pages/pesquisa/pesquisa.component';
import { SobreComponent } from './pages/sobre/sobre.component';
const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'pesquisa', component: PesquisaComponent }, // Página de pesquisa
  { path: 'sobre', component: SobreComponent }, // Página Sobre
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
