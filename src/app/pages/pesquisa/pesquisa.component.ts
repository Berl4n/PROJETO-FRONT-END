import { Component } from '@angular/core';
import { BookService } from '../../services/book.service'; // Certifique-se de ajustar o caminho do serviço
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteService } from '../../services/favorite.service';
@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
})
export class PesquisaComponent {
  query: string = ''; // Termo de busca digitado pelo usuário
  books: any[] = []; // Lista de livros retornados pela API
  errorMessage: string = ''; // Mensagens de erro ou feedback para o usuário
  isLoading: boolean = false; // Flag para mostrar carregamento

  constructor(
    private bookService: BookService,
    private favoriteService: FavoriteService
  ) {}

  // Método para buscar livros
  search(): void {
    if (!this.query.trim()) {
      this.errorMessage = 'Por favor, insira um título para buscar.';
      return;
    }

    this.isLoading = true; // Inicia o carregamento
    this.books = []; // Limpa resultados anteriores
    this.errorMessage = ''; // Limpa mensagens de erro anteriores

    // Faz a requisição à API usando o serviço
    this.bookService.searchBooks(this.query).subscribe(
      (response) => {
        this.books = response.items || []; // Armazena os resultados
        if (this.books.length === 0) {
          this.errorMessage = 'Nenhum livro encontrado para a busca realizada.';
        }
      },
      (error) => {
        this.errorMessage =
          'Ocorreu um erro ao buscar os livros. Tente novamente.';
        console.error('Erro na busca:', error);
      },
      () => {
        this.isLoading = false; // Finaliza o carregamento
      }
    );
  }

  // Método para limpar a pesquisa
  clearSearch(): void {
    this.query = ''; // Limpa o campo de pesquisa
    this.books = []; // Limpa os resultados dos livros
    this.errorMessage = ''; // Limpa qualquer mensagem de erro
  }

  // Adicionar livro aos favoritos
  addToFavorites(book: any): void {
    this.favoriteService.addFavorite(book); // Chama o serviço para adicionar
  }

  // Remover livro dos favoritos
  removeFromFavorites(book: any): void {
    this.favoriteService.removeFavorite(book); // Chama o serviço para remover
  }

  // Verificar se o livro é favorito
  isFavorite(book: any): boolean {
    return this.favoriteService.isFavorite(book); // Verifica se o livro está nos favoritos
  }
}
