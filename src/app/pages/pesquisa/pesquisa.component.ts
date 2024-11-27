import { Component } from '@angular/core';
import { BookService } from '../../services/book.service'; // Certifique-se de ajustar o caminho do serviço
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FavoriteService } from '../../services/favorite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
  standalone: false,
  //imports: [CommonModule, FormsModule, HttpClientModule],
})
export class PesquisaComponent {
  query: string = '';
  books: any[] = [];
  errorMessage: string = '';
  isLoading: boolean = false;

  // Armazena os livros para saber quais têm detalhes visíveis
  visibleDetails: Set<any> = new Set();

  constructor(
    private bookService: BookService,
    private favoriteService: FavoriteService,
    private router: Router
  ) {}

  search(): void {
    if (!this.query.trim()) {
      this.errorMessage = 'Por favor, insira um título para buscar.';
      return;
    }

    this.isLoading = true;
    this.books = [];
    this.errorMessage = '';

    this.bookService.searchBooks(this.query).subscribe(
      (response) => {
        this.books = response.items || [];
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
        this.isLoading = false;
      }
    );
  }

  clearSearch(): void {
    this.query = '';
    this.books = [];
    this.errorMessage = '';
  }

  addToFavorites(book: any): void {
    this.favoriteService.addFavorite(book);
  }

  removeFromFavorites(book: any): void {
    this.favoriteService.removeFavorite(book);
  }

  isFavorite(book: any): boolean {
    return this.favoriteService.isFavorite(book);
  }

  // Alternar a visibilidade dos detalhes do livro
  toggleDetails(book: any): void {
    if (this.visibleDetails.has(book)) {
      this.visibleDetails.delete(book);
    } else {
      this.visibleDetails.add(book);
    }
  }

  // Verificar se os detalhes estão visíveis
  isDetailsVisible(book: any): boolean {
    return this.visibleDetails.has(book);
  }
}
