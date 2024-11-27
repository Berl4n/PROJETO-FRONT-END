import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service'; // Importa o BookService
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhes-livro',
  templateUrl: './detalhes-livro.component.html',
  styleUrls: ['./detalhes-livro.component.css'],
  standalone: false,
})
export class DetalhesLivroComponent implements OnInit {
  livroDetalhes$: Observable<any>; // Agora, usaremos um Observable para armazenar os detalhes do livro
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService, // Injetamos o serviço
    private router: Router
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');

    if (bookId) {
      // Chama o serviço para pegar os detalhes do livro
      this.livroDetalhes$ = this.bookService.getBookDetails(bookId);

      this.livroDetalhes$.subscribe(
        (livroDetalhes) => {
          console.log(livroDetalhes); // Verifique os detalhes no console
          this.isLoading = false;
          if (!livroDetalhes) {
            this.errorMessage = 'Detalhes do livro não encontrados.';
          }
        },
        (error) => {
          this.errorMessage = 'Erro ao carregar os detalhes do livro.';
          this.isLoading = false;
        }
      );
    } else {
      this.errorMessage = 'ID do livro não encontrado.';
      this.isLoading = false;
    }
  }

  voltar(): void {
    this.router.navigate(['/']); // Função para voltar à página inicial
  }
}
