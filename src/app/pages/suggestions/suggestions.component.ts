import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
  standalone: false,
})
export class SuggestionsComponent implements OnInit {
  // Configuração de critérios
  categories: string[] = ['Fiction', 'Adventure', 'Romance', 'Science'];
  authors: string[] = ['J.K. Rowling', 'Stephen King', 'Haruki Murakami'];
  booksByCategory: { [key: string]: any[] } = {};
  booksByAuthor: { [key: string]: any[] } = {};
  isLoading: boolean = true;

  constructor(private googleBooksService: GoogleBooksService) {}

  ngOnInit(): void {
    this.loadBooksByCategory(); // Busca livros por categoria
    this.loadBooksByAuthor(); // Busca livros por autor
  }

  // Busca livros por categoria
  loadBooksByCategory(): void {
    this.isLoading = true;
    this.categories.forEach((category) => {
      this.googleBooksService.getBooks(`subject:${category}`).subscribe(
        (response: any) => {
          this.booksByCategory[category] = response.items || [];
        },
        (error) => {
          console.error(
            `Erro ao buscar livros da categoria ${category}:`,
            error
          );
          this.booksByCategory[category] = [];
        },
        () => {
          this.isLoading = false;
        }
      );
    });
  }

  // Busca livros por autores específicos
  loadBooksByAuthor(): void {
    this.isLoading = true;
    this.authors.forEach((author) => {
      this.googleBooksService.getBooks(`inauthor:${author}`).subscribe(
        (response: any) => {
          this.booksByAuthor[author] = response.items || [];
        },
        (error) => {
          console.error(`Erro ao buscar livros do autor ${author}:`, error);
          this.booksByAuthor[author] = [];
        },
        () => {
          this.isLoading = false;
        }
      );
    });
  }
}
