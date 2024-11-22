import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleBooksService {
  apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  apiKey = 'AIzaSyCpVl7_EubbId2NUvUxHIphHQ1TF-Ve0aw';

  constructor(private http: HttpClient) {}

  getBooks(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}&maxResults=20`;
    return this.http.get(url);
  }
}
