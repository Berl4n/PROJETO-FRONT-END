import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiKey: string = 'AIzaSyCpVl7_EubbId2NUvUxHIphHQ1TF-Ve0aw';
  private baseUrl: string = 'https://www.googleapis.com/books/v1/volumes'; // API de livros do Google

  constructor(private http: HttpClient) {}

  // Método para buscar livros com base no título
  searchBooks(query: string): Observable<any> {
    const url = `${this.baseUrl}?q=${encodeURIComponent(query)}`;
    return this.http.get<any>(url);
  }
}
