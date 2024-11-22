import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Pirate Codex';
  constructor(private http: HttpClient) {
    this.testHttpClient();
  }

  testHttpClient() {
    this.http
      .get('https://www.googleapis.com/books/v1/volumes?q=angular')
      .subscribe({
        next: (data) => console.log('Requisição bem-sucedida:', data),
        error: (error) => console.error('Erro na requisição:', error),
      });
  }
}
