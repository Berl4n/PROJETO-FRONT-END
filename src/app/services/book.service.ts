import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiKey: string = 'AIzaSyCpVl7_EubbId2NUvUxHIphHQ1TF-Ve0aw';
  private apiUrl: string = 'https://www.googleapis.com/books/v1/volumes'; // API de livros do Google

  constructor(private http: HttpClient) {}

  /**
   * Pesquisa livros com base em um termo de busca.
   * @param query Termo de busca fornecido pelo usuário.
   * @returns Observable contendo os resultados da busca.
   */
  searchBooks(query: string): Observable<any> {
    const params = new HttpParams()
      .set('q', query)
      .set('key', this.apiKey)
      .set('maxResults', '20'); // Limita o número de resultados
    return this.http.get(this.apiUrl, { params });
  }

  /**
   * Obtém os detalhes de um livro específico com base no ID.
   * @param id O ID do livro fornecido pela API do Google Books.
   * @returns Observable contendo os detalhes do livro.
   */
  getBookDetails(id: string): Observable<any> {
    const params = new HttpParams().set('key', this.apiKey); // Adiciona a chave da API como parâmetro
    return this.http.get(`${this.apiUrl}/${id}`, { params });
  }
}
