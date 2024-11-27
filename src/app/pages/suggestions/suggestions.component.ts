import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css'],
  standalone: false,
})
export class SuggestionsComponent implements OnInit {
  // Lista de autores mais pesquisados
  authors: string[] = ['George R.R. Martin', 'Stephen King', 'Neil Gaiman'];
  booksByAuthor: { [key: string]: any[] } = {}; // Armazena os livros por autor
  isLoading: boolean = false; // Controle de carregamento

  constructor(private googleBooksService: GoogleBooksService) {}

  ngOnInit(): void {
    this.loadBooksByAuthor(); // Carrega os livros dos autores
  }

  // Busca livros por autores mais pesquisados
  loadBooksByAuthor(): void {
    this.isLoading = true; // Inicia o estado de carregamento
    this.authors.forEach((author) => {
      this.googleBooksService.getBooks(`inauthor:${author}`).subscribe(
        (response: any) => {
          // Apenas adiciona se houver resultados
          if (response.items?.length > 0) {
            this.booksByAuthor[author] = response.items;
          }
        },
        (error) => {
          console.error(`Erro ao buscar livros do autor ${author}:`, error);
          this.booksByAuthor[author] = [];
        },
        () => {
          this.isLoading = false; // Finaliza o estado de carregamento
        }
      );
    });
  }
}
