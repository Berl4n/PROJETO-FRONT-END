import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Necessário para formulários e ngModel
import { HttpClientModule } from '@angular/common/http'; // Necessário para fazer requisições HTTP
import { AppRoutingModule } from './app-routing.module'; // Módulo de roteamento
import { AppComponent } from './app.component'; // Componente raiz
import { GoogleBooksService } from './services/google-books.service'; // Serviço para interagir com a Google Books API
import { SuggestionsComponent } from './pages/suggestions/suggestions.component'; // Componente para sugestões
import { CommonModule } from '@angular/common'; // Importando CommonModule
import { RouterModule } from '@angular/router'; // Importando RouterModule
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { HighlightDirective } from './diretivas/highlight.directive';
import { TextColorDirective } from './diretivas/text-color.directive';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent, // Componente raiz
    HomeComponent, // Página principal
    SuggestionsComponent, // Página de Sugestões
    SobreComponent, // Página Sobre
    HighlightDirective,
    TextColorDirective,
    UppercasePipe,
    TruncatePipe,
    FavoritosComponent,
  ],
  imports: [
    BrowserModule, // Necessário para rodar a aplicação no navegador
    CommonModule, // Para suporte a diretivas comuns
    FormsModule, // Para suporte a [(ngModel)] e formulários
    HttpClientModule, // Para fazer requisições HTTP
    AppRoutingModule, // Para gerenciar rotas
    RouterModule, // Para gerenciar o roteamento
  ],
  providers: [GoogleBooksService], // Fornece o serviço de requisição à Google Books API
  bootstrap: [AppComponent], // Define o componente raiz da aplicação
})
export class AppModule {}
