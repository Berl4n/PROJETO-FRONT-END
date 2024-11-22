import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
})
export class PesquisaComponent {
  uery: string = ''; // Termo de busca digitado pelo usuário
  books: any[] = []; // Lista de livros retornados pela API
  isLoading: boolean = false; // Indica se a busca está em andamento
  errorMessage: string = ''; // Armazena mensagens de erro ou feedback para o usuário
  query: string = ''; // Inicialização obrigatória em strict mode

  constructor(private bookService: BookService) {}

  // Função para buscar livros
  search(): void {
    this.errorMessage = ''; // Limpa mensagens de erro anteriores
    this.books = []; // Limpa resultados anteriores

    // Validação: Verifica se o campo de busca está vazio
    if (this.query.trim() === '') {
      this.errorMessage = 'Por favor, insira um termo para buscar livros.';
      return;
    }

    this.isLoading = true; // Indica que a busca começou

    // Faz a requisição à API usando o serviço
    this.bookService.searchBooks(this.query).subscribe({
      next: (response) => {
        this.books = response.items || []; // Armazena os resultados
        if (this.books.length === 0) {
          this.errorMessage = 'Nenhum livro encontrado para a busca realizada.';
        }
        this.isLoading = false; // Indica que a busca terminou
      },
      error: (err) => {
        this.errorMessage =
          'Ocorreu um erro ao buscar os livros. Tente novamente.';
        console.error('Erro na busca:', err);
        this.isLoading = false;
      },
    });
  }
}
