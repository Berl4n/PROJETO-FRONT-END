import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favorites: any[] = []; // Lista de livros favoritos

  // Adicionar livro aos favoritos
  addFavorite(book: any): void {
    if (!this.isFavorite(book)) {
      this.favorites.push(book);
    }
  }

  // Remover livro dos favoritos
  removeFavorite(book: any): void {
    this.favorites = this.favorites.filter((fav) => fav.id !== book.id);
  }

  // Verificar se o livro é favorito
  isFavorite(book: any): boolean {
    return this.favorites.some((fav) => fav.id === book.id);
  }

  // Obter todos os favoritos
  getFavorites(): any[] {
    return this.favorites;
  }
}
